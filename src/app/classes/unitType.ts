import { ArmorClass } from './armorClass';
import { Technology } from './technology';

export class UnitType {

	public hp: number; // hit points
	public hpRegPerMin: number; // hit points regeneration per minute (relevant for berserk and camel archer)

	public attackValues: Map<ArmorClass, number> = new Map(); // contains all armor classes this unit attacks (including baseMelee and basePierce) and the respective damage values
	public armorClasses: Map<ArmorClass, number> = new Map(); // contains all armor classes this unit has (including baseMelee and basePierce) and the respective armor values

	public attackSpeed: number; // time between the beginning of two consecutive attacks
	public attackRange: number; // maximum attack range in tiles; the actual attack range is attackRange + radius
	public attackRangeMin: number; // minimum attack range in tiles (skirmishers, genitours, ...); the actual minimum attack range is attackRangeMin + radius
	public attackDelay: number; // the time in seconds between starting an attack and dealing the damage (or launching the projectile for ranged units); especially important for Hit&Run
	public projectileSpeed: number; // projectile speed in tiles/s
	public cleaveType: number = 0; // 0=none, 1=flat5 (slav infantry, cataphracts), 2=50% (elephants), 3=100% (flaming camels)
	public cleaveRadius: number = 0.0; // cleaves enemy units if they are closer than cleaveRadius+ownRadius to cleaving unit
	public accuracyPercent: number; // 100 does always hit; 50 does mean 50% will hit and 50% are randomly distributed (they can still hit the main target or other targets)

	public attackIsMissile: boolean = false; // only true for ranged units that fire missiles which damage targets on their way (scorpions and ballista elephants)
	public missileFlightDistance: number = 0.0; // flight distance of missiles, since they don't necessarily stop flying at the intended target
	public secondaryMissileFlightDistance: number = 0.0; // flight distance of secondary missiles, since they don't necessarily stop flying at the intended target

	public secondaryAttack: boolean = false; // some units fire secondary projectiles in addition to primary ones (chu ko nu, kipchaks, ballista elephants with unique tech, ...)
	public secondaryAttackProjectileCount: number = 1; // per attack ChuKoNus, Kipchaks and Organ Guns create more than a single secondary projectile
	public secondaryAttackValues: Map<ArmorClass, number> = new Map(); // // contains all armor classes this unit attacks with its secondary attack (including baseMelee and basePierce) and the respective damage values
	public secondaryAttackAccuracyPercent: number = 50; // 100 does always hit; 50 does mean 50% will hit and 50% are randomly distributed (they can still hit the main target or other targets)

	public moveSpeed: number; // move speed in tiles/s
	public radius: number; // size of the unit in tiles
	public maxNumberOfAttackers: number; // Max attackers for infantry 4, cav 6, elephants 8


	public resourceCosts: number[] = [0, 0, 0]; // [0]=food, [1]=wood, [2]=gold
	public unitTypeIndex: number; // this unit type's index in the unittypes list (for performance purposes)
	public name: string; // this unit type's name
	public imagePath: string = "";
	public techsForUnitList: Technology[] = [];
	public accessibleFromAge: number = 0;

	constructor(name: string, accessibleFromAge: number, hp: number, attackSpeed: number, attackRange: number, attackDelay: number, projectileSpeed: number, moveSpeed: number,
		foodCost: number, woodCost: number, goldCost: number, radius: number = 0.2, attackRangeMin: number = 0.0, accuracyPercent: number = 100, hpRegPerMin: number = 0) {
		this.name = name;
		this.accessibleFromAge = accessibleFromAge,
		this.hp = hp;
		this.attackSpeed = attackSpeed;
		this.attackRange = attackRange;
		this.attackDelay = attackDelay;
		this.projectileSpeed = projectileSpeed;
		this.moveSpeed = moveSpeed;
		this.resourceCosts[0] = foodCost;
		this.resourceCosts[1] = woodCost;
		this.resourceCosts[2] = goldCost;
		this.attackRangeMin = attackRangeMin;
		this.radius = radius;
		this.accuracyPercent = accuracyPercent;
		this.hpRegPerMin = hpRegPerMin;
		this.maxNumberOfAttackers = 4.0 + Math.round(10.0 * (this.radius - 0.2)); // Max attackers for infantry 4, cav 6, elephants 8
	}
}