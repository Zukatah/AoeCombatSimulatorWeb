import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../helper/color';
import { Matrix } from '../helper/matrix';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
	@Input() matrix: Matrix;


	constructor() { }


	ngOnInit(): void {}


	public CreateIncrArray(n: number): number[] {
		return [...Array(n).keys()];
	}


	public getSurvivorsColor(number): string {
		if (number <= 0.25){
			return new Color(255.0, 0.0, 0.0).GetAsHex(); // 255 0 0 (red)
		}
		if (number <= 0.5){
			return new Color(255.0, (number-0.25)*660.0, 0.0).GetAsHex(); // 255 0 0 (red) to 255 165 0 (orange)
		}
		if (number <= 1.0){
			return new Color(255.0, 165.0 + (number-0.5)*180.0, 0.0).GetAsHex(); // 255 165 0 (orange) to 255 255 0 (yellow)
		}
		if (number <= 2.0){
			return new Color(255.0 - (number-1.0)*111.0, 255.0 - (number-1.0)*17.0, (number-1.0)*144.0).GetAsHex(); // 255 255 0 (yellow) to 144 238 144 (light green)
		}
		if (number <= 4.0){
			return new Color(144.0 - (number-2.0)*72.0, 238.0 - (number-2.0)*69.0, 144 - (number-2.0)*72.0).GetAsHex(); // 144 238 144 (light green) to 0 100 0 (dark green)
		}
		return new Color(0.0, 100.0, 0.0).GetAsHex(); // 0 100 0 (dark green)
	}

}
