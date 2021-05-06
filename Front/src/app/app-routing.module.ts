import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { LoginGuard } from './services/guards/login.guard';
import { ValidateLoginGuard } from './services/guards/validate-login.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'prefix'},
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [ValidateLoginGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [ValidateLoginGuard]
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
