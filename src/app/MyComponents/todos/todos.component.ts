import { Component, EventEmitter, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  sno:any
  title: any;
  desc: any;
  localItem: any

  todoDelete: EventEmitter<Todo> = new EventEmitter();
  todoAdd: EventEmitter<Todo> = new EventEmitter();
  todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
    this.todos = [
      {
        sno: 1,
        title: "This is Title1",
        desc: "Description",
        active: true
      },
      {
        sno: 2,
        title: "This is Title2",
        desc: "Description",
        active: true
      },
      {
        sno: 3,
        title: "This is Title3",
        desc: "Description",
        active: true
      }
    ]
  }

  ngOnInit(): void {

  }


  deleteTodo(todo: Todo) {
    console.log(todo);
    const index: any = this.todos?.indexOf(todo);
    this.todos?.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  onSubmit() {

    const todo = {
      sno: this.sno,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todos?.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }

  onCheckboxClick(todo: Todo) {
    const index: any = this.todos?.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

    // indexing of row count in table
    rowCount(i: any) {
      return i = i + 1;
    }


}
