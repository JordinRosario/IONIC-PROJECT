import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddnewtaskPage } from '../addnewtask/addnewtask.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  todoList = [{
    itemName : 'Programando',
    itemDeuDate: '11-27-22',
    itemPriority : 'Alta',
    itemCategory : 'Proyecto'

  },

  {
    itemName : 'Diseñando',
    itemDeuDate: '11-28-22',
    itemPriority : 'Baja',
    itemCategory : 'Diseño'

  },
  {
    itemName : 'Comprando',
    itemDeuDate: '11-28-22',
    itemPriority : 'Intermedio',
    itemCategory : 'Personal'

  },
  {
    itemName : 'GYM',
    itemDeuDate: '11-29-22',
    itemPriority : 'Alta',
    itemCategory : 'Personal'

  },
]

today : number = Date.now();
  constructor(public modalCtrl: ModalController) {}
  
  async AddTask(){
    const modal = await this.modalCtrl.create({
      component: AddnewtaskPage
    })

    modal.onDidDismiss().then(newTaskObject=>{
      console.log(newTaskObject.data);
  })
    return await modal.present()

  }
}
