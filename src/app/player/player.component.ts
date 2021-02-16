import { Component, OnInit, Input, DoCheck, IterableDiffers, IterableDiffer } from '@angular/core';
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

	public getArrayAllColumns(): number[]{
		return [...Array(this.player.uts.length).keys()];
	}

	public getCivUnitTypeIndices(): number[]{
		return [...Array(this.player.civUts.length).keys()];
	}

	public setCiv(civIndex: number): void{
		this.player.SetCiv(civIndex);
	}
}