import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService,
    private router:Router) { }
  contacts!: Contact[]
subscription!:Subscription

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.subscription = this.contactService.contacts$.subscribe(contacts=>{
      this.contacts = contacts
    })
  }

  onRemove(contactId:string){
    this.contactService.deleteContact(contactId)
  }


 ngOnDestroy():void{
  this.subscription.unsubscribe()
 }

 onAddContact(){
  this.router.navigateByUrl('/contact/edit')
 }
}
