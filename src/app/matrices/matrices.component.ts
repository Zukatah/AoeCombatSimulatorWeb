import { Component } from '@angular/core';
import { Matrix } from "../classes/matrix"
import { MatrixData } from '../data/matrixData';

@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.css']
})
export class MatricesComponent {

	public matrices: Matrix[] = MatrixData.combatResults_matrices;
	public contentValue: number = 0;

	constructor() {
	}

	public SetContentValue(contentValue: number){
		this.contentValue = contentValue;
	}
}