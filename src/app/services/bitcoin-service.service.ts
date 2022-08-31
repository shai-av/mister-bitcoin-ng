import { Injectable ,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import axios from 'axios';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinServiceService {

  constructor(private http:HttpClient) { }
  
  getRate(coins:number){
    return this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
          .pipe(
              map(res =>res)
          )
  }
getMarketPrice(){
  return this.http.get(`https://api.blockchain.info/charts/market-price?format=json&cors=true`)
  .pipe(
      map(res =>res)
  )
}

// async getMarketPrice(){
//   const marketPrice = localStorage.getItem('marketPrice')
//   console.log('sadsa')
//   if(marketPrice) return Promise.resolve(JSON.parse(marketPrice))

//   const res = await axios.get(`https://api.blockchain.info/charts/market-price?format=json&cors=true`)
//   localStorage.setItem('marketPrice',JSON.stringify(res.data))
  
//   return JSON.parse(res.data)
// }
//   async getRate(coins:number){
//     const res =  await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
//     return res.data
//  }
}
