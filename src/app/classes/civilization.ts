import { UnitTypeLine } from './unitTypeLine';
import { Technology } from './technology';

export class Civilization {

	public name: string; // this civilization's name
	public maxUnitTypeLineLevels: [UnitTypeLine, number][] = [];
	public technologies: Technology[] = [];

	constructor(name: string) {
		this.name = name;
	}
}