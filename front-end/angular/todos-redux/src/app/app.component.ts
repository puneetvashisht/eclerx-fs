import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './models/appState';
import { Todo } from './models/Todo';
import { Add } from './todos/todo.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todo: string = '';
  todosItem$? : Observable<Array<Todo>> = undefined

  ngOnInit(){
    this.todosItem$ = this.store.pipe(
      select((store)=>  store.todos)
    )
  }

  constructor(public store: Store<AppState>){

  }

  add() {
    // add a todo using redux
    this.store.dispatch(new Add(this.todo))
  }
}
