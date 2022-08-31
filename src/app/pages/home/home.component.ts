import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { BitcoinServiceService } from 'src/app/services/bitcoin-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private bitcoinService: BitcoinServiceService) { }
  user!: User
  bitcoinRate!: number
  subscription!: Subscription

  ngOnInit(): void {
    // this.user = this.userService.getUser
    this.userService.user$.subscribe(user =>{
      this.user = user
    })
    this.subscription = this.bitcoinService.getRate(this.user.coins).subscribe(ans => {
      this.bitcoinRate = ans
    })
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe()
  }

  get moves(){
    return this.user.moves.slice(0,3)
  }

  _formatDate(timestamp:number) {
    const hour = new Date(timestamp).getHours()+''
    const min = new Date(timestamp).getMinutes()+''
    const day = new Date(timestamp).getDate()
    const month = (new Date(timestamp) + '').substring(4, 7)
    return hour.padStart(2, '0') + ':' + min.padStart(2, '0') + ' ,' + day + ' ' + month
}
}
