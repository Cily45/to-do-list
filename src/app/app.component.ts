import {Component} from '@angular/core';
import {Todo} from './Todo';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'todolist';
  lastId: number = 0;
  todos: Todo[] = [];

  addTodo(input: HTMLInputElement): void {
    if (input.value.trim().length > 0) {
      this.lastId++;
      this.todos.push({
        id: this.lastId, value: input.value, isChecked: false
      });
      input.value = '';
    }
  }

  deleteTodo(id: number): void {
    this.todos.splice(this.findIndexTodo(id), 1);
  }

  sortTodos(): void {
    this.todos.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
  }

  changeCheckbox(id: number) {
    let index: number = this.findIndexTodo(id)
    this.todos[index].isChecked = !this.todos[index].isChecked;
    this.sortTodos()
  }

  findIndexTodo(id: number): number {
    return this.todos.findIndex(t => t.id === id);
  }
}
