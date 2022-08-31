import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router:Router) { }

  checkLoggedIn(){
    let user = localStorage.getItem('loggedinUser')
    if(user) {
      return of(true)
    }
    this.router.navigateByUrl('/signup')
    return of(false)
  }
}
