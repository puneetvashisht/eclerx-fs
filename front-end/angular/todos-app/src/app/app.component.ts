import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { AddTodoComponent } from './add-todo/add-todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  todos: any[] = [{ id: 1, title: 'todo1', status: false }];

  @ViewChild(AddTodoComponent) viewChild!: AddTodoComponent;
  @ViewChildren(AddTodoComponent) viewChildren!: QueryList<AddTodoComponent>;

  ngAfterViewInit(): void {
    console.log('App AfterViewInit Called' + this.viewChild.todo);
    console.log('App AfterViewInit Called(ViewChildren)' + this.viewChildren);
  }

  ngAfterViewChecked(): void {
    console.log('App AfterViewChecked Called' + this.viewChild);
    console.log(
      'App AfterViewChecked Called(ViewChildren)' + this.viewChildren
    );

    this.viewChildren.forEach((element) => {
      console.log(element);
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  doneTodo(id: number) {
    this.todos.map((todo) => {
      // let newTodo = { id: todo.id, title: todo.title, status: true };
      if (todo.id === id) {
        todo.status = true;
      }
    });
  }

  addTodo(todo: string) {
    let newTodo = { id: this.todos.length + 1, title: todo, status: false };

    this.todos = [...this.todos, newTodo];
  }
}
