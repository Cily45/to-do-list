import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../models/Todo';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  @Input() Todo!: Todo;

  ngOnInit(): void {

  }

}
