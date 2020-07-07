import { ArmorClass } from './armorClass';
import { UnitType } from "./unitType";
import { Civilization } from './civilization';

export class CivUnitType extends UnitType {

	public baseUnitType: UnitType;
	public civ: Civilization;

	constructor(baseUnitType: UnitType, civ: Civilization) {
		super(civ.name + " " + baseUnitType.name, baseUnitType.hp, baseUnitType.attackSpeed, baseUnitType.attackRange, baseUnitType.attackDelay, baseUnitType.projectileSpeed, baseUnitType.moveSpeed,
			baseUnitType.resourceCosts[0], baseUnitType.resourceCosts[1], baseUnitType.resourceCosts[2], baseUnitType.radius, baseUnitType.attackRangeMin, baseUnitType.accuracyPercent,
			baseUnitType.hpRegPerMin);
		this.baseUnitType = baseUnitType;
		this.civ = civ;
	}
}