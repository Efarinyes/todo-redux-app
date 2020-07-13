import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { filtresValids } from './filtre/filtre.actions';
import { filterReducer } from './filtre/filtre.reducer';



export interface AppState {
    todos: Todo[];
    filtre: filtresValids;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtre: filterReducer

};
