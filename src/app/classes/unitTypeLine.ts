import { UnitType } from './unitType';

export class UnitTypeLine {

	public name: string; // the unitTypeLine's name (e.g. 'Archer line')
	public unitTypes: UnitType[]; // the unit types that are part of the unitTypeLine (e.g. archers, crossbowmen and arbalesters)

	constructor(name: string, unitTypes: UnitType[]) {
		this.name = name;
		this.unitTypes = unitTypes;
	}
}