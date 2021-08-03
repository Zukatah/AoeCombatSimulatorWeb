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

	public goodRoll_MainTargetHit: number = 0;
	public missedRoll_MainTargetHit: number = 0;
	public missedRoll_mainTargetAlive_SideTargetHit: number = 0;
	public missedRoll_mainTargetDead_SideTargetHit: number = 0;
	public goodRoll_mainTargetDead_SideTargetHit: number = 0;
	public goodRoll_mainTargetDead_Miss: number = 0;
	public missedRoll_mainTargetAlive_Miss: number = 0;
	public missedRoll_mainTargetDead_Miss: number = 0;

	public amountStartUnits: number[] = []; // contains the number of start units of each unit type; a list of all unit types can be found in the static AoeData.cs class
	public survivorsSumArmy: Map<CivUnitType, number>  = new Map<CivUnitType, number>(); // the sum of survivors of all battles by unit type
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
			//this.resourcesInvested[i] = 0;
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

		this.survivorsSumArmy.clear();
		if (resetInput) { this.amountStartUnits = []; }
		this.avgSurvivorsNumber = [];
		this.avgSurvivorsPercent = [];
		this.avgSurvivorsColor = [];
		this.civUts.forEach(ut => {
			this.survivorsSumArmy.set(ut, 0);
			if (resetInput) { this.amountStartUnits.push(0); }
			this.avgSurvivorsNumber.push(0);
			this.avgSurvivorsPercent.push(0);
			this.avgSurvivorsColor.push(new Color(128, 128, 128));
		});
	}

	public CalculateResourcesInvested(resourceValuesFactors: number[]): void{
		this.populationInvested = 0;
		this.resourcesInvestedTotal = 0;
		for (let k: number = 0; k < 3; k++)
		{
			this.resourcesInvested[k] = 0;
			for (let j: number = 0; j < this.civUts.length; j++)
			{
				this.resourcesInvested[k] += this.civUts[j].resourceCosts[k] * this.amountStartUnits[j];
				if (k == 0){ // count population space only once (not three times)
					this.populationInvested += this.civUts[j].baseUnitType == AoeData.ut_eliteKarambitWarrior ? this.amountStartUnits[j] * 0.5 : this.amountStartUnits[j];
				}
			}
			this.resourcesInvestedTotal += this.resourcesInvested[k] * resourceValuesFactors[k];
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

	public SetUnitTypeLineLevel(index: number, increase: boolean): void{ // sets unit upgrade levels (e.g. archer, crossbow, arbalest)
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

		this.civUts.splice(index, 1); // just creating a new civunittype inplace doesn't trigger angular change detection; so we remove the old civunittype and then add a new one at the same index
		this.civUts.splice(index, 0, new CivUnitType(newUnitTypeLineLevels[0].unitTypes[newUnitTypeLineLevels[1]], this.civilization, this.age, this.techsResearched));
	}

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

	public IsUnitTypeLineMinimized(index: number): boolean{
		return this.currentUnitTypeLineLevels[index][1] == 0;
	}

	public AddTechsToPlayer(): void{
		this.techsResearched = [];
		this.civilization.technologies.forEach(tech => {
			if (tech.accessibleFromAge < this.age){
				this.techsResearched.push(tech);
			}
		});
		this.techsResearched
	}

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

	public AddCivUnitTypesToPlayer(): void{
		this.civUts = [];
		this.currentUnitTypeLineLevels.forEach(tuple => {
			this.civUts.push(new CivUnitType(tuple[0].unitTypes[tuple[1]], this.civilization, this.age, this.techsResearched));
		});
		this.ResetData();
	}

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