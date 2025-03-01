import {Component, OnInit} from '@angular/core';
import {Todo} from './Todo';
import {FormsModule} from '@angular/forms';
import {from} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
  todos: Todo[]= [
   {id: 1, value : "fsf", isChecked : true}
 ];

  addTodo(event: SubmitEvent, input: string): void{
    event.preventDefault();
    this.todos.push({
      id: 1, value : input, isChecked : false
    });
  }
  protected readonly from = from;
}
