import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [MenuComponent]
})
export class MenuModule { }
