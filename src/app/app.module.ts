import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AoECombatSimulatorComponent } from './aoeCombatSimulator/aoeCombatSimulator.component';
import { PlayerComponent } from './player/player.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    AoECombatSimulatorComponent,
    PlayerComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
	HttpClientModule,
	NgbModule // why not?!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
