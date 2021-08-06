import { UnitType } from "./unitType";
import { Color } from "../helper/color";
import { AoeData } from "../data/aoeData";
import { Civilization } from './civilization';
import { CivUnitType } from './civUnitType';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { Technology } from './technology';
import { max } from 'rxjs/operators';
import { UnitTypeLine } from './unitTypeLine';

export class Player{
	public playerIndex: number; // currently either 0 (first player) or 1 (second player)
	public sumWins: number = 0; // number of battle wins (actually win = 2 points, draw = 1 point)
	public numberOfRelics: number = 0; // currently only relevant for Lithuanians

	/* The following attributes are just for debug purposes */
	public attackAttacker: number = 0; // counts how often a unit (after killing its target) targets a unit that is attacking it
	public attackRandomNearbyTarget: number = 0; // counts how often a unit (after killing its target) targets a random nearby unit
	
	/* The following attributes are just for debug and statistical purposes - concerning the behaviour of various projectiles */
	public goodRoll_MainTargetHit: number = 0;
	public missedRoll_MainTargetHit: number = 0;
	public missedRoll_mainTargetAlive_SideTargetHit: number = 0;
	public missedRoll_mainTargetDead_SideTargetHit: number = 0;
	public goodRoll_mainTargetDead_SideTargetHit: number = 0;
	public goodRoll_mainTargetDead_Miss: number = 0;
	public missedRoll_mainTargetAlive_Miss: number = 0;
	public missedRoll_mainTargetDead_Miss: number = 0;

	public amountStartUnits: number[] = []; // contains the number of start units of all civUnitType of this player
	public survivorsSumArmy: number[]  = []; // the sum of survivors of all battles by unit type
	public avgSurvivorsNumber: number[] = [];
	public avgSurvivorsPercent: number[] = [];
	public avgSurvivorsColor: Color[] = [];

	public resourcesInvested: number[] = [0, 0, 0]; // worth (food, wood, gold) of all starting units
	public resourcesInvestedTotal: number = 0;
	public resourcesLost: number[] = [0, 0, 0]; // worth (food, wood, gold) of all lost units
	public resourcesLostTotal: number = 0;
	public resourcesRemaining: number[] = [0, 0, 0]; // worth (food, wood, gold) of all surviving units
	public resourcesRemainingTotal: number = 0;
	public resourcesGenerated: number[] = [0, 0, 0]; // sum of all generated resources (currently only for Keshiks)
	public resourcesGeneratedTotal: number = 0;

	public populationInvested: number = 0;
	public populationLost: number = 0;
	public populationRemaining: number = 0;
	public populationGenerated: number = 0;

	public playerColor: Color; // Player GUI //
	public civilization: Civilization;
	public civUts: CivUnitType[] = []; // unit types on the basis of the selected civ
	public techsResearched: Technology[] = []; // all techs researched by the player
	public currentUnitTypeLineLevels: [UnitTypeLine, number][] = [];
	public age: number = AoeData.darkAge; // the age the player currently is in (only exists to use it as default when creating the CivUnitTypes)


	public constructor(playerColor: Color, playerIndex: number)
	{
		this.playerColor = playerColor;
		this.playerIndex = playerIndex;
		this.SetCiv(0); // default civ is aztecs (alphabetically first civ)
		this.ResetData();
	}


	public ResetData(resetInput: boolean = true): void
	{
		// console.log("ResetData"); // todo: apparently called more often than necessary
		this.sumWins = 0;
		for (let i: number = 0; i < 3; i++)
		{
			this.resourcesRemaining[i] = 0;
			this.resourcesGenerated[i] = 0;
		}
		this.attackAttacker = 0;
		this.attackRandomNearbyTarget = 0;

		this.goodRoll_MainTargetHit = 0;
		this.missedRoll_MainTargetHit = 0;
		this.missedRoll_mainTargetAlive_SideTargetHit = 0;
		this.missedRoll_mainTargetDead_SideTargetHit = 0;
		this.goodRoll_mainTargetDead_SideTargetHit = 0;
		this.goodRoll_mainTargetDead_Miss = 0;
		this.missedRoll_mainTargetAlive_Miss = 0;
		this.missedRoll_mainTargetDead_Miss = 0;

		if (resetInput) { this.amountStartUnits = []; }
		this.survivorsSumArmy = []
		this.avgSurvivorsNumber = [];
		this.avgSurvivorsPercent = [];
		this.avgSurvivorsColor = [];
		this.civUts.forEach(ut => {
			this.survivorsSumArmy.push(0);
			if (resetInput) { this.amountStartUnits.push(0); }
			this.avgSurvivorsNumber.push(0);
			this.avgSurvivorsPercent.push(0);
			this.avgSurvivorsColor.push(new Color(128, 128, 128));
		});
	}


	// Calculates the worth of the player's army.
	// The resources are weighted depending on the selected settings (e.g. 100F=100W=100G or 100F=100W=17G).
	public CalculateResourcesInvested(resourceValuesFactors: number[]): void{
		this.populationInvested = 0;
		this.resourcesInvestedTotal = 0;
		for (let k: number = 0; k < 3; k++)
		{
			this.resourcesInvested[k] = 0;
			for (let j: number = 0; j < this.civUts.length; j++)
			{
				this.resourcesInvested[k] += this.civUts[j].resourceCosts[k] * this.amountStartUnits[j];
			}
			this.resourcesInvestedTotal += this.resourcesInvested[k] * resourceValuesFactors[k];
		}

		for (let j: number = 0; j < this.civUts.length; j++){
			// (Elite) Karambit Warriors only need half the population space.
			this.populationInvested += this.civUts[j].baseUnitType == AoeData.ut_eliteKarambitWarrior ? this.amountStartUnits[j] * 0.5 : this.amountStartUnits[j];
		}
	}


	public SetCiv(civIndex: number): void{
		this.civilization = AoeData.civsList[civIndex];
		this.numberOfRelics = 0;
		this.AddTechsToPlayer();
		this.SetDefaultUnitTypeLineLevels();
		this.AddCivUnitTypesToPlayer();
	}


	public SetAge(age: number): void{
		this.age = age;
		this.AddTechsToPlayer();
		this.SetDefaultUnitTypeLineLevels();
		this.AddCivUnitTypesToPlayer();
	}


	// Toggles the respective technology on/off and then recalculates the player's civUnitTypes.
	// Techs can only be toggled on, if the player's age allows it.
	public ToggleTech(tech: Technology): void{
		if (this.techsResearched.includes(tech)){
			this.techsResearched.splice(this.techsResearched.indexOf(tech), 1);
			this.AddCivUnitTypesToPlayer();
		} else {
			if (tech.accessibleFromAge <= this.age){
				this.techsResearched.push(tech);
				this.AddCivUnitTypesToPlayer();
			}
		}
	}


	// Increases or decreases a unit's upgrade levels (e.g. in castle age militia line units can be anything from militias to longswordsmen)
	public SetUnitTypeLineLevel(index: number, increase: boolean): void{
		let newUnitTypeLineLevels: [UnitTypeLine, number] = [this.currentUnitTypeLineLevels[index][0], this.currentUnitTypeLineLevels[index][1] + (increase ? 1 : -1)]

		if (this.currentUnitTypeLineLevels.find(utll => utll[0] == newUnitTypeLineLevels[0]) == undefined || this.civilization.maxUnitTypeLineLevels.find(utll => utll[0] == newUnitTypeLineLevels[0]) == undefined){
			console.log("Invalid UnitTypeLineLevel.");
			return;
		}
		if (newUnitTypeLineLevels[1] < 0){
			newUnitTypeLineLevels[1] = 0;
		} else {
			
			let civUnitTypeLineLevel: [UnitTypeLine, number] = this.civilization.maxUnitTypeLineLevels.find(utll => utll[0] == newUnitTypeLineLevels[0]);
			if (newUnitTypeLineLevels[1] > civUnitTypeLineLevel[1]) {
				newUnitTypeLineLevels[1] = civUnitTypeLineLevel[1];
			}
		}
		this.currentUnitTypeLineLevels.find(utll => utll[0] == newUnitTypeLineLevels[0])[1] = newUnitTypeLineLevels[1];

		// just creating a new civunittype inplace doesn't trigger angular's change detection; so we remove the old civunittype...
		this.civUts.splice(index, 1);
		// ...and in the next step add a new one at the same index
		this.civUts.splice(index, 0, new CivUnitType(newUnitTypeLineLevels[0].unitTypes[newUnitTypeLineLevels[1]], this.civilization, this.age, this.techsResearched));
	}


	// Checks, if the unitTypeLine in question is already upgraded to the maximum level allowed for the player's civ and age.
	// E.g. in castle age a Spanish players' archer line is maxed at the archer level because the Spanish don't have access to crossbowmen,
	// and in castle age a Japanese players' archer line is maxed at the crossbowmen level because the Japanese player isn't imperial age yet.
	public IsUnitTypeLineMaxed(index: number): boolean{
		let maxLevel: number = 0;
		for (let tempLevel: number = this.civilization.maxUnitTypeLineLevels[index][1]; tempLevel >= 0; tempLevel--){
			if (this.civilization.maxUnitTypeLineLevels[index][0].unitTypes[tempLevel].accessibleFromAge <= this.age){
				maxLevel = tempLevel;
				break;
			}
		}
		return maxLevel == this.currentUnitTypeLineLevels[index][1];
	}


	// Checks, if the unitTypeLine has its minimum level - which always is 0.
	public IsUnitTypeLineMinimized(index: number): boolean{
		return this.currentUnitTypeLineLevels[index][1] == 0;
	}


	// Automatically researches all techs of previous ages for the player.
	// E.g. if the player is castle age, all dark age and feudal age techs (the players' civ has access to) will be researched for the player.
	public AddTechsToPlayer(): void{
		this.techsResearched = [];
		this.civilization.technologies.forEach(tech => {
			if (tech.accessibleFromAge < this.age){
				this.techsResearched.push(tech);
			}
		});
		this.techsResearched
	}


	// Automatically set the upgrade level for all unit type lines for the player (depending on the player's age and civ).
	// If the player is castle age, all dark age and feudal age upgrades (the player's civ has access to) will be researched for the player.
	// E.g. sets the Imperial Spanish archer line level to archers (the Spanish don't have access to crossbowmen)
	// and the Imperial Japanese militia line level to longswordsmen (can be manually set to 2H-swordsmen or champion or militia or swordsmen in the UI).
	public SetDefaultUnitTypeLineLevels(): void{
		this.currentUnitTypeLineLevels = [];
		this.civilization.maxUnitTypeLineLevels.forEach(tuple => {
			for (let curUnitTypeLineLevel: number = tuple[1]; curUnitTypeLineLevel >= 0; curUnitTypeLineLevel--){
				if (tuple[0].unitTypes[curUnitTypeLineLevel].accessibleFromAge <= (curUnitTypeLineLevel == 0 ? this.age : this.age - 1)){
					this.currentUnitTypeLineLevels.push([tuple[0], curUnitTypeLineLevel]);
					break;
				}
			}
		});
	}


	// Removes all civUnitTypes of the player and then again adds all civUnitTypes to the player based on
	// the player's age, civ, techsResearched and currentUnitTypeLineLevels.
	public AddCivUnitTypesToPlayer(): void{
		this.civUts = [];
		this.currentUnitTypeLineLevels.forEach(tuple => {
			this.civUts.push(new CivUnitType(tuple[0].unitTypes[tuple[1]], this.civilization, this.age, this.techsResearched));
		});
		this.ResetData();
	}


	// If a Lithuanian player's relic count changes, the attack values of some cavalry units have to be updated.
	public RelicCountChanged(newValue): void{
		this.numberOfRelics = newValue > 4 ? 4 : newValue;
		if (this.civilization == AoeData.civ_lithuanians){
			this.civUts.find(ut => ut.baseUnitType == AoeData.ut_knight)?.RelicCountChanged(this.numberOfRelics);
			this.civUts.find(ut => ut.baseUnitType == AoeData.ut_cavalier)?.RelicCountChanged(this.numberOfRelics);
			this.civUts.find(ut => ut.baseUnitType == AoeData.ut_paladin)?.RelicCountChanged(this.numberOfRelics);
			this.civUts.find(ut => ut.baseUnitType == AoeData.ut_leitis)?.RelicCountChanged(this.numberOfRelics);
			this.civUts.find(ut => ut.baseUnitType == AoeData.ut_eliteLeitis)?.RelicCountChanged(this.numberOfRelics);
		}
	}
}