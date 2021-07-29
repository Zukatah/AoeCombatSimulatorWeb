import { Component, OnInit, Input, DoCheck, IterableDiffers, IterableDiffer } from '@angular/core';
import { Age } from '../classes/age';
import { Civilization } from '../classes/civilization';
import { Technology } from '../classes/technology';
import { AoeData } from '../data/aoeData';
import { AoECombatSimulatorComponent } from "./../aoeCombatSimulator/aoeCombatSimulator.component";
import { Player } from "./../classes/player";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, DoCheck{
	
	@Input() simulator: AoECombatSimulatorComponent;
	@Input() player: Player;
	public iterableDiffer : IterableDiffer<number>;
	public civsList: Civilization[] = AoeData.civsList;
	public ages: Age[] = AoeData.ages;
	public techsHidden: boolean = true; // flag to allow toggling of tech visibility (for better overview)

	constructor(private iterableDiffers: IterableDiffers){}

	ngOnInit(){
		this.iterableDiffer = this.iterableDiffers.find(this.player.amountStartUnits).create();
	}

	ngDoCheck(){
		let changes = this.iterableDiffer.diff(this.player.amountStartUnits);
		if (changes) {
			this.simulator.CalcResInvForPlayer(this.player);
		}
	}

	public getSurvivorsColor(utInd: number): string{
		return this.player.avgSurvivorsColor[utInd].GetAsHex();
	}

	public getCivUnitTypeIndices(): number[]{
		return [...Array(this.player.civUts.length).keys()];
	}

	public setCiv(civIndex: number): void{
		this.player.SetCiv(civIndex);
	}

	public setAge(age: number): void{
		this.player.SetAge(age);
	}

	public ToggleTech(tech: Technology): void{
		this.player.ToggleTech(tech);
	}

	public SetUnitTypeLineLevel(item: number, increase: boolean): void{
		this.player.SetUnitTypeLineLevel(item, increase);
	}

	public IsUnitTypeLineMaxed(index: number): boolean{
		return this.player.IsUnitTypeLineMaxed(index);
	}

	public IsUnitTypeLineMinimized(index: number): boolean{
		return this.player.IsUnitTypeLineMinimized(index);
	}
}