import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNaviComponent } from './mat-navi/mat-navi.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from "@angular/material/card";
import {NgChartsModule} from "ng2-charts";
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {AngularTiltModule} from "angular-tilt";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MatNaviComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    NgChartsModule,
    AngularTiltModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
