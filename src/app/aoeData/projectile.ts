import { Unit } from "./unit";
import { Battle } from "./battle";

export abstract class Projectile
{
	public attacker: Unit; // the unit that launched this projectile
	public target: Unit; // the unit targeted by this projectile
	public arrived: boolean = false; // true if the projectile arrived (then it will be removed from the battle)
	public battle: Battle; // the reference to the battle instance this arrow belongs to
	public secondary: boolean; // some units fire secondary projectiles in addition to primary ones (chu ko nu, kipchaks, ballista elephants with unique tech, ...)


	public constructor(battle: Battle, attacker: Unit, target: Unit, secondary: boolean = false)
	{
		this.battle = battle;
		this.attacker = attacker;
		this.target = target;
		this.secondary = secondary;
	}
}