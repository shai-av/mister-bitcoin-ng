import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent implements OnInit {

  @Input() contactName!:string
  @Input() loggedinUser!:User
  @Output() onTransferFunds = new EventEmitter<number>()
  fundsToTransfer:number = 0
  
  constructor() { }

  ngOnInit(): void {
    
  }

  onTransfer(){
    this.onTransferFunds.emit(this.fundsToTransfer)
    this.fundsToTransfer = 0
  }

}
