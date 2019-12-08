import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Todo';
  todo: any;
  todoId: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.todoService.getTodoList().subscribe((data: any) => {
      console.log(data);
      this.todo = data.todo;
    });
  }

  getId(id: string) {
    this.todoId = id;
  }

  delete() {
    this.todoService.deleteTodo(this.todoId);
    this.refresh();
  }
}
