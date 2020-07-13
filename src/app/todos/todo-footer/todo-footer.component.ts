import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../../filtre/filtre.actions';
import { netejarTodosCompletats } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtreActual: actions.filtresValids = 'totes';
  filtres: actions.filtresValids[] = ['totes', 'completades', 'pendents'];

  pendents = 0;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

   // this.store.select('filtre').subscribe( filtre => this.filtreActual = filtre);
   this.store.subscribe( state => {
     this.filtreActual = state.filtre;
     this.pendents = state.todos.filter( todo => !todo.completat).length;
   });

  }
  canviarFiltre( filtre: actions.filtresValids ) {
    this.store.dispatch(actions.setFiltre({filtre}));

  }
  netejarCompletats() {
    this.store.dispatch(netejarTodosCompletats());
  }

}
