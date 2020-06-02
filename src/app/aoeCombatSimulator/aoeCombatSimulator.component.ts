import { Component } from '@angular/core';
import { Player } from '../aoeData/player';
import { Color } from '../helper/color';
import { AoeData } from "./../aoeData/aoeData";
import { Battle } from "./../aoeData/battle";

@Component({
    selector: 'app-aoeCombatSimulator',
	templateUrl: './aoeCombatSimulator.component.html',
	styleUrls: ['./aoeCombatSimulator.component.css']
})
export class AoECombatSimulatorComponent {

	public hitAndRunMode: number = 0; // 0=noHit&Run, 1=semi, 2=fullHit&Run
	public hitAndRunModes: string[] = ["No Hit&Run", "Medium Hit&Run", "Perfect Hit&Run"];

	public resourceValue: number = 0; // 0=noHit&Run, 1=semi, 2=fullHit&Run
	public resourceValues: string[] = ["100F=100W=100G", "100F=100W=66,6G", "100F=100W=17G"];
	public resourceValuesFactors: number[][] = [[1, 1, 1], [1, 1, 1.5], [1, 1, 5.88235]];

	public players: Player[] = [new Player(new Color(0, 0, 128), this, 0), new Player(new Color(0, 0, 128), this, 1)];
	public numberOfSimulations: number = 20;
	public numberOfSimulationsLastRun = this.numberOfSimulations;
	public startTime: number;
	public calculatedSimulationsSoFar: number = 0;
	public working: boolean = false;

	public hideUnitTypesWithZeroUnits: boolean = true;

	public toggleInputVisibility(): void{
		this.hideUnitTypesWithZeroUnits = !this.hideUnitTypesWithZeroUnits;
	}

	constructor() { AoeData.InitializeUnitTypes(); }

	
	private PrintResults(): void
	{
		this.calculatedSimulationsSoFar = 0;
		this.working = false;
		for (let i: number = 0; i < 2; i++)
		{
			this.players[i].populationRemaining = 0;
			for (let k: number = 0; k < 3; k++)
			{
				this.players[i].resourcesRemaining[k] = 0;
				this.players[i].resourcesGenerated[k] /= this.numberOfSimulations;
			}

			for (let j: number = 0; j < AoeData.unitTypesList.length; j++)
			{
				this.players[i].avgSurvivorsNumber[j] = 1.0 * this.players[i].survivorsSumArmy.get(AoeData.unitTypesList[j]) / this.numberOfSimulations;
				this.players[i].populationRemaining += this.players[i].avgSurvivorsNumber[j] * (AoeData.unitTypesList[j] == AoeData.ut_eliteKarambitWarrior ? 0.5 : 1.0);
				this.players[i].avgSurvivorsPercent[j] = this.players[i].avgSurvivorsNumber[j] / this.players[i].amountStartUnits[j];
				this.players[i].avgSurvivorsColor[j] = this.players[i].amountStartUnits[j] == 0 ? new Color(128, 128, 128) :
					new Color(255 - 128.0 * this.players[i].avgSurvivorsPercent[j], 127 + 128.0 * this.players[i].avgSurvivorsPercent[j], 0);

				for (let k: number = 0; k < 3; k++)
				{
					this.players[i].resourcesRemaining[k] += Math.round(AoeData.unitTypesList[j].resourceCosts[k] * this.players[i].avgSurvivorsNumber[j]);
				}
			}
			this.players[i].populationLost = this.players[i].populationInvested - this.players[i].populationRemaining;

			for (let j: number = 0; j < 3; j++)
			{
				this.players[i].resourcesLost[j] = this.players[i].resourcesInvested[j] - this.players[i].resourcesRemaining[j];
				this.players[i].resourcesRemaining[j] += this.players[i].resourcesGenerated[j];
			}
		}
		this.CalculateWeightedSum();

		/*for (let i: number = 0; i < 2; i++)
		{
			console.log("Army " + (i + 1) + ": Attacking attacker: " + this.players[i].attackAttacker + ". Attacking random nearby target: " + this.players[i].attackRandomNearbyTarget + ".");
			console.log(this.players[i] + " Hit: " + this.players[i].regularHit + " Total Miss MTAlive: " + this.players[i].missTotalMainTargetAlive + " Total Miss MTDead: " + this.players[i].missTotalMainTargetDead + " Miss Main Target: " + this.players[i].missMainTarget + " Miss Side Target: " + this.players[i].missSideTarget);
		}*/
		console.log("Elapsed time for simulation: " + (performance.now() - this.startTime) + "ms.");
	}

	public CalculateWeightedSum(): void{
		for (let i: number = 0; i < 2; i++) {
			this.players[i].resourcesLostTotal = 0;
			this.players[i].resourcesRemainingTotal = 0;
			this.players[i].resourcesGeneratedTotal = 0;
			for (let j: number = 0; j < 3; j++) {
				this.players[i].resourcesLostTotal += this.players[i].resourcesLost[j] * this.resourceValuesFactors[this.resourceValue][j];
				this.players[i].resourcesRemainingTotal += this.players[i].resourcesRemaining[j] * this.resourceValuesFactors[this.resourceValue][j];
				this.players[i].resourcesGeneratedTotal += this.players[i].resourcesGenerated[j] * this.resourceValuesFactors[this.resourceValue][j];
			}
		}
	}
	
	public SetHnR(mode: number){
		this.hitAndRunMode = mode;
	}

	public SetRV(mode: number){
		this.resourceValue = mode;
		for (let i: number = 0; i < 2; i++){
			this.players[i].CalculateResourcesInvested();
		}
		this.CalculateWeightedSum();
	}

	public Bt_fight_Click(): void
	{
		if (this.numberOfSimulations == NaN || this.numberOfSimulations < 1 || this.numberOfSimulations > 1000 || !Number.isInteger(this.numberOfSimulations)){
			return;
		}

		for (let i: number = 0; i < 2; i++)
		{
			this.players[i].ResetData();
			for (let j: number = 0; j < AoeData.unitTypesList.length; j++)
			{
				if (this.players[i].amountStartUnits[j] == NaN || this.players[i].amountStartUnits[j] > 200 || !Number.isInteger(this.players[i].amountStartUnits[j])){
					return;
				}
			}
		}

		this.startTime = performance.now();

		this.numberOfSimulationsLastRun = this.numberOfSimulations;
		this.working = true;
		setTimeout(this.CreateBattles.bind(this), 0);

		//for (let i: number = 0; i < this.numberOfSimulations; i++){ new Battle(this, 0, i, this.hitAndRunMode); } this.PrintResults();
	}

	public CreateBattles(){
		new Battle(this, 0, this.calculatedSimulationsSoFar, this.hitAndRunMode);
		this.calculatedSimulationsSoFar++;
		if (this.numberOfSimulations > this.calculatedSimulationsSoFar){
			setTimeout(this.CreateBattles.bind(this), 0);
		}
		else{
			this.PrintResults();
		}
	}

}


/*
let numTasks: number = Environment.ProcessorCount;
let numFights: number = this.numberOfFights;
var tasks = new Task[numTasks];
for (let taskId: number = 0; taskId < numTasks; taskId++)
{
	let taskIdCopy: number = taskId;
	let numFightsForTask: number = numFights / numTasks + (taskIdCopy < numFights % numTasks ? 1 : 0);
	tasks[taskId] = Task.Factory.StartNew(() => {
		for (let i: number = 0; i < numFightsForTask; i++)
			new Battle(this, taskIdCopy, i, this.hitAndRunMode);
	});
}
Task.WaitAll(tasks);
*/