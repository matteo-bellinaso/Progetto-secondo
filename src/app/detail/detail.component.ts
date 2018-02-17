import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list.service';
import { ListItem } from '../list/listItem';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private listService : ListService) { }

  personaSelected :ListItem;

  @Input('personaIdSelected')
  idSelected: string;

  ngOnInit() {
    this.personaSelected = this.listService.getPersonaById(this.idSelected);
  }
//che controlla se c'è un oggetto nella lista che abbia lo stesso id e lo restituisce
}
