import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent implements OnInit, OnDestroy {

  private firstObSub!: Subscription;


constructor(private router:Router) {}

  goTo(){

    this.router.navigate(['/serv-ex'])

  }


 

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }


  // ngOnInit()  { backend
  //     this.firstObSub=interval(1000).subscribe(count => {
  //       console.log(count)
  //     })
  // }

  // ngOnDestroy(): void {
  //     this.firstObSub.unsubscribe()
  // }

}
//got to configuring
