import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ListItem } from './listItem';
import { ListService } from '../list.service';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  personeList : ListItem[];
  constructor(private listService : ListService) { }

  ngOnInit() {
    this.personeList = this.listService.getList();
  }

  @Output("personaChanged")  //questo evento si scatena nell'app.component e mi crea una funzione output che mi passa il valore.
  selectedPersona: EventEmitter<string> = new EventEmitter();

  selectPersona(id : string){  //la funzione mi preleva l'id dell'oggetto cliccato.
    this.selectedPersona.emit(id);
  }

}
