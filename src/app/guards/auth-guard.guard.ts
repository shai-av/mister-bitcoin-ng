import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService:AuthServiceService){}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean>{
    return this.authService.checkLoggedIn()
  }
  
}
