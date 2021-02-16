import { Component, Directive, EventEmitter, Input, OnInit, Output, ViewChildren, QueryList } from '@angular/core';
import { Color } from '../helper/color';
import { Matrix } from '../classes/matrix';


export type SortColumn = keyof Matrix | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
const compare = (v1: string| number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

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
	matrixTable: number[][];

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
			this.matrixTable = this.matrix.combatResults;
		} else {
			this.matrixTable = [...this.matrix.combatResults].sort((a, b) => {
				const res = compare(a[column], b[column]);
				return direction === 'asc' ? res : -res;
			});
		}
	}


	constructor() {
		this.matrixTable = this.matrix.combatResults;
	}


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
