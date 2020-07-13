
import { createAction, props } from '@ngrx/store';

export type filtresValids = 'totes' | 'completades' | 'pendents';

export const setFiltre = createAction(
    '[Filtre] Set Filtre',
    props<{ filtre: filtresValids }>()
);
