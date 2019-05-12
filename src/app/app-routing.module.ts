import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlanAMovePageComponent } from './pages/plan-a-move-page/plan-a-move-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CitiesListPageComponent } from './pages/cities-list-page/cities-list-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';

const routes: Routes = [
  {
    path: 'home', component: HomePageComponent
  },{
    path: 'plan-a-move', component: PlanAMovePageComponent
  },{
    path: 'history', component: HistoryPageComponent
  },{
    path: 'login', component: LoginPageComponent
  },{
    path: 'cities', component: CitiesListPageComponent
  },{
    path: 'progress/:id', component: ProgressPageComponent
  },{
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
