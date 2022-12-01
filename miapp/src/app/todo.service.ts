import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage:Storage) { 
    this.init();
  }
  addTask(key:any, value:any){
    this.storage.set(key, value)
  }

  delete(key:any ){
    this.storage.remove(key)
  }

  updateTask(key:any, newValue:any){
    this.storage.set(key, newValue)
    this.getAllTask()
  }
  getAllTask() {
    let task:any=[]
    this.storage.forEach((key, value, index) => {
      task.push({'key':value, 'value': key})
    })
    return task;
  }


  async init() {
    await this.storage.create();
  }
}
