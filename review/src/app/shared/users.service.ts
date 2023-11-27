import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  counter:number=0
  Activeusers=["chris"]




  addUsers(item:any){
    this.counter+=1
    console.log(this.counter)
    this.Activeusers.push(item)
    console.log(this.Activeusers)
  }




  constructor() { }
}
