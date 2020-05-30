import { ArmorClass } from './armorClass';
import { UnitType } from './unitType';

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


	public static ut_villager: UnitType = new UnitType("Villager", 40, 2.0, 0.0, 0.53, Number.MAX_VALUE, 0.968, 50, 0, 0);

	public static ut_champion: UnitType = new UnitType("Champion", 70, 2.0, 0.0, 0.63, Number.MAX_VALUE, 0.99, 45, 0, 20);
	public static ut_halberdier: UnitType = new UnitType("Halberdier", 60, 3.05, 0.0, 0.5, Number.MAX_VALUE, 0.9, 35, 25, 0);
	public static ut_eliteEagleWarrior: UnitType = new UnitType("Elite Eagle Warrior", 60, 2.0, 0.0, 0.8, Number.MAX_VALUE, 1.43, 20, 0, 50);

	public static ut_hussar: UnitType = new UnitType("Hussar", 95, 1.9, 0.0, 0.95, Number.MAX_VALUE, 1.65, 80, 0, 0, 0.4);
	public static ut_paladin: UnitType = new UnitType("Paladin", 180, 1.9, 0.0, 0.68, Number.MAX_VALUE, 1.485, 60, 0, 75, 0.4);
	public static ut_heavyCamelRider: UnitType = new UnitType("Heavy Camel Rider", 140, 2.0, 0.0, 0.5, Number.MAX_VALUE, 1.595, 55, 0, 60, 0.4);
	public static ut_eliteBattleElephant: UnitType = new UnitType("Elite Battle Elephant", 320, 2.0, 0.0, 0.5, Number.MAX_VALUE, 0.935, 120, 0, 70, 0.6);
	public static ut_eliteSteppeLancer: UnitType = new UnitType("Elite Steppe Lancer", 100, 2.3, 1.0, 0.68, Number.MAX_VALUE, 1.595, 70, 0, 45, 0.4);

	public static ut_arbalester: UnitType = new UnitType("Arbalester", 40, 1.7, 8.0, 0.35, 7.0, 0.96, 0, 25, 45);
	public static ut_eliteSkirmisher: UnitType = new UnitType("Elite Skirmisher", 35, 3.05, 8.0, 0.51, 7.0, 0.96, 35, 25, 0, 0.2, 1.0);
	public static ut_heavyCavalryArcher: UnitType = new UnitType("Heavy Cavalry Archer", 80, 1.8, 7.0, 1.0, 7.0, 1.54, 0, 40, 60, 0.4);
	public static ut_handCannoneer: UnitType = new UnitType("Hand Cannoneer", 35, 3.45, 7.0, 0.35, 5.5, 0.96, 45, 0, 50, 0.2, 0.0, 65);

	public static ut_siegeRam: UnitType = new UnitType("Siege Ram", 270, 5.0, 0.0, 0.75, Number.MAX_VALUE, 0.6, 0, 160, 75, 0.8);
	public static ut_heavyScorpion: UnitType = new UnitType("Heavy Scorpion", 50, 3.6, 8.0, 0.21, 6.0, 0.65, 0, 75, 75, 0.5, 2.0, 100);

	public static ut_eliteLongbowman: UnitType = new UnitType("Elite Longbowman", 40, 2.0, 12.0, 0.5, 7.0, 0.96, 0, 35, 40, 0.2, 0.0, 80);
	public static ut_eliteCataphract: UnitType = new UnitType("Elite Cataphract", 150, 1.7, 0.0, 0.68, Number.MAX_VALUE, 1.48, 70, 0, 75, 0.4);
	public static ut_eliteWoadRaider: UnitType = new UnitType("Elite Woad Raider", 80, 2.0, 0.0, 0.72, Number.MAX_VALUE, 1.38, 65, 0, 25);
	public static ut_eliteChuKoNu: UnitType = new UnitType("Elite Chu Ko Nu", 50, 2.4, 7.0, 0.83, 7.0, 0.96, 0, 40, 35); // actually attack delay is 0.23s, but firing all the missiles takes longer
	public static ut_eliteThrowingAxeman: UnitType = new UnitType("Elite Throwing Axeman", 70, 2.0, 5.0, 0.82, 7.0, 1.1, 55, 0, 25);
	public static ut_eliteHuskarl: UnitType = new UnitType("Elite Huskarl", 70, 2.0, 0.0, 0.8, Number.MAX_VALUE, 1.155, 52, 0, 26);
	public static ut_eliteSamurai: UnitType = new UnitType("Elite Samurai", 80, 1.45, 0.0, 0.8, Number.MAX_VALUE, 1.1, 60, 0, 30);
	public static ut_eliteMangudai: UnitType = new UnitType("Elite Mangudai", 80, 1.445, 7.0, 0.5, 7.0, 1.595, 0, 55, 65, 0.4);
	public static ut_eliteWarElephant: UnitType = new UnitType("Elite War Elephant", 620, 2.0, 0.0, 0.56, Number.MAX_VALUE, 0.858, 200, 0, 75, 0.6);
	public static ut_eliteMameluke: UnitType = new UnitType("Elite Mameluke", 130, 2.0, 3.0, 0.2, Number.MAX_VALUE, 1.54, 55, 0, 85, 0.4);
	public static ut_eliteTeutonicKnight: UnitType = new UnitType("Elite Teutonic Knight", 100, 2.0, 0.0, 0.75, Number.MAX_VALUE, 0.88, 85, 0, 40);
	public static ut_eliteJanissary: UnitType = new UnitType("Elite Janissary", 50, 3.49, 8.0, 0.0, 5.5, 0.96, 60, 0, 55, 0.2, 0.0, 50);
	public static ut_eliteBerserk: UnitType = new UnitType("Elite Berserk", 75, 2.0, 0.0, 0.5, Number.MAX_VALUE, 1.155, 65, 0, 25, 0.2, 0.0, 100, 40.0);

	public static ut_eliteJaguarWarrior: UnitType = new UnitType("Elite Jaguar Warrior", 75, 2.0, 0.0, 0.8, Number.MAX_VALUE, 1.1, 60, 0, 30);
	public static ut_eliteTarkan: UnitType = new UnitType("Elite Tarkan", 170, 2.1, 0.0, 0.95, Number.MAX_VALUE, 1.48, 60, 0, 60, 0.4);
	public static ut_eliteWarWagon: UnitType = new UnitType("Elite War Wagon", 200, 2.25, 8.0, 1.0, 6.0, 1.32, 0, 94, 60, 0.8);
	public static ut_elitePlumedArcher: UnitType = new UnitType("Elite Plumed Archer", 65, 1.615, 8.0, 0.5, 7.0, 1.2, 0, 40, 40);
	public static ut_eliteConquistador: UnitType = new UnitType("Elite Conquistador", 90, 2.9, 6.0, 0.41, 5.5, 1.43, 60, 0, 70, 0.4, 0.0, 70);

	public static ut_eliteKamayuk: UnitType = new UnitType("Elite Kamayuk", 80, 2.0, 1.0, 0.5, Number.MAX_VALUE, 1.1, 60, 0, 30);
	public static ut_slinger: UnitType = new UnitType("Slinger", 40, 2.0, 8.0, 0.8, 5.5, 0.96, 30, 0, 40);
	public static ut_eliteElephantArcher: UnitType = new UnitType("Elite Elephant Archer", 350, 1.7, 7.0, 0.4, 7.0, 0.88, 100, 0, 70, 0.6);
	public static ut_imperialCamelRider: UnitType = new UnitType("Imperial Camel Rider", 160, 2.0, 0.0, 0.5, Number.MAX_VALUE, 1.595, 55, 0, 60, 0.4);
	public static ut_eliteGenoeseCrossbowman: UnitType = new UnitType("El. Gen. Crossbowman", 50, 1.7, 7.0, 0.5, 7.0, 0.96, 0, 45, 45);
	public static ut_condottiero: UnitType = new UnitType("Condottiero", 80, 1.9, 0.0, 0.75, Number.MAX_VALUE, 1.32, 50, 0, 35);
	public static ut_eliteMagyarHuszar: UnitType = new UnitType("Elite Magyar Huszar", 105, 1.8, 0.0, 0.68, Number.MAX_VALUE, 1.65, 80, 0, 0, 0.4);
	public static ut_eliteBoyar: UnitType = new UnitType("Elite Boyar", 150, 1.9, 0.0, 0.7, Number.MAX_VALUE, 1.43, 50, 0, 80, 0.4);

	public static ut_eliteCamelArcher: UnitType = new UnitType("Elite Camel Archer", 80, 1.7, 7.0, 0.63, 7.0, 1.54, 0, 50, 60, 0.4, 0.0, 100, 15.0);
	public static ut_eliteGenitour: UnitType = new UnitType("Elite Genitour", 75, 3.0, 7.0, 0.5, 7.0, 1.485, 50, 35, 0, 0.4, 1.0);
	public static ut_eliteShotelWarrior: UnitType = new UnitType("Elite Shotel Warrior", 50, 2.0, 0.0, 0.75, Number.MAX_VALUE, 1.32, 50, 0, 35);
	public static ut_eliteGbeto: UnitType = new UnitType("Elite Gbeto", 45, 2.0, 0.0, 1.2, Number.MAX_VALUE, 1.375, 50, 0, 40);
	public static ut_eliteOrganGun: UnitType = new UnitType("Elite Organ Gun", 70, 3.45, 8.0, 0.6, 5.5, 0.85, 0, 80, 60, 0.4, 1.0, 50);

	public static ut_eliteArambai: UnitType = new UnitType("Elite Arambai", 85, 2.0, 5.0, 0.6, 7.0, 1.43, 0, 75, 60, 0.4, 0.0, 30);
	public static ut_eliteBallistaElephant: UnitType = new UnitType("Elite Ballista Elephant", 310, 2.5, 6.0, 0.4, 6.0, 0.88, 100, 0, 80, 0.6);
	public static ut_eliteKarambitWarrior: UnitType = new UnitType("Elite Karambit Warrior", 40, 2.0, 0.0, 0.81, Number.MAX_VALUE, 1.32, 30, 0, 15);
	public static ut_eliteRattanArcher: UnitType = new UnitType("Elite Rattan Archer", 45, 1.7, 8.0, 0.69, 7.0, 1.1, 0, 50, 45);
	public static ut_imperialSkirmisher: UnitType = new UnitType("Imperial Skirmisher", 42, 3.05, 8.0, 0.51, 7.0, 0.96, 25, 35, 0, 0.2, 1.0);

	public static ut_eliteKonnik: UnitType = new UnitType("Elite Konnik", 140, 1.8, 0.0, 0.7, Number.MAX_VALUE, 1.485, 60, 0, 70, 0.4);
	public static ut_eliteKonnikDismounted: UnitType = new UnitType("Elite Konnik (Foot)", 50, 1.8, 0.0, 0.7, Number.MAX_VALUE, 0.99, 0, 0, 0);
	public static ut_eliteKipchak: UnitType = new UnitType("Elite Kipchak", 65, 1.98, 6.0, 0.0, 7.0, 1.54, 0, 60, 35, 0.4);
	public static ut_eliteLeitis: UnitType = new UnitType("Elite Leitis", 150, 1.9, 0.0, 0.7, Number.MAX_VALUE, 1.54, 70, 0, 50, 0.4);
	public static ut_eliteKeshik: UnitType = new UnitType("Elite Keshik", 160, 1.9, 0.0, 0.7, Number.MAX_VALUE, 1.54, 50, 0, 40, 0.4);
	public static ut_flamingCamel: UnitType = new UnitType("Flaming Camel", 75, Number.MAX_VALUE, 0.0, 0.0, Number.MAX_VALUE, 1.43, 75, 0, 30, 0.4);

	public static unitTypesList: UnitType[] = [AoeData.ut_villager, AoeData.ut_champion, AoeData.ut_halberdier, AoeData.ut_eliteEagleWarrior,
		AoeData.ut_hussar, AoeData.ut_paladin, AoeData.ut_heavyCamelRider, AoeData.ut_eliteBattleElephant, AoeData.ut_eliteSteppeLancer,
		AoeData.ut_arbalester, AoeData.ut_eliteSkirmisher, AoeData.ut_heavyCavalryArcher, AoeData.ut_handCannoneer,
		AoeData.ut_siegeRam, AoeData.ut_heavyScorpion,
		AoeData.ut_eliteLongbowman, AoeData.ut_eliteCataphract, AoeData.ut_eliteWoadRaider, AoeData.ut_eliteChuKoNu, AoeData.ut_eliteThrowingAxeman, AoeData.ut_eliteHuskarl, AoeData.ut_eliteSamurai,
		AoeData.ut_eliteMangudai, AoeData.ut_eliteWarElephant, AoeData.ut_eliteMameluke, AoeData.ut_eliteTeutonicKnight, AoeData.ut_eliteJanissary,  AoeData.ut_eliteBerserk,
		AoeData.ut_eliteJaguarWarrior, AoeData.ut_eliteTarkan, AoeData.ut_eliteWarWagon, AoeData.ut_elitePlumedArcher, AoeData.ut_eliteConquistador,
		AoeData.ut_eliteKamayuk, AoeData.ut_slinger, AoeData.ut_eliteElephantArcher, AoeData.ut_imperialCamelRider, AoeData.ut_eliteGenoeseCrossbowman, AoeData.ut_condottiero, AoeData.ut_eliteMagyarHuszar, AoeData.ut_eliteBoyar,
		AoeData.ut_eliteCamelArcher, AoeData.ut_eliteGenitour, AoeData.ut_eliteShotelWarrior, AoeData.ut_eliteGbeto, AoeData.ut_eliteOrganGun,
		AoeData.ut_eliteArambai, AoeData.ut_eliteBallistaElephant, AoeData.ut_eliteKarambitWarrior, AoeData.ut_eliteRattanArcher, AoeData.ut_imperialSkirmisher,
		AoeData.ut_eliteKonnik, AoeData.ut_eliteKonnikDismounted, AoeData.ut_eliteKipchak, AoeData.ut_eliteLeitis, AoeData.ut_eliteKeshik, AoeData.ut_flamingCamel
	];

	// public static resourceImages: ImageBitmap[] = [ new ImageBitmap(), new ImageBitmap(), new ImageBitmap() ];
	
	public static InitializeUnitTypes(): void
	{
		for (let i: number = 0; i < AoeData.unitTypesList.length; i++)
		{
			AoeData.unitTypesList[i].unitTypeIndex = i;
		}

		AoeData.ut_villager.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_villager.armorClasses.set(AoeData.ac_basePierce, 2);
		AoeData.ut_villager.attackValues.set(AoeData.ac_baseMelee, 3);

		AoeData.ut_champion.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_champion.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_champion.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_champion.attackValues.set(AoeData.ac_eagleWarrior, 8);
		AoeData.ut_champion.attackValues.set(AoeData.ac_baseMelee, 17);

		AoeData.ut_halberdier.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_halberdier.armorClasses.set(AoeData.ac_spearman, 0);
		AoeData.ut_halberdier.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_halberdier.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_halberdier.attackValues.set(AoeData.ac_cavalry, 32);
		AoeData.ut_halberdier.attackValues.set(AoeData.ac_warElephant, 28);
		AoeData.ut_halberdier.attackValues.set(AoeData.ac_camel, 26);
		AoeData.ut_halberdier.attackValues.set(AoeData.ac_mameluke, 11);
		AoeData.ut_halberdier.attackValues.set(AoeData.ac_eagleWarrior, 1);
		AoeData.ut_halberdier.attackValues.set(AoeData.ac_baseMelee, 10);

		AoeData.ut_eliteEagleWarrior.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteEagleWarrior.armorClasses.set(AoeData.ac_eagleWarrior, 0);
		AoeData.ut_eliteEagleWarrior.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteEagleWarrior.armorClasses.set(AoeData.ac_basePierce, 8);
		AoeData.ut_eliteEagleWarrior.attackValues.set(AoeData.ac_siegeWeapon, 5);
		AoeData.ut_eliteEagleWarrior.attackValues.set(AoeData.ac_cavalry, 4);
		AoeData.ut_eliteEagleWarrior.attackValues.set(AoeData.ac_camel, 3);
		AoeData.ut_eliteEagleWarrior.attackValues.set(AoeData.ac_baseMelee, 13);

		AoeData.ut_hussar.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_hussar.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_hussar.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_hussar.attackValues.set(AoeData.ac_baseMelee, 11);

		AoeData.ut_paladin.armorClasses.set(AoeData.ac_baseMelee, 5);
		AoeData.ut_paladin.armorClasses.set(AoeData.ac_basePierce, 7);
		AoeData.ut_paladin.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_paladin.attackValues.set(AoeData.ac_baseMelee, 18);

		AoeData.ut_heavyCamelRider.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_heavyCamelRider.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_heavyCamelRider.armorClasses.set(AoeData.ac_camel, 0);
		AoeData.ut_heavyCamelRider.attackValues.set(AoeData.ac_baseMelee, 11);
		AoeData.ut_heavyCamelRider.attackValues.set(AoeData.ac_cavalry, 18);
		AoeData.ut_heavyCamelRider.attackValues.set(AoeData.ac_camel, 9);
		AoeData.ut_heavyCamelRider.attackValues.set(AoeData.ac_mameluke, 7);

		AoeData.ut_eliteBattleElephant.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_eliteBattleElephant.armorClasses.set(AoeData.ac_basePierce, 7);
		AoeData.ut_eliteBattleElephant.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteBattleElephant.armorClasses.set(AoeData.ac_warElephant, 0);
		AoeData.ut_eliteBattleElephant.attackValues.set(AoeData.ac_baseMelee, 18);
		AoeData.ut_eliteBattleElephant.cleaveType = 2;
		AoeData.ut_eliteBattleElephant.cleaveRadius = 0.4;

		AoeData.ut_eliteSteppeLancer.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteSteppeLancer.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_eliteSteppeLancer.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteSteppeLancer.attackValues.set(AoeData.ac_baseMelee, 15);

		AoeData.ut_arbalester.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_arbalester.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_arbalester.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_arbalester.attackValues.set(AoeData.ac_basePierce, 10);
		AoeData.ut_arbalester.attackValues.set(AoeData.ac_spearman, 3);

		AoeData.ut_eliteSkirmisher.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteSkirmisher.armorClasses.set(AoeData.ac_basePierce, 8);
		AoeData.ut_eliteSkirmisher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteSkirmisher.attackValues.set(AoeData.ac_basePierce, 7);
		AoeData.ut_eliteSkirmisher.attackValues.set(AoeData.ac_archer, 4);
		AoeData.ut_eliteSkirmisher.attackValues.set(AoeData.ac_spearman, 3);
		AoeData.ut_eliteSkirmisher.attackValues.set(AoeData.ac_cavalryArcher, 2);

		AoeData.ut_heavyCavalryArcher.armorClasses.set(AoeData.ac_baseMelee, 5);
		AoeData.ut_heavyCavalryArcher.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_heavyCavalryArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_heavyCavalryArcher.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_heavyCavalryArcher.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_heavyCavalryArcher.attackValues.set(AoeData.ac_basePierce, 11);
		AoeData.ut_heavyCavalryArcher.attackValues.set(AoeData.ac_spearman, 6);

		AoeData.ut_handCannoneer.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_handCannoneer.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_handCannoneer.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_handCannoneer.armorClasses.set(AoeData.ac_gunpowderUnit, 0);
		AoeData.ut_handCannoneer.attackValues.set(AoeData.ac_basePierce, 17);
		AoeData.ut_handCannoneer.attackValues.set(AoeData.ac_infantry, 10);
		AoeData.ut_handCannoneer.attackValues.set(AoeData.ac_ram, 2);
		AoeData.ut_handCannoneer.attackValues.set(AoeData.ac_spearman, 1);

		AoeData.ut_siegeRam.armorClasses.set(AoeData.ac_baseMelee, -3);
		AoeData.ut_siegeRam.armorClasses.set(AoeData.ac_basePierce, 195);
		AoeData.ut_siegeRam.armorClasses.set(AoeData.ac_siegeWeapon, 0);
		AoeData.ut_siegeRam.armorClasses.set(AoeData.ac_ram, 2);
		AoeData.ut_siegeRam.attackValues.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_siegeRam.attackValues.set(AoeData.ac_siegeWeapon, 65);

		AoeData.ut_heavyScorpion.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_heavyScorpion.armorClasses.set(AoeData.ac_basePierce, 7);
		AoeData.ut_heavyScorpion.armorClasses.set(AoeData.ac_siegeWeapon, 0);
		AoeData.ut_heavyScorpion.attackValues.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_heavyScorpion.attackValues.set(AoeData.ac_basePierce, 17);
		AoeData.ut_heavyScorpion.attackValues.set(AoeData.ac_warElephant, 8);
		AoeData.ut_heavyScorpion.attackValues.set(AoeData.ac_ram, 2);
		AoeData.ut_heavyScorpion.attackIsMissile = true;
		AoeData.ut_heavyScorpion.missileFlightDistance = 10.5; // scorpion missiles are always flying over a distance of 10.5 tiles, even if their attack range is only 8 tiles

		AoeData.ut_eliteLongbowman.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteLongbowman.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_eliteLongbowman.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteLongbowman.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteLongbowman.attackValues.set(AoeData.ac_basePierce, 11);
		AoeData.ut_eliteLongbowman.attackValues.set(AoeData.ac_spearman, 2);

		AoeData.ut_eliteCataphract.armorClasses.set(AoeData.ac_baseMelee, 5);
		AoeData.ut_eliteCataphract.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_eliteCataphract.armorClasses.set(AoeData.ac_cavalry, 16);
		AoeData.ut_eliteCataphract.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteCataphract.attackValues.set(AoeData.ac_baseMelee, 14);
		AoeData.ut_eliteCataphract.attackValues.set(AoeData.ac_infantry, 18);
		AoeData.ut_eliteCataphract.attackValues.set(AoeData.ac_condottiero, 10);
		AoeData.ut_eliteCataphract.cleaveType = 1;
		AoeData.ut_eliteCataphract.cleaveRadius = 0.4;

		AoeData.ut_eliteWoadRaider.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteWoadRaider.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_eliteWoadRaider.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteWoadRaider.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteWoadRaider.attackValues.set(AoeData.ac_baseMelee, 17);
		AoeData.ut_eliteWoadRaider.attackValues.set(AoeData.ac_eagleWarrior, 3);

		AoeData.ut_eliteChuKoNu.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteChuKoNu.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_eliteChuKoNu.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteChuKoNu.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteChuKoNu.attackValues.set(AoeData.ac_basePierce, 14);
		AoeData.ut_eliteChuKoNu.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_eliteChuKoNu.secondaryAttack = true;
		AoeData.ut_eliteChuKoNu.secondaryAttackProjectileCount = 4;
		AoeData.ut_eliteChuKoNu.secondaryAttackValues = new Map();
		AoeData.ut_eliteChuKoNu.secondaryAttackValues.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteChuKoNu.secondaryAttackValues.set(AoeData.ac_basePierce, 3);

		AoeData.ut_eliteThrowingAxeman.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_eliteThrowingAxeman.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_eliteThrowingAxeman.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteThrowingAxeman.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteThrowingAxeman.attackValues.set(AoeData.ac_baseMelee, 12);
		AoeData.ut_eliteThrowingAxeman.attackValues.set(AoeData.ac_eagleWarrior, 2);

		AoeData.ut_eliteHuskarl.armorClasses.set(AoeData.ac_baseMelee, 2);
		AoeData.ut_eliteHuskarl.armorClasses.set(AoeData.ac_basePierce, 10);
		AoeData.ut_eliteHuskarl.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteHuskarl.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteHuskarl.attackValues.set(AoeData.ac_baseMelee, 16);
		AoeData.ut_eliteHuskarl.attackValues.set(AoeData.ac_eagleWarrior, 3);
		AoeData.ut_eliteHuskarl.attackValues.set(AoeData.ac_archer, 10);

		AoeData.ut_eliteSamurai.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_eliteSamurai.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_eliteSamurai.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteSamurai.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteSamurai.attackValues.set(AoeData.ac_baseMelee, 16);
		AoeData.ut_eliteSamurai.attackValues.set(AoeData.ac_eagleWarrior, 3);
		AoeData.ut_eliteSamurai.attackValues.set(AoeData.ac_uniqueUnit, 12);

		AoeData.ut_eliteMangudai.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_eliteMangudai.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_eliteMangudai.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteMangudai.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_eliteMangudai.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteMangudai.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteMangudai.attackValues.set(AoeData.ac_basePierce, 12);
		AoeData.ut_eliteMangudai.attackValues.set(AoeData.ac_spearman, 3);
		AoeData.ut_eliteMangudai.attackValues.set(AoeData.ac_siegeWeapon, 5);

		AoeData.ut_eliteWarElephant.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_eliteWarElephant.armorClasses.set(AoeData.ac_basePierce, 7);
		AoeData.ut_eliteWarElephant.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteWarElephant.armorClasses.set(AoeData.ac_warElephant, 0);
		AoeData.ut_eliteWarElephant.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteWarElephant.attackValues.set(AoeData.ac_baseMelee, 24);
		AoeData.ut_eliteWarElephant.cleaveType = 2;
		AoeData.ut_eliteWarElephant.cleaveRadius = 0.5;

		AoeData.ut_eliteMameluke.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_eliteMameluke.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_eliteMameluke.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteMameluke.armorClasses.set(AoeData.ac_mameluke, 0);
		AoeData.ut_eliteMameluke.armorClasses.set(AoeData.ac_camel, 0);
		AoeData.ut_eliteMameluke.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteMameluke.attackValues.set(AoeData.ac_baseMelee, 14);
		AoeData.ut_eliteMameluke.attackValues.set(AoeData.ac_cavalry, 12);
		AoeData.ut_eliteMameluke.attackValues.set(AoeData.ac_mameluke, 1);

		AoeData.ut_eliteTeutonicKnight.armorClasses.set(AoeData.ac_baseMelee, 13);
		AoeData.ut_eliteTeutonicKnight.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_eliteTeutonicKnight.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteTeutonicKnight.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteTeutonicKnight.attackValues.set(AoeData.ac_baseMelee, 21);
		AoeData.ut_eliteTeutonicKnight.attackValues.set(AoeData.ac_eagleWarrior, 4);

		AoeData.ut_eliteJanissary.armorClasses.set(AoeData.ac_baseMelee, 5);
		AoeData.ut_eliteJanissary.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_eliteJanissary.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteJanissary.armorClasses.set(AoeData.ac_gunpowderUnit, 0);
		AoeData.ut_eliteJanissary.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteJanissary.attackValues.set(AoeData.ac_basePierce, 22);
		AoeData.ut_eliteJanissary.attackValues.set(AoeData.ac_ram, 3);

		AoeData.ut_eliteBerserk.armorClasses.set(AoeData.ac_baseMelee, 5);
		AoeData.ut_eliteBerserk.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_eliteBerserk.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteBerserk.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteBerserk.attackValues.set(AoeData.ac_baseMelee, 18);
		AoeData.ut_eliteBerserk.attackValues.set(AoeData.ac_eagleWarrior, 3);
		AoeData.ut_eliteBerserk.attackValues.set(AoeData.ac_cavalry, 5);
		AoeData.ut_eliteBerserk.attackValues.set(AoeData.ac_camel, 4);

		AoeData.ut_eliteJaguarWarrior.armorClasses.set(AoeData.ac_baseMelee, 5);
		AoeData.ut_eliteJaguarWarrior.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_eliteJaguarWarrior.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteJaguarWarrior.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteJaguarWarrior.attackValues.set(AoeData.ac_baseMelee, 20);
		AoeData.ut_eliteJaguarWarrior.attackValues.set(AoeData.ac_infantry, 11);
		AoeData.ut_eliteJaguarWarrior.attackValues.set(AoeData.ac_condottiero, 10);
		AoeData.ut_eliteJaguarWarrior.attackValues.set(AoeData.ac_eagleWarrior, 2);

		AoeData.ut_eliteTarkan.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_eliteTarkan.armorClasses.set(AoeData.ac_basePierce, 8);
		AoeData.ut_eliteTarkan.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteTarkan.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteTarkan.attackValues.set(AoeData.ac_baseMelee, 15);

		AoeData.ut_eliteWarWagon.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteWarWagon.armorClasses.set(AoeData.ac_basePierce, 8);
		AoeData.ut_eliteWarWagon.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteWarWagon.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_eliteWarWagon.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteWarWagon.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteWarWagon.attackValues.set(AoeData.ac_basePierce, 13);

		AoeData.ut_elitePlumedArcher.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_elitePlumedArcher.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_elitePlumedArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_elitePlumedArcher.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_elitePlumedArcher.attackValues.set(AoeData.ac_basePierce, 9);
		AoeData.ut_elitePlumedArcher.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_elitePlumedArcher.attackValues.set(AoeData.ac_infantry, 2);
		AoeData.ut_elitePlumedArcher.attackValues.set(AoeData.ac_condottiero, 2);

		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_baseMelee, 5);
		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_gunpowderUnit, 0);
		AoeData.ut_eliteConquistador.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteConquistador.attackValues.set(AoeData.ac_basePierce, 18);
		AoeData.ut_eliteConquistador.attackValues.set(AoeData.ac_ram, 6);

		AoeData.ut_eliteKamayuk.armorClasses.set(AoeData.ac_baseMelee, 5);
		AoeData.ut_eliteKamayuk.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_eliteKamayuk.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteKamayuk.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteKamayuk.attackValues.set(AoeData.ac_baseMelee, 12);
		AoeData.ut_eliteKamayuk.attackValues.set(AoeData.ac_warElephant, 20);
		AoeData.ut_eliteKamayuk.attackValues.set(AoeData.ac_cavalry, 12);
		AoeData.ut_eliteKamayuk.attackValues.set(AoeData.ac_camel, 10);
		AoeData.ut_eliteKamayuk.attackValues.set(AoeData.ac_mameluke, 1);

		AoeData.ut_slinger.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_slinger.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_slinger.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_slinger.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_slinger.attackValues.set(AoeData.ac_basePierce, 8);
		AoeData.ut_slinger.attackValues.set(AoeData.ac_infantry, 10);
		AoeData.ut_slinger.attackValues.set(AoeData.ac_condottiero, 10);
		AoeData.ut_slinger.attackValues.set(AoeData.ac_ram, 3);
		AoeData.ut_slinger.attackValues.set(AoeData.ac_spearman, 1);

		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_basePierce, 9);
		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_cavalryArcher, -2);
		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_warElephant, 0);
		AoeData.ut_eliteElephantArcher.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteElephantArcher.attackValues.set(AoeData.ac_basePierce, 11);
		AoeData.ut_eliteElephantArcher.attackValues.set(AoeData.ac_spearman, 2);

		AoeData.ut_imperialCamelRider.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_imperialCamelRider.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_imperialCamelRider.armorClasses.set(AoeData.ac_camel, 0);
		AoeData.ut_imperialCamelRider.attackValues.set(AoeData.ac_baseMelee, 13);
		AoeData.ut_imperialCamelRider.attackValues.set(AoeData.ac_cavalry, 18);
		AoeData.ut_imperialCamelRider.attackValues.set(AoeData.ac_camel, 9);
		AoeData.ut_imperialCamelRider.attackValues.set(AoeData.ac_mameluke, 7);

		AoeData.ut_eliteGenoeseCrossbowman.armorClasses.set(AoeData.ac_baseMelee, 5);
		AoeData.ut_eliteGenoeseCrossbowman.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_eliteGenoeseCrossbowman.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteGenoeseCrossbowman.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteGenoeseCrossbowman.attackValues.set(AoeData.ac_basePierce, 10);
		AoeData.ut_eliteGenoeseCrossbowman.attackValues.set(AoeData.ac_cavalry, 7);
		AoeData.ut_eliteGenoeseCrossbowman.attackValues.set(AoeData.ac_warElephant, 7);
		AoeData.ut_eliteGenoeseCrossbowman.attackValues.set(AoeData.ac_camel, 6);

		AoeData.ut_condottiero.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_condottiero.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_condottiero.armorClasses.set(AoeData.ac_infantry, 10);
		AoeData.ut_condottiero.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_condottiero.armorClasses.set(AoeData.ac_condottiero, 0);
		AoeData.ut_condottiero.attackValues.set(AoeData.ac_baseMelee, 13);
		AoeData.ut_condottiero.attackValues.set(AoeData.ac_gunpowderUnit, 10);

		AoeData.ut_eliteMagyarHuszar.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteMagyarHuszar.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_eliteMagyarHuszar.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteMagyarHuszar.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteMagyarHuszar.attackValues.set(AoeData.ac_baseMelee, 14);
		AoeData.ut_eliteMagyarHuszar.attackValues.set(AoeData.ac_siegeWeapon, 8);
		AoeData.ut_eliteMagyarHuszar.attackValues.set(AoeData.ac_ram, 2);

		AoeData.ut_eliteBoyar.armorClasses.set(AoeData.ac_baseMelee, 9);
		AoeData.ut_eliteBoyar.armorClasses.set(AoeData.ac_basePierce, 7);
		AoeData.ut_eliteBoyar.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteBoyar.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteBoyar.attackValues.set(AoeData.ac_baseMelee, 18);

		AoeData.ut_eliteCamelArcher.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_eliteCamelArcher.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_eliteCamelArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteCamelArcher.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_eliteCamelArcher.armorClasses.set(AoeData.ac_camel, 0);
		AoeData.ut_eliteCamelArcher.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteCamelArcher.attackValues.set(AoeData.ac_basePierce, 12);
		AoeData.ut_eliteCamelArcher.attackValues.set(AoeData.ac_cavalryArcher, 6);

		AoeData.ut_eliteGenitour.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteGenitour.armorClasses.set(AoeData.ac_basePierce, 8);
		AoeData.ut_eliteGenitour.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteGenitour.armorClasses.set(AoeData.ac_cavalryArcher, 1);
		AoeData.ut_eliteGenitour.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteGenitour.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteGenitour.attackValues.set(AoeData.ac_basePierce, 8);
		AoeData.ut_eliteGenitour.attackValues.set(AoeData.ac_archer, 5);
		AoeData.ut_eliteGenitour.attackValues.set(AoeData.ac_spearman, 2);
		AoeData.ut_eliteGenitour.attackValues.set(AoeData.ac_cavalryArcher, 2);

		AoeData.ut_eliteShotelWarrior.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteShotelWarrior.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_eliteShotelWarrior.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteShotelWarrior.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteShotelWarrior.attackValues.set(AoeData.ac_baseMelee, 22);
		AoeData.ut_eliteShotelWarrior.attackValues.set(AoeData.ac_eagleWarrior, 2);

		AoeData.ut_eliteGbeto.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteGbeto.armorClasses.set(AoeData.ac_basePierce, 4);
		AoeData.ut_eliteGbeto.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteGbeto.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteGbeto.attackValues.set(AoeData.ac_baseMelee, 15);
		AoeData.ut_eliteGbeto.attackValues.set(AoeData.ac_eagleWarrior, 1);

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

		AoeData.ut_eliteArambai.armorClasses.set(AoeData.ac_baseMelee, 1);
		AoeData.ut_eliteArambai.armorClasses.set(AoeData.ac_basePierce, 3);
		AoeData.ut_eliteArambai.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteArambai.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_eliteArambai.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteArambai.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteArambai.attackValues.set(AoeData.ac_basePierce, 19);
		AoeData.ut_eliteArambai.attackValues.set(AoeData.ac_ram, 2);

		AoeData.ut_eliteBallistaElephant.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteBallistaElephant.armorClasses.set(AoeData.ac_basePierce, 7);
		AoeData.ut_eliteBallistaElephant.armorClasses.set(AoeData.ac_cavalry, -2);
		AoeData.ut_eliteBallistaElephant.armorClasses.set(AoeData.ac_warElephant, -2);
		AoeData.ut_eliteBallistaElephant.armorClasses.set(AoeData.ac_siegeWeapon, -2);
		AoeData.ut_eliteBallistaElephant.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteBallistaElephant.attackValues.set(AoeData.ac_basePierce, 10);
		AoeData.ut_eliteBallistaElephant.attackIsMissile = true;
		AoeData.ut_eliteBallistaElephant.missileFlightDistance = 6.0;
		AoeData.ut_eliteBallistaElephant.secondaryMissileFlightDistance = 12.5;
		AoeData.ut_eliteBallistaElephant.secondaryAttack = true;
		AoeData.ut_eliteBallistaElephant.secondaryAttackValues = new Map();
		AoeData.ut_eliteBallistaElephant.secondaryAttackValues.set(AoeData.ac_basePierce, 7);

		AoeData.ut_eliteKarambitWarrior.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_eliteKarambitWarrior.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_eliteKarambitWarrior.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteKarambitWarrior.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteKarambitWarrior.attackValues.set(AoeData.ac_baseMelee, 11);
		AoeData.ut_eliteKarambitWarrior.attackValues.set(AoeData.ac_eagleWarrior, 2);

		AoeData.ut_eliteRattanArcher.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteRattanArcher.armorClasses.set(AoeData.ac_basePierce, 10);
		AoeData.ut_eliteRattanArcher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteRattanArcher.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteRattanArcher.attackValues.set(AoeData.ac_basePierce, 11);
		AoeData.ut_eliteRattanArcher.attackValues.set(AoeData.ac_spearman, 2);

		AoeData.ut_imperialSkirmisher.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_imperialSkirmisher.armorClasses.set(AoeData.ac_basePierce, 9);
		AoeData.ut_imperialSkirmisher.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_imperialSkirmisher.attackValues.set(AoeData.ac_basePierce, 8);
		AoeData.ut_imperialSkirmisher.attackValues.set(AoeData.ac_archer, 5);
		AoeData.ut_imperialSkirmisher.attackValues.set(AoeData.ac_spearman, 3);
		AoeData.ut_imperialSkirmisher.attackValues.set(AoeData.ac_cavalryArcher, 3);

		AoeData.ut_eliteKonnik.armorClasses.set(AoeData.ac_baseMelee, 5);
		AoeData.ut_eliteKonnik.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_eliteKonnik.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteKonnik.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteKonnik.attackValues.set(AoeData.ac_baseMelee, 18);

		AoeData.ut_eliteKonnikDismounted.armorClasses.set(AoeData.ac_baseMelee, 3);
		AoeData.ut_eliteKonnikDismounted.armorClasses.set(AoeData.ac_basePierce, 5);
		AoeData.ut_eliteKonnikDismounted.armorClasses.set(AoeData.ac_infantry, 0);
		AoeData.ut_eliteKonnikDismounted.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteKonnikDismounted.attackValues.set(AoeData.ac_baseMelee, 17);

		AoeData.ut_eliteKipchak.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_eliteKipchak.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_eliteKipchak.armorClasses.set(AoeData.ac_archer, 0);
		AoeData.ut_eliteKipchak.armorClasses.set(AoeData.ac_cavalryArcher, 0);
		AoeData.ut_eliteKipchak.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteKipchak.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteKipchak.attackValues.set(AoeData.ac_basePierce, 8);
		AoeData.ut_eliteKipchak.attackValues.set(AoeData.ac_spearman, 3);
		AoeData.ut_eliteKipchak.secondaryAttack = true;
		AoeData.ut_eliteKipchak.secondaryAttackProjectileCount = 3;
		AoeData.ut_eliteKipchak.secondaryAttackValues= new Map();
		AoeData.ut_eliteKipchak.secondaryAttackValues.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_eliteKipchak.secondaryAttackValues.set(AoeData.ac_basePierce, 3);

		AoeData.ut_eliteLeitis.armorClasses.set(AoeData.ac_baseMelee, 5);
		AoeData.ut_eliteLeitis.armorClasses.set(AoeData.ac_basePierce, 6);
		AoeData.ut_eliteLeitis.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteLeitis.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteLeitis.attackValues.set(AoeData.ac_baseMelee, 18);

		AoeData.ut_eliteKeshik.armorClasses.set(AoeData.ac_baseMelee, 4);
		AoeData.ut_eliteKeshik.armorClasses.set(AoeData.ac_basePierce, 7);
		AoeData.ut_eliteKeshik.armorClasses.set(AoeData.ac_cavalry, 0);
		AoeData.ut_eliteKeshik.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_eliteKeshik.attackValues.set(AoeData.ac_baseMelee, 15);

		AoeData.ut_flamingCamel.armorClasses.set(AoeData.ac_baseMelee, 0);
		AoeData.ut_flamingCamel.armorClasses.set(AoeData.ac_basePierce, 0);
		AoeData.ut_flamingCamel.armorClasses.set(AoeData.ac_camel, 0);
		AoeData.ut_flamingCamel.armorClasses.set(AoeData.ac_uniqueUnit, 0);
		AoeData.ut_flamingCamel.attackValues.set(AoeData.ac_baseMelee, 20);
		AoeData.ut_flamingCamel.attackValues.set(AoeData.ac_cavalry, 50);
		AoeData.ut_flamingCamel.attackValues.set(AoeData.ac_camel, 50);
		AoeData.ut_flamingCamel.attackValues.set(AoeData.ac_warElephant, 100);
		AoeData.ut_flamingCamel.cleaveType = 3;
		AoeData.ut_flamingCamel.cleaveRadius = 1.5;
	}
}