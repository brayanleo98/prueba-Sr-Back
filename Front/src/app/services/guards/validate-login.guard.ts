import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateLoginGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.login.getUser()) {

      const aux = state.url.split('/');
      switch (aux[1]) {
        case 'main':
          if (this.login.getUser().Rol === 'admin') {
            return true
          } else {
            this.router.navigate(['/user']);
            return false;
          }
          break;
        case 'user':
          if (this.login.getUser().Rol === 'user') {
            return true
          } else {
            this.router.navigate(['/main']);
            return false;
          }
          break;
        default:
          break;
      }
      
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }

}
