import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef, AfterViewInit, DoCheck, IterableDiffers, IterableDiffer } from '@angular/core';
import { UnitType } from "./../aoeData/unitType";
import { AoeData } from "./../aoeData/aoeData";
import { Color } from "./../helper/color";
import { AoECombatSimulatorComponent } from "./../aoeCombatSimulator/aoeCombatSimulator.component";
import { Player } from "./../aoeData/player";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, AfterViewInit, DoCheck{
	// @ViewChildren("utDiv") utDivs: QueryList<ElementRef>;
	// @ViewChildren("survivorsOutput") survivorsOutputs: QueryList<ElementRef>;
	@Input() simulator: AoECombatSimulatorComponent;
	@Input() player: Player;
	public iterableDiffer : IterableDiffer<number>;

	constructor(private iterableDiffers: IterableDiffers){}

	ngOnInit(){
		this.iterableDiffer = this.iterableDiffers.find(this.player.amountStartUnits).create();
	}

	ngAfterViewInit(){
		// console.log("#Divs selected: " + this.utDivs.length); // works but no longer needed
		/*this.utDivs.changes.subscribe(() => {	console.log("#Divs selected: " + this.utDivs.length); this.utDivs.forEach(utDiv => { console.log(utDiv.nativeElement); }); });*/
	}

	ngDoCheck(){
		let changes = this.iterableDiffer.diff(this.player.amountStartUnits);
		if (changes) {
			this.player.CalculateResourcesInvested();
		}
	}

	public updateSurvivorsOutputsColors(): void{
		//let survivorsOutputsRef: ElementRef[] = this.survivorsOutputs.toArray();
		//for (let i: number = 0; i < AoeData.unitTypesList.length; i++){
		//}
	}

	public getSurvivorsColor(utInd: number): string{
		return this.player.avgSurvivorsColor[utInd].GetAsHex();
	}

	public getArrayLeftColumn(): number[]{
		return [...Array(this.player.uts.length % 2 == 0 ? Math.round(this.player.uts.length / 2) : Math.ceil(this.player.uts.length / 2)).keys()];
	}

	public getArrayRightColumn(): number[]{
		return [...Array(this.player.uts.length % 2 == 0 ? Math.round(this.player.uts.length / 2) : Math.floor(this.player.uts.length / 2)).keys()]
		.map(x => x + (this.player.uts.length % 2 == 0 ? Math.round(this.player.uts.length / 2) : Math.ceil(this.player.uts.length / 2)));
	}

	public getArrayAllColumns(): number[]{
		return [...Array(this.player.uts.length).keys()];
	}
}
