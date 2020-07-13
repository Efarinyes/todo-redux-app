import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crea Todo',
    props<{ text: string}>()
);

export const netejarTodosCompletats = createAction('[TODO] Neteja Todo ');

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number}>()
);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, text: string }>()
);

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] ToggleAll Todo',
    props<{ completat: boolean }>()

)



