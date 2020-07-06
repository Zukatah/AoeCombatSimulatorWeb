import { ArmorClass } from './armorClass';
import { UnitType } from './unitType';
import { UnitTypeLine } from './unitTypeLine';

export class Civilization {

	public name: string; // this civilization's name
	public unitTypeLineLevels: [UnitTypeLine, number][];

	constructor(name: string) {
		this.name = name;
	}
}