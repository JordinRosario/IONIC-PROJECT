import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addnewtask',
  templateUrl: './addnewtask.page.html',
  styleUrls: ['./addnewtask.page.scss'],
})
export class AddnewtaskPage implements OnInit {

  categorias = ['Trabajo', 'Personal', 'Hogar']

  nombreTarea: string = "nombreTarea";
  fechaTarea: string = "fechaTarea";
  prioridadTarea: string = "prioridadTarea";
  categoriaTarea: string = "categoriaTarea";
  newTaskObject={}
  tareaObjeto={}
  
  constructor(public ModalCtrl: ModalController) { }

  ngOnInit() {
  }
  async dismis(){
    await this.ModalCtrl.dismiss(this.tareaObjeto)
  }
  categoriaSeleccionada(index:number){
    this.categoriaTarea = this.categorias[index]
  }
  adicionarTarea(){
    this.tareaObjeto = ({nombreitem:this.nombreTarea,fechaitem:this.fechaTarea, prioridadItem:this.prioridadTarea,
                          categoriaItem:this.categoriaTarea})
    this.dismis()
  }
}
