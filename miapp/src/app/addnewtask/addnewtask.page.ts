import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addnewtask',
  templateUrl: './addnewtask.page.html',
  styleUrls: ['./addnewtask.page.scss'],
})
export class AddnewtaskPage implements OnInit {

  categorias = ['Trabajo', 'Personal', 'Hogar']

  nombreTarea:any
  fechaTarea:any
  prioridadTarea:any
  categoriaTarea:any
  newTaskObject={}
  tareaObjeto:any
  
  constructor(public ModalCtrl: ModalController) { }

  ngOnInit() {
  }
  async dismis(){
    await this.ModalCtrl.dismiss(this.tareaObjeto)
  }
  categoriaSeleccionada(index:any){
    this.categoriaTarea = this.categorias[index]
  }
  adicionarTarea(){
    this.tareaObjeto = ({nombreItem:this.nombreTarea,fechaItem:this.fechaTarea, prioridadItem:this.prioridadTarea,
                          categoriaItem:this.categoriaTarea})
    this.dismis()
  }
}
