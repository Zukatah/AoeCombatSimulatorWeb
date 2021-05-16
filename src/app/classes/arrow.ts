import { Projectile } from "./projectile";
import { Unit } from "./unit";
import { Battle } from "./battle";
import { AoeData } from './../data/aoeData';


export class Arrow extends Projectile
{
	public eta: number; // estimated time of arrival (contains the number of the frame in which this arrow will arive)
	public fractionOfMaxRange: number; // 1.0 if fired over a distance equal to 100% of attacker's attack range, 0.0 if fired over a distance equal to 0% of attacker's attack range
	private certainHit: boolean; // arrows that travel 2 tiles or less will always hit the target

	constructor(battle: Battle, attacker: Unit, target: Unit, eta: number, fractionOfMaxRange: number, secondary: boolean, certainHit: boolean)
	{
		super(battle, attacker, target, secondary);
		this.eta = eta;
		this.fractionOfMaxRange = fractionOfMaxRange;
		this.certainHit = certainHit;
	}

	public Impact(): void
	{
		this.arrived = true;
		let hitRoll: number = Math.random() * 100.0;
		if (this.target.alive && (hitRoll < this.attacker.accuracyPercent || this.certainHit))
		{
			let damageDealt : number = Unit.CalculateDamageDealtToTarget(this.attacker, this.target, this.secondary);
			this.target.curHp -= damageDealt;
			this.battle.players[this.attacker.armyIndex].goodRoll_MainTargetHit++; // debug purposes
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
				let possibleTargetRadiusSq: number = (possibleTarget.radius + 0.2) * (possibleTarget.radius + 0.2); // increased the size of the units' hitboxes a bit since the chance for side target hits was too low
				if (distToArrowSq < possibleTargetRadiusSq && distToArrowSq < closestUnitDistSq)
				{
					closestUnit = possibleTarget;
					closestUnitDistSq = distToArrowSq;
				}
			});
			if (closestUnit != null)
			{
				// targets other than the main target only receive half of the normal damage
				if (closestUnit == this.target){
					this.battle.players[this.attacker.armyIndex].missedRoll_MainTargetHit++; // debug purposes
					closestUnit.curHp -= Unit.CalculateDamageDealtToTarget(this.attacker, closestUnit, this.secondary);
				} else{
					if (this.target.alive){
						this.battle.players[this.attacker.armyIndex].missedRoll_mainTargetAlive_SideTargetHit++; // debug purposes
					}else{
						if (hitRoll < this.attacker.accuracyPercent){
							this.battle.players[this.attacker.armyIndex].goodRoll_mainTargetDead_SideTargetHit++; // debug purposes
						}else{
							this.battle.players[this.attacker.armyIndex].missedRoll_mainTargetDead_SideTargetHit++; // debug purposes
						}
						
					}
					
					if (this.attacker.civUnitType.baseUnitType == AoeData.ut_arambai || this.attacker.civUnitType.baseUnitType == AoeData.ut_eliteArambai){ // Arambai and Elite Arambai always hit for 100% damage
						closestUnit.curHp -= Unit.CalculateDamageDealtToTarget(this.attacker, closestUnit, this.secondary);
					}else if (this.attacker.civUnitType.baseUnitType == AoeData.ut_organGun || this.attacker.civUnitType.baseUnitType == AoeData.ut_eliteOrganGun){ // (Elite) Organ Guns' secondary projectiles always hit for 100% damage
						if (this.secondary){
							closestUnit.curHp -= Unit.CalculateDamageDealtToTarget(this.attacker, closestUnit, this.secondary);
						}else{
							closestUnit.curHp -= 0.5 * Unit.CalculateDamageDealtToTarget(this.attacker, closestUnit, this.secondary);
						}
					} else{
						closestUnit.curHp -= 0.5 * Unit.CalculateDamageDealtToTarget(this.attacker, closestUnit, this.secondary);
					}
					
				}
			}
			else{
				if (this.target.alive){
					this.battle.players[this.attacker.armyIndex].missedRoll_mainTargetAlive_Miss++; // debug purposes
				} else{
					if (hitRoll < this.attacker.accuracyPercent){
						this.battle.players[this.attacker.armyIndex].goodRoll_mainTargetDead_Miss++; // debug purposes
					}else{
						this.battle.players[this.attacker.armyIndex].missedRoll_mainTargetDead_Miss++; // debug purposes
					}
				}
			}
		}
	}
}
