import { ArmorClass } from './armorClass';
import { AoeData} from '../data/aoeData';
import { Battle } from "./battle";
import { Arrow } from "./arrow";
import { Missile } from "./missile";
import { CivUnitType } from './civUnitType';

export class Unit {

	public hp: number; // hit points
	public hpRegPerMin: number; // hit points regeneration per minute (relevant for berserk and camel archer)
	public energyRegPerMin: number; // energy regeneration per minute (only relevant for coustilliers, urumi swordsmen and shrivamsha riders)

	public attackValues: Map<ArmorClass, number> = new Map(); // contains all armor classes this unit attacks (including baseMelee and basePierce) and the respective damage values
	public armorClasses: Map<ArmorClass, number> = new Map(); // contains all armor classes this unit has (including baseMelee and basePierce) and the respective armor values

	public attackSpeed: number; // time between the beginning of two consecutive attacks
	public attackRange: number; // maximum attack range in tiles; the actual attack range is attackRange + radius
	public attackRangeMin: number; // minimum attack range in tiles (skirmishers, genitours, ...); the actual minimum attack range is attackRangeMin + radius
	public attackDelay: number; // the time in seconds between starting an attack and dealing the damage (or launching the projectile for ranged units); especially important for Hit&Run
	public attackIgnoresArmor: boolean;
	public projectileSpeed: number; // projectile speed in tiles/s
	public cleaveType: number = 0; // 0=none, 1=flat, 2=percentage (after armor), 3=percentage (no target limit <=> explosives)
	public cleaveRadius: number = 0.0; // cleaves enemy units if they are closer than cleaveRadius+ownRadius to cleaving unit
	public cleaveDamage: number = 0; // only relevant, if cleaveType != 0; for cleaveType 1 this is an absolute value (5 for slav infantry and cataphracts); for cleaveType 2&3 this is a fraction value (25% for battle elephant line, 33% for polish scout line, 50% for war elephant line, 100% for petards & flaming camels)
	public accuracyPercent: number; // 100 does always hit; 50 does mean 50% will hit and 50% are randomly distributed (they can still hit the main target or other targets)
	public chargeDmg: number; // almost all units don't have charge damage; coustilliers, urumi swordsmen and potentially some roman units do

	public attackIsMissile: boolean = false; // only true for ranged units that fire missiles which damage targets on their way (scorpions and ballista elephants)
	public sideTargetDmgFraction: number;
	public missileFlightDistance: number = 0.0; // flight distance of missiles, since they don't necessarily stop flying at the intended target
	public secondaryMissileFlightDistance: number = 0.0; // flight distance of secondary missiles, since they don't necessarily stop flying at the intended target

	public secondaryAttack: boolean = false; // some units fire secondary projectiles in addition to primary ones (chu ko nu, kipchaks, ballista elephants with unique tech, ...)
	public secondaryAttackProjectileCount: number = 1; // per attack ChuKoNus, Kipchaks and Organ Guns create more than a single secondary projectile
	public secondaryAttackValues: Map<ArmorClass, number> = new Map(); // // contains all armor classes this unit attacks with its secondary attack (including baseMelee and basePierce) and the respective damage values
	public secondaryAttackAccuracyPercent: number = 50; // 100 does always hit; 50 does mean 50% will hit and 50% are randomly distributed (they can still hit the main target or other targets)

	public moveSpeed: number; // move speed in tiles/s
	public radius: number; // size of the unit in tiles
	public maxNumberOfAttackers: number; // Max attackers for infantry 4, cav 6, elephants 8


	public civUnitType: CivUnitType; // this unit's unit type; the unit type defines many attributes of each unit
	public battle: Battle; // the reference to the battle instance this unit belongs to
	public curHp: number; // the current hit points of this unit
	public curEnergy: number; // the current energy of this unit (only relevant for coustilliers, urumi swordsmen and shrivamsha riders)
	public alive: boolean = true; // a unit is alive until the END of the frame its HP reaches 0 or below 0
	public target: Unit = null; // the target of this unit; this unit attacks the target or tries to attack it
	public attackedBy: Unit[] = []; // all units that are currently attacking this unit (<=> all units that target this unit); used for collision simulation and movement speed of the attackers
	private meleeDamagedBy: Unit = null; // the last melee attacker that dealt damage to this unit; used to find a new target for this unit if the current target dies
	public attackCd: number = 0; // the time until the next attack anim can be started
	public inAttackMotion: boolean = false; // true, if the unit is currently executing its attack animation
	public attackAnimDur: number = 0; // the time since the last attack animation was started
	public x: number; // current x coord of the unit
	public y: number; // current y coord of the unit
	public nx: number; // new x coord which will be assumed by the unit at the end of the frame
	public ny: number; // new y coord which will be assumed by the unit at the end of the frame
	public gx: number; // the x coordinate of the tile this unit is located in; used for efficient collision detection with projectiles (range from 0-21)
	public gy: number; // the y coordinate of the tile this unit is located in; used for efficient collision detection with projectiles (range from 0-21)
	public index: number; // DEBUG purposes; each unit has a unique index within its army
	public armyIndex: number; // 0=Army1, 1=Army2
	public running: boolean = false; // for hit&run calculations
	public timeSinceFirstTryToAttackTarget: number = 0; // if the target is surrounded by attackers for a longer while, the unit will eventually target a different unit

	public debugNumber: number = 0;


	constructor(civUnitType: CivUnitType, battle: Battle, armyIndex: number) {
		this.hp = civUnitType.hp;
		this.attackSpeed = civUnitType.attackSpeed;
		this.attackRange = civUnitType.attackRange;
		this.attackRangeMin = civUnitType.attackRangeMin;
		this.attackDelay = civUnitType.attackDelay;
		this.attackIgnoresArmor = civUnitType.attackIgnoresArmor;
		this.attackIsMissile = civUnitType.attackIsMissile;
		this.sideTargetDmgFraction = civUnitType.sideTargetDmgFraction;
		this.secondaryAttack = civUnitType.secondaryAttack;
		this.secondaryAttackProjectileCount = civUnitType.secondaryAttackProjectileCount;
		this.missileFlightDistance = civUnitType.missileFlightDistance;
		this.secondaryMissileFlightDistance = civUnitType.secondaryMissileFlightDistance;
		this.secondaryAttackValues = civUnitType.secondaryAttackValues;
		this.secondaryAttackAccuracyPercent = civUnitType.secondaryAttackAccuracyPercent;
		this.projectileSpeed = civUnitType.projectileSpeed;
		this.cleaveType = civUnitType.cleaveType;
		this.cleaveRadius = civUnitType.cleaveRadius;
		this.cleaveDamage = civUnitType.cleaveDamage;
		this.moveSpeed = civUnitType.moveSpeed;
		this.attackValues = civUnitType.attackValues;
		civUnitType.armorClasses.forEach((ar, ac) => this.armorClasses.set(ac, ar));
		this.radius = civUnitType.radius;
		this.accuracyPercent = civUnitType.accuracyPercent;
		this.hpRegPerMin = civUnitType.hpRegPerMin;
		this.energyRegPerMin = civUnitType.energyRegPerMin;
		this.chargeDmg = civUnitType.chargeDmg;
		this.maxNumberOfAttackers = civUnitType.maxNumberOfAttackers;

		this.civUnitType = civUnitType;
		this.battle = battle;
		this.curHp = this.hp;
		this.curEnergy = 100.0;
		this.armyIndex = armyIndex;
	}


	public SetXYInitial(x: number, y: number): void {
		this.x = this.nx = x;
		this.y = this.ny = y;

		this.gx = x < -20.0 ? 0 : Math.min(Battle.GRID_LENGTH - 1, 1 + Math.floor(x + 20.0));
		this.gy = y < -20.0 ? 0 : Math.min(Battle.GRID_LENGTH - 1, 1 + Math.floor(y + 20.0));
		
		this.battle.gridUnits[this.gx][this.gy].add(this);
	}

	public SetUnitIndex (index: number): void {
		this.index = index;
	}

	public ApplyReg (): void {
		this.curHp = Math.min(this.hp, this.curHp + this.hpRegPerMin / 6000.0);
		this.curEnergy = Math.min(100, this.curEnergy + this.energyRegPerMin / 6000);
	}

	public CantReachTarget(): boolean{
		// ranged units can always "reach" their target, but only a certain number of melee attackers can attack a certain unit simultaneously
		return this.target.attackedBy.indexOf(this) >= this.target.maxNumberOfAttackers && this.attackRange <= 1.0;
	}

	public CheckIfToSwitchTarget(): void{ // this function is not perfectly symmetrical (because P1 units potentially get new targets first which might influence P2 target switches)
		this.timeSinceFirstTryToAttackTarget++;
		if(this.attackedBy.length > 0){
			// console.log("Change target (attacker). AI: " + this.armyIndex + ". UI: " + this.index + ". Ms: " + this.battle.timeInterval);
			this.timeSinceFirstTryToAttackTarget = 0;
			this.target.attackedBy.splice(this.target.attackedBy.indexOf(this), 1);
			this.target = this.attackedBy[Math.floor(Math.random() * this.attackedBy.length)];
			this.target.attackedBy.push(this);
		}
		else if (this.timeSinceFirstTryToAttackTarget > 200){
			// console.log("Change target (2 secs). AI: " + this.armyIndex + ". UI: " + this.index + ". Ms: " + this.battle.timeInterval);
			this.target.attackedBy.splice(this.target.attackedBy.indexOf(this), 1);
			this.target = null;
			this.timeSinceFirstTryToAttackTarget = 0;
			this.EnsureHasTarget();
		}
	}

	public TargetWithinAttackRange(): boolean {
		return (this.x - this.target.x) * (this.x - this.target.x) + (this.y - this.target.y) * (this.y - this.target.y) <= (this.attackRange + this.radius) * (this.attackRange + this.radius);
	}

	public TargetNotCloserThanMinimumAttackRange(): boolean {
		return this.attackRangeMin == 0.0 || (this.x - this.target.x) * (this.x - this.target.x) + (this.y - this.target.y) * (this.y - this.target.y) >= (this.attackRangeMin + this.radius) * (this.attackRangeMin + this.radius);
	}

	public AttackCdReady(): boolean	{
		return this.attackCd <= 0.0;
	}

	public MoveTowardsTarget_CalculateNewPos(): void {
		let dx: number = this.target.x - this.x;
		let dy: number = this.target.y - this.y;
		let dlength: number = Math.sqrt(dx * dx + dy * dy);
		dlength = (dlength == 0.0 ? 1.0 : dlength);
		dx /= dlength;
		dy /= dlength;
		let speedAfterBumpReduction: number = this.target.attackedBy[0] == this ? this.moveSpeed * 0.01 : this.moveSpeed * 0.01 / Math.pow(this.target.attackedBy.length, 0.35); // war 0,15
		this.nx = this.x + (speedAfterBumpReduction > dlength ? dlength : speedAfterBumpReduction) * dx;
		this.ny = this.y + (speedAfterBumpReduction > dlength ? dlength : speedAfterBumpReduction) * dy;
	}

	public MoveAwayFromTarget_CalculateNewPos(): void {
		let dx: number = this.x - this.target.x;
		let dy: number = this.y - this.target.y;
		let dlength: number = Math.sqrt(dx * dx + dy * dy);
		let numberOfCloseUnits = Math.max(this.battle.gridUnits[this.gx][this.gy].size - 1, 1);
		let slowFactor = 1.0 / numberOfCloseUnits;
		dlength = dlength == 0.0 ? 1.0 : dlength;
		dx /= dlength;
		dy /= dlength;
		if (dlength + this.moveSpeed * 0.01 * slowFactor > this.attackRange)
		{
			this.nx = this.target.x + this.attackRange * dx;
			this.ny = this.target.y + this.attackRange * dy;
		}
		else
		{
			this.nx = this.x + this.moveSpeed * 0.01 * dx * slowFactor;
			this.ny = this.y + this.moveSpeed * 0.01 * dy * slowFactor;
		}

		// to shorten extremely extended Hit&Run (e.g. skirmishers vs. rams)
		// and to avoid possible infinite loops (because of minimum attack range and equal move speed)
		// the map size is restricted to 240 tiles (=giant map)
		// units don't run any further when reaching the map's borders
		this.nx = this.nx > 120 ? 120.0 : (this.nx < -120.0 ? -120.0 : this.nx);
		this.ny = this.ny > 120 ? 120.0 : (this.ny < -120.0 ? -120.0 : this.ny);
	}

	public MoveUnit_AssumeNewPos(): void {
		if (this.nx != this.x || this.ny != this.y)
		{
			this.x = this.nx;
			this.y = this.ny;

			let n_gx: number = this.x < -20.0 ? 0 : Math.min(Battle.GRID_LENGTH - 1, 1 + Math.floor(this.x + 20.0));
			let n_gy: number = this.y < -20.0 ? 0 : Math.min(Battle.GRID_LENGTH - 1, 1 + Math.floor(this.y + 20.0));

			if (n_gx != this.gx || n_gy != this.gy)
			{
				this.battle.gridUnits[this.gx][this.gy].delete(this);
				this.battle.gridUnits[n_gx][n_gy].add(this);
				this.gx = n_gx;
				this.gy = n_gy;
			}
		}
	}

	public StartAttackAnimation(): void {
		this.inAttackMotion = true;
		this.attackAnimDur = 0;
		this.attackCd = this.attackSpeed;
		this.timeSinceFirstTryToAttackTarget = 0;
	}

	public AttackAnimationFinished(): boolean {
		return this.attackAnimDur >= this.attackDelay;
	}

	public ContinueAttackAnimation(): void {
		this.attackAnimDur += 0.01;
	}

	public static CalculateDamageDealtToTarget(attacker: Unit, target: Unit, secondary: boolean = false, chargeDmg: number = 0.0): number
	{
		let damageDealt: number = 0.0;

		// sum up damage of each amorClass - respecting several dmg reductions and charge attacks
		const avIterator = secondary ? attacker.secondaryAttackValues[Symbol.iterator]() : attacker.attackValues[Symbol.iterator]();
		for (let [attackedArmorClass, attackValue] of avIterator){
			if (target.civUnitType.civ == AoeData.civ_sicilians && !target.armorClasses.has(AoeData.ac_siegeWeapon) && attackedArmorClass != AoeData.ac_baseMelee && attackedArmorClass != AoeData.ac_basePierce){
				// the Sicilians' land units take only 67% bonus damage
				damageDealt += Math.max(0, target.armorClasses.has(attackedArmorClass) ? (attackValue - target.armorClasses.get(attackedArmorClass))*0.67 : 0);
			} else if(target.civUnitType.civ == AoeData.civ_bengalis && target.armorClasses.has(AoeData.ac_warElephant) && attackedArmorClass != AoeData.ac_baseMelee && attackedArmorClass != AoeData.ac_basePierce){
				// the Bengalis' elephant units take only 75% bonus damage
				damageDealt += Math.max(0, target.armorClasses.has(attackedArmorClass) ? (attackValue - target.armorClasses.get(attackedArmorClass))*0.75 : 0);
			} else if (attackedArmorClass == AoeData.ac_baseMelee){
				if (attacker.attackIgnoresArmor){
					damageDealt += target.armorClasses.has(attackedArmorClass) ? attackValue + chargeDmg : 0;
				} else {
					damageDealt += Math.max(0, target.armorClasses.has(attackedArmorClass) ? attackValue + chargeDmg - target.armorClasses.get(attackedArmorClass) : 0);
				}
			} else {
				damageDealt += Math.max(0, target.armorClasses.has(attackedArmorClass) ? attackValue - target.armorClasses.get(attackedArmorClass) : 0);
			}
		}

		// Ethopian camels and shotel warriors receive -3 dmg from mounted units after their imp unique tech
		if (target.civUnitType.civ == AoeData.civ_ethiopians && (AoeData.utl_camelRider.unitTypes.includes(target.civUnitType.baseUnitType) || AoeData.utl_shotelWarrior.unitTypes.includes(target.civUnitType.baseUnitType))
			&& (attacker.armorClasses.has(AoeData.ac_cavalry) || attacker.armorClasses.has(AoeData.ac_camel) || attacker.armorClasses.has(AoeData.ac_warElephant)) && target.civUnitType.age == 4){
				damageDealt -= 3;
		}

		damageDealt = damageDealt < 1 ? 1 : damageDealt;
		return damageDealt;
	}

	public PerformAttackOnTarget(): void {
		if (this.attackRange <= 1.0)
		{
			let chargeAttack: number = 0;
			// add charge attack damage
			if (this.chargeDmg > 0.0 && this.curEnergy >= 100.0){
				this.curEnergy = 0.0;
				chargeAttack = this.chargeDmg;
			}
			let damageDealt: number = Unit.CalculateDamageDealtToTarget(this, this.target, false, chargeAttack);
			this.target.curHp -= damageDealt;
			this.target.meleeDamagedBy = this;
			if (this.cleaveType != 0 && (chargeAttack > 0 || !AoeData.utl_urumiSwordsman.unitTypes.includes(this.civUnitType.baseUnitType)))
			{
				let targetArmy: Unit[] = this.armyIndex == 0 ? this.battle.armies[1] : this.battle.armies[0];
				let affectedTargets: number = 0;
				// infantry cleaves up to 1 units, cavalry up to 2, elephants up to 3 (limit to offset non-existing collision detection) // 1 + Math.round(5.0 * (this.radius - 0.2)); 
				let maxTargets: number = 1;
				let maxBystanderTargets: number = Math.max(0, maxTargets - this.attackedBy.length);
				let bystandersHit: number = 0;
				targetArmy.forEach(possibleTarget => {
					if ((this.x - possibleTarget.x) * (this.x - possibleTarget.x) + (this.y - possibleTarget.y) * (this.y - possibleTarget.y) < (this.cleaveRadius + this.target.radius)* (this.cleaveRadius + this.target.radius)){
						if (possibleTarget != this.target && (this.attackedBy.includes(possibleTarget) || bystandersHit < maxBystanderTargets || this.cleaveType == 3)){
							if (!this.attackedBy.includes(possibleTarget)){
								bystandersHit++;
							}

							damageDealt = this.cleaveType == 1 ? this.cleaveDamage : Math.max(Unit.CalculateDamageDealtToTarget(this, possibleTarget, false, chargeAttack) * this.cleaveDamage, 1);
							possibleTarget.curHp -= damageDealt;
							affectedTargets++;
						}
					}
				});
			}

			if (AoeData.utl_ghulam.unitTypes.includes(this.civUnitType.baseUnitType)){
				let targetArmy: Unit[] = this.armyIndex == 0 ? this.battle.armies[1] : this.battle.armies[0];
				let targetsHit: number = 0;
				targetArmy.forEach(possibleTarget => {
					if (targetsHit == 0 && (this.target.x - possibleTarget.x) * (this.target.x - possibleTarget.x) + (this.target.y - possibleTarget.y) * (this.target.y - possibleTarget.y) < 0.025 * 0.025){
						if (possibleTarget != this.target){
							damageDealt = Math.max(Unit.CalculateDamageDealtToTarget(this, possibleTarget) * this.sideTargetDmgFraction, 1);
							possibleTarget.curHp -= damageDealt;
							targetsHit += 1;
						}
					}
				});
			}

			// each (Elite) Keshik generates approximately 0.695 gold per hit
			if (AoeData.utl_keshik.unitTypes.includes(this.civUnitType.baseUnitType))
			{
				this.battle.resourcesGenerated[this.armyIndex][2] += 0.695;
			}

			// flaming camels die after one attack
			if (this.civUnitType.baseUnitType == AoeData.ut_flamingCamel)
			{
				this.curHp = 0.0;
			}

			// obuchs reduce their target's armor
			if (AoeData.utl_obuch.unitTypes.includes(this.civUnitType.baseUnitType)){
				this.target.armorClasses.set(AoeData.ac_baseMelee, Math.max(this.target.armorClasses.get(AoeData.ac_baseMelee) - 1, 0));
				this.target.armorClasses.set(AoeData.ac_basePierce, Math.max(this.target.armorClasses.get(AoeData.ac_basePierce) - 1, 0));
			}
		}
		else // ranged units create arrows or missiles
		{
			if (this.attackIsMissile)
			{
				let dx: number = this.target.x - this.x;
				let dy: number = this.target.y - this.y;
				let distanceToTarget: number = Math.sqrt(dx*dx + dy*dy);
				let dxNorm: number = distanceToTarget == 0 ? 1 : dx / distanceToTarget;
				let dyNorm: number = distanceToTarget == 0 ? 0 : dy / distanceToTarget;
				let dxPerFrame: number = dxNorm * this.projectileSpeed / 100.0;
				let dyPerFrame: number = dyNorm * this.projectileSpeed / 100.0;
				this.battle.missiles.push(new Missile(this.battle, this, this.target, this.x, this.y, dxPerFrame, dyPerFrame, Math.ceil(this.missileFlightDistance * 100.0 / this.projectileSpeed), false));

				if (this.secondaryAttack) // only relevant for elite ballista elephant and heavy scorpion with double crossbow
				{
					let directionRadian: number = Math.atan2(dyNorm, dxNorm);
					directionRadian += (-0.17453 + 0.34906 * Math.random()); // double crossbow bolts have an angle varying between +10 degree and -10 degree of the primary missile
					let secDxNorm: number = Math.cos(directionRadian);
					let secDyNorm: number = Math.sin(directionRadian);
					let secDxPerFrame: number = secDxNorm * this.projectileSpeed / 100.0;
					let secDyPerFrame: number = secDyNorm * this.projectileSpeed / 100.0;
					this.battle.missiles.push(new Missile(this.battle, this, this.target, this.x, this.y, secDxPerFrame, secDyPerFrame, Math.ceil(this.secondaryMissileFlightDistance * 100.0 / this.projectileSpeed), true));
				}
			}
			else
			{
				let distanceToTarget: number = Math.sqrt((this.x - this.target.x) * (this.x - this.target.x) + (this.y - this.target.y) * (this.y - this.target.y));
				this.battle.arrows.push(new Arrow(this.battle, this, this.target, this.battle.timeInterval + Math.ceil(100.0 * distanceToTarget / this.projectileSpeed), distanceToTarget / (this.attackRange + this.radius), false, distanceToTarget - this.radius <= 2 ? true : false));

				if (this.secondaryAttack)
				{
					for (let i: number = 0; i < this.secondaryAttackProjectileCount; i++)
					{
						this.battle.arrows.push(new Arrow(this.battle, this, this.target, this.battle.timeInterval + Math.ceil(100.0 * distanceToTarget / this.projectileSpeed), distanceToTarget / (this.attackRange + this.radius), true, distanceToTarget - this.radius <= 2 ? true : false));
					}
				}
			}
		}
		this.inAttackMotion = false; // Attack animation finished
		this.attackAnimDur = 0; // Reset attack animation time
	}

	public EnsureHasTarget(): void
	{
		let targetArmy: Unit[] = this.armyIndex == 0 ? this.battle.armies[1] : this.battle.armies[0];

		if (this.target == null || !this.target.alive)
		{
			// Solution 1: Pick the six closest units of the enemy army and choose one randomly as the next target.
			this.inAttackMotion = false;
			this.attackAnimDur = 0;

			if (this.meleeDamagedBy != null && this.meleeDamagedBy.alive)
			{
				this.target = this.meleeDamagedBy;
				this.target.attackedBy.push(this);
				return;
			}

			let closestUnitIndex: number[] = [-1, -1, -1, -1, -1, -1 ];
			let closestUnitDistSq: number[] = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE];
			let distCurUnit: number;
			for (let i: number = 0; i < targetArmy.length; i++)
			{
				distCurUnit = (this.x - targetArmy[i].x) * (this.x - targetArmy[i].x) + (this.y - targetArmy[i].y) * (this.y - targetArmy[i].y);
				for (let j: number = 0; j < 6; j++)
				{
					if (distCurUnit < closestUnitDistSq[j])
					{
						closestUnitIndex.splice(j, 0, i);
						closestUnitIndex.splice(-1, 1);
						closestUnitDistSq.splice(j, 0, distCurUnit);
						closestUnitDistSq.splice(-1, 1);
						break;
					}
				}
			}

			this.target = targetArmy[closestUnitIndex[Math.floor(Math.random() * (targetArmy.length >= 6 ? 6 : targetArmy.length))]];
			this.target.attackedBy.push(this);

			// Solution 2: Pick six enemy units randomly and attack the closest.
			/*
			let closestUnitIndex: number = -1
			let closestUnitDistSq: number = Number.MAX_VALUE;

			for (let j: number = 0; j < 6; j++)
			{
				let rndIndex: number = Math.floor(Math.random() * targetArmy.length)
				let distCurUnitSq = (this.x - targetArmy[rndIndex].x) * (this.x - targetArmy[rndIndex].x) + (this.y - targetArmy[rndIndex].y) * (this.y - targetArmy[rndIndex].y);
				if (distCurUnitSq < closestUnitDistSq)
				{
					closestUnitDistSq = distCurUnitSq;
					closestUnitIndex = rndIndex;
				}
			}

			this.target = targetArmy[closestUnitIndex];
			this.target.attackedBy.push(this);
			*/
		}
	}

	public TryToFindTargetOutOfMinRange(): void{
		let targetArmy: Unit[] = this.armyIndex == 0 ? this.battle.armies[1] : this.battle.armies[0];
		
		for (let i: number = 0; i < 10; i++){
			let randomEnemyUnit: Unit = targetArmy[Math.floor(Math.random() * targetArmy.length)];
			let distToRandomEnemyUnit: number = Math.sqrt((this.x - randomEnemyUnit.x) * (this.x - randomEnemyUnit.x) + (this.y - randomEnemyUnit.y) * (this.y - randomEnemyUnit.y)) - this.radius;
			if (distToRandomEnemyUnit <= this.attackRange && distToRandomEnemyUnit >= this.attackRangeMin){
				this.target.attackedBy.splice(this.target.attackedBy.indexOf(this, 0), 1);
				this.target = randomEnemyUnit;
				return;
			}
		}
	}

	public SetIntoDefaultState(): void{
		this.target = null;
		this.attackedBy = [];
		this.meleeDamagedBy = null;
		this.attackCd = 0;
		this.inAttackMotion = false;
		this.attackAnimDur = 0;
		this.running = false;
		this.timeSinceFirstTryToAttackTarget = 0;
	}
}