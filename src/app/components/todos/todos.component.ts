import { Component, OnInit } from '@angular/core';
import {CrudService} from './../../service/crud.service'
import { Todo} from './../../models/Todos';
import { createClient } from 'pexels';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  images = new Array();
  todos:Todo[] = [];
  r: number = 0;
  inputTodo: string = "";
  client: any = 0;
  theme: string = 'Bouldering'
  dbtodos: any;
  

  constructor( private crudService: CrudService) { }

  ngOnInit(): void {

    // Client to interact with Pexels
    this.client = createClient('563492ad6f91700001000001a1f48476c71c47b3adc6eeccd98ed26e');

    this.crudService.GetTodos().subscribe(res => {
      console.log(res);
      const received: Todo[] = JSON.parse(JSON.stringify(res));
      for (const key in received) {
        if (Object.prototype.hasOwnProperty.call(received, key)) {
          const t = received[key];
          this.todos.push(t);
          console.log(this.todos);
          
        }
      }
    })
    this.updateBackgrounds();
  }

/*
  queryImages(amount: number) {
    const query = 'Climbing';
    if (!this.client) return Promise.resolve(0);
    this.images = [];
    this.client.photos.search({ query, orientation: 'landscape', per_page: amount }).then((photos: any) => {
      for (var p of photos['photos']) {
        this.images.push(p['src']['landscape']);
      }
    });
    return Promise.resolve(1);
    }
*/

  updateBackgrounds(): void {
    const query = this.theme;
    if (!this.client) return;
    this.client.photos.search({ query, orientation: 'landscape', per_page: 10 }).then((photos: any) => {
      this.images = [];
      for (var p of photos['photos']) {
        this.images.push(p['src']['landscape']);
      }
      for (const todo of this.todos) {
        todo['bg'] = this.images.pop();
      }
    }).catch((error: Error) => {
      console.error(error);
    });
    
  }

  switchTheme(query: string): void {
    if (query == this.theme) return;
    this.theme = query;

    this.updateBackgrounds();
  }

  toggleDone (id: number): void {
    const updateObserve: Observable<any> = this.crudService.updateTodo(this.todos[id]._id, {completed: !this.todos[id].completed})
    
    updateObserve.subscribe(res => {
      console.log(`Toggling completed for todo ${id}\n Result:`);
      console.log(res);

      // Also toggling in state
      this.todos.map((v, i) => {
        if (i == id) v.completed = !v.completed
        return v;
        })
    })
  }

  deleteTodo(id: number): void {

    // Remove todo id by accessing the _id (db_id)
    this.crudService.deleteTodo(this.todos[id]._id).subscribe(res => {
      // remove todo from state
      this.todos = this.todos.filter((v, i) => i !== id);
    });

    
    
  }

  addTodo(): void {
    if (this.inputTodo == "") return; 

    this.crudService.AddTodo({content: this.inputTodo, completed: false}).subscribe(res => {
      console.log(res._id);
      console.log(this.inputTodo);
      this.todos.push({content: res.content, completed: false, bg:this.images.pop(), _id: res._id});
      console.log(this.todos);
    });
    

    this.inputTodo = "";
  }
}