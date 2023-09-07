import { Projectile } from "./projectile";
import { Unit } from "./unit";
import { Battle } from "./battle";
import { AoeData } from './../data/aoeData';

export class Missile extends Projectile
{
	public x: number; // x coord of missile
	public y: number; // y coord of missile
	public dx: number; // delta x of missile per frame (so not normalized)
	public dy: number; // delta y of missile per frame (so not normalized)
	public flightDurationMax: number; // the number of frames the missile will fly in total
	public flightDurationPassed: number = 0; // the number of frames since the missile was launched
	alreadyAffectedUnits: Set<Unit> = new Set<Unit>(); // the units the missile has already hit (can't hit the same unit twice)

	
	public constructor(battle: Battle, attacker: Unit, target: Unit, x: number, y: number, dx: number, dy: number, flightDurationMax: number, secondary: boolean)
	{
		super(battle, attacker, target, secondary);
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.flightDurationMax = flightDurationMax;
	}

	public MoveAndCheckCollisions(): void
	{
		this.x += this.dx;
		this.y += this.dy;
		this.flightDurationPassed++;

		let gx: number = this.x < -20.0 ? 0 : Math.min(Battle.GRID_LENGTH - 1, 1 + Math.floor(this.x + 20.0));
		let gy: number = this.y < -20.0 ? 0 : Math.min(Battle.GRID_LENGTH - 1, 1 + Math.floor(this.y + 20.0));
		let minXGridIndex: number = Math.max(0, gx - 1);
		let minYGridIndex: number = Math.max(0, gy - 1);
		let maxXGridIndex: number = Math.min(Battle.GRID_LENGTH - 1, gx + 1);
		let maxYGridIndex: number = Math.min(Battle.GRID_LENGTH - 1, gy + 1);
		let targetArmyIndex: number = this.attacker.armyIndex == 1 ? 0 : 1;
		let collisionTargets: Unit[] = [];
		let bonusAoe: number = this.attacker.civUnitType.civ == AoeData.civ_ethiopians && this.attacker.civUnitType.age == 4 ? 0.2 : (AoeData.utl_chakramThrower.unitTypes.includes(this.attacker.civUnitType.baseUnitType) ? 0.0 : 0.1);

		for (let i: number = minXGridIndex; i <= maxXGridIndex; i++)
		{
			for (let j: number = minYGridIndex; j <= maxYGridIndex; j++)
			{
				for (let unit of this.battle.gridUnits[i][j]){
					if (unit.armyIndex == targetArmyIndex && !this.alreadyAffectedUnits.has(unit) && (unit.x - this.x) * (unit.x - this.x) + (unit.y - this.y) * (unit.y - this.y) <= (unit.radius + bonusAoe) * (unit.radius + bonusAoe)){
						collisionTargets.push(unit);
					}
				}
			}
		}

		collisionTargets.forEach(unit => {
			let damageDealt: number = Unit.CalculateDamageDealtToTarget(this.attacker, unit, this.secondary) * (unit == this.target ? 1.0 : this.attacker.sideTargetDmgFraction);

			// Shrivamsha Riders can block/dodge projectiles
			if (AoeData.utl_shrivamshaRider.unitTypes.includes(unit.civUnitType.baseUnitType)){
				if (unit.civUnitType.baseUnitType == AoeData.ut_shrivamshaRider && unit.curEnergy >= 20.0){
					damageDealt = 0.0;
					unit.curEnergy -= 20.0;
				} else if (unit.civUnitType.baseUnitType == AoeData.ut_eliteShrivamshaRider && unit.curEnergy >= 14.4){
					damageDealt = 0.0;
					unit.curEnergy -= 14.4;
				}
			}

			unit.curHp -= damageDealt;
			this.alreadyAffectedUnits.add(unit);
			if (this.alreadyAffectedUnits.size >= 5){
				this.arrived = true;
			}
		});

		if (this.flightDurationPassed >= this.flightDurationMax)
		{
			this.arrived = true;
		}
	}
}