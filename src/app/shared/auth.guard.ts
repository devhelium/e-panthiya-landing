import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, 
UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../../app/services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public apiService: ApiServiceService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.apiService.isLoggedIn !== true) {
      window.alert("Access not allowed!");
      this.router.navigate(['log-in'])
    }
    return true;
  }
}