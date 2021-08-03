import { Component, Directive, EventEmitter, Input, Output, ViewChildren, QueryList } from '@angular/core';
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
export class MatrixComponent {
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


	public getSurvivorsColor(costEffValue: number): string{
		return ColorMap.getSurvivorsColor(costEffValue);
	}

}
