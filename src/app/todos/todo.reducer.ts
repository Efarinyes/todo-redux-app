import { createReducer, on } from '@ngrx/store';

import { crear, toggle, editar, borrar, toggleAll, netejarTodosCompletats } from './todo.actions';
import { Todo } from './models/todo.model';

export const estatInicial: Todo[] = [
    new Todo('Aprendre JavaScript'),
    new Todo('Aprendre Python'),
    new Todo('Aprendre Angular 10'),
    new Todo('Aprendre NodeJS')
];

// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(estatInicial,
    on(crear, (state, { text }) => [...state, new Todo( text )]),
    on(netejarTodosCompletats, state  => state.filter( todo => !todo.completat)),


    on( borrar, (state, { id }) => state.filter( todo => todo.id !== id) ),
    on( toggleAll, (state, { completat } ) => state.map( todo => {
        return {
          ...todo,
          completat
        };
    })),

    on(toggle, (state, { id }) => {
      return state.map( todo => {
        if( todo.id === id ) {
          return {
            ...todo,
            completat: !todo.completat
          };
        } else {
          return todo;
        }

      });
    }),

    on(editar, (state, { id, text }) => {
      return state.map( todo => {
        if( todo.id === id ) {
          return {
            ...todo,
            text
          };
        } else {
          return todo;
        }

      });
    })
  );



export function todoReducer(state, action) {
    return _todoReducer(state, action);
  }
