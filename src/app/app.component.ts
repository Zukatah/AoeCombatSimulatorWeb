import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from "rxjs/operators";
import { AoeData } from './data/aoeData';
import { MatrixData } from './data/matrixData';

declare var gtag; // for google analytics

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(router: Router){
		const navEndEvents = router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		);

		// for google analytics
		navEndEvents.subscribe((event: NavigationEnd) => {
			gtag('config', 'UA-168844404-1', {
				'page_path': event.urlAfterRedirects
			});
		});

		// initialization of AoE-objects (unit types, civs, ages, techs, ...) has to take place before the simulator's components are loaded
		AoeData.InitializeUnitTypes();
		AoeData.InitializeCivilizations();
		MatrixData.InitializeMatrixCivUnitTypeLists();
	}
}