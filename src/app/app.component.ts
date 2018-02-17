import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentSection = 'home';
  idSelected;
  constructor(private navbarService : NavbarService){

    this.navbarService.sectionSelected$.subscribe(id =>{this.currentSection = id});
  }

  setPersonaChanged(id : string){ //il valore mattia arriva a setPersonachanged che manda alla pagina detail. 
    this.idSelected = id;
    this.currentSection = 'detail';
  }
  
}
