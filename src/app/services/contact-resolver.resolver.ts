import { Injectable } from '@angular/core';
import {Resolve,ActivatedRouteSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverResolver implements Resolve<Observable<Contact | void>> {

  constructor(private contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot) {
      const id = route.params['id']
      return this.contactService.getContactById(id)
  }
}
