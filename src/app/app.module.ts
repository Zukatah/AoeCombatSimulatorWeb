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
import { MatricesComponent } from './matrices/matrices.component';
import { MatrixCreationComponent } from './matrix-creation/matrix-creation.component';
import { MatrixComponent, NgbdSortableHeader } from './matrix/matrix.component';
import { MatrixInfoComponent } from './matrix-info/matrix-info.component';
import { FooterComponent } from './footer/footer.component';

//import { Matrix } from './helper/matrix';

@NgModule({
  declarations: [
    AppComponent,
    AoECombatSimulatorComponent,
    PlayerComponent,
    NavbarComponent,
    InfoComponent,
    MatricesComponent,
    MatrixCreationComponent,
	MatricesComponent,
	MatrixComponent,
	MatrixInfoComponent,
	FooterComponent,
	NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    FormsModule,
	HttpClientModule,
	NgbModule, // why not?!
	RouterModule.forRoot([
		{ path: 'info', component: InfoComponent },
		{ path: 'matrices', component: MatricesComponent },
		{ path: 'matrix-info', component: MatrixInfoComponent },
		{ path: 'matrix-creation', component: MatrixCreationComponent },
		{ path: '', component: AoECombatSimulatorComponent },
		{ path: '**', component: AoECombatSimulatorComponent }
	]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
