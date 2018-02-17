import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { MenuItem } from './menuItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private navbarService : NavbarService) {}

  menuVoices : MenuItem[]; 

  ngOnInit() {
    this.menuVoices = this.navbarService.getMenu();
  }

  selectSection(id:string){
    this.menuVoices.forEach(item =>{
      if(item.id == id ){
        item.selected = true;
      }else{
        item.selected = false;
      }
    });

    
    this.navbarService.setSection(id);
  }


}
