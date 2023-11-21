import { Component } from '@angular/core';


@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {

  blah=true
  btnClicks:any=[]
  counter:number=0

  details(){
   this.blah=!this.blah
   this.counter+=1
  //  console.log(this.counter)
  this.btnClicks.push(this.counter)
  console.log(this.btnClicks)
  //  this.btnClicks.push(counter)
  }






























  // username:string=""
  // blah=false

  // reset(){
  //   this.username=""
  //   this.blah=true
  // }




}
