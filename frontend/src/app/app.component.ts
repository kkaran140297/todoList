import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Todo';
  todo: string;
  todoId: string;
  date: any;
  todoData: any;
  editFlag = false;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.refresh();
  }

  saveTodo() {
    const todoForm = {
      todo: this.todo,
      date: this.date
    };
    if (this.editFlag) {
      this.todoService.editTodo(todoForm, this.todoId).subscribe(() => {
        this.refresh();
      }, error => {
        console.log(error);
      });
    } else {
      this.todoService.createTodo(todoForm).subscribe(() => {
        this.refresh();
      }, error => {
        console.log(error);
      });
    }
  }

  refresh() {
    this.todoService.getTodoList().subscribe((data: any) => {
      console.log(data);
      this.todoData = data.todo;
    });
  }

  getId(id: string) {
    this.todoId = id;
  }

  delete() {
    this.todoService.deleteTodo(this.todoId).subscribe(() => {
      this.refresh();
    }, error => {
      console.log(error);
    });
  }

  getData(data) {
    this.todoId = data._id;
    this.todo = data.todo;
    this.date = data.date;
    this.editFlag = true;
  }
}
