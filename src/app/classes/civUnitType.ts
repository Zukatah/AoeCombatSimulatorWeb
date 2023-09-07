import { ArmorClass } from './armorClass';
import { UnitType } from "./unitType";
import { Civilization } from './civilization';
import { AoeData } from './../data/aoeData';
import { Technology } from './technology';


export class CivUnitType extends UnitType {

	public baseUnitType: UnitType;

	// The following properties are usually adopted from the player and hence equal for all civUnitTypes of a player.
	// But in the matrix mode, civUnitTypes of one player can have different civs/ages/techsResearched/numberOfRelics,
	// e.g. in order to make comparisons between different civs' paladins in the same matrix possible.
	public civ: Civilization;
	public age: number;
	public techsResearched: Technology[];
	public numberOfRelics: number = 0;


	constructor(baseUnitType: UnitType, civ: Civilization, age: number, techsResearched: Technology[] = null, numberOfRelics: number = 0) {
		super(civ.name + " " + baseUnitType.name, baseUnitType.accessibleFromAge, baseUnitType.hp, baseUnitType.attackSpeed, baseUnitType.attackRange, baseUnitType.attackDelay, baseUnitType.projectileSpeed, baseUnitType.moveSpeed,
			baseUnitType.resourceCosts[0], baseUnitType.resourceCosts[1], baseUnitType.resourceCosts[2], baseUnitType.radius, baseUnitType.attackRangeMin, baseUnitType.accuracyPercent,
			baseUnitType.hpRegPerMin);

		this.baseUnitType = baseUnitType;
		this.civ = civ;
		this.age = age;
		this.techsResearched = techsResearched;
		this.numberOfRelics = numberOfRelics;

		baseUnitType.attackValues.forEach((value: number, key: ArmorClass) => { this.attackValues.set(key, value); });
		baseUnitType.armorClasses.forEach((value: number, key: ArmorClass) => {	this.armorClasses.set(key, value); });
		this.cleaveType = baseUnitType.cleaveType;
		this.cleaveRadius = baseUnitType.cleaveRadius;
		this.cleaveDamage = baseUnitType.cleaveDamage;
		this.attackIgnoresArmor = baseUnitType.attackIgnoresArmor;
		this.attackIsMissile = baseUnitType.attackIsMissile;
		this.sideTargetDmgFraction = baseUnitType.sideTargetDmgFraction;
		this.missileFlightDistance = baseUnitType.missileFlightDistance;
		this.secondaryMissileFlightDistance = baseUnitType.secondaryMissileFlightDistance;
		this.secondaryAttack = baseUnitType.secondaryAttack;
		this.secondaryAttackProjectileCount = baseUnitType.secondaryAttackProjectileCount;
		baseUnitType.secondaryAttackValues.forEach((value: number, key: ArmorClass) => { this.secondaryAttackValues.set(key, value); });
		this.secondaryAttackAccuracyPercent = baseUnitType.secondaryAttackAccuracyPercent;
		this.imagePath = baseUnitType.imagePath;
		this.techsForUnitList = baseUnitType.techsForUnitList;
		this.energyRegPerMin = baseUnitType.energyRegPerMin;

		if (techsResearched == null){ // this is only called, if the unit's techs have to be set individually (in the matrix mode); in the simulation mode, techs are set via the researched techs of the respective player
			this.AddDefaultTechsToUnit();
		}

		if (civ == AoeData.civ_incas && baseUnitType == AoeData.ut_villager && age >= 2){ // unlike generic villagers, the incas' villagers profit from blacksmith upgrades
			this.techsForUnitList.push(AoeData.tec_forging, AoeData.tec_ironCasting, AoeData.tec_blastFurnace, AoeData.tec_scaleMailArmor, AoeData.tec_chainMailArmor, AoeData.tec_plateMailArmor);
		}
		if (civ == AoeData.civ_bohemians && baseUnitType == AoeData.ut_villager){ // unlike generic villagers, the bohemians' villagers profit from fervor and sanctity
			this.techsForUnitList.push(AoeData.tec_sanctity, AoeData.tec_fervor);
		}

		if (civ == AoeData.civ_aztecs){ this.ApplyAztecsBonusses(); }
		if (civ == AoeData.civ_bengalis){ this.ApplyBengalisBonusses(); }
		if (civ == AoeData.civ_berbers){ this.ApplyBerbersBonusses(); }
		if (civ == AoeData.civ_bohemians){ this.ApplyBohemiansBonusses(); }
		if (civ == AoeData.civ_britons){ this.ApplyBritonsBonusses(); }
		if (civ == AoeData.civ_bulgarians){ this.ApplyBulgariansBonusses(); }
		if (civ == AoeData.civ_burgundians){ this.ApplyBurgundiansBonusses(); }
		if (civ == AoeData.civ_burmese){ this.ApplyBurmeseBonusses(); }
		if (civ == AoeData.civ_byzantines){ this.ApplyByzantinesBonusses(); }
		if (civ == AoeData.civ_celts){ this.ApplyCeltsBonusses(); }
		if (civ == AoeData.civ_chinese){ this.ApplyChineseBonusses(); }
		if (civ == AoeData.civ_cumans){ this.ApplyCumansBonusses(); }
		if (civ == AoeData.civ_dravidians){ this.ApplyDravidiansBonusses(); }
		if (civ == AoeData.civ_ethiopians){ this.ApplyEthiopiansBonusses(); }
		if (civ == AoeData.civ_franks){ this.ApplyFranksBonusses(); }
		if (civ == AoeData.civ_goths){ this.ApplyGothsBonusses(); }
		if (civ == AoeData.civ_gurjaras){ this.ApplyGurjarasBonusses(); }
		if (civ == AoeData.civ_huns){ this.ApplyHunsBonusses(); }
		if (civ == AoeData.civ_incas){ this.ApplyIncasBonusses(); }
		if (civ == AoeData.civ_hindustanis){ this.ApplyHindustanisBonusses(); }
		if (civ == AoeData.civ_italians){ this.ApplyItaliansBonusses(); }
		if (civ == AoeData.civ_japanese){ this.ApplyJapaneseBonusses(); }
		if (civ == AoeData.civ_khmer){ this.ApplyKhmerBonusses(); }
		if (civ == AoeData.civ_koreans){ this.ApplyKoreansBonusses(); }
		if (civ == AoeData.civ_lithuanians){ this.ApplyLithuaniansBonusses(); }
		if (civ == AoeData.civ_magyars){ this.ApplyMagyarsBonusses(); }
		if (civ == AoeData.civ_malay){ this.ApplyMalayBonusses(); }
		if (civ == AoeData.civ_malians){ this.ApplyMaliansBonusses(); }
		if (civ == AoeData.civ_mayans){ this.ApplyMayansBonusses(); }
		if (civ == AoeData.civ_mongols){ this.ApplyMongolsBonusses(); }
		if (civ == AoeData.civ_persians){ this.ApplyPersiansBonusses(); }
		if (civ == AoeData.civ_poles){ this.ApplyPolesBonusses(); }
		if (civ == AoeData.civ_portuguese){ this.ApplyPortugueseBonusses(); }
		if (civ == AoeData.civ_saracens){ this.ApplySaracensBonusses(); }
		if (civ == AoeData.civ_sicilians){ this.ApplySiciliansBonusses(); }
		if (civ == AoeData.civ_slavs){ this.ApplySlavsBonusses(); }
		if (civ == AoeData.civ_spanish){ this.ApplySpanishBonusses(); }
		if (civ == AoeData.civ_tatars){ this.ApplyTatarsBonusses(); }
		if (civ == AoeData.civ_teutons){ this.ApplyTeutonsBonusses(); }
		if (civ == AoeData.civ_turks){ this.ApplyTurksBonusses(); }
		if (civ == AoeData.civ_vietnamese){ this.ApplyVietnameseBonusses(); }
		if (civ == AoeData.civ_vikings){ this.ApplyVikingsBonusses(); }

		this.ApplyBlacksmithTechs();
		this.ApplyUniversityMonasteryTechs();
		this.ApplyBarracksStableTcTechs();
		this.ApplyArcheryRangeTechs();

		if (numberOfRelics > 0){
			this.RelicCountChanged(numberOfRelics);
		}
	}


	public AddDefaultTechsToUnit(): void{ // this is only called, if the unit's techs have to be set individually (in the matrix mode); in the simulation mode, techs are set via the researched techs of the respective player
		this.techsResearched = [];
		this.civ.technologies.forEach(tech => {
			if (tech.accessibleFromAge < this.age){
				this.techsResearched.push(tech);
			}
		});
		this.techsResearched
	}


	public ApplyBlacksmithTechs(): void{
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_forging) && this.techsResearched.includes(AoeData.tec_forging)){
			this.attackValues.set(AoeData.ac_baseMelee, this.attackValues.get(AoeData.ac_baseMelee) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_ironCasting) && this.techsResearched.includes(AoeData.tec_ironCasting)){
			this.attackValues.set(AoeData.ac_baseMelee, this.attackValues.get(AoeData.ac_baseMelee) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_blastFurnace) && this.techsResearched.includes(AoeData.tec_blastFurnace)){
			this.attackValues.set(AoeData.ac_baseMelee, this.attackValues.get(AoeData.ac_baseMelee) + 2);
		}

		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_scaleMailArmor) && this.techsResearched.includes(AoeData.tec_scaleMailArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_chainMailArmor) && this.techsResearched.includes(AoeData.tec_chainMailArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_plateMailArmor) && this.techsResearched.includes(AoeData.tec_plateMailArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
		}

		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_scaleBardingArmor) && this.techsResearched.includes(AoeData.tec_scaleBardingArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_chainBardingArmor) && this.techsResearched.includes(AoeData.tec_chainBardingArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_plateBardingArmor) && this.techsResearched.includes(AoeData.tec_plateBardingArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
		}

		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_fletching) && this.techsResearched.includes(AoeData.tec_fletching)){
			this.attackValues.set(AoeData.ac_basePierce, this.attackValues.get(AoeData.ac_basePierce) + 1);
			this.attackRange += 1;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_bodkinArrow) && this.techsResearched.includes(AoeData.tec_bodkinArrow)){
			this.attackValues.set(AoeData.ac_basePierce, this.attackValues.get(AoeData.ac_basePierce) + 1);
			this.attackRange += 1;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_bracer) && this.techsResearched.includes(AoeData.tec_bracer)){
			this.attackValues.set(AoeData.ac_basePierce, this.attackValues.get(AoeData.ac_basePierce) + 1);
			this.attackRange += 1;
		}

		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_paddedArcherArmor) && this.techsResearched.includes(AoeData.tec_paddedArcherArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_leatherArcherArmor) && this.techsResearched.includes(AoeData.tec_leatherArcherArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_ringArcherArmor) && this.techsResearched.includes(AoeData.tec_ringArcherArmor)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
		}
	}


	public ApplyUniversityMonasteryTechs(): void{
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_chemistry) && this.techsResearched.includes(AoeData.tec_chemistry)){
			this.attackValues.set(AoeData.ac_basePierce, this.attackValues.get(AoeData.ac_basePierce) + 1);
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_siegeEngineers) && this.techsResearched.includes(AoeData.tec_siegeEngineers)){
			this.attackRange += 1;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_sanctity) && this.techsResearched.includes(AoeData.tec_sanctity)){
			this.hp += 15;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_fervor) && this.techsResearched.includes(AoeData.tec_fervor)){
			this.moveSpeed *= 1.15;
		}
	}


	public ApplyBarracksStableTcTechs(): void{
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_supplies) && this.techsResearched.includes(AoeData.tec_supplies)){
			this.resourceCosts[0] -= 15;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_squires) && this.techsResearched.includes(AoeData.tec_squires)){
			this.moveSpeed *= 1.1;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_bloodlines) && this.techsResearched.includes(AoeData.tec_bloodlines)){
			this.hp += 20;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_husbandry) && this.techsResearched.includes(AoeData.tec_husbandry)){
			this.moveSpeed *= 1.1;
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_loom) && this.techsResearched.includes(AoeData.tec_loom)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
			this.hp += 15;
		}
		if (this.baseUnitType.techsForUnitList.includes(AoeData.tec_wheelbarrow) && this.techsResearched.includes(AoeData.tec_wheelbarrow)){
			this.moveSpeed *= 1.1;
		}
		if (this.baseUnitType.techsForUnitList.includes(AoeData.tec_handCart) && this.techsResearched.includes(AoeData.tec_handCart)){
			this.moveSpeed *= 1.1;
		}
	}


	public ApplyArcheryRangeTechs(): void{
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_parthianTactics) && this.techsResearched.includes(AoeData.tec_parthianTactics)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
			if (this.attackValues.has(AoeData.ac_spearman)){
				this.attackValues.set(AoeData.ac_spearman, this.attackValues.get(AoeData.ac_spearman) + (AoeData.utl_cavalryArcher.unitTypes.includes(this.baseUnitType) ? 4 : 2));
			} else {
				this.attackValues.set(AoeData.ac_spearman, 2);
			}
		}
		if(this.baseUnitType.techsForUnitList.includes(AoeData.tec_thumbRing) && this.techsResearched.includes(AoeData.tec_thumbRing)){
			this.accuracyPercent = 100;
			if (AoeData.utl_archer.unitTypes.includes(this.baseUnitType)){
				this.attackSpeed *= 0.85;
			}
			if (AoeData.utl_cavalryArcher.unitTypes.includes(this.baseUnitType)){
				this.attackSpeed *= 0.9;
			}
			if (AoeData.utl_longbowman.unitTypes.includes(this.baseUnitType)){
				this.attackSpeed *= 0.85;
			}
			if (AoeData.utl_chuKoNu.unitTypes.includes(this.baseUnitType)){
				this.attackSpeed *= 0.8;
			}
			if (AoeData.utl_mangudai.unitTypes.includes(this.baseUnitType)){
				this.attackSpeed *= 0.85;
			}
			if (AoeData.utl_warWagon.unitTypes.includes(this.baseUnitType)){
				this.attackSpeed *= 0.9;
			}
			if (AoeData.utl_plumedArcher.unitTypes.includes(this.baseUnitType)){
				this.attackSpeed *= 0.85;
			}
			if (AoeData.utl_elephantArcher.unitTypes.includes(this.baseUnitType)){
				this.attackSpeed *= 0.85;
			}
			if (AoeData.utl_genoeseCrossbowman.unitTypes.includes(this.baseUnitType)){
				this.attackSpeed *= 0.85;
			}
			if (AoeData.utl_camelArcher.unitTypes.includes(this.baseUnitType)){
				this.attackSpeed *= 0.85;
			}
			if (AoeData.utl_rattanArcher.unitTypes.includes(this.baseUnitType)){
				this.attackSpeed *= 0.85;
			}
			if (AoeData.utl_kipchak.unitTypes.includes(this.baseUnitType)){
				this.attackSpeed *= 0.9;
			}
		}
	}


	public ApplyAztecsBonusses(): void{
		if (this.armorClasses.has(AoeData.ac_infantry) && this.age == 4){
			this.attackValues.set(AoeData.ac_baseMelee, this.attackValues.get(AoeData.ac_baseMelee) + 4);
		}
		if (AoeData.utl_skirmisher.unitTypes.includes(this.baseUnitType) && this.age >= 3){
			this.attackValues.set(AoeData.ac_basePierce, this.attackValues.get(AoeData.ac_basePierce) + 1);
			this.attackRange += 1;
		}
	}


	public ApplyBengalisBonusses(): void{
		if (this.age >= 3 && (AoeData.utl_ratha_melee.unitTypes.includes(this.baseUnitType) || AoeData.utl_ratha_ranged.unitTypes.includes(this.baseUnitType) || this.armorClasses.has(AoeData.ac_warElephant))){
			this.attackSpeed *= 0.8333333333;
		}
		if (AoeData.utl_ratha_melee.unitTypes.includes(this.baseUnitType) || AoeData.utl_scoutCavalry.unitTypes.includes(this.baseUnitType) || AoeData.utl_battleElephant.unitTypes.includes(this.baseUnitType) || AoeData.utl_armoredElephant.unitTypes.includes(this.baseUnitType)){
			this.attackValues.set(AoeData.ac_skirmisher, 2);
		}
	}


	public ApplyBerbersBonusses(): void{
		if (AoeData.utl_villager.unitTypes.includes(this.baseUnitType)){
			this.moveSpeed *= 1.1;
		}
		if (this.armorClasses.has(AoeData.ac_camel) && this.age >= 4){
			this.hpRegPerMin += 15;
		}
		if ((AoeData.utl_scoutCavalry.unitTypes.includes(this.baseUnitType) || AoeData.utl_knight.unitTypes.includes(this.baseUnitType) || AoeData.utl_camelRider.unitTypes.includes(this.baseUnitType))){
			if (this.age == 2){
				for (let i: number = 0; i < 3; i++){
					this.resourceCosts[i] *= 0.85;
				}
			}
			else if (this.age >= 3){
				for (let i: number = 0; i < 3; i++){
					this.resourceCosts[i] *= 0.8;
				}
			}
		}
	}


	public ApplyBohemiansBonusses(): void{
		if (this.age >= 3 && this.armorClasses.has(AoeData.ac_gunpowderUnit)){
			this.moveSpeed *= 1.15;
		}
		if (AoeData.utl_spearman.unitTypes.includes(this.baseUnitType)){
			this.attackValues.set(AoeData.ac_cavalry, this.attackValues.get(AoeData.ac_cavalry) * 1.25);
		}
	}


	public ApplyBritonsBonusses(): void{
		if ((AoeData.utl_skirmisher.unitTypes.includes(this.baseUnitType) || AoeData.utl_archer.unitTypes.includes(this.baseUnitType) || AoeData.utl_longbowman.unitTypes.includes(this.baseUnitType)) && this.age >= 3){
			this.attackRange += 1;
		}
		if (AoeData.utl_archer.unitTypes.includes(this.baseUnitType) || AoeData.utl_longbowman.unitTypes.includes(this.baseUnitType)){
			if (this.age == 2){
				this.attackRange += 1;
			} else if (this.age >= 3){
				this.attackRange += 2;
			}
		}
	}


	public ApplyBulgariansBonusses(): void{
		if (AoeData.utl_militia.unitTypes.includes(this.baseUnitType) && this.age == 4){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 5);
		}
		if (AoeData.utl_scoutCavalry.unitTypes.includes(this.baseUnitType) || AoeData.utl_knight.unitTypes.includes(this.baseUnitType) ||
			AoeData.utl_konnik.unitTypes.includes(this.baseUnitType)){
			if (this.age >= 3){
				this.attackSpeed *= 0.75;
			}
		}
	}


	public ApplyBurgundiansBonusses(): void{
		if (AoeData.utl_handCannoneer.unitTypes.includes(this.baseUnitType)){
			this.attackValues.forEach((value: number, key: ArmorClass) => {
				this.attackValues.set(key, value * 1.25);
			});
		}
	}


	public ApplyBurmeseBonusses(): void{
		if (AoeData.utl_battleElephant.unitTypes.includes(this.baseUnitType)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
			if (this.age == 4){
				this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
				this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
			}
		}
		if (this.armorClasses.has(AoeData.ac_infantry)){
			this.attackValues.set(AoeData.ac_baseMelee, this.attackValues.get(AoeData.ac_baseMelee) + (this.age == 1 ? 1 : (this.age == 2 ? 2 : (this.age >= 3 ? 3 : 0))));
		}
		if (this.age >= 3 && (AoeData.utl_battleElephant.unitTypes.includes(this.baseUnitType) || AoeData.utl_scoutCavalry.unitTypes.includes(this.baseUnitType) || AoeData.utl_knight.unitTypes.includes(this.baseUnitType))){
			this.attackValues.set(AoeData.ac_archer, 4);
		}
	}


	public ApplyByzantinesBonusses(): void{
		if (AoeData.utl_cataphract.unitTypes.includes(this.baseUnitType) && this.age == 4){
			this.attackValues.set(AoeData.ac_infantry, this.attackValues.get(AoeData.ac_infantry) + 6);
		}
		if (AoeData.utl_spearman.unitTypes.includes(this.baseUnitType) || AoeData.utl_skirmisher.unitTypes.includes(this.baseUnitType) || AoeData.utl_camelRider.unitTypes.includes(this.baseUnitType)){
			for (let i: number = 0; i < 3; i++){
				this.resourceCosts[i] *= 0.75;
			}
		}
	}


	public ApplyCeltsBonusses(): void{
		if ((AoeData.utl_batteringRam.unitTypes.includes(this.baseUnitType) || AoeData.utl_scorpion.unitTypes.includes(this.baseUnitType)) && this.age == 4){
			this.hp *= 1.4;
		}
		if (this.armorClasses.has(AoeData.ac_infantry) && this.age > 0){
			this.moveSpeed *= 1.15;
		}
		if (this.armorClasses.has(AoeData.ac_siegeWeapon)){
			this.attackSpeed *= 0.8;
		}
	}


	public ApplyChineseBonusses(): void{
		if (AoeData.utl_chuKoNu.unitTypes.includes(this.baseUnitType) && this.age == 4){
			this.attackValues.set(AoeData.ac_basePierce, this.attackValues.get(AoeData.ac_basePierce) + 2);
		}
		if (AoeData.utl_scorpion.unitTypes.includes(this.baseUnitType) && this.age == 4){
			this.attackValues.set(AoeData.ac_basePierce, this.attackValues.get(AoeData.ac_basePierce) + 4); // todo: check scorpion vs chinese scorpion
		}
	}


	public ApplyCumansBonusses(): void{
		if (this.armorClasses.has(AoeData.ac_cavalry) || this.armorClasses.has(AoeData.ac_camel)){
			this.moveSpeed *= this.age == 1 ? 1.05 : (this.age == 2 ? 1.1 : (this.age >= 3 ? 1.15 : 1.0));
		}
	}


	public ApplyDravidiansBonusses(): void{
		if (this.age >= 3 && this.armorClasses.has(AoeData.ac_warElephant)){
			this.hpRegPerMin = 30;
		}
		if (this.age == 4 && (this.armorClasses.has(AoeData.ac_infantry) || AoeData.utl_scoutCavalry.unitTypes.includes(this.baseUnitType) || AoeData.utl_battleElephant.unitTypes.includes(this.baseUnitType))){
			this.attackIgnoresArmor = true;
		}
		if (this.armorClasses.has(AoeData.ac_siegeWeapon)){
			this.resourceCosts[1] *= 0.67;
		}
		if (AoeData.utl_skirmisher.unitTypes.includes(this.baseUnitType) || AoeData.utl_elephantArcher.unitTypes.includes(this.baseUnitType)){
			this.attackSpeed *= 0.8;
		}
	}


	public ApplyEthiopiansBonusses(): void{
		// torsion engines bonus handled in missile class (instead adding extra attribute to unit type class reasonable?) - extra radius of 0.1t reasonable?
		if (AoeData.utl_archer.unitTypes.includes(this.baseUnitType)){
			this.attackSpeed *= 0.85;
		}
	}


	public ApplyFranksBonusses(): void{
		if (AoeData.utl_throwingAxeman.unitTypes.includes(this.baseUnitType) && this.age == 4){
			this.attackRange += 1;
		}
		if (this.armorClasses.has(AoeData.ac_cavalry)){
			this.hp *= 1.2;
		}
	}


	public ApplyGothsBonusses(): void{
		if (this.armorClasses.has(AoeData.ac_infantry)){
			for (let i: number = 0; i < 3; i++){
				this.resourceCosts[i] *= this.age == 0 ? 0.8 : this.age == 1 ? 0.75 : this.age == 2 ? 0.7 : 0.65;
			}
		}
	}


	public ApplyGurjarasBonusses(): void{
		if (this.age >= 3){
			this.resourceCosts[0] *= 0.75;
		}
		if (this.age == 4 && (AoeData.utl_camelScout.unitTypes.includes(this.baseUnitType) || AoeData.utl_elephantArcher.unitTypes.includes(this.baseUnitType))){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 4);
		}
		if (this.armorClasses.has(AoeData.ac_cavalry)){
			const avIterator = this.attackValues[Symbol.iterator]();

			// sum up damage of each amorClass - respecting sicilians dmg reduction
			for (let [attackedArmorClass, attackValue] of avIterator){
				if (attackedArmorClass != AoeData.ac_baseMelee && attackedArmorClass != AoeData.ac_basePierce){
					this.attackValues.set(attackedArmorClass, attackValue * (this.age == 0 ? 1 : (this.age == 1 ? 1.2 : (this.age == 2 ? 1.3 : 1.4))));
				}
			}
		}
	}


	public ApplyHindustanisBonusses(): void{
		if (AoeData.utl_handCannoneer.unitTypes.includes(this.baseUnitType) && this.age == 4){
			this.attackRange += 2;
		}
		if (AoeData.utl_camelRider.unitTypes.includes(this.baseUnitType)){
			this.attackSpeed *= 0.833333333;
		}
		if (AoeData.utl_handCannoneer.unitTypes.includes(this.baseUnitType)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
	}


	public ApplyHunsBonusses(): void{
		if (this.armorClasses.has(AoeData.ac_cavalryArcher)){
			for (let i: number = 0; i < 3; i++){
				this.resourceCosts[i] *= this.age == 2 ? 0.9 : this.age >= 3 ? 0.8 : 1.0;
			}
		}
	}


	public ApplyIncasBonusses(): void{
		if ((AoeData.utl_skirmisher.unitTypes.includes(this.baseUnitType) || AoeData.utl_slinger.unitTypes.includes(this.baseUnitType)) && this.age >= 3){
			this.attackRangeMin = 0.0;
		}
		if ((AoeData.utl_kamayuk.unitTypes.includes(this.baseUnitType) || AoeData.utl_slinger.unitTypes.includes(this.baseUnitType) || AoeData.utl_eagleScout.unitTypes.includes(this.baseUnitType))
			&& this.age == 4){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
		}
	}


	public ApplyItaliansBonusses(): void{
		if ((AoeData.utl_archer.unitTypes.includes(this.baseUnitType) || AoeData.utl_genoeseCrossbowman.unitTypes.includes(this.baseUnitType) || AoeData.utl_condottiero.unitTypes.includes(this.baseUnitType))
			&& this.age >= 3){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
		if (this.armorClasses.has(AoeData.ac_gunpowderUnit)){
			for (let i: number = 0; i < 3; i++){
				this.resourceCosts[i] *= 0.8;
			}
		}
	}


	public ApplyJapaneseBonusses(): void{
		if (this.armorClasses.has(AoeData.ac_infantry) && this.age >= 1){
			this.attackSpeed *= 0.75;
		}
	}


	public ApplyKhmerBonusses(): void{
		if (AoeData.utl_scorpion.unitTypes.includes(this.baseUnitType)){ // todo: add ballista elephant to unique tec (currently gets bonusses implicitly)
			if (this.age == 4){
				this.secondaryMissileFlightDistance = 12.5; // todo: check this value
				this.secondaryAttack = true;
				this.secondaryAttackValues = new Map();
				this.secondaryAttackValues.set(AoeData.ac_basePierce, 9); // todo: check this value
			}
			this.attackRange += 1;
		}
		if (AoeData.utl_battleElephant.unitTypes.includes(this.baseUnitType) && this.age >= 3){
			if (this.age >= 3){
				this.attackValues.set(AoeData.ac_baseMelee, this.attackValues.get(AoeData.ac_baseMelee) + 3);
			}
			this.moveSpeed *= 1.1;
		}
	}


	public ApplyKoreansBonusses(): void{
		if (!this.armorClasses.has(AoeData.ac_siegeWeapon)){
			this.resourceCosts[1] *= 0.8;
		}
	}


	public ApplyLithuaniansBonusses(): void{
		if (AoeData.utl_spearman.unitTypes.includes(this.baseUnitType) || AoeData.utl_skirmisher.unitTypes.includes(this.baseUnitType)){
			if (this.age == 4){
				this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
			}
			this.moveSpeed *= 1.1;
		}
	}


	public ApplyMagyarsBonusses(): void{
		if (AoeData.utl_cavalryArcher.unitTypes.includes(this.baseUnitType) && this.age == 4){
			this.attackValues.set(AoeData.ac_basePierce, this.attackValues.get(AoeData.ac_basePierce) + 1);
			this.attackRange += 1;
		}
		if (AoeData.utl_magyarHuszar.unitTypes.includes(this.baseUnitType) && this.age >= 3){
			this.resourceCosts[2] = 0;
		}
		if (AoeData.utl_scoutCavalry.unitTypes.includes(this.baseUnitType)){
			this.resourceCosts[0] *= 0.85;
		}
	}


	public ApplyMalayBonusses(): void{
		if (AoeData.utl_militia.unitTypes.includes(this.baseUnitType) && this.age == 4){
			this.resourceCosts[0] += 20;
			this.resourceCosts[2] -= 20;
		}
		
		if (AoeData.utl_battleElephant.unitTypes.includes(this.baseUnitType)){
			for (let i: number = 0; i < 3; i++){
				if (this.age == 2){
					this.resourceCosts[i] *= 0.7;
				} else if (this.age >= 3){
					this.resourceCosts[i] *= 0.6;
				}
			}
		}
	}


	public ApplyMaliansBonusses(): void{
		if ((AoeData.utl_scoutCavalry.unitTypes.includes(this.baseUnitType) || AoeData.utl_knight.unitTypes.includes(this.baseUnitType)
			|| AoeData.utl_camelRider.unitTypes.includes(this.baseUnitType)) && this.age == 4){
			this.attackValues.set(AoeData.ac_baseMelee, this.attackValues.get(AoeData.ac_baseMelee) + 5);
		}
		if (this.armorClasses.has(AoeData.ac_infantry)){
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + (this.age == 1 ? 1 : (this.age == 2 ? 2 : (this.age >= 3 ? 3 : 0))));
		}
	}


	public ApplyMayansBonusses(): void{
		if (AoeData.utl_eagleScout.unitTypes.includes(this.baseUnitType) && this.age == 4){
			this.hp += 40;
		}
		if (AoeData.utl_skirmisher.unitTypes.includes(this.baseUnitType) && this.age >= 3){
			this.secondaryAttack = true;
			this.secondaryAttackProjectileCount = 1;
			this.secondaryAttackValues = new Map();
			this.secondaryAttackValues.set(AoeData.ac_basePierce, 1);
		}
		if (AoeData.utl_archer.unitTypes.includes(this.baseUnitType) || AoeData.utl_plumedArcher.unitTypes.includes(this.baseUnitType)){
			for (let i: number = 0; i < 3; i++){
				this.resourceCosts[i] *= this.age == 1 ? 0.9 : (this.age == 2 ? 0.8 : (this.age >= 3 ? 0.7 : 1.0));
			}
		}
	}


	public ApplyMongolsBonusses(): void{
		if ((AoeData.utl_scorpion.unitTypes.includes(this.baseUnitType) || AoeData.utl_batteringRam.unitTypes.includes(this.baseUnitType)) && this.age == 4){
			this.moveSpeed *= 1.5;
		}
		if (this.armorClasses.has(AoeData.ac_cavalryArcher)){
			this.attackSpeed *= 0.8;
		}
		if (AoeData.ut_lightCavalry == this.baseUnitType || AoeData.ut_hussar == this.baseUnitType || AoeData.utl_steppeLancer.unitTypes.includes(this.baseUnitType)){
			this.hp *= 1.3;
		}
	}


	public ApplyPersiansBonusses(): void{
		if (AoeData.utl_archer.unitTypes.includes(this.baseUnitType) && this.age >= 3){
			this.resourceCosts[1] = 60;
			this.resourceCosts[2] = 0;
		}
		if (AoeData.utl_warElephant.unitTypes.includes(this.baseUnitType) && this.age == 4){
			this.moveSpeed *= 1.3;
		}
		if (AoeData.utl_knight.unitTypes.includes(this.baseUnitType)){
			this.attackValues.set(AoeData.ac_archer, 2);
		}
	}


	public ApplyPolesBonusses(): void{
		if (this.age >= 3 && AoeData.utl_knight.unitTypes.includes(this.baseUnitType)){
			this.resourceCosts[2] = 30;
		}
		if (this.baseUnitType == AoeData.ut_villager){
			if (this.age == 1){
				this.hpRegPerMin = 10;
			} else if (this.age == 2){
				this.hpRegPerMin = 15;
			} else if (this.age >= 3){
				this.hpRegPerMin = 20;
			}
		}
		if (this.age == 4 && AoeData.utl_scoutCavalry_pol_lit.unitTypes.includes(this.baseUnitType)){
			this.cleaveType = 2;
			this.cleaveRadius = 0.5;
			this.cleaveDamage = 0.33;
		}
	}


	public ApplyPortugueseBonusses(): void{
		this.resourceCosts[2] *= 0.8;
	}


	public ApplySaracensBonusses(): void{
		if (this.armorClasses.has(AoeData.ac_camel)){
			if (this.age >= 3){
				this.hp += 20;
			}
			this.hp += 10;
		}
	}


	public ApplySiciliansBonusses(): void{
		if (this.baseUnitType == AoeData.ut_serjeant && this.age >= 2){
			this.attackValues.set(AoeData.ac_baseMelee, this.attackValues.get(AoeData.ac_baseMelee) + 3);
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
			this.hp += 20;
		}
		if (this.age == 4 && AoeData.utl_knight.unitTypes.includes(this.baseUnitType)){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
		}
	}


	public ApplySlavsBonusses(): void{
		if (this.armorClasses.has(AoeData.ac_infantry) && this.age == 4){ // todo: check druzhina ingame cleave vs simulated cleave
			this.cleaveType = 1;
			this.cleaveRadius = 0.5;
			this.cleaveDamage = 5;
		}
		if (AoeData.utl_batteringRam.unitTypes.includes(this.baseUnitType) || AoeData.utl_scorpion.unitTypes.includes(this.baseUnitType)){
			for (let i: number = 0; i < 3; i++){
				this.resourceCosts[i] *= 0.85;
			}
		}
	}


	public ApplySpanishBonusses(): void{
		if (AoeData.utl_villager.unitTypes.includes(this.baseUnitType) && this.age == 4){
			this.attackValues.set(AoeData.ac_baseMelee, this.attackValues.get(AoeData.ac_baseMelee) + 6);
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 2);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 2);
			this.hp += 40;
		}
		if (AoeData.utl_handCannoneer.unitTypes.includes(this.baseUnitType)){
			this.attackSpeed *= 0.85;
		}
	}


	public ApplyTatarsBonusses(): void{
		if ((AoeData.utl_scoutCavalry.unitTypes.includes(this.baseUnitType) || AoeData.utl_steppeLancer.unitTypes.includes(this.baseUnitType) ||
			AoeData.utl_cavalryArcher.unitTypes.includes(this.baseUnitType)) && this.age >= 3){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
	}


	public ApplyTeutonsBonusses(): void{
		if ((AoeData.utl_scorpion.unitTypes.includes(this.baseUnitType) || AoeData.utl_batteringRam.unitTypes.includes(this.baseUnitType)) && this.age >= 3){
			this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 4);
		}
		if (AoeData.utl_militia.unitTypes.includes(this.baseUnitType) || AoeData.utl_spearman.unitTypes.includes(this.baseUnitType) ||
			AoeData.utl_condottiero.unitTypes.includes(this.baseUnitType) ||
			AoeData.utl_scoutCavalry.unitTypes.includes(this.baseUnitType) || AoeData.utl_knight.unitTypes.includes(this.baseUnitType)){
			if (this.age == 2){
				this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 1);
			} else if (this.age >= 3){
				this.armorClasses.set(AoeData.ac_baseMelee, this.armorClasses.get(AoeData.ac_baseMelee) + 2);
			}
		}
	}


	public ApplyTurksBonusses(): void{
		if (this.armorClasses.has(AoeData.ac_cavalryArcher) && this.age >= 3){
			this.hp += 20;
		}
		if (this.armorClasses.has(AoeData.ac_gunpowderUnit)){
			this.hp *= 1.25;
		}
		if (AoeData.utl_scoutCavalry.unitTypes.includes(this.baseUnitType)){
			this.armorClasses.set(AoeData.ac_basePierce, this.armorClasses.get(AoeData.ac_basePierce) + 1);
		}
	}


	public ApplyVietnameseBonusses(): void{
		if (AoeData.utl_archer.unitTypes.includes(this.baseUnitType) || AoeData.utl_skirmisher.unitTypes.includes(this.baseUnitType)
			|| AoeData.utl_cavalryArcher.unitTypes.includes(this.baseUnitType) || AoeData.utl_genitour.unitTypes.includes(this.baseUnitType)){
			this.hp *= 1.2;
		}
		if (AoeData.utl_battleElephant.unitTypes.includes(this.baseUnitType)){
			this.hp += 100;
		}
	}


	public ApplyVikingsBonusses(): void{
		if (AoeData.utl_berserk.unitTypes.includes(this.baseUnitType) && this.age == 4){
			this.hpRegPerMin *= 2;
		}
		if (this.armorClasses.has(AoeData.ac_infantry)){
			if (this.age >= 3){
				if (this.attackValues.has(AoeData.ac_cavalry)){
					this.attackValues.set(AoeData.ac_cavalry, this.attackValues.get(AoeData.ac_cavalry) + 5);
				} else {
					this.attackValues.set(AoeData.ac_cavalry, 5);
				}
				if (this.attackValues.has(AoeData.ac_camel)){
					this.attackValues.set(AoeData.ac_camel, this.attackValues.get(AoeData.ac_camel) + 4);
				} else {
					this.attackValues.set(AoeData.ac_camel, 4);
				}
			}
			this.hp *= this.age > 0 ? 1.2 : 1.0;
		}
	}


	// Apply lithuanians' relic bonus for specific civ unit types (necessary to include civ unit types with different relic counts in one matrix)
	public RelicCountChanged(numberOfRelics): void{
		this.numberOfRelics = numberOfRelics;
		this.attackValues.set(AoeData.ac_baseMelee, new CivUnitType(this.baseUnitType, this.civ, this.age, this.techsResearched).attackValues.get(AoeData.ac_baseMelee) + this.numberOfRelics);
		this.name = this.civ.name + " " + this.baseUnitType.name + (this.numberOfRelics > 0 ? " " + this.numberOfRelics + "R" : "");
	}
}