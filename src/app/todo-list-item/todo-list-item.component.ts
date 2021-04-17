import { Input, Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Todo } from '../TodoList';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.todo);
  }

  delete() {
    this.deleteTodo.emit(this.todo);
  }

}
