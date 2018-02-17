import { Injectable } from "@angular/core";
import { MenuItem } from "./navbar/menuItem";
import { Subject } from "rxjs/Subject";

@Injectable()
export class NavbarService{

menu : MenuItem[] = [

    new MenuItem("chi","chi siamo"),
    new MenuItem("list","list"),
    new MenuItem("home","home")
]


getMenu(){
    return this.menu;
}

private sectionSelected: Subject<string> = new Subject<string>();
    public sectionSelected$ = this.sectionSelected.asObservable();

    public setSection(id :string){

        this.sectionSelected.next(id);
    }

}