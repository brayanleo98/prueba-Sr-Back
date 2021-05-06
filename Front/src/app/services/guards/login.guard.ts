import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private login: LoginService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.login.getUser()) {
      
      if (this.login.getUser().Rol === 'admin') {
        this.router.navigate(['/main']);
      } else if (this.login.getUser().Rol === 'user') {
        this.router.navigate(['/user']);
      } 
      return false;
    } else {
      return true;
    }
  }

}
