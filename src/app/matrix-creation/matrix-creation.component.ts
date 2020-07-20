import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AoeData } from "./../aoeData/aoeData";
import { Player } from "./../aoeData/player";
import { Color } from "./../helper/color";
import { Battle } from "./../aoeData/battle";
import { CivUnitType } from '../aoeData/civUnitType';

@Component({
  selector: 'app-matrix-creation',
  templateUrl: './matrix-creation.component.html',
  styleUrls: ['./matrix-creation.component.css']
})
export class MatrixCreationComponent{

	// dynamically calculated parts (of the matrix component) //
	public combatresults: number[][];
	public championCivUts: CivUnitType[] = []
	public trashCivUts: CivUnitType[] = []

	public hitAndRunMode: number = 1; // 0=noHit&Run, 1=semi, 2=fullHit&Run
	public hitAndRunModes: string[] = ["No Hit&Run", "Medium Hit&Run", "Perfect Hit&Run"];

	public resourceValue: number = 0; // 0=equal worth, 1=gold+50% worth, 2=100f=100w=17g
	public resourceValues: string[] = ["100F=100W=100G", "100F=100W=66,6G", "100F=100W=17G"];
	public resourceValuesFactors: number[][] = [[1, 1, 1], [1, 1, 1.5], [1, 1, 5.88235]];

	public numberOfSimulations: number = 40;
	public ut1: number = 0;
	public ut2: number = 0;
	public showAvgCol: boolean = true;

	public players: Player[];

	public numberUtToDisplayRows: number; // to display all unit types in the matrix, set this to 57; to display all non-unique unit types, set this to 15
	public numberUtToDisplayColumns: number; // to display all unit types in the matrix, set this to 57; to display all non-unique unit types, set this to 15
	// end of dynamically calculated parts //


	constructor() {
		this.championCivUts.push(
			new CivUnitType(AoeData.ut_twoHandedSwordsman, AoeData.civ_bulgarians),
			new CivUnitType(AoeData.ut_champion, AoeData.civ_teutons),
			new CivUnitType(AoeData.ut_champion, AoeData.civ_slavs),
			new CivUnitType(AoeData.ut_champion, AoeData.civ_aztecs),
			new CivUnitType(AoeData.ut_champion, AoeData.civ_burmese),
			new CivUnitType(AoeData.ut_champion, AoeData.civ_japanese),
			new CivUnitType(AoeData.ut_champion, AoeData.civ_vikings),
			new CivUnitType(AoeData.ut_champion, AoeData.civ_goths),
			new CivUnitType(AoeData.ut_champion, AoeData.civ_celts),
			new CivUnitType(AoeData.ut_champion, AoeData.civ_berbers),
			new CivUnitType(AoeData.ut_champion, AoeData.civ_portuguese),
			new CivUnitType(AoeData.ut_champion, AoeData.civ_byzantines),
			new CivUnitType(AoeData.ut_champion, AoeData.civ_malians),
			new CivUnitType(AoeData.ut_champion, AoeData.civ_chinese),
			new CivUnitType(AoeData.ut_twoHandedSwordsman, AoeData.civ_malay)
		);

		this.trashCivUts.push(
			new CivUnitType(AoeData.ut_eliteEagleWarrior, AoeData.civ_aztecs),
			new CivUnitType(AoeData.ut_eliteEagleWarrior, AoeData.civ_incas),
			new CivUnitType(AoeData.ut_eliteEagleWarrior, AoeData.civ_mayans)
		);

		this.combatresults = [];
		this.numberUtToDisplayRows = this.championCivUts.length;
		this.numberUtToDisplayColumns = this.trashCivUts.length;
		for(let i: number = 0; i < this.numberUtToDisplayRows; i++){
			this.combatresults.push([]);
			for (let j: number = 0; j < this.numberUtToDisplayColumns; j++){
				this.combatresults[i].push((this.championCivUts[i].civ == this.trashCivUts[j].civ && this.championCivUts[i].baseUnitType.name == this.trashCivUts[j].baseUnitType.name) ? 1 : 0);
			}
			this.combatresults[i].push(0);
		}
		setTimeout(this.CreateBattles.bind(this), 0);
		
	}


	public CreateBattles(){

		if (this.championCivUts[this.ut1].civ != this.trashCivUts[this.ut2].civ || this.championCivUts[this.ut1].baseUnitType.name != this.trashCivUts[this.ut2].baseUnitType.name){
			this.players = [new Player(new Color(0, 0, 128), 0), new Player(new Color(0, 0, 128), 1)];

			this.players[0].civUts = this.championCivUts;
			this.players[1].civUts = this.trashCivUts;
			this.players[0].ResetData();
			this.players[1].ResetData();

			this.players[0].amountStartUnits[this.ut1] = 50;
			this.players[1].amountStartUnits[this.ut2] = 50;
			this.players[0].CalculateResourcesInvested(this.resourceValuesFactors[this.resourceValue]);
			this.players[1].CalculateResourcesInvested(this.resourceValuesFactors[this.resourceValue]);
			this.players[1].amountStartUnits[this.ut2] = Math.round(50 * this.players[0].resourcesInvestedTotal / this.players[1].resourcesInvestedTotal);
			this.players[1].CalculateResourcesInvested(this.resourceValuesFactors[this.resourceValue]);

			for (let i: number = 0; i < this.numberOfSimulations; i++){
				new Battle(0, i, this.hitAndRunMode, this.players);
			}
			this.CalculateStats();
			this.combatresults[this.ut1][this.ut2] = this.players[0].resourcesLostTotal != 0 ? this.players[1].resourcesLostTotal / this.players[0].resourcesLostTotal : Number.POSITIVE_INFINITY;
			// console.log(this.ut1 + " " + this.ut2 + ": " + this.combatresults[this.ut1][this.ut2] + " (" + this.players[0].resourcesLostTotal + " / " + this.players[1].resourcesLostTotal + ")");
		}

		this.ut2++;
		if (this.ut2 == this.numberUtToDisplayColumns){
			let avgResult = 0.0;
			for (let i: number = 0; i < this.numberUtToDisplayColumns; i++){
				avgResult += this.combatresults[this.ut1][i];
			}
			this.combatresults[this.ut1][this.numberUtToDisplayColumns] = avgResult / this.numberUtToDisplayColumns;
			this.ut2 = 0;
			this.ut1++;
		}
		
		if (this.ut1 < this.numberUtToDisplayRows){
			setTimeout(this.CreateBattles.bind(this), 20);
		} else {
			let outputstring: string = "";
			this.combatresults.forEach(arr => {
				outputstring = outputstring.concat("[" + arr + "],\n");
			})
			console.log(outputstring);

			let tempSortList = [];
			for (let row = 0; row < this.numberUtToDisplayRows; row++){
				tempSortList.push({'civUnitType': this.championCivUts[row], 'cR': this.combatresults[row]});
			}
			tempSortList.sort(function(a, b){
				return (a.cR[a.cR.length-1] < b.cR[b.cR.length-1] ? 1 : (a.cR[a.cR.length-1] == b.cR[b.cR.length-1] ? 0 : -1));
			});
			for (let row = 0; row < this.numberUtToDisplayRows; row++){
				this.championCivUts[row] = tempSortList[row].civUnitType;
				this.combatresults[row] = tempSortList[row].cR;
			}
		}
	}


	public getSurvivorsColor(number): string {
		if (number <= 0.25){
			return new Color(255.0, 0.0, 0.0).GetAsHex(); // 255 0 0 (red)
		}
		if (number <= 0.5){
			return new Color(255.0, (number-0.25)*660.0, 0.0).GetAsHex(); // 255 0 0 (red) to 255 165 0 (orange)
		}
		if (number <= 1.0){
			return new Color(255.0, 165.0 + (number-0.5)*180.0, 0.0).GetAsHex(); // 255 165 0 (orange) to 255 255 0 (yellow)
		}
		if (number <= 2.0){
			return new Color(255.0 - (number-1.0)*111.0, 255.0 - (number-1.0)*17.0, (number-1.0)*144.0).GetAsHex(); // 255 255 0 (yellow) to 144 238 144 (light green)
		}
		if (number <= 4.0){
			return new Color(144.0 - (number-2.0)*72.0, 238.0 - (number-2.0)*69.0, 144 - (number-2.0)*72.0).GetAsHex(); // 144 238 144 (light green) to 0 100 0 (dark green)
		}
		return new Color(0.0, 100.0, 0.0).GetAsHex(); // 0 100 0 (dark green)
	}


	private CalculateStats(): void
	{
		for (let i: number = 0; i < 2; i++)
		{
			this.players[i].populationRemaining = 0;
			for (let k: number = 0; k < 3; k++)
			{
				this.players[i].resourcesRemaining[k] = 0;
				this.players[i].resourcesGenerated[k] /= this.numberOfSimulations;
			}

			for (let j: number = 0; j < this.players[i].civUts.length; j++)
			{
				this.players[i].avgSurvivorsNumber[j] = 1.0 * this.players[i].survivorsSumArmy.get(this.players[i].civUts[j]) / this.numberOfSimulations;
				this.players[i].populationRemaining += this.players[i].avgSurvivorsNumber[j] * (this.players[i].civUts[j].baseUnitType == AoeData.ut_eliteKarambitWarrior ? 0.5 : 1.0);

				for (let k: number = 0; k < 3; k++)
				{
					this.players[i].resourcesRemaining[k] += Math.round(this.players[i].civUts[j].resourceCosts[k] * this.players[i].avgSurvivorsNumber[j]);
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

	public CreateIncrArray(n: number): number[] {
		return [...Array(n).keys()];
	}
}
