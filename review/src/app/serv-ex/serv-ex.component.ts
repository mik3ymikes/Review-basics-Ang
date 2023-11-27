import { Component } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-serv-ex',
  templateUrl: './serv-ex.component.html',
  styleUrls: ['./serv-ex.component.css']
})
export class ServExComponent {
  secUser:any=[]

  constructor(public usersService: UsersService){}


  addUser(value:string){
    this.secUser.push(value)
    console.log(this.secUser)
   this.usersService.addUsers(this.secUser)
  }

}
