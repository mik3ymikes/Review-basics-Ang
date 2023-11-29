import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

// private servers: {id:number, name:string, status:string}[]=[]

constructor(private router:Router) {}

  goTo(){

    this.router.navigate(['/serv-ex'])

  }

}
//got to configuring 
