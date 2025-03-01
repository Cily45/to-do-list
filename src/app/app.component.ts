import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Todo} from './models/Todo';
import {TodoComponent} from './todo/todo.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'todolist';
  todos!: Todo[];
  value: string = "";


  ngOnInit(): void {
    this.todos = []
    this.todos.push(new Todo("fdsfsd"));
  }

  addTodo(): void{
    if(this.value.length > 0){
      this.todos.push(new Todo(this.value));
      this.value = "";
    }
  }
}
