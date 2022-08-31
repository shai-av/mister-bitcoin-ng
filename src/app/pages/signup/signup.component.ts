import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private router :Router) { }
user!:string
  ngOnInit(): void {
  }

  onSignup(){
    this.userService.signup(this.user)
    this.router.navigateByUrl('/')
  }

}
