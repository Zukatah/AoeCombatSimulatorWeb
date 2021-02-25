import { CivUnitType } from '../classes/civUnitType';

export class MatrixRow{
	public civUnitType: CivUnitType;
	public civUnitTypeIndex: number; // for sorting purposes
	public matrixCellsValues: number[]; // the combat results displayed in the cells
	public points: number; // the total number of points for this row's civ unit type
}

export class Matrix{

	public matrixUts1: CivUnitType[] = []; // a list of this matrix's player 1 civ units
	public matrixUts2: CivUnitType[] = []; // a list of this matrix's player 2 civ units
	public matrixUtsLength1: number; // the height of the matrix (#p1 civ unit types)
	public matrixUtsLength2: number; // the width of the matrix (#p1 civ unit types)
	public description: string; // the description of the matrix's settings
	public matrixRows: MatrixRow[] = []; // the matrix' rows

	public hitAndRunMode: number; // 0=noHit&Run, 1=semi, 2=fullHit&Run
	public hitAndRunModes: string[] = ["No Hit&Run", "Medium Hit&Run", "Perfect Hit&Run"];
	public hitAndRunModes_description: string[] = [
		"Ranged units don't exploit their range in order to Hit&Run enemies with no (or lower) range.",
		"Ranged units use half of their (idle) time between the launches of their projectiles and the start of their next attack animation in order to move away from their target (aka Hit&Run).",
		"Ranged units use all of their (idle) time between the launches of their projectiles and the start of their next attack animation in order to move away from their target (aka Hit&Run)."
	]

	public resourceValue: number; // 0=equal worth, 1=gold+50% worth, 2=100f=100w=17g
	public resourceValues: string[] = ["100F=100W=100G", "100F=100W=66,6G", "100F=100W=17G"];
	public resourceValues_description: string[] = [
		"All resources are considered to be of equal worth. This usually applies to the earlier stages of a match when there are still enough gold mines on the map (or in the later stages of a match if trade is available).",
		"Gold is considered to have a 50% higher worth than food and wood.",
		"Gold is considered to have a much higher worth than food and wood. This usually applies to later stages of a match when the gold mines are depleted and trade isn't available (e.g. in 1vs1 matches). 100 food = 100 wood = 17 gold are the common late game market exchange rates (in case the Guilds tech is available).",
	];

	public combatType: number; // 0=Equal resources, 1=Equal numbers, 2=Equal numbers rep.
	public combatTypes: string[] = ["Equal resources", "", "Equal population"];
	public combatTypes_description: string[] = [
		"Both armies have the same worth in terms of the invested resources. The army to the left (rows) contains 50 units of the respective type. The army at the top (columns) contains a number of units with a similar worth of the respective type.",
		"",
		"Both armies have the same size (they occupy the same population space): 50 units (or 100, in case of Karambit warriors). After each fight the armies are refilled to 50 population space and the resources lost by either player are added together in order to calculate cost efficiency values. "
	];

	public sortable_description: string = "Sortable";
	public points_description: string = "Sortable. Each cost efficiency >2 gives 4 points, >1.25 gives 3 points, >=0.8 gives 2 points, >=0.5 gives 1 point, <0.5 gives 0 points.";

	constructor(matrixUts1: CivUnitType[], matrixUts2: CivUnitType[], description: string, hitAndRunMode: number, resourceValue: number, combatType: number, combatResults: number[][]){
		this.matrixUts1 = matrixUts1;
		this.matrixUts2 = matrixUts2;
		this.description = description;
		this.matrixUtsLength1 = this.matrixUts1.length;
		this.matrixUtsLength2 = this.matrixUts2.length;
		this.hitAndRunMode = hitAndRunMode;
		this.resourceValue = resourceValue;
		this.combatType = combatType;

		for (let i: number = 0; i < this.matrixUtsLength1; i++){
			let curMatrixRow: MatrixRow = new MatrixRow();
			curMatrixRow.civUnitType = this.matrixUts1[i];
			curMatrixRow.matrixCellsValues = combatResults[i];
			curMatrixRow.civUnitTypeIndex = i;
			
			let points = 0;
			for (let j: number = 0; j < this.matrixUtsLength2; j++){
				if (curMatrixRow.matrixCellsValues[j] > 2.0){
					points += 4;
				} else if (curMatrixRow.matrixCellsValues[j] > 1.25){
					points += 3;
				} else if (curMatrixRow.matrixCellsValues[j] >= 0.8){
					points += 2;
				} else if (curMatrixRow.matrixCellsValues[j] >= 0.5){
					points += 1;
				} //else => no points
			}
			curMatrixRow.points = points;

			this.matrixRows.push(curMatrixRow);
		}
	}
}