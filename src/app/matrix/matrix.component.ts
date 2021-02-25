import { Component, Directive, EventEmitter, Input, OnInit, Output, ViewChildren, QueryList } from '@angular/core';
import { Color } from '../helper/color';
import { Matrix, MatrixRow } from '../classes/matrix';
import { ColorMap } from '../helper/colorMap';
import { CivUnitType } from '../classes/civUnitType';


export type SortColumn = keyof MatrixRow | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
const compare = (v1: string| number | CivUnitType | number[], v2: string | number | CivUnitType | number[]) => {
	if (typeof v1 === "number" || typeof v1 === "string"){
		return v1 < v2 ? -1 : v1 > v2 ? 1 : 0
	} else if (v1 instanceof CivUnitType && v2 instanceof CivUnitType){
		return v1.name < v2.name ? -1 : v1.name > v2.name ? 1 : 0
	}
	return 1;
};

export interface SortEvent{
	column: SortColumn;
	direction: SortDirection
}

@Directive({
	selector: 'th[sortable]',
	host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()'
	}
})
export class NgbdSortableHeader{
	@Input() sortable: SortColumn = '';
	@Input() direction: SortDirection = '';
	@Output() sort = new EventEmitter<SortEvent>();

	rotate(){
		this.direction = rotate[this.direction];
		this.sort.emit({column: this.sortable, direction: this.direction});
	}
}



@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
	@Input() matrix: Matrix;

	@ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

	onSort({column, direction}: SortEvent){
		// resetting other headers
		this.headers.forEach(header => {
			if (header.sortable !== column){
				header.direction = '';
			}
		});

		// sorting matrix entries
		if (direction === '' || column === ''){
		} else {
			this.matrix.matrixRows = [...this.matrix.matrixRows].sort((a, b) => {
				const res = compare(a[column], b[column]);
				return direction === 'asc' ? res : -res;
			});
		}
	}


	constructor() {	}


	ngOnInit(): void { }


	public getSurvivorsColorAlternativeColoring(number): string {
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


	public getSurvivorsColor(number): string{
		if (number <= 0.25){
			return ColorMap.getColorAsHexByIndex(0);
		}
		if (number <= 0.5){
			return ColorMap.getColorAsHexByIndex(Math.round((number-0.25)*256));
		}
		if (number <= 1.0){
			return ColorMap.getColorAsHexByIndex(64 + Math.round((number-0.5)*128));
		}
		if (number <= 2.0){
			return ColorMap.getColorAsHexByIndex(128 + Math.round((number-1.0)*64));
		}
		if (number <= 4.0){
			return ColorMap.getColorAsHexByIndex(192 + Math.round((number-2.0)*31.5));
		}
		return ColorMap.getColorAsHexByIndex(255);
	}

}
