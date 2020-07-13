import { createReducer, on } from '@ngrx/store';
import { setFiltre, filtresValids } from './filtre.actions';


export const initialState: filtresValids = 'totes';

const _filterReducer = createReducer(initialState,
  on(setFiltre, (state, { filtre }) => filtre),
  
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}