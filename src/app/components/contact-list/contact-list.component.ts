import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  @Input() contacts!:Contact[]
  @Output() onRemove = new EventEmitter<string>()
  ngOnInit(): void {
    
  }

}
