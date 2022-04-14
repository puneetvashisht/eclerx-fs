import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState';
import { Delete, Done } from 'src/app/todos/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public store: Store<AppState>) { }

  @Input() todos: any

  ngOnInit(): void {
  }

  delete(id: number){
    console.log('deleting todo with id ', id);
    this.store.dispatch(new Delete(id))
  }

  done(id:number){
    this.store.dispatch(new Done(id))
  }

}
