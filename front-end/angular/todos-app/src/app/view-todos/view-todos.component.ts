import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css'],
})
export class ViewTodosComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @ContentChild('todo') projectedTodo: any;

  @Input() id = null;
  // @Input() title = null;
  @Input() status = null;
  @Output() delete_todo = new EventEmitter();
  @Output() done_todo = new EventEmitter();
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('View Todo OnChanges Called...');
    console.log(changes);
    console.log(' View Todo OnChanges -' + this.projectedTodo);
  }

  ngOnInit(): void {
    console.log('View Todo OnInit Called...');
    console.log(' View Todo OnInit -' + this.projectedTodo);
  }

  ngDoCheck(): void {
    console.log('View Todo DoCheck Called...');
    console.log(' View Todo DoCheck -' + this.projectedTodo);
  }

  ngAfterContentInit(): void {
    console.log('View Todo AfterContentInit Called...');
    console.log(' View Todo AfterContentInit -' + this.projectedTodo);
  }

  ngAfterContentChecked(): void {
    console.log('View Todo AfterContentChecked Called...');
  }

  ngAfterViewInit(): void {
    console.log('View Todo AfterViewInit Called...');
  }

  ngAfterViewChecked(): void {
    console.log('View Todo AfterViewChecked Called...');
  }

  ngOnDestroy(): void {
    console.log('View Child OnDestroy Called...');
  }

  delete() {
    this.delete_todo.emit(this.id);
  }
  done() {
    this.done_todo.emit(this.id);
  }
}
