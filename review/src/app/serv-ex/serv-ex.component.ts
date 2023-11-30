import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-serv-ex',
  templateUrl: './serv-ex.component.html',
  styleUrls: ['./serv-ex.component.css']
})
export class ServExComponent implements OnInit {
  secUser:any=[]

  constructor(public usersService: UsersService){}

  ngOnInit(){
   this.secUser=this.usersService.getUsers()

   console.log(this.secUser)
  }


  // addUser(value:string){



  //   this.secUser.push(value)
  //   console.log(this.secUser)
  // //  this.usersService.addUsers(this.secUser)
  // }



  addUser(value:string){


    this.http.post('https://review-28358-default-rtdb.firebaseio.com/')

  console.log(value)

    // this.secUser.push(value)
    // console.log(this.secUser)
  //  this.usersService.addUsers(this.secUser)
  }






}
