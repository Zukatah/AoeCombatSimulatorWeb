import { UnitType } from './unitType';

export class UnitTypeLine {

	public name: string; // this unit type's name
	public unitTypes: UnitType[];

	constructor(name: string, unitTypes: UnitType[]) {
		this.name = name;
		this.unitTypes = unitTypes;
	}
}