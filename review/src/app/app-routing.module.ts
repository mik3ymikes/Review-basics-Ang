import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServExComponent } from './serv-ex/serv-ex.component';
import { GameControlComponent } from './game-control/game-control.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'serv-ex', component: ServExComponent},
  {path: 'game-control', component: GameControlComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
