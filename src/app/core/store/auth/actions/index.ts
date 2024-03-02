import { createActionGroup, props } from "@ngrx/store";
import { Usuarios } from "../../../../layouts/dashboard/pages/usuarios/models";

export const AuthActions = createActionGroup({
    source: 'Auth',
    events: {
        'Set auth user': props<{user: Usuarios}>(),
    }
})