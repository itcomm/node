import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { LayoutSidenavComponent } from './layout-sidenav/layout-sidenav.component';
import { LayoutBlankComponent } from "./layout-blank/layout-blank.component";

import { LayoutRouterModule } from "./layout.router.module";

@NgModule({
  imports: [
    CommonModule,
    LayoutRouterModule
  ],
  declarations: [LayoutComponent, LayoutNavbarComponent, LayoutSidenavComponent, LayoutBlankComponent]
})
export class LayoutModule { }