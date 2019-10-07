import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { LayoutSidenavComponent } from './layout-sidenav/layout-sidenav.component';


export const LayoutRoutes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: 'Navbar', component: LayoutNavbarComponent },
      { path: 'SideNav', component: LayoutSidenavComponent }
    ]
  }
];

export const LayoutRouterModule = RouterModule.forChild(LayoutRoutes);