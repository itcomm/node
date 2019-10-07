import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // 첫 화면을 login 페이지로 설정
  { path: 'login', component: LoginComponent, }, // url 경로가 /login 일때 LoginComponent를 보여준다.
  { path: 'home', component: HomeComponent, }, // url 경로가 /main 일때 MainComponent를 보여준다.
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // 잘못된 URL을 사용했을때 Login 페이지로 돌려보냄.
];

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});