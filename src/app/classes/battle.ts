import { Unit } from "./unit";
import { Arrow } from "./arrow";
import { Missile } from "./missile";
import { AoeData } from "./../data/aoeData";
import { ExtensionMethods } from "../helper/extensionMethods";
import { Player } from './player';
import { CivUnitType } from './civUnitType';


export class Battle
{
	//private userInterface: AoECombatSimulatorComponent; // a reference to the user interface instance to which this battle's results will be reported
	public players: Player[];
	public hitAndRunMode: number; // 0 => no hit&run (except target too close for units with min range), 1 => hit&run with 50% efficiency, 2 => maximum hit&run possible
	
	public armies: Unit[][]  = [[], []]; // the armies of both players
	public static readonly GRID_LENGTH: number = 42;
	public gridUnits: Set<Unit>[][] = []; // a grid of hashsets containing all the units to improve missile collision detection performance
	private graveyard: Unit[] = []; // a list containing all dead units
	public arrows: Arrow[] = []; // a list containing all arrows currently in the air
	public missiles: Missile[] = []; // a list containing all missiles (scorpion, battle elephant) currently in the air

	public timeInterval: number = 0; // number of time intervals since begin of the battle; one time interval = 0,01s
	// private Random rnd; // a random generator for slight shifts of initial unit placement (further reduces determinism and improves quality of battle results if number of iterations is large)
	public resourcesGenerated: number[][]  = [[0, 0, 0], [0, 0, 0]]; // currently only relevant for the Keshik gold generation
	public battleIterationCounter: number = 0; // used only for repeated equal pop battles (when repetitions > 1)

	public start_konnikCount: number[] = []; // we need these variables for statistical purposes (cost efficiency matrix creation)
	public sum_lostKonniks: number[] = [];


	constructor(taskId: number, battleId: number, hitAndRunMode: number, players: Player[], repetitions: number = 0)
	{
		this.players = players;
		this.hitAndRunMode = hitAndRunMode;

		this.start_konnikCount[0] = this.start_konnikCount[1] = 0;
		this.sum_lostKonniks[0] = this.sum_lostKonniks[1] = 0;
		
		while (this.battleIterationCounter <= repetitions){
			this.gridUnits = [];
			this.graveyard = [];
			this.arrows = [];
			this.missiles = [];
			this.timeInterval = 0;
			this.resourcesGenerated = [[0, 0, 0], [0, 0, 0]];
			for (let i: number = 0; i < Battle.GRID_LENGTH; i++)
			{
				this.gridUnits.push([]);
				for (let j: number = 0; j < Battle.GRID_LENGTH; j++)
				{
					this.gridUnits[i].push(new Set<Unit>());
				}
			}

			this.CreateArmys();
			this.Fight();
			this.CountSurvivors();
			this.battleIterationCounter++;
		}

		if (repetitions == 0){
			this.SaveWinner();
		}
	}
	
	private CreateArmys(): void
	{
		let army_SizeMelee: number[] = [0, 0];
		let army_MeleeWidth: number[] = [0, 0];
		let army_MeleeHeight: number[] = [0, 0];
		let army_SizeRanged: number[] = [0, 0];
		let army_RangedWidth: number[] = [0, 0];
		let army_RangedHeight: number[] = [0, 0];
		let army_Size: number[] = [0, 0];
		let army_MeleePlaced: number[] = [0, 0];
		let army_RangedPlaced: number[] = [0, 0];

		for (let i: number = 0; i < 2; i++)
		{
			for (let j: number = 0; j < this.players[i].civUts.length; j++)
			{
				if (this.players[i].civUts[j].attackRange <= 1.0){
					army_SizeMelee[i] += this.players[i].amountStartUnits[j];
				}
				else{
					army_SizeRanged[i] += this.players[i].amountStartUnits[j];
				}

				let survivorsOfPrevBattle: number = this.armies[i].filter(unit => unit.civUnitType == this.players[i].civUts[j]).length;
				
				if (this.players[i].civUts[j].baseUnitType == AoeData.ut_konnik || this.players[i].civUts[j].baseUnitType == AoeData.ut_eliteKonnik){
					survivorsOfPrevBattle += this.armies[i].filter(unit => unit.civUnitType.baseUnitType == AoeData.ut_konnikDismounted || unit.civUnitType.baseUnitType == AoeData.ut_eliteKonnikDismounted).length;
				}

				for (let k: number = 0; k < this.players[i].amountStartUnits[j] - survivorsOfPrevBattle; k++)
				{
					this.armies[i].push(new Unit(this.players[i].civUts[j], this, i));
				}
			}

			this.start_konnikCount[i] = this.armies[i].filter(unit => AoeData.utl_konnik.unitTypes.includes(unit.civUnitType.baseUnitType)).length;

			army_MeleeWidth[i] = Math.ceil(Math.sqrt(army_SizeMelee[i] / 2.0));
			army_MeleeHeight[i] = army_MeleeWidth[i] * 2;
			army_RangedWidth[i] = Math.ceil(Math.sqrt(army_SizeRanged[i] / 2.0));
			army_RangedHeight[i] = army_RangedWidth[i] * 2;
			army_Size[i] = army_SizeMelee[i] + army_SizeRanged[i];
			army_MeleePlaced[i] = 0;
			army_RangedPlaced[i] = 0;

			ExtensionMethods.Shuffle(this.armies[i]);
			let unitIndex: number = 0;
			this.armies[i].forEach(unit => {
				if (unit.attackRange <= 1.0)
				{
					unit.SetXYInitial((i == 0 ? 1.0 : -1.0) * (-2.0 - army_MeleePlaced[i] / army_MeleeHeight[i] + Math.random() * 0.1 - 0.05),
						-army_MeleeHeight[i] / 2.0 + army_MeleePlaced[i] % army_MeleeHeight[i] + Math.random() * 0.1 - 0.05);
					army_MeleePlaced[i]++;
				}
				else
				{
					unit.SetXYInitial((i == 0 ? 1.0 : -1.0) * (-6.0 - army_RangedPlaced[i] / army_RangedHeight[i] + Math.random() * 0.1 - 0.05),
						-army_RangedHeight[i] / 2.0 + army_RangedPlaced[i] % army_RangedHeight[i] + Math.random() * 0.1 - 0.05);
					army_RangedPlaced[i]++;
				}
				unit.SetUnitIndex(unitIndex);
				unitIndex++;
			});

			// armies[i].ForEach(unit => { Console.WriteLine("Army " + (i+1) + ":" + unit.unitType.name + " | " + unit.X + " - " + unit.Y); });
		}
	}

	private CountSurvivors(): void
	{
		// For both armies, we count the number of survivors of each civUnitType (to eventually compute the statistical results, cost efficiency values, ...)
		for (let i: number = 0; i < 2; i++)
		{
			for (let j: number = 0; j < this.players[i].civUts.length; j++){
				this.players[i].survivorsSumArmy[j] += this.armies[i].filter(unit => unit.civUnitType == this.players[i].civUts[j]).length;
			}

			// save amount of generated gold during the battle - just used for keshig gold currently, so only index 2 used
			this.players[i].resourcesGenerated[2] += Math.round(this.resourcesGenerated[i][2]);

			// save number of (Elite) Konniks that survived the battle - necessary for equal pop. simulations since (Elite) Konniks spawn (Elite) Dismounted Konniks when dying
			this.sum_lostKonniks[i] += (this.start_konnikCount[i] - this.armies[i].filter(unit => AoeData.utl_konnik.unitTypes.includes(unit.civUnitType.baseUnitType)).length);
		}
	}

	private SaveWinner(): void
	{
		if (this.armies[0].length > this.armies[1].length)
		{
			this.players[0].sumWins += 1;
		}
		else if (this.armies[0].length == this.armies[1].length)
		{
			this.players[0].sumWins += 0.5;
			this.players[1].sumWins += 0.5;
		}
		else
		{
			this.players[1].sumWins += 1;
		}
	}

	private Cleanup(): void
	{
		for (let i: number = 0; i < 2; i++)
		{
			this.armies[i].filter(unit => unit.curHp <= 0.001).forEach(dyingUnit => {
				dyingUnit.target.attackedBy.splice(dyingUnit.target.attackedBy.indexOf(dyingUnit, 0), 1);
				dyingUnit.alive = false;
				this.gridUnits[dyingUnit.gx][dyingUnit.gy].delete(dyingUnit);
				if (dyingUnit.civUnitType.baseUnitType == AoeData.ut_eliteKonnik || dyingUnit.civUnitType.baseUnitType == AoeData.ut_konnik){
					let isElite: boolean = dyingUnit.civUnitType.baseUnitType == AoeData.ut_eliteKonnik;
					let dismountedKonnikCivUnitType: CivUnitType = this.players[dyingUnit.armyIndex].civUts.find(cut => cut.baseUnitType == (isElite ? AoeData.ut_eliteKonnikDismounted : AoeData.ut_konnikDismounted));
					let dismountedKonnik: Unit = new Unit(dismountedKonnikCivUnitType, this, i);
					this.armies[i].push(dismountedKonnik);
					dismountedKonnik.SetXYInitial(dyingUnit.x, dyingUnit.y);
				}
			});
			this.graveyard.push(...this.armies[i].filter(unit => unit.curHp <= 0.001));
			let remainingUnits: Unit[] = this.armies[i].filter(unit => unit.curHp > 0.001);
			this.armies[i] = remainingUnits;
		}
		let remainingArrows: Arrow[] = this.arrows.filter(arrow => !arrow.arrived);
		this.arrows = remainingArrows;
		let remainingMissiles: Missile[] = this.missiles.filter(missile => !missile.arrived);
		this.missiles = remainingMissiles;
	}

	public Fight(): void
	{
		while (this.armies[0].length > 0 && this.armies[1].length > 0) // as soon as one army has no survivors, the battle ends
		{
			this.timeInterval++;

			this.armies[0].concat(this.armies[1]).forEach(unit =>
			{
				unit.EnsureHasTarget(); // first thing to ensure: each unit must have a target
				unit.ApplyReg(); // apply hp and energy regeneration (only affects few units)

				if (!unit.inAttackMotion) // if a unit is not currently in attack motion, we consider things like moving towards or away from its target or starting an attack
				{
					if (!unit.TargetWithinAttackRange()) // if the target is too far away, the unit moves towards it
					{
						unit.MoveTowardsTarget_CalculateNewPos();
					}
					else
					{
						if (!unit.TargetNotCloserThanMinimumAttackRange()) // if the target is too close (can happen for units with minimum range), the unit moves away from it
						{
							unit.MoveAwayFromTarget_CalculateNewPos();
							if (this.timeInterval % 100 == 0){ // once every second a unit with minimum range whose target is too close will check if there is a target out of min range
								unit.TryToFindTargetOutOfMinRange();
							}
						}
						else
						{
							if (unit.AttackCdReady()) // if the target is neither too far away or too close, we check whether the unit's attack cd is ready
							{
								if (unit.CantReachTarget()){
									unit.CheckIfToSwitchTarget();
								}
								else{
									unit.StartAttackAnimation(); // attack the target, if the attack cd is ready
								}
								
							}
							else
							{
								if (unit.attackRange > 1.0 && this.hitAndRunMode > 0) // if the attack cd is not ready, check whether the unit is ranged and hit&run mode is activated
								{
									if (this.hitAndRunMode == 2 || unit.attackCd <= (unit.attackSpeed - unit.attackDelay) / 2.0) // when hit&run is set to 'semi', units will only run with 50% efficiency (more realistic than perfect hit&run)
									{
										unit.MoveAwayFromTarget_CalculateNewPos(); //  ...if the conditions are met, the unit moves away from its target
									}
								}
							}
						}
					}
				}
				
				if (unit.inAttackMotion) // check, if a unit is already performing its attack animation (or just started due to the previous lines of code)
				{
					if (unit.AttackAnimationFinished()) // an already started attack animation can't be interrupted (except the attacker dies)
					{
						unit.PerformAttackOnTarget(); // after the attack animation is finished, the attack it self is executed (so the damage is dealt to the target(s) or the projectile is launched)
					}
					else
					{
						unit.ContinueAttackAnimation(); // continue the already started attack animation
					}
				}

				unit.attackCd -= 0.01; // the remaining time until the next attack (animation) can be started is reduced by 0.01s
			});

			this.arrows.forEach(arrow =>
			{
				if (arrow.eta <= this.timeInterval)
				{
					arrow.Impact();
				}
			});

			this.missiles.forEach(missile =>
			{
				missile.MoveAndCheckCollisions();
			});

			this.armies[0].concat(this.armies[1]).forEach(unit =>
			{
				unit.MoveUnit_AssumeNewPos();
			});

			this.Cleanup();
		}

		this.armies[0].concat(this.armies[1]).forEach(unit =>{ // important to "reset" all targets in case battles are repeated
			unit.SetIntoDefaultState();
		});
	}

}