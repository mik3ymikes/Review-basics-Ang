import { Component, ViewChild } from '@angular/core';
import { sucModel } from './sucModel';


@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})



export class SuccessAlertComponent {
  @ViewChild('serverContent')


items: string[]=[]



addItem(newItem:string){
  this.items.push(newItem)
}




}











// blah:string="ssss"  watchign videos on seeing lifecycles hooks in actoin

//  peeps: sucModel[]=
//  [ new sucModel('tim', 'show me your moves'),
//   new sucModel('buzz', "to infinity and beyond") ]




//   blah=true
//   btnClicks:any=[]
//   counter:number=0

//   details(){
//    this.blah=!this.blah
//    this.counter+=1


//   this.btnClicks.push(this.counter)




// }


// getColor(){
//  return this.counter >5 ? 'blue': 'white'

// }


// username:string=""
// blah=false

// reset(){
  //   this.username=""
  //   this.blah=true
  // }





