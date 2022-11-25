import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  todoList = [{
    itemName : 'Programando',
    itemDeuDate: '24-11-2022',
    itemPriority : 'Alta',
    itemCategory : 'Proyecto'

  },

  {
    itemName : 'Diseñando',
    itemDeuDate: '28-11-2022',
    itemPriority : 'Baja',
    itemCategory : 'Diseño'

  },
  {
    itemName : 'Comprando',
    itemDeuDate: '29-11-2022',
    itemPriority : 'Intermedio',
    itemCategory : 'Personal'

  },
]

today : number = Date.now();
  constructor() {}

}
