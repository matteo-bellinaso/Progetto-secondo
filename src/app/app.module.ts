import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NavbarService } from './navbar.service';
import { HomeComponent } from './home/home.component';
import { LiteralArray } from '@angular/compiler';
import { ListService } from './list.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    DetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NavbarService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
