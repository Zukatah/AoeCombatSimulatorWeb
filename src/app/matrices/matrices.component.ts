import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { AoeData } from "../aoeData/aoeData";
import { UnitType } from "../aoeData/unitType";
import { Color } from "../helper/color";
import { Matrix } from "../helper/matrix"
import { MatrixData } from '../helper/matrixData';

@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.css']
})
export class MatricesComponent implements OnInit, AfterContentInit {

	public matrices: Matrix[] = MatrixData.combatResults_matrices;

	// Currently there is no "No Hit&Run" or "Perfect Hit&Run" data available
	public contentValue: number = 0;
	public contentValues: string[] = [
		"Info",
		"Matrix 1 - Medium Hit&Run - 100F=100W=100G - Equal army worth",
		"Matrix 2 - Medium Hit&Run - 100F=100W=17G - Equal army worth",
		"Matrix 3 - Medium Hit&Run - 100F=100W=100G - Equal army size",
		"Matrix 4 - Medium Hit&Run - 100F=100W=17G - Equal army size",
	];


	constructor() {
	}


	public ngOnInit(){
	}


	public ngAfterContentInit(){

	}


	public SetContentValue(contentValue: number){
		this.contentValue = contentValue;
	}


	
}