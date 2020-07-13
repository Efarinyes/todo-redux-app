import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completat = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  toggleAll() {
    this.completat = !this.completat;
    this.store.dispatch(toggleAll({ completat: this.completat}));

  }
}
