import { UnitType } from '../aoeData/unitType';

export class Matrix{

	public matrixAllUts: UnitType[] = []; // a list of all post imp generic civ base unit types and all civs' elite unique units, ordered alphabetically by civ
	public numberUtToDisplay: number; // the length and width of the matrix
	public description: string; // the description of the matrix's settings
	public combatResults: number[][]; // the matrix entries

	constructor(matrixAllUts: UnitType[], description: string, combatResults: number[][]){
		this.matrixAllUts = matrixAllUts;
		this.description = description;
		this.combatResults = combatResults;
		this.numberUtToDisplay = this.matrixAllUts.length;
	}
}