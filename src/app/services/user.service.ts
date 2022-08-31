import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact';
import { Move } from '../models/move';
import { User } from '../models/user';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private contactService:ContactService) { }

public get getUser() {
return this.user$
}

private _user$ = new BehaviorSubject<User>(this._loadUserLocalStorage())
public user$ = this._user$.asObservable()

signup(name:string) {
    const user = {
        name,
        coins: 100,
        moves: []
    }

 this._saveUser(user)
 this._user$.next(user)
    return { ...user }
}

logout(){
  localStorage.removeItem('loggedinUser')
}

_loadUserLocalStorage(){
  let user = localStorage.getItem('loggedinUser')
  if(user) return JSON.parse(user)
  return null
}

transferFunds(funds:number=0,contactId:any){
  var contact:Contact
  this.contactService.getContactById(contactId).subscribe(c=>{
    contact = c
    let user = {...this._user$.getValue()}
    const move:Move = {
      toId:contact._id,
      to:contact.name,
      at: new Date,
      amount:funds
    } 
    user.moves.unshift(move)
    user.coins -= funds    
    console.log(user)
    this._user$.next(user)
    this._saveUser(user)
  })
}

 _saveUser(user:User) {
    localStorage.setItem('loggedinUser', JSON.stringify(user))
}

}
