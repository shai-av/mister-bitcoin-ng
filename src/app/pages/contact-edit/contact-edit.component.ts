import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private contactService:ContactService) { }

  contact!:Contact

  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      this.contact = data['contact'] || this.contactService.getEmptyContact() as Contact
    })
  }

 async onSaveContact(){
    await lastValueFrom(this.contactService.saveContact({ ...this.contact }))
    this.router.navigateByUrl('/contact')
}

onBack(){
  this.router.navigateByUrl('/contact')
}

}
