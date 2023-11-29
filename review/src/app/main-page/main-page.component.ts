import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

// private servers: {id:number, name:string, status:string}[]=[]

constructor(private router:Router) {}

  goTo(){

    this.router.navigate(['/serv-ex'])

  }


  ngOnInit()  {
      interval(1000).subscribe(count => {
        console.log(count)
      })
  }

}
//got to configuring
