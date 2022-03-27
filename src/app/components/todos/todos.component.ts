import { Component, OnInit } from '@angular/core';
import { Todo} from './../../models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  images: string[] = [];
  todos:Todo[] = [];
  r: number = 0;
  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Iron shirts', completed: false, bg: 'https://media.istockphoto.com/photos/landscape-with-milky-way-and-silhouette-of-a-happy-man-picture-id518777140?k=20&m=518777140&s=612x612&w=0&h=2hsZ3-gJg9rHab94d5vUXx5tH4pu8U7NdOr0ETFJa2Q='
      },
      {
        content: 'Shop groceries', completed: true, bg: 'https://images.pexels.com/photos/906093/pexels-photo-906093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ];
    this.images = ['https://www.visittrentino.info/2019/image-thumb__2462809__story-image-slide-img_auto_696c0fee9262251a6c5a676c3828f06c/_dsc0570_giampaolo_calza_24-maggio-2016_falesia_belvedere_adam_ondra.jpg', 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'data:image/jpeg;base64,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']
  }

  toggleDone (id: number) {
    this.todos.map((v, i) => {
      if (i == id) {v.completed = !v.completed};
      return v;})
  }

  deleteTodo(id: number): void {

    this.todos = this.todos.filter((v, i) => i !== id);
    
  }

  addTodo(): void {
    this.r = Math.floor(Math.random()*3);
    if (this.inputTodo == "") return; 
    this.todos.push({content: this.inputTodo, completed: false, bg:this.images[this.r]});
    this.inputTodo = "";
  }
}