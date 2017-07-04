import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';

import { DashboardModule } from './dashboard/dashboard.module';

import { AdminComponent } from './admin.component';
import { LoginService } from '../services/login-services';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AdminRoutingModule
  ],
  providers: [LoginService],
})
export class AdminModule { }
