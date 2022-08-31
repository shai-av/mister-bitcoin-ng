import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,private userService:UserService) { }

    contact!:Contact
    loggedinUser!:User

  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      this.contact = data['contact']
    })
    this.userService.getUser.subscribe(user =>{
      this.loggedinUser = user
    })
  }
  
  onBack(){
    this.router.navigateByUrl('/contact')
  }

  onTransferFunds(funds:number){
    this.userService.transferFunds(funds,this.contact._id)
  }

  get moves(){
    return this.loggedinUser.moves.filter(move=>move.toId === this.contact._id)
  }

  _formatDate(timestamp:number) {
    const hour = new Date(timestamp).getHours()+''
    const min = new Date(timestamp).getMinutes()+''
    const day = new Date(timestamp).getDate()
    const month = (new Date(timestamp) + '').substring(4, 7)
    return hour.padStart(2, '0') + ':' + min.padStart(2, '0') + ' ,' + day + ' ' + month
}
}
