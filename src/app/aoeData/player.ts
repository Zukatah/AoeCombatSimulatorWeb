import { UnitType } from "./../aoeData/unitType";
import { Color } from "./../helper/color";
import { AoECombatSimulatorComponent } from "./../aoeCombatSimulator/aoeCombatSimulator.component";
import { AoeData } from "./aoeData";
import { Civilization } from './civilization';
import { CivUnitType } from './civUnitType';

export class Player{
	// public userInterface: AoECombatSimulatorComponent; // a reference to the user interface instance to which this player's gui elements will be added
	public sumWins: number = 0; // number of battle wins (actually win = 2 points, draw = 1 point)
	public attackAttacker: number = 0; // DEBUG purposes
	public attackRandomNearbyTarget: number = 0; // DEBUG purposes
	public regularHit: number = 0; // DEBUG purposes
	public missTotalMainTargetAlive: number = 0; // DEBUG purposes
	public missTotalMainTargetDead: number = 0; // DEBUG purposes
	public missMainTarget: number = 0; // DEBUG purposes
	public missSideTarget: number = 0; // DEBUG purposes
	public playerIndex: number; // currently either 0 (first player) or 1 (second player)

	public amountStartUnits: number[] = []; // contains the number of start units of each unit type; a list of all unit types can be found in the static AoeData.cs class
	public survivorsSumArmy: Map<UnitType, number>  = new Map<UnitType, number>(); // the sum of survivors of all battles by unit type
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

	public uts: UnitType[] = AoeData.unitTypesList;
	public civs: Civilization[] = AoeData.civsList;
	public playerColor: Color; // Player GUI //
	public civilization: Civilization;
	public civUts: CivUnitType[] = []; // unit types on the basis of the selected civ

	public constructor(playerColor: Color, playerIndex: number)
	{
		this.playerColor = playerColor;
		this.playerIndex = playerIndex;
		this.SetCiv(0); // default civ is aztecs (alphabetically first civ)
		this.ResetData();
	}

	public ResetData(resetInput: boolean = true): void
	{
		console.log("ResetData");
		this.sumWins = 0;
		for (let i: number = 0; i < 3; i++)
		{
			//this.resourcesInvested[i] = 0;
			this.resourcesRemaining[i] = 0;
			this.resourcesGenerated[i] = 0;
		}
		this.attackAttacker = 0;
		this.attackRandomNearbyTarget = 0;

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
				if (k == 0){
					this.populationInvested += this.civUts[j].baseUnitType == AoeData.ut_eliteKarambitWarrior ? this.amountStartUnits[j] * 0.5 : this.amountStartUnits[j];
				}
			}
			this.resourcesInvestedTotal += this.resourcesInvested[k] * resourceValuesFactors[k];
		}
	}

	public SetCiv(civIndex: number): void{
		this.civilization = this.civs[civIndex];
		this.civUts = [];
		this.civilization.unitTypeLineLevels.forEach(tuple => {
			this.civUts.push(new CivUnitType(tuple[0].unitTypes[tuple[1]], this.civilization));
		});
		this.ResetData();
	}
}