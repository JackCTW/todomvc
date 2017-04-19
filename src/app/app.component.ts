import { DataService } from './data.service';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  inputHint = 'What needs to be done?';
  todos: any[] = [];
  filterType = 'All';
  toggleAll = false;
  todo = '';


  constructor(private dataSvc: DataService) {

  }

  ngOnInit() {
    this.dataSvc.getTodo().subscribe(data => {
      this.todos = data;
    });
  }


  addTodo() {
    let newTodos = [...this.todos];
    newTodos.push(
      {
        text: this.todo,
        done: false
      }
    )
    this.dataSvc.saveTodos(newTodos).subscribe(data => {
      this.todos = data;
      this.todo = '';
    });

  };

  clearCompledted() {
    let newTodos = this.todos.filter(item => { return !item.done; });
    this.dataSvc.saveTodos(newTodos).subscribe(data => {
      this.todos = data;
    });
  }

  filterTypeChanged(filterType: string) {
    this.filterType = filterType;
  }

  toggleAllChanged(value: boolean) {
    let newTodos = [...this.todos];
    newTodos.forEach(item => {
      item.down = value
    });
    this.dataSvc.saveTodos(newTodos).subscribe(data => {
      this.todos = data;
    });
  }

  updateToggleAllState() {
    this.toggleAll = this.todos.filter(item => {
      return !item.done;
    }).length === 0;

    this.dataSvc.saveTodos(this.todos).subscribe(data => {
      this.todos = data;
     });
  }

  removeTodo(todo) {
    let newTodos = [...this.todos];
    newTodos.splice(this.todos.indexOf(todo, 1));
    this.dataSvc.saveTodos(newTodos).subscribe(data => {
      this.todos = data;
     });
  }
}
