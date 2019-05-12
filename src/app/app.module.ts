import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDateService }  from './services/in-memory-date.service';
import {DemoMaterialModule} from '../material-module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { PlanAMovePageComponent } from './pages/plan-a-move-page/plan-a-move-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { CitiesListPageComponent } from './pages/cities-list-page/cities-list-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    PlanAMovePageComponent,
    FooterComponent,
    CitiesListPageComponent,
    HistoryPageComponent,
    LoginPageComponent,
    ProgressPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDateService
    ),
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
