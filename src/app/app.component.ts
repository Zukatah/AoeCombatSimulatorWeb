import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from "rxjs/operators";

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
		navEndEvents.subscribe((event: NavigationEnd) => {
			gtag('config', 'UA-168844404-1', {
				'page_path': event.urlAfterRedirects
			});
		});
	}
}
