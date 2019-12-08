import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  backendUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  createTodo(body: any) {
    return this.http.post(this.backendUrl + 'createTodo', body);
  }

  getTodoList() {
    return this.http.get(this.backendUrl + 'getTodoList');
  }

  editTodo(body: any, id: string) {
    return this.http.put(this.backendUrl + `editTodo/${id}`, body);
  }

  deleteTodo(id: string) {
    return this.http.delete(this.backendUrl + `deleteTodo/${id}`);
  }

}
