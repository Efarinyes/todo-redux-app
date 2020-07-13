import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';
import { borrar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisic') txtInputFisic: ElementRef;


  chkCompletat: FormControl;
  txtInput: FormControl;

  editant = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

    this.chkCompletat = new FormControl(this.todo.completat);
    this.txtInput = new FormControl( this.todo.text, Validators.required );

    this.chkCompletat.valueChanges.subscribe( valor => {
        this.store.dispatch( actions.toggle({id: this.todo.id}));

    });

  }
  editar() {
    this.editant = true;
    this.txtInput.setValue(this.todo.text);

    setTimeout(() => {
      this.txtInputFisic.nativeElement.select();
    }, 1);
  }

  acabarEdicio() {
    this.editant = false;

    if ( this.txtInput.invalid) { return; }
    if ( this.txtInput.value === this.todo.text) { return; }
    this.store.dispatch(actions.editar({
      id: this.todo.id,
      text: this.txtInput.value
    }));
  }
  borrar( ) {
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }

}
