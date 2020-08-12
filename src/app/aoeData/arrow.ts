import { Projectile } from "./projectile";
import { Unit } from "./unit";
import { Battle } from "./battle";


export class Arrow extends Projectile
{
	public eta: number; // estimated time of arrival (contains the number of the frame in which this arrow will arive)
	public fractionOfMaxRange: number; // 1.0 if fired over a distance equal to 100% of attacker's attack range, 0.0 if fired over a distance equal to 0% of attacker's attack range

	constructor(battle: Battle, attacker: Unit, target: Unit, eta: number, fractionOfMaxRange: number, secondary: boolean)
	{
		super(battle, attacker, target, secondary);
		this.eta = eta;
		this.fractionOfMaxRange = fractionOfMaxRange;
	}

	public Impact(): void
	{
		this.arrived = true;
		let hitRoll: number = Math.random() * 100.0;
		if (this.target.alive && (hitRoll < this.attacker.accuracyPercent))
		{
			let damageDealt : number = Unit.CalculateDamageDealtToTarget(this.attacker, this.target, this.secondary);
			this.target.curHp -= damageDealt;
		}
		else
		{
			let impactX: number = this.target.x;
			let impactY: number = this.target.y;
			if (hitRoll >= this.attacker.accuracyPercent)
			{
				impactX += this.fractionOfMaxRange * (-1.0 + Math.random() * 2.0);
				impactY += this.fractionOfMaxRange * (-1.0 + Math.random() * 2.0);
			}

			let targetArmy: Unit[] = this.attacker.armyIndex == 0 ? this.battle.armies[1] : this.battle.armies[0];
			let closestUnit: Unit = null;
			let closestUnitDistSq: number = Number.MAX_VALUE;
			targetArmy.forEach(possibleTarget => {
				let distToArrowSq: number = (impactX - possibleTarget.x) * (impactX - possibleTarget.x) + (impactY - possibleTarget.y) * (impactY - possibleTarget.y);
				if (distToArrowSq < possibleTarget.radius * possibleTarget.radius && distToArrowSq < closestUnitDistSq)
				{
					closestUnit = possibleTarget;
					closestUnitDistSq = distToArrowSq;
				}
			});
			if (closestUnit != null)
			{
				// targets other than the main target only receive half of the normal damage
				closestUnit.curHp -= (closestUnit == this.target ? 1.0 : 0.5) * Unit.CalculateDamageDealtToTarget(this.attacker, closestUnit, this.secondary);
			}
		}
	}
}