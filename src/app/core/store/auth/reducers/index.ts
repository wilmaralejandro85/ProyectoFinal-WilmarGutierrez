import { createReducer, on } from "@ngrx/store";
import { Usuarios } from "../../../../layouts/dashboard/pages/usuarios/models";
import { AuthActions } from "../actions";

export const featureName = "auth";

export interface AuthState {
    user: Usuarios | null;
}

const inicitalState: AuthState = {
    user: null,

}

export const authReducer = createReducer(
    inicitalState, on(AuthActions.setAuthUser, (state, action) => {
    return {
        ...state,
        user: action.user,
        
    };
})

);