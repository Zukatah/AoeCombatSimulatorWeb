import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { AoeData } from "../data/aoeData";
import { UnitType } from "../classes/unitType";
import { Color } from "../helper/color";
import { Matrix } from "../classes/matrix"
import { MatrixData } from '../data/matrixData';

@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.css']
})
export class MatricesComponent implements OnInit, AfterContentInit {

	public matrices: Matrix[] = MatrixData.combatResults_matrices;
	public contentValue: number = 0;


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