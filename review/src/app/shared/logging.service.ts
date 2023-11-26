import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }


  log(){
    console.log("a server wa changed")

  }

}
