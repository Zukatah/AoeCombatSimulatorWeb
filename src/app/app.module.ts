import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AoECombatSimulatorComponent } from './aoeCombatSimulator/aoeCombatSimulator.component';
import { PlayerComponent } from './player/player.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { MatrixComponent } from './matrix/matrix.component';

@NgModule({
  declarations: [
    AppComponent,
    AoECombatSimulatorComponent,
    PlayerComponent,
    NavbarComponent,
    InfoComponent,
    MatrixComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
	HttpClientModule,
	NgbModule, // why not?!
	RouterModule.forRoot([
		{ path: 'info', component: InfoComponent },
		{ path: 'matrix', component: MatrixComponent },
		{ path: '', component: AoECombatSimulatorComponent },
		{ path: '**', component: AoECombatSimulatorComponent }
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
