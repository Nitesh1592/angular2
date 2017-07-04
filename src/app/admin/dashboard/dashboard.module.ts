import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderModule } from '../header/header.module';
import { MenuModule } from '../menu/menu.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule,
    HeaderModule,
    MenuModule
  ],
  providers: [],
})
export class DashboardModule { }
