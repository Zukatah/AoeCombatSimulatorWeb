import { ArmorClass } from './armorClass';
import { UnitType } from "./unitType";
import { Civilization } from './civilization';
import { AoeData } from './aoeData';


export class CivUnitType extends UnitType {

	public baseUnitType: UnitType;
	public civ: Civilization;


	constructor(baseUnitType: UnitType, civ: Civilization) {
		super(civ.name + " " + baseUnitType.name, baseUnitType.hp, baseUnitType.attackSpeed, baseUnitType.attackRange, baseUnitType.attackDelay, baseUnitType.projectileSpeed, baseUnitType.moveSpeed,
			baseUnitType.resourceCosts[0], baseUnitType.resourceCosts[1], baseUnitType.resourceCosts[2], baseUnitType.radius, baseUnitType.attackRangeMin, baseUnitType.accuracyPercent,
			baseUnitType.hpRegPerMin);

		this.baseUnitType = baseUnitType;
		this.civ = civ;

		baseUnitType.attackValues.forEach((value: number, key: ArmorClass) => { this.attackValues.set(key, value); });
		baseUnitType.armorClasses.forEach((value: number, key: ArmorClass) => {	this.armorClasses.set(key, value); });
		this.cleaveType = baseUnitType.cleaveType;
		this.cleaveRadius = baseUnitType.cleaveRadius;
		this.attackIsMissile = baseUnitType.attackIsMissile;
		this.missileFlightDistance = baseUnitType.missileFlightDistance;
		this.secondaryMissileFlightDistance = baseUnitType.secondaryMissileFlightDistance;
		this.secondaryAttack = baseUnitType.secondaryAttack;
		this.secondaryAttackProjectileCount = baseUnitType.secondaryAttackProjectileCount;
		baseUnitType.secondaryAttackValues.forEach((value: number, key: ArmorClass) => { this.secondaryAttackValues.set(key, value); });
		this.imagePath = baseUnitType.imagePath;
		this.techsForUnitList = baseUnitType.techsForUnitList;

		this.ApplyBlacksmithTechs();
		this.ApplyUniversityTechs();
		this.ApplyBarracksStableTcTechs();
		this.ApplyArcheryRangeTechs();

		if (AoeData.utl_militia.unitTypes.includes(baseUnitType)){
			this.UtlMilitia();
		}
	}


	public ApplyBlacksmithTechs(): void{
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_forging) && this.civ.technologies.includes(AoeData.tec_forging)){
			this.attackValues.set(AoeData.ac_baseMelee, this.attackValues.get(AoeData.ac_baseMelee) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_ironCasting) && this.civ.technologies.includes(AoeData.tec_ironCasting)){
			this.attackValues.set(AoeData.ac_baseMelee, this.attackValues.get(AoeData.ac_baseMelee) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_blastFurnace) && this.civ.technologies.includes(AoeData.tec_blastFurnace)){
			this.attackValues.set(AoeData.ac_baseMelee, this.attackValues.get(AoeData.ac_baseMelee) + 2);
		}

		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_scaleMailArmor) && this.civ.technologies.includes(AoeData.tec_scaleMailArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_chainMailArmor) && this.civ.technologies.includes(AoeData.tec_chainMailArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_plateMailArmor) && this.civ.technologies.includes(AoeData.tec_plateMailArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
		}

		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_scaleBardingArmor) && this.civ.technologies.includes(AoeData.tec_scaleBardingArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_chainBardingArmor) && this.civ.technologies.includes(AoeData.tec_chainBardingArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_plateBardingArmor) && this.civ.technologies.includes(AoeData.tec_plateBardingArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
		}

		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_fletching) && this.civ.technologies.includes(AoeData.tec_fletching)){
			this.attackValues.set(AoeData.ac_basePierce, this.attackValues.get(AoeData.ac_basePierce) + 1);
			this.attackRange += 1;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_bodkinArrow) && this.civ.technologies.includes(AoeData.tec_bodkinArrow)){
			this.attackValues.set(AoeData.ac_basePierce, this.attackValues.get(AoeData.ac_basePierce) + 1);
			this.attackRange += 1;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_bracer) && this.civ.technologies.includes(AoeData.tec_bracer)){
			this.attackValues.set(AoeData.ac_basePierce, this.attackValues.get(AoeData.ac_basePierce) + 1);
			this.attackRange += 1;
		}

		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_paddedArcherArmor) && this.civ.technologies.includes(AoeData.tec_paddedArcherArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_leatherArcherArmor) && this.civ.technologies.includes(AoeData.tec_leatherArcherArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_ringArcherArmor) && this.civ.technologies.includes(AoeData.tec_ringArcherArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
		}
	}


	public ApplyUniversityTechs(): void{
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_chemistry) && this.civ.technologies.includes(AoeData.tec_chemistry)){
			this.attackValues.set(AoeData.ac_basePierce, this.attackValues.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_siegeEngineers) && this.civ.technologies.includes(AoeData.tec_siegeEngineers)){
			this.attackRange += 1;
		}
	}


	public ApplyBarracksStableTcTechs(): void{
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_supplies) && this.civ.technologies.includes(AoeData.tec_supplies)){
			this.resourceCosts[0] -= 15;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_squires) && this.civ.technologies.includes(AoeData.tec_squires)){
			this.moveSpeed *= 1.1;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_bloodlines) && this.civ.technologies.includes(AoeData.tec_bloodlines)){
			this.hp += 20;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_husbandry) && this.civ.technologies.includes(AoeData.tec_husbandry)){
			this.moveSpeed *= 1.1;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_loom) && this.civ.technologies.includes(AoeData.tec_loom)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
		}
	}



	public ApplyArcheryRangeTechs(): void{
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_parthianTactics) && this.civ.technologies.includes(AoeData.tec_parthianTactics)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
			if (this.attackValues.has(AoeData.ac_spearman)){
				this.attackValues.set(AoeData.ac_spearman, this.attackValues.get(AoeData.ac_spearman) + (this.baseUnitType == AoeData.ut_cavalryArcher ? 4 : 2));
			} else {
				this.attackValues.set(AoeData.ac_spearman, this.attackValues.get(AoeData.ac_spearman) + 2);
			}
		}
	}



	public UtlMilitia(): void{

	}
}