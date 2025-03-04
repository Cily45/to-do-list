import {Component} from '@angular/core';
import {Todo} from './Todo';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {TodolistComponent} from "./todolist/todolist.component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
