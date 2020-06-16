import { Component, OnInit } from '@angular/core';
import { AoeData } from "./../aoeData/aoeData";
import { UnitType } from "./../aoeData/unitType";
import { Player } from "./../aoeData/player";
import { Color } from "./../helper/color";
import { Battle } from "./../aoeData/battle";

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent {

	public uts: UnitType[] = AoeData.unitTypesList;
	public combatresults: number[][]  = [];

	public hitAndRunMode: number = 0; // 0=noHit&Run, 1=semi, 2=fullHit&Run
	public hitAndRunModes: string[] = ["No Hit&Run", "Medium Hit&Run", "Perfect Hit&Run"];

	public resourceValue: number = 0; // 0=noHit&Run, 1=semi, 2=fullHit&Run
	public resourceValues: string[] = ["100F=100W=100G", "100F=100W=66,6G", "100F=100W=17G"];
	public resourceValuesFactors: number[][] = [[1, 1, 1], [1, 1, 1.5], [1, 1, 5.88235]];

	public numberOfSimulations: number = 10;
	public ut1: number = 0;
	public ut2: number = 0;

	public working: boolean = false;
	public players: Player[];


	constructor() {
		AoeData.InitializeUnitTypes();

		for(let i: number = 0; i < this.uts.length; i++){
			this.combatresults.push([]);
			for (let j: number = 0; j < this.uts.length; j++){
				this.combatresults[i].push(i == j ? 1 : 0);
			}
		}

		/* // SYNCHRONOUS VERSION //
		for (let ut1: number = 0; ut1 < this.uts.length; ut1++){
			for (let ut2: number = 0; ut2 < this.uts.length; ut2++){
				if (ut1 != ut2){

					for (let i: number = 0; i < 2; i++){
						this.players[i].ResetData();
					}
					this.players[0].amountStartUnits[ut1] = 50;
					this.players[1].amountStartUnits[ut2] = 50;

					for (let i: number = 0; i < this.numberOfSimulations; i++){
						new Battle(0, i, this.hitAndRunMode, this.players);
					}
					this.PrintResults();
					this.combatresults[ut1][ut2] = this.players[0].resourcesLostTotal != 0 ? this.players[1].resourcesLostTotal / this.players[0].resourcesLostTotal : Number.POSITIVE_INFINITY;
					console.log(ut1 + " " + ut2);
				}
			}
		}
		*/
		
		this.working = true;
		setTimeout(this.CreateBattles.bind(this), 0);
	}


	public CreateBattles(){

		if (this.ut1 != this.ut2){

			// for (let i: number = 0; i < 2; i++){ this.players[i].ResetData(); }
			this.players = [new Player(new Color(0, 0, 128), 0), new Player(new Color(0, 0, 128), 1)]
			this.players[0].amountStartUnits[this.ut1] = 50;
			this.players[1].amountStartUnits[this.ut2] = 50;
			this.players[0].CalculateResourcesInvested(this.resourceValuesFactors[this.resourceValue]);
			this.players[1].CalculateResourcesInvested(this.resourceValuesFactors[this.resourceValue]);
			this.players[1].amountStartUnits[this.ut2] = Math.round(50 * this.players[0].resourcesInvestedTotal / this.players[1].resourcesInvestedTotal);
			this.players[1].CalculateResourcesInvested(this.resourceValuesFactors[this.resourceValue]);

			for (let i: number = 0; i < this.numberOfSimulations; i++){
				new Battle(0, i, this.hitAndRunMode, this.players);
			}
			this.PrintResults();
			this.combatresults[this.ut1][this.ut2] = this.players[0].resourcesLostTotal != 0 ? this.players[1].resourcesLostTotal / this.players[0].resourcesLostTotal : Number.POSITIVE_INFINITY;
			console.log(this.ut1 + " " + this.ut2 + ": " + this.combatresults[this.ut1][this.ut2] + " (" + this.players[0].resourcesLostTotal + " / " + this.players[1].resourcesLostTotal + ")");
		}

		this.ut2++;
		if (this.ut2 == this.uts.length){
			this.ut2 = 0;
			this.ut1++;
		}
		
		if (this.ut1 < this.uts.length){
			setTimeout(this.CreateBattles.bind(this), 20);
		}
	}


	public getSurvivorsColor(number): string {
		return (new Color(255.0 - 0.5 * (number > 2.0 ? 2.0 : number) * 127.0, 128.0 + 0.5 * (number > 2.0 ? 2.0 : number) * 127.0, 0)).GetAsHex();
	}


	private PrintResults(): void
	{
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

}