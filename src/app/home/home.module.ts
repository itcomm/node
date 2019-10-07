import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { HomeRouterModule } from "./home.router.module";

@NgModule({
  imports: [
    CommonModule,
    HomeRouterModule
  ],
  declarations: [Menu1Component, Menu2Component, Menu3Component]
})
export class HomeModule { }