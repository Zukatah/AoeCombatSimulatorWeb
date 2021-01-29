import { CivUnitType } from '../aoeData/civUnitType';
import { UnitType } from '../aoeData/unitType';

export class Matrix{

	public matrixUts1: CivUnitType[] = []; // a list of this matrix's player 1 civ units
	public matrixUts2: CivUnitType[] = []; // a list of this matrix's player 2 civ units
	public matrixUtsLength1: number; // the height of the matrix (#p1 civ unit types)
	public matrixUtsLength2: number; // the width of the matrix (#p1 civ unit types)
	public description: string; // the description of the matrix's settings
	public combatResults: number[][]; // the matrix entries
	public combatResultsPoints: number[];

	constructor(matrixUts1: CivUnitType[], matrixUts2: CivUnitType[], description: string, combatResults: number[][]){
		this.matrixUts1 = matrixUts1;
		this.matrixUts2 = matrixUts2;
		this.description = description;
		this.combatResults = combatResults;
		this.matrixUtsLength1 = this.matrixUts1.length;
		this.matrixUtsLength2 = this.matrixUts2.length;
		this.combatResultsPoints = [];

		for (let i: number = 0; i < this.matrixUtsLength1; i++){
			let points = 0;
			for (let j: number = 0; j < this.matrixUtsLength2; j++){
				if (this.combatResults[i][j] > 2.0){
					points += 4;
				} else if (this.combatResults[i][j] > 1.25){
					points += 3;
				} else if (this.combatResults[i][j] >= 0.8){
					points += 2;
				} else if (this.combatResults[i][j] >= 0.5){
					points += 1;
				} //else => no points
			}
			this.combatResultsPoints.push(points);
		}
	}
}