import { Component } from '@angular/core';
// import { count } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
counter:number=0
beginInt:any


gameOn(){
this.beginInt=setInterval( ()=>{
this.counter+=1
}, 1000 )
}

gameOff(){
  clearInterval(this.beginInt)
}


}
