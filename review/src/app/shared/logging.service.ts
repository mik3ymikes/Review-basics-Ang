import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
//services practice

  log(){
    console.log("a server wa changed")

  }

}
