import { ArmorClass } from './armorClass';
import { UnitType } from './unitType';
import { AoeData} from './aoeData';
import { Battle } from "./battle";
import { Arrow } from "./arrow";
import { Missile } from "./missile";

export class Unit {

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

	public moveSpeed: number; // move speed in tiles/s
	public radius: number; // size of the unit in tiles


	public unitType: UnitType; // this unit's unit type; the unit type defines many attributes of each unit
	public battle: Battle; // the reference to the battle instance this unit belongs to
	public curHp: number; // the current hit points of this unit
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


	constructor(unitType: UnitType, battle: Battle, armyIndex: number) {
		this.hp = unitType.hp;
		this.attackSpeed = unitType.attackSpeed;
		this.attackRange = unitType.attackRange;
		this.attackRangeMin = unitType.attackRangeMin;
		this.attackDelay = unitType.attackDelay;
		this.attackIsMissile = unitType.attackIsMissile;
		this.secondaryAttack = unitType.secondaryAttack;
		this.secondaryAttackProjectileCount = unitType.secondaryAttackProjectileCount;
		this.missileFlightDistance = unitType.missileFlightDistance;
		this.secondaryMissileFlightDistance = unitType.secondaryMissileFlightDistance;
		this.secondaryAttackValues = unitType.secondaryAttackValues;
		this.projectileSpeed = unitType.projectileSpeed;
		this.cleaveType = unitType.cleaveType;
		this.cleaveRadius = unitType.cleaveRadius;
		this.moveSpeed = unitType.moveSpeed;
		this.attackValues = unitType.attackValues;
		this.armorClasses = unitType.armorClasses;
		this.radius = unitType.radius;
		this.accuracyPercent = unitType.accuracyPercent;
		this.hpRegPerMin = unitType.hpRegPerMin;

		this.unitType = unitType;
		this.battle = battle;
		this.curHp = this.hp;
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
		// rnd = new Random(index + armyIndex * 1000 + Environment.TickCount); TODO: random generator seed!
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
		let speedAfterBumpReduction: number = this.target.attackedBy[0] == this ? this.moveSpeed * 0.01 : this.moveSpeed * 0.01 / Math.pow(this.target.attackedBy.length, 0.2); // 54
		//if (speedAfterBumpReduction == NaN ||  !Number.isFinite(speedAfterBumpReduction)){
		//	console.log("Error at speed calculation");
		//}
		this.nx = this.x + (speedAfterBumpReduction > dlength ? dlength : speedAfterBumpReduction) * dx;
		this.ny = this.y + (speedAfterBumpReduction > dlength ? dlength : speedAfterBumpReduction) * dy;
	}

	public MoveAwayFromTarget_CalculateNewPos(): void {
		let dx: number = this.x - this.target.x;
		let dy: number = this.y - this.target.y;
		let dlength: number = Math.sqrt(dx * dx + dy * dy);
		dlength = dlength == 0.0 ? 1.0 : dlength;
		dx /= dlength;
		dy /= dlength;
		if (dlength + this.moveSpeed * 0.01 > this.attackRange)
		{
			this.nx = this.target.x + this.attackRange * dx;
			this.ny = this.target.y + this.attackRange * dy;
		}
		else
		{
			this.nx = this.x + this.moveSpeed * 0.01 * dx;
			this.ny = this.y + this.moveSpeed * 0.01 * dy;
		}
		this.nx = this.nx > 120 ? 120.0 : (this.nx < -120.0 ? -120.0 : this.nx);
		this.ny = this.ny > 120 ? 120.0 : (this.ny < -120.0 ? -120.0 : this.ny);
	}

	public MoveUnit_AssumeNewPos(): void {
		if (this.nx != this.x || this.ny != this.y)
		{
			//if (this.nx == NaN ||  !Number.isFinite(this.nx)){
			//	console.log(this.nx + " " + this.ny + " " + this.x + " " + this.y);
			//	console.log(this);
			//}

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
	}

	public AttackAnimationFinished(): boolean {
		return this.attackAnimDur >= this.attackDelay;
	}

	public ContinueAttackAnimation(): void {
		this.attackAnimDur += 0.01;
	}

	public static CalculateDamageDealtToTarget(attacker: Unit, target: Unit, secondary: boolean = false): number
	{
		let damageDealt: number = 0.0;
		if (attacker.unitType == AoeData.ut_eliteLeitis) // leitis ignore armor and don't have any attack bonusses
		{
			damageDealt = attacker.attackValues.get(AoeData.ac_baseMelee);
		}
		else if (secondary && attacker.unitType == AoeData.ut_eliteOrganGun) // secondary missiles of organ guns always deal 2 damage (and 1 if target wasn't the main target)
		{
			damageDealt = 2;
		}
		else
		{
			const avIterator = secondary ? attacker.secondaryAttackValues[Symbol.iterator]() : attacker.attackValues[Symbol.iterator]();
			for (let [attackedArmorClass, attackValue] of avIterator){
				damageDealt += Math.max(0, target.armorClasses.has(attackedArmorClass) ? attackValue - target.armorClasses.get(attackedArmorClass) : 0);
			}
		}
		if (damageDealt < 1)
		{
			damageDealt = 1;
		}
		return damageDealt;
	}

	public PerformAttackOnTarget(): void {
		if (this.attackRange <= 1.0)
		{
			let damageDealt: number = Unit.CalculateDamageDealtToTarget(this, this.target);
			this.target.curHp -= damageDealt;
			this.target.meleeDamagedBy = this;
			if (this.cleaveType != 0)
			{
				let targetArmy: Unit[] = this.armyIndex == 0 ? this.battle.armies[1] : this.battle.armies[0];
				let affectedTargets: number = 0;
				let maxTargets: number = 6 + Math.round(5.0 * (this.radius - 0.2)); // infantry cleaves up to 6 units, cavalry up to 7, elephants up to 8 (limit to offset non-existing collision detection)
				targetArmy.forEach(possibleTarget => {
					if (possibleTarget != this.target && affectedTargets < maxTargets && (this.x - possibleTarget.x) * (this.x - possibleTarget.x) + (this.y - possibleTarget.y) * (this.y - possibleTarget.y) < (this.cleaveRadius + this.target.radius)* (this.cleaveRadius + this.target.radius))
					{
						if (this.cleaveType == 1)
						{
							damageDealt = 5.0;
						}
						else
						{
							damageDealt = Unit.CalculateDamageDealtToTarget(this, possibleTarget);
							if (this.cleaveType == 2) // cleaveType 2 (elephants) deal 50% area damage; cleaveType 3 (petards, flaming camels) deal 100% area damage
							{
								damageDealt *= 0.5;
							}
							damageDealt = damageDealt < 1 ? 1 : damageDealt;
						}
						possibleTarget.curHp -= damageDealt;
						affectedTargets++;
					}
				});
			}

			if (this.unitType == AoeData.ut_eliteKeshik)
			{
				this.battle.resourcesGenerated[this.armyIndex][2] += 0.695;
			}
			if (this.unitType == AoeData.ut_flamingCamel)
			{
				this.curHp = 0.0;
			}
		}
		else // ranged units create arrows or missiles
		{
			if (this.attackIsMissile)
			{
				let dx: number = this.target.x - this.x;
				let dy: number = this.target.x - this.x;
				let distanceToTarget: number = Math.sqrt(dx*dx + dy*dy);
				let dxNorm: number = distanceToTarget == 0 ? 1 : dx / distanceToTarget;
				let dyNorm: number = distanceToTarget == 0 ? 0 : dy / distanceToTarget;
				let dxPerFrame: number = dxNorm * this.projectileSpeed / 100.0;
				let dyPerFrame: number = dyNorm * this.projectileSpeed / 100.0;
				this.battle.missiles.push(new Missile(this.battle, this, this.target, this.x, this.y, dxPerFrame, dyPerFrame, Math.ceil(this.missileFlightDistance * 100.0 / this.projectileSpeed), false));

				if (this.secondaryAttack) // only relevant for elite ballista elephant with double crossbow (and theoretically heavy scorpion with double crossbow too)
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
				this.battle.arrows.push(new Arrow(this.battle, this, this.target, this.battle.timeInterval + Math.ceil(100.0 * distanceToTarget / this.projectileSpeed), distanceToTarget / (this.attackRange + this.radius), false));

				if (this.secondaryAttack)
				{
					for (let i: number = 0; i < this.secondaryAttackProjectileCount; i++)
					{
						this.battle.arrows.push(new Arrow(this.battle, this, this.target, this.battle.timeInterval + Math.ceil(100.0 * distanceToTarget / this.projectileSpeed), distanceToTarget / (this.attackRange + this.radius), true));
					}
				}
			}
		}
		this.inAttackMotion = false; // Attack animation finished
		this.attackAnimDur = 0; // Reset attack animation time
	}

	/* Idea for finding new targets tested previously: Pick up to 5 random targets of the enemy army and choose the closest one as the next target. */
	public EnsureHasTarget(): void
	{
		let targetArmy: Unit[] = this.armyIndex == 0 ? this.battle.armies[1] : this.battle.armies[0];

		if (this.target == null || !this.target.alive)
		{
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
		}
	}
}