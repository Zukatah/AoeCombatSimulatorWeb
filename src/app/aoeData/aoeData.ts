import { ArmorClass } from './armorClass';
import { UnitType } from './unitType';
import { UnitTypeLine } from './unitTypeLine';
import { Civilization } from './civilization';
import { Technology } from './technology';

export abstract class AoeData
{
	public static ac_infantry: ArmorClass = new ArmorClass("Infantry");
	public static ac_basePierce: ArmorClass = new ArmorClass("Base pierce");
	public static ac_baseMelee: ArmorClass = new ArmorClass("Base melee");
	public static ac_warElephant: ArmorClass = new ArmorClass("War elephant");
	public static ac_cavalry: ArmorClass = new ArmorClass("Cavalry");
	public static ac_archer: ArmorClass = new ArmorClass("Archer");
	public static ac_ram: ArmorClass = new ArmorClass("Ram");
	public static ac_uniqueUnit: ArmorClass = new ArmorClass("Unique unit");
	public static ac_siegeWeapon: ArmorClass = new ArmorClass("Siege weapon");
	public static ac_gunpowderUnit: ArmorClass = new ArmorClass("Gunpowder Unit");
	public static ac_spearman: ArmorClass = new ArmorClass("Spearman");
	public static ac_cavalryArcher: ArmorClass = new ArmorClass("Cavalry archer");
	public static ac_eagleWarrior: ArmorClass = new ArmorClass("Eagle Warrior");
	public static ac_camel: ArmorClass = new ArmorClass("Camel");
	public static ac_condottiero: ArmorClass = new ArmorClass("Condottiero");
	public static ac_mameluke: ArmorClass = new ArmorClass("Mameluke");


	public static ut_villager: UnitType = new UnitType("Villager", 25, 2.0, 0.0, 0.53, Number.MAX_VALUE, 0.8, 50, 0, 0);
	public static utl_villager: UnitTypeLine = new UnitTypeLine("Villager line", [AoeData.ut_villager]);

	public static ut_militia: UnitType = new UnitType("Militia", 40, 2.0, 0.0, 0.5, Number.MAX_VALUE, 0.9, 60, 0, 20);
	public static ut_manAtArms: UnitType = new UnitType("Man-at-Arms", 45, 2.0, 0.0, 0.88, Number.MAX_VALUE, 0.9, 60, 0, 20);
	public static ut_longSwordsman: UnitType = new UnitType("Long Swordsman", 60, 2.0, 0.0, 0.63, Number.MAX_VALUE, 0.9, 60, 0, 20);
	public static ut_twoHandedSwordsman: UnitType = new UnitType("Two-Handed Swordsman", 60, 2.0, 0.0, 0.5, Number.MAX_VALUE, 0.9, 60, 0, 20);
	public static ut_champion: UnitType = new UnitType("Champion", 70, 2.0, 0.0, 0.63, Number.MAX_VALUE, 0.9, 60, 0, 20);
	public static utl_militia: UnitTypeLine = new UnitTypeLine("Militia line", [AoeData.ut_militia, AoeData.ut_manAtArms, AoeData.ut_longSwordsman, AoeData.ut_twoHandedSwordsman, AoeData.ut_champion]);

	public static ut_spearman: UnitType = new UnitType("Spearman", 45, 3, 0.0, 0.5, Number.MAX_VALUE, 1.0, 35, 25, 0);
	public static ut_pikeman: UnitType = new UnitType("Pikeman", 55, 3, 0.0, 0.5, Number.MAX_VALUE, 1.0, 35, 25, 0);
	public static ut_halberdier: UnitType = new UnitType("Halberdier", 60, 3, 0.0, 0.5, Number.MAX_VALUE, 1.0, 35, 25, 0);
	public static utl_spearman: UnitTypeLine = new UnitTypeLine("Spearman line", [AoeData.ut_spearman, AoeData.ut_pikeman, AoeData.ut_halberdier]);

	public static ut_eagleScout: UnitType = new UnitType("Eagle Scout", 50, 2.0, 0.0, 0.8, Number.MAX_VALUE, 1.1, 20, 0, 50);
	public static ut_eagleWarrior: UnitType = new UnitType("Eagle Warrior", 55, 2.0, 0.0, 0.63, Number.MAX_VALUE, 1.15, 20, 0, 50);
	public static ut_eliteEagleWarrior: UnitType = new UnitType("Elite Eagle Warrior", 60, 2.0, 0.0, 0.8, Number.MAX_VALUE, 1.3, 20, 0, 50);
	public static utl_eagleScout: UnitTypeLine = new UnitTypeLine("Eagle Scout line", [AoeData.ut_eagleScout, AoeData.ut_eagleWarrior, AoeData.ut_eliteEagleWarrior]);

	public static ut_scoutCavalry: UnitType = new UnitType("Scout Cavalry", 45, 2.0, 0.0, 0.68, Number.MAX_VALUE, 1.55, 80, 0, 0, 0.4);
	public static ut_lightCavalry: UnitType = new UnitType("Light Cavalry", 60, 2.0, 0.0, 0.68, Number.MAX_VALUE, 1.5, 80, 0, 0, 0.4);
	public static ut_hussar: UnitType = new UnitType("Hussar", 75, 1.9, 0.0, 0.68, Number.MAX_VALUE, 1.5, 80, 0, 0, 0.4);
	public static utl_scoutCavalry: UnitTypeLine = new UnitTypeLine("Scout Cavalry line", [AoeData.ut_scoutCavalry, AoeData.ut_lightCavalry, AoeData.ut_hussar]);

	public static ut_knight: UnitType = new UnitType("Knight", 100, 1.8, 0.0, 0.68, Number.MAX_VALUE, 1.35, 60, 0, 75, 0.4);
	public static ut_cavalier: UnitType = new UnitType("Cavalier", 120, 1.8, 0.0, 0.68, Number.MAX_VALUE, 1.35, 60, 0, 75, 0.4);
	public static ut_paladin: UnitType = new UnitType("Paladin", 160, 1.9, 0.0, 0.68, Number.MAX_VALUE, 1.35, 60, 0, 75, 0.4);
	public static utl_knight: UnitTypeLine = new UnitTypeLine("Knight line", [AoeData.ut_knight, AoeData.ut_cavalier, AoeData.ut_paladin]);
	
	public static ut_camelRider: UnitType = new UnitType("Camel Rider", 100, 2.0, 0.0, 0.5, Number.MAX_VALUE, 1.45, 55, 0, 60, 0.4);
	public static ut_heavyCamelRider: UnitType = new UnitType("Heavy Camel Rider", 120, 2.0, 0.0, 0.5, Number.MAX_VALUE, 1.45, 55, 0, 60, 0.4);
	public static ut_imperialCamelRider: UnitType = new UnitType("Imperial Camel Rider", 140, 2.0, 0.0, 0.5, Number.MAX_VALUE, 1.45, 55, 0, 60, 0.4);
	public static utl_camelRider: UnitTypeLine = new UnitTypeLine("Camel Rider line", [AoeData.ut_camelRider, AoeData.ut_heavyCamelRider, AoeData.ut_imperialCamelRider]);

	public static ut_battleElephant: UnitType = new UnitType("Battle Elephant", 250, 2.0, 0.0, 0.5, Number.MAX_VALUE, 0.85, 120, 0, 70, 0.6);
	public static ut_eliteBattleElephant: UnitType = new UnitType("Elite Battle Elephant", 300, 2.0, 0.0, 0.5, Number.MAX_VALUE, 0.85, 120, 0, 70, 0.6);
	public static utl_battleElephant: UnitTypeLine = new UnitTypeLine("Battle Elephant line", [AoeData.ut_battleElephant, AoeData.ut_eliteBattleElephant]);

	public static ut_steppeLancer: UnitType = new UnitType("Steppe Lancer", 60, 2.3, 1.0, 0.68, Number.MAX_VALUE, 1.45, 70, 0, 45, 0.4);
	public static ut_eliteSteppeLancer: UnitType = new UnitType("Elite Steppe Lancer", 80, 2.3, 1.0, 0.68, Number.MAX_VALUE, 1.45, 70, 0, 45, 0.4);
	public static utl_steppeLancer: UnitTypeLine = new UnitTypeLine("Steppe Lancer line", [AoeData.ut_steppeLancer, AoeData.ut_eliteSteppeLancer]);

	public static ut_archer: UnitType = new UnitType("Archer", 30, 2.0, 4.0, 0.35, 7.0, 0.96, 0, 25, 45, 0.2, 0.0, 80);
	public static ut_crossbowman: UnitType = new UnitType("Crossbowman", 35, 2.0, 5.0, 0.35, 7.0, 0.96, 0, 25, 45, 0.2, 0.0, 85);
	public static ut_arbalester: UnitType = new UnitType("Arbalester", 40, 2.0, 5.0, 0.35, 7.0, 0.96, 0, 25, 45, 0.2, 0.0, 90);
	public static utl_archer: UnitTypeLine = new UnitTypeLine("Archer line", [AoeData.ut_archer, AoeData.ut_crossbowman, AoeData.ut_arbalester]);

	public static ut_skirmisher: UnitType = new UnitType("Skirmisher", 30, 3.0, 4.0, 0.51, 7.0, 0.96, 25, 35, 0, 0.2, 1.0, 90);
	public static ut_eliteSkirmisher: UnitType = new UnitType("Elite Skirmisher", 35, 3.0, 5.0, 0.51, 7.0, 0.96, 25, 35, 0, 0.2, 1.0, 90);
	public static ut_imperialSkirmisher: UnitType = new UnitType("Imperial Skirmisher", 35, 3.0, 5.0, 0.51, 7.0, 0.96, 25, 35, 0, 0.2, 1.0, 95);
	public static utl_skirmisher: UnitTypeLine = new UnitTypeLine("Skirmisher line", [AoeData.ut_skirmisher, AoeData.ut_eliteSkirmisher, AoeData.ut_imperialSkirmisher]);

	public static ut_cavalryArcher: UnitType = new UnitType("Cavalry Archer", 50, 2.0, 4.0, 1.02, 7.0, 1.4, 0, 40, 60, 0.4, 0.0, 50);
	public static ut_heavyCavalryArcher: UnitType = new UnitType("Heavy Cavalry Archer", 60, 2.0, 4.0, 1.0, 7.0, 1.4, 0, 40, 60, 0.4, 0.0, 50);
	public static utl_cavalryArcher: UnitTypeLine = new UnitTypeLine("Cavalry Archer line", [AoeData.ut_cavalryArcher, AoeData.ut_heavyCavalryArcher]);

	public static ut_handCannoneer: UnitType = new UnitType("Hand Cannoneer", 35, 3.45, 7.0, 0.35, 5.5, 0.96, 45, 0, 50, 0.2, 0.0, 65);
	public static utl_handCannoneer: UnitTypeLine = new UnitTypeLine("Hand Cannoneer line", [AoeData.ut_handCannoneer]);

	public static ut_batteringRam: UnitType = new UnitType("Battering Ram", 175, 5.0, 0.0, 0.75, Number.MAX_VALUE, 0.5, 0, 160, 75, 0.8);
	public static ut_cappedRam: UnitType = new UnitType("Capped Ram", 200, 5.0, 0.0, 0.75, Number.MAX_VALUE, 0.5, 0, 160, 75, 0.8);
	public static ut_siegeRam: UnitType = new UnitType("Siege Ram", 270, 5.0, 0.0, 0.75, Number.MAX_VALUE, 0.6, 0, 160, 75, 0.8);
	public static utl_batteringRam: UnitTypeLine = new UnitTypeLine("Battering Ram line", [AoeData.ut_batteringRam, AoeData.ut_cappedRam, AoeData.ut_siegeRam]);

	public static ut_scorpion: UnitType = new UnitType("Scorpion", 40, 3.6, 7.0, 0.21, 6.0, 0.65, 0, 75, 75, 0.5, 2.0, 100);
	public static ut_heavyScorpion: UnitType = new UnitType("Heavy Scorpion", 50, 3.6, 7.0, 0.21, 6.0, 0.65, 0, 75, 75, 0.5, 2.0, 100);
	public static utl_scorpion: UnitTypeLine = new UnitTypeLine("Scorpion line", [AoeData.ut_scorpion, AoeData.ut_heavyScorpion]);

	public static ut_longbowman: UnitType = new UnitType("Longbowman", 35, 2.0, 5.0, 0.5, 7.0, 0.96, 0, 35, 40, 0.2, 0.0, 70);
	public static ut_eliteLongbowman: UnitType = new UnitType("Elite Longbowman", 40, 2.0, 6.0, 0.5, 7.0, 0.96, 0, 35, 40, 0.2, 0.0, 80);
	public static utl_longbowman: UnitTypeLine = new UnitTypeLine("Longbowman line", [AoeData.ut_longbowman, AoeData.ut_eliteLongbowman]);

	public static ut_cataphract: UnitType = new UnitType("Cataphract", 110, 1.8, 0.0, 0.68, Number.MAX_VALUE, 1.35, 70, 0, 75, 0.4);
	public static ut_eliteCataphract: UnitType = new UnitType("Elite Cataphract", 150, 1.7, 0.0, 0.68, Number.MAX_VALUE, 1.35, 70, 0, 75, 0.4);
	public static utl_cataphract: UnitTypeLine = new UnitTypeLine("Cataphract line", [AoeData.ut_cataphract, AoeData.ut_eliteCataphract]);

	public static ut_woadRaider: UnitType = new UnitType("Woad Raider", 65, 2.0, 0.0, 0.72, Number.MAX_VALUE, 1.2, 65, 0, 25);
	public static ut_eliteWoadRaider: UnitType = new UnitType("Elite Woad Raider", 80, 2.0, 0.0, 0.72, Number.MAX_VALUE, 1.2, 65, 0, 25);
	public static utl_woadRaider: UnitTypeLine = new UnitTypeLine("Woad Raider line", [AoeData.ut_woadRaider, AoeData.ut_eliteWoadRaider]);

	public static ut_chuKoNu: UnitType = new UnitType("Chu Ko Nu", 45, 3.85, 4.0, 0.83, 7.0, 0.96, 0, 40, 35, 0.2, 0.0, 85); // actually attack delay is 0.23s, but firing all the missiles takes longer
	public static ut_eliteChuKoNu: UnitType = new UnitType("Elite Chu Ko Nu", 50, 3.85, 4.0, 0.83, 7.0, 0.96, 0, 40, 35, 0.2, 0.0, 85); // actually attack delay is 0.23s, but firing all the missiles takes longer
	public static utl_chuKoNu: UnitTypeLine = new UnitTypeLine("Chu Ko Nu line", [AoeData.ut_chuKoNu, AoeData.ut_eliteChuKoNu]); // check attack rate of chu ko nu again; compare to archers
	
	public static ut_throwingAxeman: UnitType = new UnitType("Throwing Axeman", 60, 2.0, 3.0, 1.0, 7.0, 1.0, 55, 0, 25);
	public static ut_eliteThrowingAxeman: UnitType = new UnitType("Elite Throwing Axeman", 70, 2.0, 4.0, 0.82, 7.0, 1.0, 55, 0, 25);
	public static utl_throwingAxeman: UnitTypeLine = new UnitTypeLine("Throwing Axeman line", [AoeData.ut_throwingAxeman, AoeData.ut_eliteThrowingAxeman]);
	
	public static ut_huskarl: UnitType = new UnitType("Huskarl", 60, 2.0, 0.0, 0.8, Number.MAX_VALUE, 1.05, 80, 0, 40);
	public static ut_eliteHuskarl: UnitType = new UnitType("Elite Huskarl", 70, 2.0, 0.0, 0.8, Number.MAX_VALUE, 1.05, 80, 0, 40);
	public static utl_huskarl: UnitTypeLine = new UnitTypeLine("Huskarl line", [AoeData.ut_huskarl, AoeData.ut_eliteHuskarl]);
	
	public static ut_samurai: UnitType = new UnitType("Samurai", 60, 1.9, 0.0, 0.8, Number.MAX_VALUE, 1.0, 60, 0, 30);
	public static ut_eliteSamurai: UnitType = new UnitType("Elite Samurai", 80, 1.9, 0.0, 0.8, Number.MAX_VALUE, 1.0, 60, 0, 30);
	public static utl_samurai: UnitTypeLine = new UnitTypeLine("Samurai line", [AoeData.ut_samurai, AoeData.ut_eliteSamurai]);

	public static ut_mangudai: UnitType = new UnitType("Mangudai", 60, 2.1, 4.0, 0.5, 7.0, 1.45, 0, 55, 65, 0.4, 0.0, 95);
	public static ut_eliteMangudai: UnitType = new UnitType("Elite Mangudai", 60, 2.1, 4.0, 0.5, 7.0, 1.45, 0, 55, 65, 0.4, 0.0, 95);
	public static utl_mangudai: UnitTypeLine = new UnitTypeLine("Mangudai line", [AoeData.ut_mangudai, AoeData.ut_eliteMangudai]);
	
	public static ut_warElephant: UnitType = new UnitType("War Elephant", 450, 2.0, 0.0, 0.56, Number.MAX_VALUE, 0.6, 200, 0, 75, 0.6);
	public static ut_eliteWarElephant: UnitType = new UnitType("Elite War Elephant", 600, 2.0, 0.0, 0.56, Number.MAX_VALUE, 0.6, 200, 0, 75, 0.6);
	public static utl_warElephant: UnitTypeLine = new UnitTypeLine("War Elephant line", [AoeData.ut_warElephant, AoeData.ut_eliteWarElephant]);
	
	public static ut_mameluke: UnitType = new UnitType("Mameluke", 65, 2.0, 3.0, 0.2, 7.0, 1.4, 55, 0, 85, 0.4);
	public static ut_eliteMameluke: UnitType = new UnitType("Elite Mameluke", 80, 2.0, 3.0, 0.2, 7.0, 1.4, 55, 0, 85, 0.4);
	public static utl_mameluke: UnitTypeLine = new UnitTypeLine("Mameluke line", [AoeData.ut_mameluke, AoeData.ut_eliteMameluke]);

	public static ut_teutonicKnight: UnitType = new UnitType("Teutonic Knight", 80, 2.0, 0.0, 0.75, Number.MAX_VALUE, 0.80, 85, 0, 40);
	public static ut_eliteTeutonicKnight: UnitType = new UnitType("Elite Teutonic Knight", 100, 2.0, 0.0, 0.75, Number.MAX_VALUE, 0.80, 85, 0, 40);
	public static utl_teutonicKnight: UnitTypeLine = new UnitTypeLine("Teutonic Knight line", [AoeData.ut_teutonicKnight, AoeData.ut_eliteTeutonicKnight]);

	public static ut_janissary: UnitType = new UnitType("Janissary", 35, 3.49, 8.0, 0.4, 5.5, 0.96, 60, 0, 55, 0.2, 0.0, 50);
	public static ut_eliteJanissary: UnitType = new UnitType("Elite Janissary", 40, 3.49, 8.0, 0.0, 5.5, 0.96, 60, 0, 55, 0.2, 0.0, 50);
	public static utl_janissary: UnitTypeLine = new UnitTypeLine("Janissary line", [AoeData.ut_janissary, AoeData.ut_eliteJanissary]);
	
	public static ut_berserk: UnitType = new UnitType("Berserk", 54, 2.0, 0.0, 0.8, Number.MAX_VALUE, 1.05, 65, 0, 25, 0.2, 0.0, 100, 20.0);
	public static ut_eliteBerserk: UnitType = new UnitType("Elite Berserk", 62, 2.0, 0.0, 0.5, Number.MAX_VALUE, 1.05, 65, 0, 25, 0.2, 0.0, 100, 20.0);
	public static utl_berserk: UnitTypeLine = new UnitTypeLine("Berserk line", [AoeData.ut_berserk, AoeData.ut_eliteBerserk]);

	public static ut_jaguarWarrior: UnitType = new UnitType("Jaguar Warrior", 50, 2.0, 0.0, 0.8, Number.MAX_VALUE, 1.0, 60, 0, 30);
	public static ut_eliteJaguarWarrior: UnitType = new UnitType("Elite Jaguar Warrior", 75, 2.0, 0.0, 0.8, Number.MAX_VALUE, 1.0, 60, 0, 30);
	public static utl_jaguarWarrior: UnitTypeLine = new UnitTypeLine("Jaguar line", [AoeData.ut_jaguarWarrior, AoeData.ut_eliteJaguarWarrior]);
	
	public static ut_tarkan: UnitType = new UnitType("Tarkan", 100, 2.1, 0.0, 0.95, Number.MAX_VALUE, 1.35, 60, 0, 60, 0.4);
	public static ut_eliteTarkan: UnitType = new UnitType("Elite Tarkan", 150, 2.1, 0.0, 0.95, Number.MAX_VALUE, 1.35, 60, 0, 60, 0.4);
	public static utl_tarkan: UnitTypeLine = new UnitTypeLine("Tarkan line", [AoeData.ut_tarkan, AoeData.ut_eliteTarkan]);
	
	public static ut_warWagon: UnitType = new UnitType("War Wagon", 150, 2.5, 4.0, 1.0, 6.0, 1.2, 0, 115, 60, 0.8, 0.0, 100);
	public static ut_eliteWarWagon: UnitType = new UnitType("Elite War Wagon", 200, 2.5, 5.0, 1.0, 6.0, 1.2, 0, 115, 60, 0.8, 0.0, 100);
	public static utl_warWagon: UnitTypeLine = new UnitTypeLine("War Wagon line", [AoeData.ut_warWagon, AoeData.ut_eliteWarWagon]);
	
	public static ut_plumedArcher: UnitType = new UnitType("Plumed Archer", 65, 1.9, 4.0, 0.5, 7.0, 1.2, 0, 55, 55, 0.2, 0.0, 80);
	public static ut_elitePlumedArcher: UnitType = new UnitType("Elite Plumed Archer", 65, 1.9, 5.0, 0.5, 7.0, 1.2, 0, 55, 55, 0.2, 0.0, 90);
	public static utl_plumedArcher: UnitTypeLine = new UnitTypeLine("Plumed Archer line", [AoeData.ut_plumedArcher, AoeData.ut_elitePlumedArcher]);
	
	public static ut_conquistador: UnitType = new UnitType("Conquistador", 55, 2.9, 6.0, 0.41, 5.5, 1.3, 60, 0, 70, 0.4, 0.0, 65);
	public static ut_eliteConquistador: UnitType = new UnitType("Elite Conquistador", 70, 2.9, 6.0, 0.41, 5.5, 1.3, 60, 0, 70, 0.4, 0.0, 70);
	public static utl_conquistador: UnitTypeLine = new UnitTypeLine("Conquistador line", [AoeData.ut_conquistador, AoeData.ut_eliteConquistador]);

	public static ut_kamayuk: UnitType = new UnitType("Kamayuk", 60, 2.0, 1.0, 0.5, Number.MAX_VALUE, 1.0, 60, 0, 30);
	public static ut_eliteKamayuk: UnitType = new UnitType("Elite Kamayuk", 80, 2.0, 1.0, 0.5, Number.MAX_VALUE, 1.0, 60, 0, 30);
	public static utl_kamayuk: UnitTypeLine = new UnitTypeLine("Kamayuk line", [AoeData.ut_kamayuk, AoeData.ut_eliteKamayuk]);
	
	public static ut_slinger: UnitType = new UnitType("Slinger", 40, 2.0, 5.0, 0.8, 5.5, 0.96, 30, 0, 40, 0.2, 1.0, 90);
	public static utl_slinger: UnitTypeLine = new UnitTypeLine("Slinger line", [AoeData.ut_slinger]);
	
	public static ut_elephantArcher: UnitType = new UnitType("Elephant Archer", 280, 2.0, 4.0, 0.4, 7.0, 0.8, 100, 0, 70, 0.6);
	public static ut_eliteElephantArcher: UnitType = new UnitType("Elite Elephant Archer", 330, 2.0, 4.0, 0.4, 7.0, 0.8, 100, 0, 70, 0.6);
	public static utl_elephantArcher: UnitTypeLine = new UnitTypeLine("Elephant Archer line", [AoeData.ut_elephantArcher, AoeData.ut_eliteElephantArcher]);
	
	public static ut_genoeseCrossbowman: UnitType = new UnitType("Gen. Crossbowman", 45, 2.0, 4.0, 0.5, 7.0, 0.96, 0, 45, 45);
	public static ut_eliteGenoeseCrossbowman: UnitType = new UnitType("El. Gen. Crossbowman", 50, 2.0, 4.0, 0.5, 7.0, 0.96, 0, 45, 45);
	public static utl_genoeseCrossbowman: UnitTypeLine = new UnitTypeLine("Gen. Crossbowman line", [AoeData.ut_genoeseCrossbowman, AoeData.ut_eliteGenoeseCrossbowman]);
	
	public static ut_condottiero: UnitType = new UnitType("Condottiero", 80, 1.9, 0.0, 0.75, Number.MAX_VALUE, 1.2, 50, 0, 35);
	public static utl_condottiero: UnitTypeLine = new UnitTypeLine("Condottiero line", [AoeData.ut_condottiero]);
	
	public static ut_magyarHuszar: UnitType = new UnitType("Magyar Huszar", 70, 1.8, 0.0, 0.68, Number.MAX_VALUE, 1.5, 80, 0, 10, 0.4);
	public static ut_eliteMagyarHuszar: UnitType = new UnitType("Elite Magyar Huszar", 85, 1.8, 0.0, 0.68, Number.MAX_VALUE, 1.5, 80, 0, 10, 0.4);
	public static utl_magyarHuszar: UnitTypeLine = new UnitTypeLine("Magyar Huszar line", [AoeData.ut_magyarHuszar, AoeData.ut_eliteMagyarHuszar]);
	
	public static ut_boyar: UnitType = new UnitType("Boyar", 100, 1.9, 0.0, 0.7, Number.MAX_VALUE, 1.3, 50, 0, 80, 0.4);
	public static ut_eliteBoyar: UnitType = new UnitType("Elite Boyar", 130, 1.9, 0.0, 0.7, Number.MAX_VALUE, 1.3, 50, 0, 80, 0.4);
	public static utl_boyar: UnitTypeLine = new UnitTypeLine("Boyar line", [AoeData.ut_boyar, AoeData.ut_eliteBoyar]);

	public static ut_camelArcher: UnitType = new UnitType("Camel Archer", 55, 2.0, 4.0, 0.63, 7.0, 1.4, 0, 50, 60, 0.4, 0.0, 95, 0.0);
	public static ut_eliteCamelArcher: UnitType = new UnitType("Elite Camel Archer", 60, 2.0, 4.0, 0.63, 7.0, 1.4, 0, 50, 60, 0.4, 0.0, 95, 0.0);
	public static utl_camelArcher: UnitTypeLine = new UnitTypeLine("Camel Archer line", [AoeData.ut_camelArcher, AoeData.ut_eliteCamelArcher]);
	
	public static ut_genitour: UnitType = new UnitType("Genitour", 50, 3.0, 4.0, 0.5, 7.0, 1.35, 50, 35, 0, 0.4, 1.0, 90);
	public static ut_eliteGenitour: UnitType = new UnitType("Elite Genitour", 55, 3.0, 4.0, 0.5, 7.0, 1.35, 50, 35, 0, 0.4, 1.0, 90);
	public static utl_genitour: UnitTypeLine = new UnitTypeLine("Genitour line", [AoeData.ut_genitour, AoeData.ut_eliteGenitour]);
	
	public static ut_shotelWarrior: UnitType = new UnitType("Shotel Warrior", 40, 2.0, 0.0, 0.75, Number.MAX_VALUE, 1.2, 50, 0, 35);
	public static ut_eliteShotelWarrior: UnitType = new UnitType("Elite Shotel Warrior", 50, 2.0, 0.0, 0.75, Number.MAX_VALUE, 1.2, 50, 0, 35);
	public static utl_shotelWarrior: UnitTypeLine = new UnitTypeLine("Shotel Warrior line", [AoeData.ut_shotelWarrior, AoeData.ut_eliteShotelWarrior]);
	
	public static ut_gbeto: UnitType = new UnitType("Gbeto", 30, 2.0, 5.0, 1.2, 7.0, 1.25, 50, 0, 40);
	public static ut_eliteGbeto: UnitType = new UnitType("Elite Gbeto", 45, 2.0, 6.0, 1.2, 7.0, 1.25, 50, 0, 40);
	public static utl_gbeto: UnitTypeLine = new UnitTypeLine("Gbeto line", [AoeData.ut_gbeto, AoeData.ut_eliteGbeto]);

	public static ut_organGun: UnitType = new UnitType("Organ Gun", 60, 3.45, 7.0, 0.6, 5.5, 0.85, 0, 80, 70, 0.4, 1.0, 50);
	public static ut_eliteOrganGun: UnitType = new UnitType("Elite Organ Gun", 70, 3.45, 7.0, 0.6, 5.5, 0.85, 0, 80, 70, 0.4, 1.0, 50);
	public static utl_organGun: UnitTypeLine = new UnitTypeLine("Organ Gun line", [AoeData.ut_organGun, AoeData.ut_eliteOrganGun]);

	public static ut_arambai: UnitType = new UnitType("Arambai", 60, 2.0, 5.0, 0.6, 7.0, 1.3, 0, 75, 60, 0.4, 0.0, 30);
	public static ut_eliteArambai: UnitType = new UnitType("Elite Arambai", 65, 2.0, 5.0, 0.6, 7.0, 1.3, 0, 75, 60, 0.4, 0.0, 30);
	public static utl_arambai: UnitTypeLine = new UnitTypeLine("Arambai line", [AoeData.ut_arambai, AoeData.ut_eliteArambai]);
	
	public static ut_ballistaElephant: UnitType = new UnitType("Ballista Elephant", 250, 2.5, 5.0, 0.4, 6.0, 0.80, 100, 0, 80, 0.6);
	public static ut_eliteBallistaElephant: UnitType = new UnitType("Elite Ballista Elephant", 290, 2.5, 5.0, 0.4, 6.0, 0.80, 100, 0, 80, 0.6);
	public static utl_ballistaElephant: UnitTypeLine = new UnitTypeLine("Ballista Elephant line", [AoeData.ut_ballistaElephant, AoeData.ut_eliteBallistaElephant]);

	public static ut_karambitWarrior: UnitType = new UnitType("Karambit Warrior", 30, 2.0, 0.0, 0.81, Number.MAX_VALUE, 1.2, 25, 0, 15);
	public static ut_eliteKarambitWarrior: UnitType = new UnitType("Elite Karambit Warrior", 40, 2.0, 0.0, 0.81, Number.MAX_VALUE, 1.2, 25, 0, 15);
	public static utl_karambitWarrior: UnitTypeLine = new UnitTypeLine("Karambit Warrior line", [AoeData.ut_karambitWarrior, AoeData.ut_eliteKarambitWarrior]);
	
	public static ut_rattanArcher: UnitType = new UnitType("Rattan Archer", 40, 2.0, 4.0, 0.69, 7.0, 1.1, 0, 50, 45, 0.2, 0.0, 80);
	public static ut_eliteRattanArcher: UnitType = new UnitType("Elite Rattan Archer", 45, 2.0, 5.0, 0.69, 7.0, 1.1, 0, 50, 45, 0.2, 0.0, 90);
	public static utl_rattanArcher: UnitTypeLine = new UnitTypeLine("Rattan Archer line", [AoeData.ut_rattanArcher, AoeData.ut_eliteRattanArcher]);

	public static ut_konnik: UnitType = new UnitType("Konnik", 100, 2.4, 0.0, 0.7, Number.MAX_VALUE, 1.35, 60, 0, 70, 0.4);
	public static ut_eliteKonnik: UnitType = new UnitType("Elite Konnik", 120, 2.4, 0.0, 0.7, Number.MAX_VALUE, 1.35, 60, 0, 70, 0.4);
	public static utl_konnik: UnitTypeLine = new UnitTypeLine("Konnik line", [AoeData.ut_konnik, AoeData.ut_eliteKonnik]);

	public static ut_konnikDismounted: UnitType = new UnitType("Konnik (Foot)", 45, 2.4, 0.0, 0.7, Number.MAX_VALUE, 0.9, 30, 0, 35);
	public static ut_eliteKonnikDismounted: UnitType = new UnitType("Elite Konnik (Foot)", 50, 2.4, 0.0, 0.7, Number.MAX_VALUE, 0.9, 30, 0, 35);
	public static utl_konnikDismounted: UnitTypeLine = new UnitTypeLine("Konnik (Foot) line", [AoeData.ut_konnikDismounted, AoeData.ut_eliteKonnikDismounted]);
	
	public static ut_kipchak: UnitType = new UnitType("Kipchak", 40, 2.2, 4.0, 0.0, 7.0, 1.4, 0, 60, 35, 0.4, 0.0, 90);
	public static ut_eliteKipchak: UnitType = new UnitType("Elite Kipchak", 45, 2.2, 4.0, 0.0, 7.0, 1.4, 0, 60, 35, 0.4, 0.0, 90);
	public static utl_kipchak: UnitTypeLine = new UnitTypeLine("Kipchak line", [AoeData.ut_kipchak, AoeData.ut_eliteKipchak]);
	
	public static ut_leitis: UnitType = new UnitType("Leitis", 100, 1.9, 0.0, 0.7, Number.MAX_VALUE, 1.4, 70, 0, 50, 0.4);
	public static ut_eliteLeitis: UnitType = new UnitType("Elite Leitis", 130, 1.9, 0.0, 0.7, Number.MAX_VALUE, 1.4, 70, 0, 50, 0.4);
	public static utl_leitis: UnitTypeLine = new UnitTypeLine("Leitis line", [AoeData.ut_leitis, AoeData.ut_eliteLeitis]);
	
	public static ut_keshik: UnitType = new UnitType("Keshik", 110, 1.9, 0.0, 0.7, Number.MAX_VALUE, 1.4, 50, 0, 40, 0.4);
	public static ut_eliteKeshik: UnitType = new UnitType("Elite Keshik", 140, 1.9, 0.0, 0.7, Number.MAX_VALUE, 1.4, 50, 0, 40, 0.4);
	public static utl_keshik: UnitTypeLine = new UnitTypeLine("Keshik line", [AoeData.ut_keshik, AoeData.ut_eliteKeshik]);
	
	public static ut_flamingCamel: UnitType = new UnitType("Flaming Camel", 55, Number.MAX_VALUE, 0.0, 0.0, Number.MAX_VALUE, 1.3, 75, 0, 30, 0.4);
	public static utl_flamingCamel: UnitTypeLine = new UnitTypeLine("Flaming Camel line", [AoeData.ut_flamingCamel]);


	public static unitTypesList: UnitType[] = [AoeData.ut_villager,
		AoeData.ut_militia, AoeData.ut_manAtArms, AoeData.ut_longSwordsman, AoeData.ut_twoHandedSwordsman, AoeData.ut_champion,
		AoeData.ut_spearman, AoeData.ut_pikeman, AoeData.ut_halberdier,
		AoeData.ut_eagleScout, AoeData.ut_eagleWarrior, AoeData.ut_eliteEagleWarrior,
		AoeData.ut_scoutCavalry, AoeData.ut_lightCavalry, AoeData.ut_hussar,
		AoeData.ut_knight, AoeData.ut_cavalier, AoeData.ut_paladin,
		AoeData.ut_camelRider, AoeData.ut_heavyCamelRider, AoeData.ut_imperialCamelRider,
		AoeData.ut_battleElephant, AoeData.ut_eliteBattleElephant,
		AoeData.ut_steppeLancer, AoeData.ut_eliteSteppeLancer,
		AoeData.ut_archer, AoeData.ut_crossbowman, AoeData.ut_arbalester,
		AoeData.ut_skirmisher, AoeData.ut_eliteSkirmisher, AoeData.ut_imperialSkirmisher,
		AoeData.ut_cavalryArcher, AoeData.ut_heavyCavalryArcher,
		AoeData.ut_handCannoneer,
		AoeData.ut_batteringRam, AoeData.ut_cappedRam, AoeData.ut_siegeRam,
		AoeData.ut_scorpion, AoeData.ut_heavyScorpion,
		AoeData.ut_longbowman, AoeData.ut_eliteLongbowman,
		AoeData.ut_cataphract, AoeData.ut_eliteCataphract,
		AoeData.ut_woadRaider, AoeData.ut_eliteWoadRaider,
		AoeData.ut_chuKoNu, AoeData.ut_eliteChuKoNu,
		AoeData.ut_throwingAxeman, AoeData.ut_eliteThrowingAxeman,
		AoeData.ut_huskarl, AoeData.ut_eliteHuskarl,
		AoeData.ut_samurai, AoeData.ut_eliteSamurai,
		AoeData.ut_mangudai, AoeData.ut_eliteMangudai,
		AoeData.ut_warElephant, AoeData.ut_eliteWarElephant,
		AoeData.ut_mameluke, AoeData.ut_eliteMameluke,
		AoeData.ut_teutonicKnight, AoeData.ut_eliteTeutonicKnight,
		AoeData.ut_janissary,  AoeData.ut_eliteJanissary, 
		AoeData.ut_berserk, AoeData.ut_eliteBerserk,
		AoeData.ut_jaguarWarrior, AoeData.ut_eliteJaguarWarrior,
		AoeData.ut_tarkan, AoeData.ut_eliteTarkan,
		AoeData.ut_warWagon, AoeData.ut_eliteWarWagon,
		AoeData.ut_plumedArcher, AoeData.ut_elitePlumedArcher,
		AoeData.ut_conquistador, AoeData.ut_eliteConquistador,
		AoeData.ut_kamayuk, AoeData.ut_eliteKamayuk,
		AoeData.ut_slinger,
		AoeData.ut_elephantArcher, AoeData.ut_eliteElephantArcher,
		AoeData.ut_genoeseCrossbowman, AoeData.ut_eliteGenoeseCrossbowman,
		AoeData.ut_condottiero,
		AoeData.ut_magyarHuszar, AoeData.ut_eliteMagyarHuszar,
		AoeData.ut_boyar, AoeData.ut_eliteBoyar,
		AoeData.ut_camelArcher, AoeData.ut_eliteCamelArcher,
		AoeData.ut_genitour, AoeData.ut_eliteGenitour,
		AoeData.ut_shotelWarrior, AoeData.ut_eliteShotelWarrior,
		AoeData.ut_gbeto, AoeData.ut_eliteGbeto,
		AoeData.ut_organGun, AoeData.ut_eliteOrganGun,
		AoeData.ut_arambai, AoeData.ut_eliteArambai,
		AoeData.ut_ballistaElephant, AoeData.ut_eliteBallistaElephant,
		AoeData.ut_karambitWarrior, AoeData.ut_eliteKarambitWarrior,
		AoeData.ut_rattanArcher, AoeData.ut_eliteRattanArcher,
		AoeData.ut_konnik, AoeData.ut_eliteKonnik,
		AoeData.ut_konnikDismounted, AoeData.ut_eliteKonnikDismounted,
		AoeData.ut_kipchak, AoeData.ut_eliteKipchak,
		AoeData.ut_leitis, AoeData.ut_eliteLeitis,
		AoeData.ut_keshik, AoeData.ut_eliteKeshik,
		AoeData.ut_flamingCamel
	];

	public static unitTypeLinesList: UnitTypeLine[] = [AoeData.utl_villager, AoeData.utl_militia, AoeData.utl_spearman, AoeData.utl_eagleScout,
		AoeData.utl_scoutCavalry, AoeData.utl_knight, AoeData.utl_camelRider, AoeData.utl_battleElephant, AoeData.utl_steppeLancer,
		AoeData.utl_archer, AoeData.utl_skirmisher, AoeData.utl_cavalryArcher, AoeData.utl_handCannoneer,
		AoeData.utl_batteringRam, AoeData.utl_scorpion,
		AoeData.utl_longbowman, AoeData.utl_cataphract, AoeData.utl_woadRaider, AoeData.utl_chuKoNu, AoeData.utl_throwingAxeman, AoeData.utl_huskarl, AoeData.utl_samurai,
		AoeData.utl_mangudai, AoeData.utl_warElephant, AoeData.utl_mameluke, AoeData.utl_teutonicKnight, AoeData.utl_janissary,  AoeData.utl_berserk,
		AoeData.utl_jaguarWarrior, AoeData.utl_tarkan, AoeData.utl_warWagon, AoeData.utl_plumedArcher, AoeData.utl_conquistador,
		AoeData.utl_kamayuk, AoeData.utl_slinger, AoeData.utl_elephantArcher, AoeData.utl_genoeseCrossbowman, AoeData.utl_condottiero, AoeData.utl_magyarHuszar, AoeData.utl_boyar,
		AoeData.utl_camelArcher, AoeData.utl_genitour, AoeData.utl_shotelWarrior, AoeData.utl_gbeto, AoeData.utl_organGun,
		AoeData.utl_arambai, AoeData.utl_ballistaElephant, AoeData.utl_karambitWarrior, AoeData.utl_rattanArcher,
		AoeData.utl_konnik, AoeData.utl_konnikDismounted, AoeData.utl_kipchak, AoeData.utl_leitis, AoeData.utl_keshik, AoeData.utl_flamingCamel
	];

	public static tec_supplies: Technology = new Technology("Supplies", 2);
	public static tec_squires: Technology = new Technology("Squires", 3);
	public static tec_thumbRing: Technology = new Technology("Thumb Ring", 3);
	public static tec_parthianTactics: Technology = new Technology("Parthian Tactics", 4);
	public static tec_chemistry: Technology = new Technology("Chemistry", 4);
	public static tec_siegeEngineers: Technology = new Technology("Siege Engineers", 4);
	public static tec_bloodlines: Technology = new Technology("Bloodlines", 2);
	public static tec_husbandry: Technology = new Technology("Husbandry", 3);
	public static tec_loom: Technology = new Technology("Loom", 1);
	public static tec_wheelbarrow: Technology = new Technology("Wheelbarrow", 2);
	public static tec_handCart: Technology = new Technology("Hand Cart", 3);
	public static tec_forging: Technology = new Technology("Forging", 2);
	public static tec_ironCasting: Technology = new Technology("Iron Casting", 3);
	public static tec_blastFurnace: Technology = new Technology("Blast Furnace", 4);
	public static tec_scaleMailArmor: Technology = new Technology("Scale Mail Armor", 2);
	public static tec_chainMailArmor: Technology = new Technology("Chain Mail Armor", 3);
	public static tec_plateMailArmor: Technology = new Technology("Plate Mail Armor", 4);
	public static tec_scaleBardingArmor: Technology = new Technology("Scale Barding Armor", 2);
	public static tec_chainBardingArmor: Technology = new Technology("Chain Barding Armor", 3);
	public static tec_plateBardingArmor: Technology = new Technology("Plate Barding Armor", 4);
	public static tec_fletching: Technology = new Technology("Fletching", 2);
	public static tec_bodkinArrow: Technology = new Technology("Bodkin Arrow", 3);
	public static tec_bracer: Technology = new Technology("Bracer", 4);
	public static tec_paddedArcherArmor: Technology = new Technology("Padded Archer Armor", 2);
	public static tec_leatherArcherArmor: Technology = new Technology("Leather Archer Armor", 3);
	public static tec_ringArcherArmor: Technology = new Technology("Ring Archer Armor", 4);

	
	public static civ_aztecs: Civilization = new Civilization("Aztecs");
	public static civ_berbers: Civilization = new Civilization("Berbers");
	public static civ_britons: Civilization = new Civilization("Britons");
	public static civ_bulgarians: Civilization = new Civilization("Bulgar.");
	public static civ_burmese: Civilization = new Civilization("Burmese");
	public static civ_byzantines: Civilization = new Civilization("Byzant.");
	public static civ_celts: Civilization = new Civilization("Celts");
	public static civ_chinese: Civilization = new Civilization("Chinese");
	public static civ_cumans: Civilization = new Civilization("Cumans");
	public static civ_ethiopians: Civilization = new Civilization("Ethiop.");
	public static civ_franks: Civilization = new Civilization("Franks");
	public static civ_goths: Civilization = new Civilization("Goths");
	public static civ_huns: Civilization = new Civilization("Huns");
	public static civ_incas: Civilization = new Civilization("Incas");
	public static civ_indians: Civilization = new Civilization("Indians");
	public static civ_italians: Civilization = new Civilization("Italians");
	public static civ_japanese: Civilization = new Civilization("Japan.");
	public static civ_khmer: Civilization = new Civilization("Khmer");
	public static civ_koreans: Civilization = new Civilization("Koreans");
	public static civ_lithuanians: Civilization = new Civilization("Lithuan.");
	public static civ_magyars: Civilization = new Civilization("Magyars");
	public static civ_malay: Civilization = new Civilization("Malay");
	public static civ_malians: Civilization = new Civilization("Malians");
	public static civ_mayans: Civilization = new Civilization("Mayans");
	public static civ_mongols: Civilization = new Civilization("Mongols");
	public static civ_persians: Civilization = new Civilization("Persians");
	public static civ_portuguese: Civilization = new Civilization("Portug.");
	public static civ_saracens: Civilization = new Civilization("Saracens");
	public static civ_slavs: Civilization = new Civilization("Slavs");
	public static civ_spanish: Civilization = new Civilization("Spanish");
	public static civ_tatars: Civilization = new Civilization("Tatars");
	public static civ_teutons: Civilization = new Civilization("Teutons");
	public static civ_turks: Civilization = new Civilization("Turks");
	public static civ_vietnamese: Civilization = new Civilization("Vietnam.");
	public static civ_vikings: Civilization = new Civilization("Vikings");
	public static civ_generic: Civilization = new Civilization("Generic");

	public static civsList: Civilization[] = [
		AoeData.civ_aztecs, AoeData.civ_berbers, AoeData.civ_britons, AoeData.civ_bulgarians, AoeData.civ_burmese,
		AoeData.civ_byzantines, AoeData.civ_celts, AoeData.civ_chinese, AoeData.civ_cumans, AoeData.civ_ethiopians,
		AoeData.civ_franks, AoeData.civ_goths, AoeData.civ_huns, AoeData.civ_incas, AoeData.civ_indians,
		AoeData.civ_italians, AoeData.civ_japanese, AoeData.civ_khmer, AoeData.civ_koreans, AoeData.civ_lithuanians,
		AoeData.civ_magyars, AoeData.civ_malay, AoeData.civ_malians, AoeData.civ_mayans, AoeData.civ_mongols,
		AoeData.civ_persians, AoeData.civ_portuguese, AoeData.civ_saracens, AoeData.civ_slavs, AoeData.civ_spanish,
		AoeData.civ_tatars, AoeData.civ_teutons, AoeData.civ_turks, AoeData.civ_vietnamese, AoeData.civ_vikings,
		AoeData.civ_generic
	];
	
	public static InitializeUnitTypes(): void
	{
		for (let i: number = 0; i < AoeData.unitTypesList.length; i++)
		{
			AoeData.unitTypesList[i].unitTypeIndex = i;
		}

		AoeData.ut_villager.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_villager.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_villager.attackValues.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_villager.imagePath = "assets/unitTypes/MaleVillDE.jpg";
		AoeData.ut_villager.techsForUnitList.push(this.tec_loom);
		AoeData.ut_villager.techsForUnitList.push(this.tec_wheelbarrow);
		AoeData.ut_villager.techsForUnitList.push(this.tec_handCart);

		AoeData.ut_militia.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_militia.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_militia.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_militia.attackValues.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_militia.imagePath = "assets/unitTypes/MilitiaDE.png";
		AoeData.ut_militia.techsForUnitList.push(this.tec_supplies, this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_manAtArms.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_manAtArms.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_manAtArms.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_manAtArms.attackValues.set(AoeData.ac_eagleWarrior, 2);
		AoeData.ut_manAtArms.attackValues.set(AoeData.ac_baseMelee, 6);
		AoeData.ut_manAtArms.imagePath = "assets/unitTypes/Manatarms_aoe2DE.png";
		AoeData.ut_manAtArms.techsForUnitList.push(this.tec_supplies, this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_longSwordsman.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_longSwordsman.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_longSwordsman.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_longSwordsman.attackValues.set(AoeData.ac_eagleWarrior, 6);
		AoeData.ut_longSwordsman.attackValues.set(AoeData.ac_baseMelee, 9);
		AoeData.ut_longSwordsman.imagePath = "assets/unitTypes/Longswordsman_aoe2DE.png";
		AoeData.ut_longSwordsman.techsForUnitList.push(this.tec_supplies, this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_twoHandedSwordsman.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_twoHandedSwordsman.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_twoHandedSwordsman.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_twoHandedSwordsman.attackValues.set(AoeData.ac_eagleWarrior, 8);
		AoeData.ut_twoHandedSwordsman.attackValues.set(AoeData.ac_baseMelee, 12);
		AoeData.ut_twoHandedSwordsman.imagePath = "assets/unitTypes/Twohanded_aoe2DE.png";
		AoeData.ut_twoHandedSwordsman.techsForUnitList.push(this.tec_supplies, this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_champion.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_champion.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_champion.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_champion.attackValues.set(AoeData.ac_eagleWarrior, 8);
		AoeData.ut_champion.attackValues.set(AoeData.ac_baseMelee, 13);
		AoeData.ut_champion.imagePath = "assets/unitTypes/Champion_aoe2DE.png";
		AoeData.ut_champion.techsForUnitList.push(this.tec_supplies, this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_spearman.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_spearman.armorClasses.set(AoeData.ac_spearman, 0);
		AoeData.ut_spearman.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_spearman.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_spearman.attackValues.set(AoeData.ac_cavalry, 15);
		AoeData.ut_spearman.attackValues.set(AoeData.ac_warElephant, 15);
		AoeData.ut_spearman.attackValues.set(AoeData.ac_camel, 12);
		AoeData.ut_spearman.attackValues.set(AoeData.ac_mameluke, 4);
		AoeData.ut_spearman.attackValues.set(AoeData.ac_eagleWarrior, 1);
		AoeData.ut_spearman.attackValues.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_spearman.imagePath = "assets/unitTypes/Spearman_aoe2DE.png";
		AoeData.ut_spearman.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_pikeman.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_pikeman.armorClasses.set(AoeData.ac_spearman, 0);
		AoeData.ut_pikeman.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_pikeman.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_pikeman.attackValues.set(AoeData.ac_cavalry, 22);
		AoeData.ut_pikeman.attackValues.set(AoeData.ac_warElephant, 25);
		AoeData.ut_pikeman.attackValues.set(AoeData.ac_camel, 18);
		AoeData.ut_pikeman.attackValues.set(AoeData.ac_mameluke, 11);
		AoeData.ut_pikeman.attackValues.set(AoeData.ac_eagleWarrior, 1);
		AoeData.ut_pikeman.attackValues.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_pikeman.imagePath = "assets/unitTypes/Aoe2-infantry-2-pikeman.png";
		AoeData.ut_pikeman.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_halberdier.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_halberdier.armorClasses.set(AoeData.ac_spearman, 0);
		AoeData.ut_halberdier.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_halberdier.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_halberdier.attackValues.set(AoeData.ac_cavalry, 32);
		AoeData.ut_halberdier.attackValues.set(AoeData.ac_warElephant, 28);
		AoeData.ut_halberdier.attackValues.set(AoeData.ac_camel, 26);
		AoeData.ut_halberdier.attackValues.set(AoeData.ac_mameluke, 11);
		AoeData.ut_halberdier.attackValues.set(AoeData.ac_eagleWarrior, 1);
		AoeData.ut_halberdier.attackValues.set(AoeData.ac_baseMelee, 6);
		AoeData.ut_halberdier.imagePath = "assets/unitTypes/Halberdier_aoe2DE.png";
		AoeData.ut_halberdier.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eagleScout.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eagleScout.armorClasses.set(AoeData.ac_eagleWarrior, 0);
		AoeData.ut_eagleScout.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eagleScout.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_eagleScout.attackValues.set(AoeData.ac_siegeWeapon, 3);
		AoeData.ut_eagleScout.attackValues.set(AoeData.ac_cavalry, 2);
		AoeData.ut_eagleScout.attackValues.set(AoeData.ac_camel, 1);
		AoeData.ut_eagleScout.attackValues.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_eagleScout.imagePath = "assets/unitTypes/Eaglescout_aoe2DE.png";
		AoeData.ut_eagleScout.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eagleWarrior.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eagleWarrior.armorClasses.set(AoeData.ac_eagleWarrior, 0);
		AoeData.ut_eagleWarrior.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eagleWarrior.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_eagleWarrior.attackValues.set(AoeData.ac_siegeWeapon, 3);
		AoeData.ut_eagleWarrior.attackValues.set(AoeData.ac_cavalry, 3);
		AoeData.ut_eagleWarrior.attackValues.set(AoeData.ac_camel, 2);
		AoeData.ut_eagleWarrior.attackValues.set(AoeData.ac_baseMelee, 7);
		AoeData.ut_eagleWarrior.imagePath = "assets/unitTypes/Eaglewarrior_aoe2DE.png";
		AoeData.ut_eagleWarrior.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eliteEagleWarrior.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteEagleWarrior.armorClasses.set(AoeData.ac_eagleWarrior, 0);
		AoeData.ut_eliteEagleWarrior.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteEagleWarrior.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_eliteEagleWarrior.attackValues.set(AoeData.ac_siegeWeapon, 5);
		AoeData.ut_eliteEagleWarrior.attackValues.set(AoeData.ac_cavalry, 4);
		AoeData.ut_eliteEagleWarrior.attackValues.set(AoeData.ac_camel, 3);
		AoeData.ut_eliteEagleWarrior.attackValues.set(AoeData.ac_baseMelee, 9);
		AoeData.ut_eliteEagleWarrior.imagePath = "assets/unitTypes/Eliteeaglewarrior_aoe2DE.png";
		AoeData.ut_eliteEagleWarrior.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_scoutCavalry.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_scoutCavalry.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_scoutCavalry.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_scoutCavalry.attackValues.set(AoeData.ac_baseMelee, 5);
		AoeData.ut_scoutCavalry.imagePath = "assets/unitTypes/Scoutcavalry_aoe2DE.png";
		AoeData.ut_scoutCavalry.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_lightCavalry.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_lightCavalry.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_lightCavalry.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_lightCavalry.attackValues.set(AoeData.ac_baseMelee, 7);
		AoeData.ut_lightCavalry.imagePath = "assets/unitTypes/Lightcavalry_aoe2DE.png";
		AoeData.ut_lightCavalry.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_hussar.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_hussar.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_hussar.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_hussar.attackValues.set(AoeData.ac_baseMelee, 7);
		AoeData.ut_hussar.imagePath = "assets/unitTypes/Hussar_aoe2DE.png";
		AoeData.ut_hussar.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);
		
		AoeData.ut_knight.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_knight.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_knight.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_knight.attackValues.set(AoeData.ac_baseMelee, 10);
		AoeData.ut_knight.imagePath = "assets/unitTypes/Knight_aoe2DE.png";
		AoeData.ut_knight.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_cavalier.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_cavalier.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_cavalier.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_cavalier.attackValues.set(AoeData.ac_baseMelee, 12);
		AoeData.ut_cavalier.imagePath = "assets/unitTypes/Cavalier_aoe2DE.png";
		AoeData.ut_cavalier.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_paladin.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_paladin.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_paladin.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_paladin.attackValues.set(AoeData.ac_baseMelee, 14);
		AoeData.ut_paladin.imagePath = "assets/unitTypes/Paladin_aoe2DE.png";
		AoeData.ut_paladin.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_camelRider.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_camelRider.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_camelRider.armorClasses.set(AoeData.ac_camel, 0);
		AoeData.ut_camelRider.attackValues.set(AoeData.ac_baseMelee, 6);
		AoeData.ut_camelRider.attackValues.set(AoeData.ac_cavalry, 9);
		AoeData.ut_camelRider.attackValues.set(AoeData.ac_camel, 5);
		AoeData.ut_camelRider.imagePath = "assets/unitTypes/Camelrider_aoe2DE.png";
		AoeData.ut_camelRider.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_heavyCamelRider.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_heavyCamelRider.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_heavyCamelRider.armorClasses.set(AoeData.ac_camel, 0);
		AoeData.ut_heavyCamelRider.attackValues.set(AoeData.ac_baseMelee, 7);
		AoeData.ut_heavyCamelRider.attackValues.set(AoeData.ac_cavalry, 18);
		AoeData.ut_heavyCamelRider.attackValues.set(AoeData.ac_camel, 9);
		AoeData.ut_heavyCamelRider.attackValues.set(AoeData.ac_mameluke, 7);
		AoeData.ut_heavyCamelRider.imagePath = "assets/unitTypes/Aoe2_heavycamelriderDE.png";
		AoeData.ut_heavyCamelRider.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_imperialCamelRider.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_imperialCamelRider.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_imperialCamelRider.armorClasses.set(AoeData.ac_camel, 0);
		AoeData.ut_imperialCamelRider.attackValues.set(AoeData.ac_baseMelee, 9);
		AoeData.ut_imperialCamelRider.attackValues.set(AoeData.ac_cavalry, 18);
		AoeData.ut_imperialCamelRider.attackValues.set(AoeData.ac_camel, 9);
		AoeData.ut_imperialCamelRider.attackValues.set(AoeData.ac_mameluke, 7);
		AoeData.ut_imperialCamelRider.imagePath = "assets/unitTypes/ImperialCamelRiderIcon-DE.png";
		AoeData.ut_imperialCamelRider.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_battleElephant.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_battleElephant.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_battleElephant.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_battleElephant.armorClasses.set(AoeData.ac_warElephant, 0);
		AoeData.ut_battleElephant.attackValues.set(AoeData.ac_baseMelee, 12);
		AoeData.ut_battleElephant.cleaveType = 4;
		AoeData.ut_battleElephant.cleaveRadius = 0.4;
		AoeData.ut_battleElephant.imagePath = "assets/unitTypes/Battle_elephant_aoe2DE.png";
		AoeData.ut_battleElephant.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_eliteBattleElephant.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_eliteBattleElephant.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_eliteBattleElephant.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteBattleElephant.armorClasses.set(AoeData.ac_warElephant, 0);
		AoeData.ut_eliteBattleElephant.attackValues.set(AoeData.ac_baseMelee, 14);
		AoeData.ut_eliteBattleElephant.cleaveType = 4;
		AoeData.ut_eliteBattleElephant.cleaveRadius = 0.4;
		AoeData.ut_eliteBattleElephant.imagePath = "assets/unitTypes/Elite_battle_elephant_aoe2DE.png";
		AoeData.ut_eliteBattleElephant.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_steppeLancer.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_steppeLancer.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_steppeLancer.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_steppeLancer.attackValues.set(AoeData.ac_baseMelee, 9);
		AoeData.ut_steppeLancer.imagePath = "assets/unitTypes/Steppelancericon.png";
		AoeData.ut_steppeLancer.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_eliteSteppeLancer.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteSteppeLancer.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_eliteSteppeLancer.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteSteppeLancer.attackValues.set(AoeData.ac_baseMelee, 11);
		AoeData.ut_eliteSteppeLancer.imagePath = "assets/unitTypes/Elitesteppelancericon.png";
		AoeData.ut_eliteSteppeLancer.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_archer.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_archer.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_archer.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_archer.attackValues.set(AoeData.ac_basePierce, 4);
		AoeData.ut_archer.attackValues.set(AoeData.ac_spearman, 3);
		AoeData.ut_archer.imagePath = "assets/unitTypes/Archer_aoe2DE.png";
		AoeData.ut_archer.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_crossbowman.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_crossbowman.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_crossbowman.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_crossbowman.attackValues.set(AoeData.ac_basePierce, 5);
		AoeData.ut_crossbowman.attackValues.set(AoeData.ac_spearman, 3);
		AoeData.ut_crossbowman.imagePath = "assets/unitTypes/Crossbowman_aoe2DE.png";
		AoeData.ut_crossbowman.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_arbalester.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_arbalester.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_arbalester.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_arbalester.attackValues.set(AoeData.ac_basePierce, 6);
		AoeData.ut_arbalester.attackValues.set(AoeData.ac_spearman, 3);
		AoeData.ut_arbalester.imagePath = "assets/unitTypes/Arbalester_aoe2DE.png";
		AoeData.ut_arbalester.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_skirmisher.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_skirmisher.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_skirmisher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_skirmisher.attackValues.set(AoeData.ac_basePierce, 2);
		AoeData.ut_skirmisher.attackValues.set(AoeData.ac_archer, 3);
		AoeData.ut_skirmisher.attackValues.set(AoeData.ac_spearman, 3);
		AoeData.ut_skirmisher.imagePath = "assets/unitTypes/Skirmisher_aoe2DE.png";
		AoeData.ut_skirmisher.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteSkirmisher.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteSkirmisher.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_eliteSkirmisher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteSkirmisher.attackValues.set(AoeData.ac_basePierce, 3);
		AoeData.ut_eliteSkirmisher.attackValues.set(AoeData.ac_archer, 4);
		AoeData.ut_eliteSkirmisher.attackValues.set(AoeData.ac_spearman, 3);
		AoeData.ut_eliteSkirmisher.attackValues.set(AoeData.ac_cavalryArcher, 2);
		AoeData.ut_eliteSkirmisher.imagePath = "assets/unitTypes/Elite_skirmisher_aoe2DE.png";
		AoeData.ut_eliteSkirmisher.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_imperialSkirmisher.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_imperialSkirmisher.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_imperialSkirmisher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_imperialSkirmisher.attackValues.set(AoeData.ac_basePierce, 4);
		AoeData.ut_imperialSkirmisher.attackValues.set(AoeData.ac_archer, 5);
		AoeData.ut_imperialSkirmisher.attackValues.set(AoeData.ac_spearman, 3);
		AoeData.ut_imperialSkirmisher.attackValues.set(AoeData.ac_cavalryArcher, 3);
		AoeData.ut_imperialSkirmisher.imagePath = "assets/unitTypes/Imperialskirmishericon-DE.png";
		AoeData.ut_imperialSkirmisher.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_cavalryArcher.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_cavalryArcher.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_cavalryArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_cavalryArcher.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_cavalryArcher.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_cavalryArcher.attackValues.set(AoeData.ac_basePierce, 6);
		AoeData.ut_cavalryArcher.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_cavalryArcher.imagePath = "assets/unitTypes/Cavalryarcher_aoe2DE.png";
		AoeData.ut_cavalryArcher.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_heavyCavalryArcher.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_heavyCavalryArcher.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_heavyCavalryArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_heavyCavalryArcher.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_heavyCavalryArcher.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_heavyCavalryArcher.attackValues.set(AoeData.ac_basePierce, 7);
		AoeData.ut_heavyCavalryArcher.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_heavyCavalryArcher.imagePath = "assets/unitTypes/Heavycavalryarcher_aoe2de.png";
		AoeData.ut_heavyCavalryArcher.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_handCannoneer.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_handCannoneer.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_handCannoneer.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_handCannoneer.armorClasses.set(AoeData.ac_gunpowderUnit, 0);
		AoeData.ut_handCannoneer.attackValues.set(AoeData.ac_basePierce, 17);
		AoeData.ut_handCannoneer.attackValues.set(AoeData.ac_infantry, 10);
		AoeData.ut_handCannoneer.attackValues.set(AoeData.ac_ram, 2);
		AoeData.ut_handCannoneer.attackValues.set(AoeData.ac_spearman, 1);
		AoeData.ut_handCannoneer.imagePath = "assets/unitTypes/Hand_cannoneer_aoe2DE.png";
		AoeData.ut_handCannoneer.techsForUnitList.push(this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_batteringRam.armorClasses.set(AoeData.ac_baseMelee, -3);
		AoeData.ut_batteringRam.armorClasses.set(AoeData.ac_basePierce, 180);
		AoeData.ut_batteringRam.armorClasses.set(AoeData.ac_siegeWeapon, 0);
		AoeData.ut_batteringRam.armorClasses.set(AoeData.ac_ram, 0);
		AoeData.ut_batteringRam.attackValues.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_batteringRam.attackValues.set(AoeData.ac_siegeWeapon, 40);
		AoeData.ut_batteringRam.imagePath = "assets/unitTypes/Battering_ram_aoe2DE.png";

		AoeData.ut_cappedRam.armorClasses.set(AoeData.ac_baseMelee, -3);
		AoeData.ut_cappedRam.armorClasses.set(AoeData.ac_basePierce, 190);
		AoeData.ut_cappedRam.armorClasses.set(AoeData.ac_siegeWeapon, 0);
		AoeData.ut_cappedRam.armorClasses.set(AoeData.ac_ram, 1);
		AoeData.ut_cappedRam.attackValues.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_cappedRam.attackValues.set(AoeData.ac_siegeWeapon, 50);
		AoeData.ut_cappedRam.imagePath = "assets/unitTypes/Capped_ram_aoe2DE.png";

		AoeData.ut_siegeRam.armorClasses.set(AoeData.ac_baseMelee, -3);
		AoeData.ut_siegeRam.armorClasses.set(AoeData.ac_basePierce, 195);
		AoeData.ut_siegeRam.armorClasses.set(AoeData.ac_siegeWeapon, 0);
		AoeData.ut_siegeRam.armorClasses.set(AoeData.ac_ram, 2);
		AoeData.ut_siegeRam.attackValues.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_siegeRam.attackValues.set(AoeData.ac_siegeWeapon, 65);
		AoeData.ut_siegeRam.imagePath = "assets/unitTypes/Siege_ram_aoe2DE.png";

		AoeData.ut_scorpion.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_scorpion.armorClasses.set(AoeData.ac_basePierce, 7);
		AoeData.ut_scorpion.armorClasses.set(AoeData.ac_siegeWeapon, 0);
		AoeData.ut_scorpion.attackValues.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_scorpion.attackValues.set(AoeData.ac_basePierce, 12);
		AoeData.ut_scorpion.attackValues.set(AoeData.ac_warElephant, 6);
		AoeData.ut_scorpion.attackValues.set(AoeData.ac_ram, 1);
		AoeData.ut_scorpion.attackIsMissile = true;
		AoeData.ut_scorpion.missileFlightDistance = 10.5; // scorpion missiles are always flying over a distance of 10.5 tiles, even if their attack range is only 8 tiles
		AoeData.ut_scorpion.imagePath = "assets/unitTypes/Scorpion_aoe2DE.png";
		AoeData.ut_scorpion.techsForUnitList.push(this.tec_siegeEngineers, this.tec_chemistry);

		AoeData.ut_heavyScorpion.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_heavyScorpion.armorClasses.set(AoeData.ac_basePierce, 7);
		AoeData.ut_heavyScorpion.armorClasses.set(AoeData.ac_siegeWeapon, 0);
		AoeData.ut_heavyScorpion.attackValues.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_heavyScorpion.attackValues.set(AoeData.ac_basePierce, 16);
		AoeData.ut_heavyScorpion.attackValues.set(AoeData.ac_warElephant, 8);
		AoeData.ut_heavyScorpion.attackValues.set(AoeData.ac_ram, 2);
		AoeData.ut_heavyScorpion.attackIsMissile = true;
		AoeData.ut_heavyScorpion.missileFlightDistance = 10.5; // scorpion missiles are always flying over a distance of 10.5 tiles, even if their attack range is only 8 tiles
		AoeData.ut_heavyScorpion.imagePath = "assets/unitTypes/Heavyscorpion_aoe2DE.png";
		AoeData.ut_heavyScorpion.techsForUnitList.push(this.tec_siegeEngineers, this.tec_chemistry);

		AoeData.ut_longbowman.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_longbowman.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_longbowman.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_longbowman.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_longbowman.attackValues.set(AoeData.ac_basePierce, 6);
		AoeData.ut_longbowman.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_longbowman.imagePath = "assets/unitTypes/LongbowmanIcon-DE.png";
		AoeData.ut_longbowman.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteLongbowman.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteLongbowman.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_eliteLongbowman.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteLongbowman.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteLongbowman.attackValues.set(AoeData.ac_basePierce, 7);
		AoeData.ut_eliteLongbowman.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_eliteLongbowman.imagePath = "assets/unitTypes/LongbowmanIcon-DE.png";
		AoeData.ut_eliteLongbowman.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_cataphract.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_cataphract.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_cataphract.armorClasses.set(AoeData.ac_cavalry, 12);
		AoeData.ut_cataphract.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_cataphract.attackValues.set(AoeData.ac_baseMelee, 9);
		AoeData.ut_cataphract.attackValues.set(AoeData.ac_infantry, 9);
		AoeData.ut_cataphract.attackValues.set(AoeData.ac_condottiero, 9);
		AoeData.ut_cataphract.cleaveType = 1;
		AoeData.ut_cataphract.cleaveRadius = 0.5;
		AoeData.ut_cataphract.imagePath = "assets/unitTypes/CataphractIcon-DE.png";
		AoeData.ut_cataphract.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_eliteCataphract.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_eliteCataphract.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_eliteCataphract.armorClasses.set(AoeData.ac_cavalry, 16);
		AoeData.ut_eliteCataphract.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteCataphract.attackValues.set(AoeData.ac_baseMelee, 12);
		AoeData.ut_eliteCataphract.attackValues.set(AoeData.ac_infantry, 12);
		AoeData.ut_eliteCataphract.attackValues.set(AoeData.ac_condottiero, 10);
		AoeData.ut_eliteCataphract.cleaveType = 1;
		AoeData.ut_eliteCataphract.cleaveRadius = 0.5;
		AoeData.ut_eliteCataphract.imagePath = "assets/unitTypes/CataphractIcon-DE.png"; // todo cleave dmg actually only with tech
		AoeData.ut_eliteCataphract.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_woadRaider.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_woadRaider.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_woadRaider.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_woadRaider.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_woadRaider.attackValues.set(AoeData.ac_baseMelee, 8);
		AoeData.ut_woadRaider.attackValues.set(AoeData.ac_eagleWarrior, 2);
		AoeData.ut_woadRaider.imagePath = "assets/unitTypes/WoadRaiderIcon-DE.png";
		AoeData.ut_woadRaider.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eliteWoadRaider.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteWoadRaider.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_eliteWoadRaider.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteWoadRaider.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteWoadRaider.attackValues.set(AoeData.ac_baseMelee, 13);
		AoeData.ut_eliteWoadRaider.attackValues.set(AoeData.ac_eagleWarrior, 3);
		AoeData.ut_eliteWoadRaider.imagePath = "assets/unitTypes/WoadRaiderIcon-DE.png";
		AoeData.ut_eliteWoadRaider.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_chuKoNu.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_chuKoNu.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_chuKoNu.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_chuKoNu.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_chuKoNu.attackValues.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_chuKoNu.attackValues.set(AoeData.ac_basePierce, 8);
		AoeData.ut_chuKoNu.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_chuKoNu.secondaryAttack = true;
		AoeData.ut_chuKoNu.secondaryAttackProjectileCount = 2;
		AoeData.ut_chuKoNu.secondaryAttackValues = new Map();
		AoeData.ut_chuKoNu.secondaryAttackValues.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_chuKoNu.secondaryAttackValues.set(AoeData.ac_basePierce, 3);
		AoeData.ut_chuKoNu.imagePath = "assets/unitTypes/ChukoNuIcon-DE.png";
		AoeData.ut_chuKoNu.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteChuKoNu.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteChuKoNu.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_eliteChuKoNu.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteChuKoNu.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteChuKoNu.attackValues.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteChuKoNu.attackValues.set(AoeData.ac_basePierce, 8);
		AoeData.ut_eliteChuKoNu.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_eliteChuKoNu.secondaryAttack = true;
		AoeData.ut_eliteChuKoNu.secondaryAttackProjectileCount = 4;
		AoeData.ut_eliteChuKoNu.secondaryAttackValues = new Map();
		AoeData.ut_eliteChuKoNu.secondaryAttackValues.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteChuKoNu.secondaryAttackValues.set(AoeData.ac_basePierce, 3);
		AoeData.ut_eliteChuKoNu.imagePath = "assets/unitTypes/ChukoNuIcon-DE.png";
		AoeData.ut_eliteChuKoNu.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_throwingAxeman.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_throwingAxeman.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_throwingAxeman.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_throwingAxeman.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_throwingAxeman.attackValues.set(AoeData.ac_baseMelee, 7);
		AoeData.ut_throwingAxeman.attackValues.set(AoeData.ac_eagleWarrior, 1);
		AoeData.ut_throwingAxeman.imagePath = "assets/unitTypes/ThrowingAxemanIcon-DE.png";
		AoeData.ut_throwingAxeman.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eliteThrowingAxeman.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_eliteThrowingAxeman.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_eliteThrowingAxeman.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteThrowingAxeman.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteThrowingAxeman.attackValues.set(AoeData.ac_baseMelee, 8);
		AoeData.ut_eliteThrowingAxeman.attackValues.set(AoeData.ac_eagleWarrior, 2);
		AoeData.ut_eliteThrowingAxeman.imagePath = "assets/unitTypes/ThrowingAxemanIcon-DE.png";
		AoeData.ut_eliteThrowingAxeman.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_huskarl.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_huskarl.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_huskarl.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_huskarl.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_huskarl.attackValues.set(AoeData.ac_baseMelee, 10);
		AoeData.ut_huskarl.attackValues.set(AoeData.ac_eagleWarrior, 2);
		AoeData.ut_huskarl.attackValues.set(AoeData.ac_archer, 6);
		AoeData.ut_huskarl.imagePath = "assets/unitTypes/HuskarlIcon-DE.png";
		AoeData.ut_huskarl.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eliteHuskarl.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteHuskarl.armorClasses.set(AoeData.ac_basePierce, 8);
		AoeData.ut_eliteHuskarl.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteHuskarl.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteHuskarl.attackValues.set(AoeData.ac_baseMelee, 12);
		AoeData.ut_eliteHuskarl.attackValues.set(AoeData.ac_eagleWarrior, 3);
		AoeData.ut_eliteHuskarl.attackValues.set(AoeData.ac_archer, 10);
		AoeData.ut_eliteHuskarl.imagePath = "assets/unitTypes/HuskarlIcon-DE.png";
		AoeData.ut_eliteHuskarl.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_samurai.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_samurai.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_samurai.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_samurai.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_samurai.attackValues.set(AoeData.ac_baseMelee, 8);
		AoeData.ut_samurai.attackValues.set(AoeData.ac_eagleWarrior, 2);
		AoeData.ut_samurai.attackValues.set(AoeData.ac_uniqueUnit, 10);
		AoeData.ut_samurai.imagePath = "assets/unitTypes/SamuraiIcon-DE.png";
		AoeData.ut_samurai.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eliteSamurai.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_eliteSamurai.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_eliteSamurai.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteSamurai.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteSamurai.attackValues.set(AoeData.ac_baseMelee, 12);
		AoeData.ut_eliteSamurai.attackValues.set(AoeData.ac_eagleWarrior, 3);
		AoeData.ut_eliteSamurai.attackValues.set(AoeData.ac_uniqueUnit, 12);
		AoeData.ut_eliteSamurai.imagePath = "assets/unitTypes/SamuraiIcon-DE.png";
		AoeData.ut_eliteSamurai.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_mangudai.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_mangudai.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_mangudai.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_mangudai.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_mangudai.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_mangudai.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_mangudai.attackValues.set(AoeData.ac_basePierce, 6);
		AoeData.ut_mangudai.attackValues.set(AoeData.ac_spearman, 1);
		AoeData.ut_mangudai.attackValues.set(AoeData.ac_siegeWeapon, 3);
		AoeData.ut_mangudai.imagePath = "assets/unitTypes/MangudaiIcon-DE.png";
		AoeData.ut_mangudai.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteMangudai.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_eliteMangudai.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_eliteMangudai.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteMangudai.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_eliteMangudai.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteMangudai.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteMangudai.attackValues.set(AoeData.ac_basePierce, 8);
		AoeData.ut_eliteMangudai.attackValues.set(AoeData.ac_spearman, 1);
		AoeData.ut_eliteMangudai.attackValues.set(AoeData.ac_siegeWeapon, 5);
		AoeData.ut_eliteMangudai.imagePath = "assets/unitTypes/MangudaiIcon-DE.png";
		AoeData.ut_eliteMangudai.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_warElephant.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_warElephant.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_warElephant.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_warElephant.armorClasses.set(AoeData.ac_warElephant, 0);
		AoeData.ut_warElephant.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_warElephant.attackValues.set(AoeData.ac_baseMelee, 15);
		AoeData.ut_warElephant.cleaveType = 2;
		AoeData.ut_warElephant.cleaveRadius = 0.5;
		AoeData.ut_warElephant.imagePath = "assets/unitTypes/WarElephantIcon-DE.png";
		AoeData.ut_warElephant.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_eliteWarElephant.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_eliteWarElephant.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_eliteWarElephant.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteWarElephant.armorClasses.set(AoeData.ac_warElephant, 0);
		AoeData.ut_eliteWarElephant.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteWarElephant.attackValues.set(AoeData.ac_baseMelee, 20);
		AoeData.ut_eliteWarElephant.cleaveType = 2;
		AoeData.ut_eliteWarElephant.cleaveRadius = 0.5;
		AoeData.ut_eliteWarElephant.imagePath = "assets/unitTypes/WarElephantIcon-DE.png";
		AoeData.ut_eliteWarElephant.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_mameluke.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_mameluke.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_mameluke.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_mameluke.armorClasses.set(AoeData.ac_mameluke, 0);
		AoeData.ut_mameluke.armorClasses.set(AoeData.ac_camel, 0);
		AoeData.ut_mameluke.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_mameluke.attackValues.set(AoeData.ac_baseMelee, 8);
		AoeData.ut_mameluke.attackValues.set(AoeData.ac_cavalry, 9);
		AoeData.ut_mameluke.attackValues.set(AoeData.ac_mameluke, 1);
		AoeData.ut_mameluke.imagePath = "assets/unitTypes/MamelukeIcon-DE.png";
		AoeData.ut_mameluke.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_eliteMameluke.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_eliteMameluke.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_eliteMameluke.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteMameluke.armorClasses.set(AoeData.ac_mameluke, 0);
		AoeData.ut_eliteMameluke.armorClasses.set(AoeData.ac_camel, 0);
		AoeData.ut_eliteMameluke.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteMameluke.attackValues.set(AoeData.ac_baseMelee, 10);
		AoeData.ut_eliteMameluke.attackValues.set(AoeData.ac_cavalry, 12);
		AoeData.ut_eliteMameluke.attackValues.set(AoeData.ac_mameluke, 1);
		AoeData.ut_eliteMameluke.imagePath = "assets/unitTypes/MamelukeIcon-DE.png";
		AoeData.ut_eliteMameluke.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_teutonicKnight.armorClasses.set(AoeData.ac_baseMelee, 5);
		AoeData.ut_teutonicKnight.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_teutonicKnight.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_teutonicKnight.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_teutonicKnight.attackValues.set(AoeData.ac_baseMelee, 12);
		AoeData.ut_teutonicKnight.attackValues.set(AoeData.ac_eagleWarrior, 4);
		AoeData.ut_teutonicKnight.imagePath = "assets/unitTypes/TeutonicKnightIcon-DE.png";
		AoeData.ut_teutonicKnight.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eliteTeutonicKnight.armorClasses.set(AoeData.ac_baseMelee, 10);
		AoeData.ut_eliteTeutonicKnight.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_eliteTeutonicKnight.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteTeutonicKnight.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteTeutonicKnight.attackValues.set(AoeData.ac_baseMelee, 17);
		AoeData.ut_eliteTeutonicKnight.attackValues.set(AoeData.ac_eagleWarrior, 4);
		AoeData.ut_eliteTeutonicKnight.imagePath = "assets/unitTypes/TeutonicKnightIcon-DE.png";
		AoeData.ut_eliteTeutonicKnight.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_janissary.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_janissary.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_janissary.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_janissary.armorClasses.set(AoeData.ac_gunpowderUnit, 0);
		AoeData.ut_janissary.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_janissary.attackValues.set(AoeData.ac_basePierce, 17);
		AoeData.ut_janissary.attackValues.set(AoeData.ac_ram, 2);
		AoeData.ut_janissary.imagePath = "assets/unitTypes/JanissaryIcon-DE.png";
		AoeData.ut_janissary.techsForUnitList.push(this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteJanissary.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_eliteJanissary.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_eliteJanissary.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteJanissary.armorClasses.set(AoeData.ac_gunpowderUnit, 0);
		AoeData.ut_eliteJanissary.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteJanissary.attackValues.set(AoeData.ac_basePierce, 22);
		AoeData.ut_eliteJanissary.attackValues.set(AoeData.ac_ram, 3);
		AoeData.ut_eliteJanissary.imagePath = "assets/unitTypes/JanissaryIcon-DE.png";
		AoeData.ut_eliteJanissary.techsForUnitList.push(this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_berserk.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_berserk.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_berserk.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_berserk.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_berserk.attackValues.set(AoeData.ac_baseMelee, 9);
		AoeData.ut_berserk.attackValues.set(AoeData.ac_eagleWarrior, 2);
		AoeData.ut_berserk.imagePath = "assets/unitTypes/BerserkIcon-DE.png";
		AoeData.ut_berserk.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eliteBerserk.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_eliteBerserk.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_eliteBerserk.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteBerserk.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteBerserk.attackValues.set(AoeData.ac_baseMelee, 14);
		AoeData.ut_eliteBerserk.attackValues.set(AoeData.ac_eagleWarrior, 3);
		AoeData.ut_eliteBerserk.imagePath = "assets/unitTypes/BerserkIcon-DE.png";
		AoeData.ut_eliteBerserk.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_jaguarWarrior.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_jaguarWarrior.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_jaguarWarrior.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_jaguarWarrior.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_jaguarWarrior.attackValues.set(AoeData.ac_baseMelee, 10);
		AoeData.ut_jaguarWarrior.attackValues.set(AoeData.ac_infantry, 10);
		AoeData.ut_jaguarWarrior.attackValues.set(AoeData.ac_condottiero, 10);
		AoeData.ut_jaguarWarrior.attackValues.set(AoeData.ac_eagleWarrior, 2);
		AoeData.ut_jaguarWarrior.imagePath = "assets/unitTypes/JaguarWarriorIcon-DE.png";
		AoeData.ut_jaguarWarrior.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eliteJaguarWarrior.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_eliteJaguarWarrior.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_eliteJaguarWarrior.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteJaguarWarrior.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteJaguarWarrior.attackValues.set(AoeData.ac_baseMelee, 12);
		AoeData.ut_eliteJaguarWarrior.attackValues.set(AoeData.ac_infantry, 11);
		AoeData.ut_eliteJaguarWarrior.attackValues.set(AoeData.ac_condottiero, 10);
		AoeData.ut_eliteJaguarWarrior.attackValues.set(AoeData.ac_eagleWarrior, 2);
		AoeData.ut_eliteJaguarWarrior.imagePath = "assets/unitTypes/JaguarWarriorIcon-DE.png";
		AoeData.ut_eliteJaguarWarrior.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_tarkan.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_tarkan.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_tarkan.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_tarkan.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_tarkan.attackValues.set(AoeData.ac_baseMelee, 8);
		AoeData.ut_tarkan.imagePath = "assets/unitTypes/TarkanIcon-DE.png";
		AoeData.ut_tarkan.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_eliteTarkan.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_eliteTarkan.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_eliteTarkan.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteTarkan.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteTarkan.attackValues.set(AoeData.ac_baseMelee, 11);
		AoeData.ut_eliteTarkan.imagePath = "assets/unitTypes/TarkanIcon-DE.png";
		AoeData.ut_eliteTarkan.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_warWagon.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_warWagon.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_warWagon.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_warWagon.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_warWagon.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_warWagon.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_warWagon.attackValues.set(AoeData.ac_basePierce, 9);
		AoeData.ut_warWagon.imagePath = "assets/unitTypes/WarWagonIcon-DE.png";
		AoeData.ut_warWagon.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteWarWagon.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteWarWagon.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_eliteWarWagon.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteWarWagon.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_eliteWarWagon.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteWarWagon.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteWarWagon.attackValues.set(AoeData.ac_basePierce, 9);
		AoeData.ut_eliteWarWagon.imagePath = "assets/unitTypes/WarWagonIcon-DE.png";
		AoeData.ut_eliteWarWagon.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_plumedArcher.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_plumedArcher.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_plumedArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_plumedArcher.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_plumedArcher.attackValues.set(AoeData.ac_basePierce, 5);
		AoeData.ut_plumedArcher.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_plumedArcher.attackValues.set(AoeData.ac_infantry, 1);
		AoeData.ut_plumedArcher.attackValues.set(AoeData.ac_condottiero, 1);
		AoeData.ut_plumedArcher.imagePath = "assets/unitTypes/PlumedArcherIcon-DE.png";
		AoeData.ut_plumedArcher.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_elitePlumedArcher.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_elitePlumedArcher.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_elitePlumedArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_elitePlumedArcher.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_elitePlumedArcher.attackValues.set(AoeData.ac_basePierce, 5);
		AoeData.ut_elitePlumedArcher.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_elitePlumedArcher.attackValues.set(AoeData.ac_infantry, 2);
		AoeData.ut_elitePlumedArcher.attackValues.set(AoeData.ac_condottiero, 2);
		AoeData.ut_elitePlumedArcher.imagePath = "assets/unitTypes/PlumedArcherIcon-DE.png";
		AoeData.ut_elitePlumedArcher.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_conquistador.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_conquistador.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_conquistador.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_conquistador.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_conquistador.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_conquistador.armorClasses.set(AoeData.ac_gunpowderUnit, 0);
		AoeData.ut_conquistador.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_conquistador.attackValues.set(AoeData.ac_basePierce, 16);
		AoeData.ut_conquistador.attackValues.set(AoeData.ac_ram, 4);
		AoeData.ut_conquistador.imagePath = "assets/unitTypes/ConquistadorIcon-DE.png";
		AoeData.ut_conquistador.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_gunpowderUnit, 0);
		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteConquistador.attackValues.set(AoeData.ac_basePierce, 18);
		AoeData.ut_eliteConquistador.attackValues.set(AoeData.ac_ram, 6);
		AoeData.ut_eliteConquistador.imagePath = "assets/unitTypes/ConquistadorIcon-DE.png";
		AoeData.ut_eliteConquistador.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,	this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_kamayuk.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_kamayuk.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_kamayuk.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_kamayuk.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_kamayuk.attackValues.set(AoeData.ac_baseMelee, 7);
		AoeData.ut_kamayuk.attackValues.set(AoeData.ac_warElephant, 20);
		AoeData.ut_kamayuk.attackValues.set(AoeData.ac_cavalry, 8);
		AoeData.ut_kamayuk.attackValues.set(AoeData.ac_camel, 6);
		AoeData.ut_kamayuk.attackValues.set(AoeData.ac_mameluke, 1);
		AoeData.ut_kamayuk.imagePath = "assets/unitTypes/KamayukIcon-DE.png";
		AoeData.ut_kamayuk.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eliteKamayuk.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_eliteKamayuk.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_eliteKamayuk.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteKamayuk.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteKamayuk.attackValues.set(AoeData.ac_baseMelee, 8);
		AoeData.ut_eliteKamayuk.attackValues.set(AoeData.ac_warElephant, 20);
		AoeData.ut_eliteKamayuk.attackValues.set(AoeData.ac_cavalry, 12);
		AoeData.ut_eliteKamayuk.attackValues.set(AoeData.ac_camel, 10);
		AoeData.ut_eliteKamayuk.attackValues.set(AoeData.ac_mameluke, 1);
		AoeData.ut_eliteKamayuk.imagePath = "assets/unitTypes/KamayukIcon-DE.png";
		AoeData.ut_eliteKamayuk.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_slinger.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_slinger.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_slinger.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_slinger.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_slinger.attackValues.set(AoeData.ac_basePierce, 4);
		AoeData.ut_slinger.attackValues.set(AoeData.ac_infantry, 10);
		AoeData.ut_slinger.attackValues.set(AoeData.ac_condottiero, 10);
		AoeData.ut_slinger.attackValues.set(AoeData.ac_ram, 3);
		AoeData.ut_slinger.attackValues.set(AoeData.ac_spearman, 1);
		AoeData.ut_slinger.imagePath = "assets/unitTypes/SlingerIcon-DE.png";
		AoeData.ut_slinger.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_elephantArcher.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_elephantArcher.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_elephantArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_elephantArcher.armorClasses.set(AoeData.ac_cavalryArcher, -2);
		AoeData.ut_elephantArcher.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_elephantArcher.armorClasses.set(AoeData.ac_warElephant, 0);
		AoeData.ut_elephantArcher.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_elephantArcher.attackValues.set(AoeData.ac_basePierce, 6); // todo parthian tactics
		AoeData.ut_elephantArcher.imagePath = "assets/unitTypes/ElephantArcherIcon-DE.png";
		AoeData.ut_elephantArcher.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_cavalryArcher, -2);
		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_warElephant, 0);
		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteElephantArcher.attackValues.set(AoeData.ac_basePierce, 7);
		AoeData.ut_eliteElephantArcher.imagePath = "assets/unitTypes/ElephantArcherIcon-DE.png";
		AoeData.ut_eliteElephantArcher.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_genoeseCrossbowman.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_genoeseCrossbowman.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_genoeseCrossbowman.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_genoeseCrossbowman.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_genoeseCrossbowman.attackValues.set(AoeData.ac_basePierce, 6);
		AoeData.ut_genoeseCrossbowman.attackValues.set(AoeData.ac_cavalry, 5);
		AoeData.ut_genoeseCrossbowman.attackValues.set(AoeData.ac_warElephant, 5);
		AoeData.ut_genoeseCrossbowman.attackValues.set(AoeData.ac_camel, 4);
		AoeData.ut_genoeseCrossbowman.imagePath = "assets/unitTypes/GenoeseCrossbowmanIcon-DE.png";
		AoeData.ut_genoeseCrossbowman.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteGenoeseCrossbowman.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_eliteGenoeseCrossbowman.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_eliteGenoeseCrossbowman.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteGenoeseCrossbowman.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteGenoeseCrossbowman.attackValues.set(AoeData.ac_basePierce, 6);
		AoeData.ut_eliteGenoeseCrossbowman.attackValues.set(AoeData.ac_cavalry, 7);
		AoeData.ut_eliteGenoeseCrossbowman.attackValues.set(AoeData.ac_warElephant, 7);
		AoeData.ut_eliteGenoeseCrossbowman.attackValues.set(AoeData.ac_camel, 6);
		AoeData.ut_eliteGenoeseCrossbowman.imagePath = "assets/unitTypes/GenoeseCrossbowmanIcon-DE.png";
		AoeData.ut_eliteGenoeseCrossbowman.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_condottiero.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_condottiero.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_condottiero.armorClasses.set(AoeData.ac_infantry, 10);
		AoeData.ut_condottiero.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_condottiero.armorClasses.set(AoeData.ac_condottiero, 0);
		AoeData.ut_condottiero.attackValues.set(AoeData.ac_baseMelee, 10);
		AoeData.ut_condottiero.attackValues.set(AoeData.ac_gunpowderUnit, 10);
		AoeData.ut_condottiero.imagePath = "assets/unitTypes/CondottieroIcon-DE.png";
		AoeData.ut_condottiero.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_magyarHuszar.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_magyarHuszar.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_magyarHuszar.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_magyarHuszar.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_magyarHuszar.attackValues.set(AoeData.ac_baseMelee, 9);
		AoeData.ut_magyarHuszar.attackValues.set(AoeData.ac_siegeWeapon, 5);
		AoeData.ut_magyarHuszar.attackValues.set(AoeData.ac_ram, 1);
		AoeData.ut_magyarHuszar.imagePath = "assets/unitTypes/MagyarHuszarIcon-DE.png";
		AoeData.ut_magyarHuszar.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_eliteMagyarHuszar.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteMagyarHuszar.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_eliteMagyarHuszar.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteMagyarHuszar.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteMagyarHuszar.attackValues.set(AoeData.ac_baseMelee, 10);
		AoeData.ut_eliteMagyarHuszar.attackValues.set(AoeData.ac_siegeWeapon, 8);
		AoeData.ut_eliteMagyarHuszar.attackValues.set(AoeData.ac_ram, 2);
		AoeData.ut_eliteMagyarHuszar.imagePath = "assets/unitTypes/MagyarHuszarIcon-DE.png";
		AoeData.ut_eliteMagyarHuszar.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_boyar.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_boyar.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_boyar.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_boyar.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_boyar.attackValues.set(AoeData.ac_baseMelee, 12);
		AoeData.ut_boyar.imagePath = "assets/unitTypes/BoyarIcon-DE.png";
		AoeData.ut_boyar.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_eliteBoyar.armorClasses.set(AoeData.ac_baseMelee, 6);
		AoeData.ut_eliteBoyar.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_eliteBoyar.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteBoyar.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteBoyar.attackValues.set(AoeData.ac_baseMelee, 14);
		AoeData.ut_eliteBoyar.imagePath = "assets/unitTypes/BoyarIcon-DE.png";
		AoeData.ut_eliteBoyar.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_camelArcher.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_camelArcher.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_camelArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_camelArcher.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_camelArcher.armorClasses.set(AoeData.ac_camel, 0);
		AoeData.ut_camelArcher.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_camelArcher.attackValues.set(AoeData.ac_basePierce, 7);
		AoeData.ut_camelArcher.attackValues.set(AoeData.ac_cavalryArcher, 4);
		AoeData.ut_camelArcher.imagePath = "assets/unitTypes/CamelArcherIcon-DE.png";
		AoeData.ut_camelArcher.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteCamelArcher.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_eliteCamelArcher.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_eliteCamelArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteCamelArcher.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_eliteCamelArcher.armorClasses.set(AoeData.ac_camel, 0);
		AoeData.ut_eliteCamelArcher.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteCamelArcher.attackValues.set(AoeData.ac_basePierce, 8);
		AoeData.ut_eliteCamelArcher.attackValues.set(AoeData.ac_cavalryArcher, 6);
		AoeData.ut_eliteCamelArcher.imagePath = "assets/unitTypes/CamelArcherIcon-DE.png";
		AoeData.ut_eliteCamelArcher.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_genitour.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_genitour.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_genitour.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_genitour.armorClasses.set(AoeData.ac_cavalryArcher, 1);
		AoeData.ut_genitour.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_genitour.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_genitour.attackValues.set(AoeData.ac_basePierce, 3);
		AoeData.ut_genitour.attackValues.set(AoeData.ac_archer, 4);
		AoeData.ut_genitour.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_genitour.imagePath = "assets/unitTypes/GenitourIcon-DE.png";
		AoeData.ut_genitour.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteGenitour.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteGenitour.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_eliteGenitour.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteGenitour.armorClasses.set(AoeData.ac_cavalryArcher, 1);
		AoeData.ut_eliteGenitour.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteGenitour.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteGenitour.attackValues.set(AoeData.ac_basePierce, 4);
		AoeData.ut_eliteGenitour.attackValues.set(AoeData.ac_archer, 5);
		AoeData.ut_eliteGenitour.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_eliteGenitour.attackValues.set(AoeData.ac_cavalryArcher, 2);
		AoeData.ut_eliteGenitour.imagePath = "assets/unitTypes/GenitourIcon-DE.png";
		AoeData.ut_eliteGenitour.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_shotelWarrior.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_shotelWarrior.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_shotelWarrior.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_shotelWarrior.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_shotelWarrior.attackValues.set(AoeData.ac_baseMelee, 16);
		AoeData.ut_shotelWarrior.attackValues.set(AoeData.ac_eagleWarrior, 2);
		AoeData.ut_shotelWarrior.imagePath = "assets/unitTypes/Shotelwarrioricon-DE.png";
		AoeData.ut_shotelWarrior.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eliteShotelWarrior.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteShotelWarrior.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_eliteShotelWarrior.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteShotelWarrior.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteShotelWarrior.attackValues.set(AoeData.ac_baseMelee, 18);
		AoeData.ut_eliteShotelWarrior.attackValues.set(AoeData.ac_eagleWarrior, 2);
		AoeData.ut_eliteShotelWarrior.imagePath = "assets/unitTypes/Shotelwarrioricon-DE.png";
		AoeData.ut_eliteShotelWarrior.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_gbeto.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_gbeto.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_gbeto.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_gbeto.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_gbeto.attackValues.set(AoeData.ac_baseMelee, 10);
		AoeData.ut_gbeto.attackValues.set(AoeData.ac_eagleWarrior, 1);
		AoeData.ut_gbeto.imagePath = "assets/unitTypes/GbetoIcon-DE.png";
		AoeData.ut_gbeto.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eliteGbeto.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteGbeto.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_eliteGbeto.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteGbeto.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteGbeto.attackValues.set(AoeData.ac_baseMelee, 13);
		AoeData.ut_eliteGbeto.attackValues.set(AoeData.ac_eagleWarrior, 1);
		AoeData.ut_eliteGbeto.imagePath = "assets/unitTypes/GbetoIcon-DE.png";
		AoeData.ut_eliteGbeto.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_organGun.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_organGun.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_organGun.armorClasses.set(AoeData.ac_siegeWeapon, 0);
		AoeData.ut_organGun.armorClasses.set(AoeData.ac_gunpowderUnit, 0);
		AoeData.ut_organGun.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_organGun.attackValues.set(AoeData.ac_basePierce, 16);
		AoeData.ut_organGun.attackValues.set(AoeData.ac_ram, 1);
		AoeData.ut_organGun.secondaryAttack = true;
		AoeData.ut_organGun.secondaryAttackProjectileCount = 4;
		AoeData.ut_organGun.secondaryAttackValues = new Map();
		AoeData.ut_organGun.secondaryAttackValues.set(AoeData.ac_basePierce, 2); // todo: is the dmg pure (of non elites too)?
		AoeData.ut_organGun.imagePath = "assets/unitTypes/OrganGunIcon-DE.png";
		AoeData.ut_organGun.techsForUnitList.push(this.tec_siegeEngineers);

		AoeData.ut_eliteOrganGun.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_eliteOrganGun.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_eliteOrganGun.armorClasses.set(AoeData.ac_siegeWeapon, 0);
		AoeData.ut_eliteOrganGun.armorClasses.set(AoeData.ac_gunpowderUnit, 0);
		AoeData.ut_eliteOrganGun.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteOrganGun.attackValues.set(AoeData.ac_basePierce, 20);
		AoeData.ut_eliteOrganGun.attackValues.set(AoeData.ac_ram, 1);
		AoeData.ut_eliteOrganGun.secondaryAttack = true;
		AoeData.ut_eliteOrganGun.secondaryAttackProjectileCount = 4;
		AoeData.ut_eliteOrganGun.secondaryAttackValues = new Map();
		AoeData.ut_eliteOrganGun.secondaryAttackValues.set(AoeData.ac_basePierce, 2);
		AoeData.ut_eliteOrganGun.imagePath = "assets/unitTypes/OrganGunIcon-DE.png";
		AoeData.ut_eliteOrganGun.techsForUnitList.push(this.tec_siegeEngineers);

		AoeData.ut_arambai.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_arambai.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_arambai.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_arambai.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_arambai.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_arambai.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_arambai.attackValues.set(AoeData.ac_basePierce, 17);
		AoeData.ut_arambai.attackValues.set(AoeData.ac_ram, 2);
		AoeData.ut_arambai.imagePath = "assets/unitTypes/Arambaiicon-DE.png";
		AoeData.ut_arambai.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteArambai.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteArambai.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_eliteArambai.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteArambai.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_eliteArambai.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteArambai.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteArambai.attackValues.set(AoeData.ac_basePierce, 19);
		AoeData.ut_eliteArambai.attackValues.set(AoeData.ac_ram, 2);
		AoeData.ut_eliteArambai.imagePath = "assets/unitTypes/Arambaiicon-DE.png";
		AoeData.ut_eliteArambai.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_ballistaElephant.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_ballistaElephant.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_ballistaElephant.armorClasses.set(AoeData.ac_cavalry, -2);
		AoeData.ut_ballistaElephant.armorClasses.set(AoeData.ac_warElephant, -2);
		AoeData.ut_ballistaElephant.armorClasses.set(AoeData.ac_siegeWeapon, -2);
		AoeData.ut_ballistaElephant.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_ballistaElephant.attackValues.set(AoeData.ac_basePierce, 8);
		AoeData.ut_ballistaElephant.attackIsMissile = true;
		AoeData.ut_ballistaElephant.missileFlightDistance = 6.0;
		AoeData.ut_ballistaElephant.secondaryMissileFlightDistance = 12.5;
		AoeData.ut_ballistaElephant.secondaryAttack = true;
		AoeData.ut_ballistaElephant.secondaryAttackValues = new Map();
		AoeData.ut_ballistaElephant.secondaryAttackValues.set(AoeData.ac_basePierce, 7); // todo: secondary missile same (7) dmg as elite version?
		AoeData.ut_ballistaElephant.imagePath = "assets/unitTypes/Ballistaelephanticon-DE.png";
		AoeData.ut_ballistaElephant.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry, this.tec_chemistry, this.tec_siegeEngineers,
			this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_eliteBallistaElephant.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteBallistaElephant.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_eliteBallistaElephant.armorClasses.set(AoeData.ac_cavalry, -2);
		AoeData.ut_eliteBallistaElephant.armorClasses.set(AoeData.ac_warElephant, -2);
		AoeData.ut_eliteBallistaElephant.armorClasses.set(AoeData.ac_siegeWeapon, -2);
		AoeData.ut_eliteBallistaElephant.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteBallistaElephant.attackValues.set(AoeData.ac_basePierce, 9);
		AoeData.ut_eliteBallistaElephant.attackIsMissile = true;
		AoeData.ut_eliteBallistaElephant.missileFlightDistance = 6.0;
		AoeData.ut_eliteBallistaElephant.secondaryMissileFlightDistance = 12.5;
		AoeData.ut_eliteBallistaElephant.secondaryAttack = true;
		AoeData.ut_eliteBallistaElephant.secondaryAttackValues = new Map();
		AoeData.ut_eliteBallistaElephant.secondaryAttackValues.set(AoeData.ac_basePierce, 7);
		AoeData.ut_eliteBallistaElephant.imagePath = "assets/unitTypes/Ballistaelephanticon-DE.png";
		AoeData.ut_eliteBallistaElephant.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry, this.tec_chemistry, this.tec_siegeEngineers,
			this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_karambitWarrior.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_karambitWarrior.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_karambitWarrior.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_karambitWarrior.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_karambitWarrior.attackValues.set(AoeData.ac_baseMelee, 6);
		AoeData.ut_karambitWarrior.attackValues.set(AoeData.ac_eagleWarrior, 2);
		AoeData.ut_karambitWarrior.imagePath = "assets/unitTypes/Karambitwarrioricon-DE.png";
		AoeData.ut_karambitWarrior.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eliteKarambitWarrior.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_eliteKarambitWarrior.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_eliteKarambitWarrior.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteKarambitWarrior.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteKarambitWarrior.attackValues.set(AoeData.ac_baseMelee, 7);
		AoeData.ut_eliteKarambitWarrior.attackValues.set(AoeData.ac_eagleWarrior, 2);
		AoeData.ut_eliteKarambitWarrior.imagePath = "assets/unitTypes/Karambitwarrioricon-DE.png";
		AoeData.ut_eliteKarambitWarrior.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_rattanArcher.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_rattanArcher.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_rattanArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_rattanArcher.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_rattanArcher.attackValues.set(AoeData.ac_basePierce, 6);
		AoeData.ut_rattanArcher.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_rattanArcher.imagePath = "assets/unitTypes/Rattanarchericon-DE.png";
		AoeData.ut_rattanArcher.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteRattanArcher.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteRattanArcher.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_eliteRattanArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteRattanArcher.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteRattanArcher.attackValues.set(AoeData.ac_basePierce, 7);
		AoeData.ut_eliteRattanArcher.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_eliteRattanArcher.imagePath = "assets/unitTypes/Rattanarchericon-DE.png";
		AoeData.ut_eliteRattanArcher.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_konnik.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_konnik.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_konnik.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_konnik.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_konnik.attackValues.set(AoeData.ac_baseMelee, 12);
		AoeData.ut_konnik.imagePath = "assets/unitTypes/Konnikicon.png"; // todo: check if non elite konniks spawn non elite dismounted konniks
		AoeData.ut_konnik.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_eliteKonnik.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_eliteKonnik.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_eliteKonnik.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteKonnik.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteKonnik.attackValues.set(AoeData.ac_baseMelee, 14);
		AoeData.ut_eliteKonnik.imagePath = "assets/unitTypes/Konnikicon.png";
		AoeData.ut_eliteKonnik.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_konnikDismounted.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_konnikDismounted.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_konnikDismounted.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_konnikDismounted.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_konnikDismounted.attackValues.set(AoeData.ac_baseMelee, 12);
		AoeData.ut_konnikDismounted.imagePath = "assets/unitTypes/Konnikdismountedicon.png";
		AoeData.ut_konnikDismounted.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_eliteKonnikDismounted.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteKonnikDismounted.armorClasses.set(AoeData.ac_basePierce, 1);
		AoeData.ut_eliteKonnikDismounted.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteKonnikDismounted.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteKonnikDismounted.attackValues.set(AoeData.ac_baseMelee, 13);
		AoeData.ut_eliteKonnikDismounted.imagePath = "assets/unitTypes/Konnikdismountedicon.png";
		AoeData.ut_eliteKonnikDismounted.techsForUnitList.push(this.tec_squires,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleMailArmor, this.tec_chainMailArmor, this.tec_plateMailArmor);

		AoeData.ut_kipchak.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_kipchak.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_kipchak.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_kipchak.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_kipchak.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_kipchak.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_kipchak.attackValues.set(AoeData.ac_basePierce, 4);
		AoeData.ut_kipchak.attackValues.set(AoeData.ac_spearman, 1);
		AoeData.ut_kipchak.secondaryAttack = true;
		AoeData.ut_kipchak.secondaryAttackProjectileCount = 2;
		AoeData.ut_kipchak.secondaryAttackValues= new Map();
		AoeData.ut_kipchak.secondaryAttackValues.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_kipchak.secondaryAttackValues.set(AoeData.ac_basePierce, 3);
		AoeData.ut_kipchak.imagePath = "assets/unitTypes/Kipchakicon.png";
		AoeData.ut_kipchak.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_eliteKipchak.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteKipchak.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_eliteKipchak.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteKipchak.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_eliteKipchak.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteKipchak.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteKipchak.attackValues.set(AoeData.ac_basePierce, 5);
		AoeData.ut_eliteKipchak.attackValues.set(AoeData.ac_spearman, 1);
		AoeData.ut_eliteKipchak.secondaryAttack = true;
		AoeData.ut_eliteKipchak.secondaryAttackProjectileCount = 3;
		AoeData.ut_eliteKipchak.secondaryAttackValues= new Map();
		AoeData.ut_eliteKipchak.secondaryAttackValues.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteKipchak.secondaryAttackValues.set(AoeData.ac_basePierce, 3);
		AoeData.ut_eliteKipchak.imagePath = "assets/unitTypes/Kipchakicon.png";
		AoeData.ut_eliteKipchak.techsForUnitList.push(this.tec_thumbRing, this.tec_chemistry, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_fletching, this.tec_bodkinArrow, this.tec_bracer, this.tec_paddedArcherArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.ut_leitis.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_leitis.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_leitis.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_leitis.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_leitis.attackValues.set(AoeData.ac_baseMelee, 12); // todo: non elite leitis do also pierce armor
		AoeData.ut_leitis.imagePath = "assets/unitTypes/Leitisicon.png";
		AoeData.ut_leitis.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_eliteLeitis.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_eliteLeitis.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_eliteLeitis.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteLeitis.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteLeitis.attackValues.set(AoeData.ac_baseMelee, 14);
		AoeData.ut_eliteLeitis.imagePath = "assets/unitTypes/Leitisicon.png";
		AoeData.ut_eliteLeitis.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_keshik.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_keshik.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_keshik.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_keshik.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_keshik.attackValues.set(AoeData.ac_baseMelee, 9);
		AoeData.ut_keshik.imagePath = "assets/unitTypes/Keshikicon.png";
		AoeData.ut_keshik.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_eliteKeshik.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_eliteKeshik.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_eliteKeshik.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteKeshik.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteKeshik.attackValues.set(AoeData.ac_baseMelee, 11);
		AoeData.ut_eliteKeshik.imagePath = "assets/unitTypes/Keshikicon.png";
		AoeData.ut_eliteKeshik.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry,
			this.tec_forging, this.tec_ironCasting, this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor);

		AoeData.ut_flamingCamel.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_flamingCamel.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_flamingCamel.armorClasses.set(AoeData.ac_camel, 0);
		AoeData.ut_flamingCamel.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_flamingCamel.attackValues.set(AoeData.ac_baseMelee, 20);
		AoeData.ut_flamingCamel.attackValues.set(AoeData.ac_cavalry, 50);
		AoeData.ut_flamingCamel.attackValues.set(AoeData.ac_camel, 50);
		AoeData.ut_flamingCamel.attackValues.set(AoeData.ac_warElephant, 130);
		AoeData.ut_flamingCamel.cleaveType = 3;
		AoeData.ut_flamingCamel.cleaveRadius = 2.0;
		AoeData.ut_flamingCamel.imagePath = "assets/unitTypes/Flaming_camel_icon.png";
		AoeData.ut_flamingCamel.techsForUnitList.push(this.tec_bloodlines, this.tec_husbandry);
	}

	public static InitializeCivilizations(): void{
		this.civsList.forEach(civ => {
			civ.technologies.push(this.tec_chemistry, this.tec_loom, this.tec_forging, this.tec_ironCasting, this.tec_scaleMailArmor, this.tec_fletching, this.tec_bodkinArrow,
				this.tec_paddedArcherArmor, this.tec_wheelbarrow, this.tec_handCart);
		});

		AoeData.civ_aztecs.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_aztecs.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_aztecs.unitTypeLineLevels.push([this.utl_spearman, 1]);
		AoeData.civ_aztecs.unitTypeLineLevels.push([this.utl_eagleScout, 2]);
		AoeData.civ_aztecs.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_aztecs.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_aztecs.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_aztecs.unitTypeLineLevels.push([this.utl_scorpion, 0]);
		AoeData.civ_aztecs.unitTypeLineLevels.push([this.utl_jaguarWarrior, 1]);
		AoeData.civ_aztecs.technologies.push(this.tec_supplies, this.tec_squires, this.tec_siegeEngineers, this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_plateMailArmor,
			this.tec_bracer, this.tec_leatherArcherArmor);

		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_spearman, 1]);
		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_genitour, 1]);
		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_camelRider, 1]);
		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_berbers.unitTypeLineLevels.push([this.utl_camelArcher, 1]);
		AoeData.civ_berbers.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_siegeEngineers, this.tec_bloodlines, this.tec_husbandry,
			this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer,
			this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_britons.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_britons.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_britons.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_britons.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_britons.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_britons.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_britons.unitTypeLineLevels.push([this.utl_scoutCavalry, 1]);
		AoeData.civ_britons.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_britons.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_britons.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_britons.unitTypeLineLevels.push([this.utl_longbowman, 1]);
		AoeData.civ_britons.technologies.push(this.tec_supplies, this.tec_squires, this.tec_siegeEngineers, this.tec_husbandry, this.tec_blastFurnace, this.tec_chainMailArmor,
			this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor,
			this.tec_ringArcherArmor);

		AoeData.civ_bulgarians.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_bulgarians.unitTypeLineLevels.push([this.utl_militia, 3]);
		AoeData.civ_bulgarians.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_bulgarians.unitTypeLineLevels.push([this.utl_archer, 0]);
		AoeData.civ_bulgarians.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_bulgarians.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_bulgarians.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_bulgarians.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_bulgarians.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_bulgarians.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_bulgarians.unitTypeLineLevels.push([this.utl_konnik, 1]);
		AoeData.civ_bulgarians.unitTypeLineLevels.push([this.utl_konnikDismounted, 1]);
		AoeData.civ_bulgarians.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_parthianTactics, this.tec_siegeEngineers, this.tec_bloodlines,
			this.tec_husbandry, this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor,
			this.tec_plateBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor);

		AoeData.civ_burmese.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_burmese.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_burmese.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_burmese.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_burmese.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_burmese.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_burmese.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_burmese.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_burmese.unitTypeLineLevels.push([this.utl_battleElephant, 1]);
		AoeData.civ_burmese.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_burmese.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_burmese.unitTypeLineLevels.push([this.utl_arambai, 1]);
		AoeData.civ_burmese.technologies.push(this.tec_supplies, this.tec_squires, this.tec_parthianTactics, this.tec_siegeEngineers, this.tec_bloodlines, this.tec_husbandry,
			this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer);

		AoeData.civ_byzantines.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_byzantines.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_byzantines.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_byzantines.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_byzantines.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_byzantines.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_byzantines.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_byzantines.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_byzantines.unitTypeLineLevels.push([this.utl_knight, 2]);
		AoeData.civ_byzantines.unitTypeLineLevels.push([this.utl_camelRider, 1]);
		AoeData.civ_byzantines.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_byzantines.unitTypeLineLevels.push([this.utl_scorpion, 0]);
		AoeData.civ_byzantines.unitTypeLineLevels.push([this.utl_cataphract, 1]);
		AoeData.civ_byzantines.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_husbandry, this.tec_chainMailArmor, this.tec_plateMailArmor,
			this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_celts.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_celts.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_celts.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_celts.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_celts.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_celts.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_celts.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_celts.unitTypeLineLevels.push([this.utl_knight, 2]);
		AoeData.civ_celts.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_celts.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_celts.unitTypeLineLevels.push([this.utl_woadRaider, 1]);
		AoeData.civ_celts.technologies.push(this.tec_supplies, this.tec_siegeEngineers, this.tec_husbandry, this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_plateMailArmor,
			this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_leatherArcherArmor);

		AoeData.civ_chinese.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_chinese.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_chinese.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_chinese.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_chinese.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_chinese.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_chinese.unitTypeLineLevels.push([this.utl_scoutCavalry, 1]);
		AoeData.civ_chinese.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_chinese.unitTypeLineLevels.push([this.utl_camelRider, 1]);
		AoeData.civ_chinese.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_chinese.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_chinese.unitTypeLineLevels.push([this.utl_chuKoNu, 1]);
		AoeData.civ_chinese.technologies.push(this.tec_squires, this.tec_thumbRing, this.tec_bloodlines, this.tec_husbandry, this.tec_blastFurnace, this.tec_chainMailArmor,
			this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor,
			this.tec_ringArcherArmor);

		AoeData.civ_cumans.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_cumans.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_cumans.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_cumans.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_cumans.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_cumans.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_cumans.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_cumans.unitTypeLineLevels.push([this.utl_knight, 2]);
		AoeData.civ_cumans.unitTypeLineLevels.push([this.utl_camelRider, 0]);
		AoeData.civ_cumans.unitTypeLineLevels.push([this.utl_steppeLancer, 1]);
		AoeData.civ_cumans.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_cumans.unitTypeLineLevels.push([this.utl_scorpion, 0]);
		AoeData.civ_cumans.unitTypeLineLevels.push([this.utl_kipchak, 1]);
		AoeData.civ_cumans.technologies.push(this.tec_squires, this.tec_thumbRing, this.tec_parthianTactics, this.tec_bloodlines, this.tec_blastFurnace, this.tec_chainMailArmor,
			this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_ethiopians.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_ethiopians.unitTypeLineLevels.push([this.utl_militia, 3]);
		AoeData.civ_ethiopians.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_ethiopians.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_ethiopians.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_ethiopians.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_ethiopians.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_ethiopians.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_ethiopians.unitTypeLineLevels.push([this.utl_camelRider, 1]);
		AoeData.civ_ethiopians.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_ethiopians.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_ethiopians.unitTypeLineLevels.push([this.utl_shotelWarrior, 1]);
		AoeData.civ_ethiopians.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_siegeEngineers, this.tec_husbandry, this.tec_blastFurnace,
			this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor,
			this.tec_ringArcherArmor);

		AoeData.civ_franks.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_franks.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_franks.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_franks.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_franks.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_franks.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_franks.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_franks.unitTypeLineLevels.push([this.utl_scoutCavalry, 1]);
		AoeData.civ_franks.unitTypeLineLevels.push([this.utl_knight, 2]);
		AoeData.civ_franks.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_franks.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_franks.unitTypeLineLevels.push([this.utl_throwingAxeman, 1]);
		AoeData.civ_franks.technologies.push(this.tec_supplies, this.tec_squires, this.tec_siegeEngineers, this.tec_husbandry, this.tec_blastFurnace, this.tec_chainMailArmor,
			this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_leatherArcherArmor);

		AoeData.civ_goths.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_goths.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_goths.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_goths.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_goths.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_goths.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_goths.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_goths.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_goths.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_goths.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_goths.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_goths.unitTypeLineLevels.push([this.utl_huskarl, 1]);
		AoeData.civ_goths.technologies.push(this.tec_squires, this.tec_bloodlines, this.tec_husbandry, this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_scaleBardingArmor,
			this.tec_chainBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_huns.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_huns.unitTypeLineLevels.push([this.utl_militia, 3]);
		AoeData.civ_huns.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_huns.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_huns.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_huns.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_huns.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_huns.unitTypeLineLevels.push([this.utl_knight, 2]);
		AoeData.civ_huns.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_huns.unitTypeLineLevels.push([this.utl_scorpion, 0]);
		AoeData.civ_huns.unitTypeLineLevels.push([this.utl_tarkan, 1]);
		AoeData.civ_huns.technologies.push(this.tec_squires, this.tec_thumbRing, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry, this.tec_blastFurnace,
			this.tec_chainMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor);

		AoeData.civ_incas.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_incas.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_incas.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_incas.unitTypeLineLevels.push([this.utl_eagleScout, 2]);
		AoeData.civ_incas.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_incas.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_incas.unitTypeLineLevels.push([this.utl_slinger, 0]);
		AoeData.civ_incas.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_incas.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_incas.unitTypeLineLevels.push([this.utl_kamayuk, 1]);
		AoeData.civ_incas.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_siegeEngineers, this.tec_blastFurnace, this.tec_chainMailArmor,
			this.tec_plateMailArmor, this.tec_bracer, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_indians.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_indians.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_indians.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_indians.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_indians.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_indians.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_indians.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_indians.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_indians.unitTypeLineLevels.push([this.utl_camelRider, 2]);
		AoeData.civ_indians.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_indians.unitTypeLineLevels.push([this.utl_scorpion, 0]);
		AoeData.civ_indians.unitTypeLineLevels.push([this.utl_elephantArcher, 1]);
		AoeData.civ_indians.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_parthianTactics, this.tec_siegeEngineers, this.tec_bloodlines,
			this.tec_husbandry, this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer,
			this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_italians.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_italians.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_italians.unitTypeLineLevels.push([this.utl_spearman, 1]);
		AoeData.civ_italians.unitTypeLineLevels.push([this.utl_condottiero, 0]);
		AoeData.civ_italians.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_italians.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_italians.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_italians.unitTypeLineLevels.push([this.utl_cavalryArcher, 0]);
		AoeData.civ_italians.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_italians.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_italians.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_italians.unitTypeLineLevels.push([this.utl_scorpion, 0]);
		AoeData.civ_italians.unitTypeLineLevels.push([this.utl_genoeseCrossbowman, 1]);
		AoeData.civ_italians.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_bloodlines, this.tec_husbandry, this.tec_blastFurnace,
			this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer,
			this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_japanese.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_japanese.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_japanese.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_japanese.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_japanese.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_japanese.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_japanese.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_japanese.unitTypeLineLevels.push([this.utl_scoutCavalry, 1]);
		AoeData.civ_japanese.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_japanese.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_japanese.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_japanese.unitTypeLineLevels.push([this.utl_samurai, 1]);
		AoeData.civ_japanese.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_parthianTactics, this.tec_siegeEngineers, this.tec_bloodlines,
			this.tec_husbandry, this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_bracer,
			this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_khmer.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_khmer.unitTypeLineLevels.push([this.utl_militia, 3]);
		AoeData.civ_khmer.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_khmer.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_khmer.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_khmer.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_khmer.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_khmer.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_khmer.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_khmer.unitTypeLineLevels.push([this.utl_battleElephant, 1]);
		AoeData.civ_khmer.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_khmer.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_khmer.unitTypeLineLevels.push([this.utl_ballistaElephant, 1]);
		AoeData.civ_khmer.technologies.push(this.tec_parthianTactics, this.tec_siegeEngineers, this.tec_bloodlines, this.tec_husbandry, this.tec_blastFurnace, this.tec_chainMailArmor,
			this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_koreans.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_koreans.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_koreans.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_koreans.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_koreans.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_koreans.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_koreans.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_koreans.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_koreans.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_koreans.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_koreans.unitTypeLineLevels.push([this.utl_scorpion, 0]);
		AoeData.civ_koreans.unitTypeLineLevels.push([this.utl_warWagon, 1]);
		AoeData.civ_koreans.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_siegeEngineers, this.tec_husbandry, this.tec_chainMailArmor,
			this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_lithuanians.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_lithuanians.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_lithuanians.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_lithuanians.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_lithuanians.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_lithuanians.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_lithuanians.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_lithuanians.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_lithuanians.unitTypeLineLevels.push([this.utl_knight, 2]);
		AoeData.civ_lithuanians.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_lithuanians.unitTypeLineLevels.push([this.utl_scorpion, 0]);
		AoeData.civ_lithuanians.unitTypeLineLevels.push([this.utl_leitis, 1]);
		AoeData.civ_lithuanians.technologies.push(this.tec_squires, this.tec_thumbRing, this.tec_bloodlines, this.tec_husbandry, this.tec_blastFurnace, this.tec_chainMailArmor,
			this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_magyars.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_magyars.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_magyars.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_magyars.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_magyars.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_magyars.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_magyars.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_magyars.unitTypeLineLevels.push([this.utl_knight, 2]);
		AoeData.civ_magyars.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_magyars.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_magyars.unitTypeLineLevels.push([this.utl_magyarHuszar, 1]);
		AoeData.civ_magyars.technologies.push(this.tec_supplies, this.tec_thumbRing, this.tec_parthianTactics, this.tec_siegeEngineers, this.tec_bloodlines, this.tec_husbandry,
			this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer,
			this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_malay.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_malay.unitTypeLineLevels.push([this.utl_militia, 3]);
		AoeData.civ_malay.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_malay.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_malay.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_malay.unitTypeLineLevels.push([this.utl_cavalryArcher, 0]);
		AoeData.civ_malay.unitTypeLineLevels.push([this.utl_scoutCavalry, 1]);
		AoeData.civ_malay.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_malay.unitTypeLineLevels.push([this.utl_battleElephant, 1]);
		AoeData.civ_malay.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_malay.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_malay.unitTypeLineLevels.push([this.utl_karambitWarrior, 1]);
		AoeData.civ_malay.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_siegeEngineers, this.tec_husbandry, this.tec_blastFurnace,
			this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_malians.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_malians.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_malians.unitTypeLineLevels.push([this.utl_spearman, 1]);
		AoeData.civ_malians.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_malians.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_malians.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_malians.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_malians.unitTypeLineLevels.push([this.utl_scoutCavalry, 1]);
		AoeData.civ_malians.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_malians.unitTypeLineLevels.push([this.utl_camelRider, 1]);
		AoeData.civ_malians.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_malians.unitTypeLineLevels.push([this.utl_scorpion, 0]);
		AoeData.civ_malians.unitTypeLineLevels.push([this.utl_gbeto, 1]);
		AoeData.civ_malians.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_bloodlines, this.tec_husbandry, this.tec_chainMailArmor,
			this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_mayans.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_mayans.unitTypeLineLevels.push([this.utl_militia, 3]);
		AoeData.civ_mayans.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_mayans.unitTypeLineLevels.push([this.utl_eagleScout, 2]);
		AoeData.civ_mayans.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_mayans.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_mayans.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_mayans.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_mayans.unitTypeLineLevels.push([this.utl_plumedArcher, 1]);
		AoeData.civ_mayans.technologies.push(this.tec_squires, this.tec_thumbRing, this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_bracer,
			this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_mongols.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_mongols.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_mongols.unitTypeLineLevels.push([this.utl_spearman, 1]);
		AoeData.civ_mongols.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_mongols.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_mongols.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_mongols.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_mongols.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_mongols.unitTypeLineLevels.push([this.utl_camelRider, 1]);
		AoeData.civ_mongols.unitTypeLineLevels.push([this.utl_steppeLancer, 1]);
		AoeData.civ_mongols.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_mongols.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_mongols.unitTypeLineLevels.push([this.utl_mangudai, 1]);
		AoeData.civ_mongols.technologies.push(this.tec_squires, this.tec_thumbRing, this.tec_parthianTactics, this.tec_siegeEngineers, this.tec_bloodlines, this.tec_husbandry,
			this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor);

		AoeData.civ_persians.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_persians.unitTypeLineLevels.push([this.utl_militia, 2]);
		AoeData.civ_persians.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_persians.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_persians.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_persians.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_persians.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_persians.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_persians.unitTypeLineLevels.push([this.utl_knight, 2]);
		AoeData.civ_persians.unitTypeLineLevels.push([this.utl_camelRider, 1]);
		AoeData.civ_persians.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_persians.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_persians.unitTypeLineLevels.push([this.utl_warElephant, 1]);
		AoeData.civ_persians.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor,
			this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_portuguese.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_portuguese.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_portuguese.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_portuguese.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_portuguese.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_portuguese.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_portuguese.unitTypeLineLevels.push([this.utl_cavalryArcher, 0]);
		AoeData.civ_portuguese.unitTypeLineLevels.push([this.utl_scoutCavalry, 1]);
		AoeData.civ_portuguese.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_portuguese.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_portuguese.unitTypeLineLevels.push([this.utl_scorpion, 0]);
		AoeData.civ_portuguese.unitTypeLineLevels.push([this.utl_organGun, 1]);
		AoeData.civ_portuguese.technologies.push(this.tec_supplies, this.tec_thumbRing, this.tec_siegeEngineers, this.tec_bloodlines, this.tec_husbandry, this.tec_blastFurnace,
			this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer,
			this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_saracens.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_saracens.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_saracens.unitTypeLineLevels.push([this.utl_spearman, 1]);
		AoeData.civ_saracens.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_saracens.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_saracens.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_saracens.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_saracens.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_saracens.unitTypeLineLevels.push([this.utl_knight, 0]);
		AoeData.civ_saracens.unitTypeLineLevels.push([this.utl_camelRider, 1]);
		AoeData.civ_saracens.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_saracens.unitTypeLineLevels.push([this.utl_scorpion, 0]);
		AoeData.civ_saracens.unitTypeLineLevels.push([this.utl_mameluke, 1]);
		AoeData.civ_saracens.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_parthianTactics, this.tec_siegeEngineers, this.tec_bloodlines,
			this.tec_husbandry, this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor,
			this.tec_plateBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_slavs.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_slavs.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_slavs.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_slavs.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_slavs.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_slavs.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_slavs.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_slavs.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_slavs.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_slavs.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_slavs.unitTypeLineLevels.push([this.utl_boyar, 1]);
		AoeData.civ_slavs.technologies.push(this.tec_supplies, this.tec_squires, this.tec_siegeEngineers, this.tec_bloodlines, this.tec_husbandry, this.tec_blastFurnace,
			this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_leatherArcherArmor,
			this.tec_ringArcherArmor);

		AoeData.civ_spanish.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_spanish.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_spanish.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_spanish.unitTypeLineLevels.push([this.utl_archer, 0]);
		AoeData.civ_spanish.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_spanish.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_spanish.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_spanish.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_spanish.unitTypeLineLevels.push([this.utl_knight, 2]);
		AoeData.civ_spanish.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_spanish.unitTypeLineLevels.push([this.utl_scorpion, 0]);
		AoeData.civ_spanish.unitTypeLineLevels.push([this.utl_conquistador, 1]);
		AoeData.civ_spanish.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_bloodlines, this.tec_husbandry, this.tec_blastFurnace,
			this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer,
			this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_militia, 3]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_camelRider, 1]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_steppeLancer, 1]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_keshik, 1]);
		AoeData.civ_tatars.unitTypeLineLevels.push([this.utl_flamingCamel, 0]);
		AoeData.civ_tatars.technologies.push(this.tec_squires, this.tec_thumbRing, this.tec_parthianTactics, this.tec_siegeEngineers, this.tec_bloodlines, this.tec_husbandry,
			this.tec_blastFurnace, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor,
			this.tec_ringArcherArmor);

		AoeData.civ_teutons.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_teutons.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_teutons.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_teutons.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_teutons.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_teutons.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_teutons.unitTypeLineLevels.push([this.utl_cavalryArcher, 0]);
		AoeData.civ_teutons.unitTypeLineLevels.push([this.utl_scoutCavalry, 0]);
		AoeData.civ_teutons.unitTypeLineLevels.push([this.utl_knight, 2]);
		AoeData.civ_teutons.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_teutons.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_teutons.unitTypeLineLevels.push([this.utl_teutonicKnight, 1]);
		AoeData.civ_teutons.technologies.push(this.tec_supplies, this.tec_squires, this.tec_siegeEngineers, this.tec_bloodlines, this.tec_blastFurnace, this.tec_chainMailArmor,
			this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_turks.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_turks.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_turks.unitTypeLineLevels.push([this.utl_spearman, 0]);
		AoeData.civ_turks.unitTypeLineLevels.push([this.utl_archer, 1]);
		AoeData.civ_turks.unitTypeLineLevels.push([this.utl_skirmisher, 0]);
		AoeData.civ_turks.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_turks.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_turks.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_turks.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_turks.unitTypeLineLevels.push([this.utl_camelRider, 1]);
		AoeData.civ_turks.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_turks.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_turks.unitTypeLineLevels.push([this.utl_janissary, 1]);
		AoeData.civ_turks.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_parthianTactics, this.tec_bloodlines, this.tec_husbandry,
			this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer,
			this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_vietnamese.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_vietnamese.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_vietnamese.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_vietnamese.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_vietnamese.unitTypeLineLevels.push([this.utl_skirmisher, 2]);
		AoeData.civ_vietnamese.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_vietnamese.unitTypeLineLevels.push([this.utl_scoutCavalry, 1]);
		AoeData.civ_vietnamese.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_vietnamese.unitTypeLineLevels.push([this.utl_battleElephant, 1]);
		AoeData.civ_vietnamese.unitTypeLineLevels.push([this.utl_batteringRam, 1]);
		AoeData.civ_vietnamese.unitTypeLineLevels.push([this.utl_scorpion, 0]);
		AoeData.civ_vietnamese.unitTypeLineLevels.push([this.utl_rattanArcher, 1]);
		AoeData.civ_vietnamese.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_siegeEngineers, this.tec_bloodlines, this.tec_husbandry,
			this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_plateBardingArmor, this.tec_bracer,
			this.tec_leatherArcherArmor, this.tec_ringArcherArmor);

		AoeData.civ_vikings.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_vikings.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_vikings.unitTypeLineLevels.push([this.utl_spearman, 1]);
		AoeData.civ_vikings.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_vikings.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_vikings.unitTypeLineLevels.push([this.utl_cavalryArcher, 0]);
		AoeData.civ_vikings.unitTypeLineLevels.push([this.utl_scoutCavalry, 1]);
		AoeData.civ_vikings.unitTypeLineLevels.push([this.utl_knight, 1]);
		AoeData.civ_vikings.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_vikings.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_vikings.unitTypeLineLevels.push([this.utl_berserk, 1]);
		AoeData.civ_vikings.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_siegeEngineers, this.tec_blastFurnace, this.tec_chainMailArmor,
			this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);
		
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_villager, 0]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_militia, 4]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_spearman, 2]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_eagleScout, 2]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_archer, 2]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_skirmisher, 1]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_cavalryArcher, 1]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_handCannoneer, 0]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_scoutCavalry, 2]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_knight, 2]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_camelRider, 1]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_battleElephant, 1]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_steppeLancer, 1]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_batteringRam, 2]);
		AoeData.civ_generic.unitTypeLineLevels.push([this.utl_scorpion, 1]);
		AoeData.civ_generic.technologies.push(this.tec_supplies, this.tec_squires, this.tec_thumbRing, this.tec_parthianTactics, this.tec_siegeEngineers, this.tec_bloodlines,
			this.tec_husbandry, this.tec_blastFurnace, this.tec_chainMailArmor, this.tec_plateMailArmor, this.tec_scaleBardingArmor, this.tec_chainBardingArmor,
			this.tec_plateBardingArmor, this.tec_bracer, this.tec_leatherArcherArmor, this.tec_ringArcherArmor);
	}
}