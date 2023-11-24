import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {

  @Output() newItemEvent= new EventEmitter<string>



addDrink(value:string){
this.newItemEvent.emit(value)
}




}








































// @Input() message:string="hello"
