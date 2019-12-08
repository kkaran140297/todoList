import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {

  date: Date;
  todo: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  saveTodo() {
    const todoForm = {
      todo: this.todo,
      date: this.date
    };
    this.todoService.createTodo(todoForm).subscribe();
  }

}
