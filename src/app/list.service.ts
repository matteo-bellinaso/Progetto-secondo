import { ListItem } from "./list/listItem";


export class ListService{

    persone : ListItem[] = [

        new ListItem("francesco","Francesco R","Fonico",26),
        new ListItem("mattia","Mattia M","tecnico smartphone",26),
        new ListItem("dario","Dario L","ingengere robotico",26),
        new ListItem("gabriele","Gabriele T","biotecnologo",26)

    ]

    getList(){
        return this.persone;
    }

    getPersonaById(id:string): ListItem {

        for(let item of this.persone){
            if(item.id == id){
                return item;
            }
        }
        return null;
    }

}