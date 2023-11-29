import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServExComponent } from './serv-ex/serv-ex.component';
import { GameControlComponent } from './game-control/game-control.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { PgNtFoundComponent } from './pg-nt-found/pg-nt-found.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'serv-ex', component: ServExComponent},
  {path: 'game-control', component: GameControlComponent},
  {path: 'success', component: SuccessAlertComponent},
  {path: 'warning', component: WarningAlertComponent},
  {path: 'not-found', component: PgNtFoundComponent},
  {path: '**', redirectTo: 'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
