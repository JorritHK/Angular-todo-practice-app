import { Component, OnInit } from '@angular/core';
import { Todo} from './../../models/Todos';
import { createClient } from 'pexels';


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

  constructor() { }

  ngOnInit(): void {

    this.client = createClient('563492ad6f91700001000001a1f48476c71c47b3adc6eeccd98ed26e');

    this.todos = [
      {
        content: 'Iron shirts', completed: false, bg: 'https://media.istockphoto.com/photos/landscape-with-milky-way-and-silhouette-of-a-happy-man-picture-id518777140?k=20&m=518777140&s=612x612&w=0&h=2hsZ3-gJg9rHab94d5vUXx5tH4pu8U7NdOr0ETFJa2Q='
      },
      {
        content: 'Shop groceries', completed: true, bg: 'https://images.pexels.com/photos/906093/pexels-photo-906093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ];
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
        console.log(this.images);
        console.log(this.images[0]);
      }
      for (const todo of this.todos) {
        console.log(todo['content']);
        todo['bg'] = this.images.pop();
        console.log(todo['bg']);
      }
    });
    
  }

  switchTheme(query: string): void {
    if (query == this.theme) return;
    this.theme = query;

    this.updateBackgrounds();
  }



  toggleDone (id: number): void {
    this.todos.map((v, i) => {
      if (i == id) {v.completed = !v.completed};
      return v;})
  }

  deleteTodo(id: number): void {

    this.todos = this.todos.filter((v, i) => i !== id);
    
  }

  addTodo(): void {
    if (this.inputTodo == "") return; 
    this.todos.push({content: this.inputTodo, completed: false, bg:this.images.pop()});
    this.inputTodo = "";
  }
}