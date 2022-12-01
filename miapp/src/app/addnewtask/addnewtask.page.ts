import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-addnewtask',
  templateUrl: './addnewtask.page.html',
  styleUrls: ['./addnewtask.page.scss'],
})
export class AddnewtaskPage implements OnInit {

  categorias:any= []

  nombreTarea:any
  fechaTarea:any
  prioridadTarea:any
  categoriaTarea:any
  newTaskObject={}
  tareaObjeto:any
  
  constructor(public ModalCtrl: ModalController, public todoService:TodoService ) { }

  ngOnInit() {
    this.categorias.push('Trabajo')
    this.categorias.push('Personal')
    this.categorias.push('Hogar')
  }
  async dismis(){
    await this.ModalCtrl.dismiss(this.tareaObjeto)
  }
  categoriaSeleccionada(index:any){
    this.categoriaTarea = this.categorias[index]
  }
  adicionarTarea(){
    this.tareaObjeto = ({nombreItem:this.nombreTarea,
                        fechaItem:this.fechaTarea,
                        prioridadItem:this.prioridadTarea,
                        categoriaItem:this.categoriaTarea})
    this.dismis()
  }
}
