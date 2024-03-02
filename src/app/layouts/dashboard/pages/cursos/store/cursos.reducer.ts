import { createFeature, createReducer, on } from '@ngrx/store';
import { CursosActions } from './cursos.actions';
import { Cursos } from '../models';

export const cursosFeatureKey = 'cursos';

export interface State {
 cursos: Cursos[];
 loading: boolean;
 error: unknown;
}

export const initialState: State = {
  cursos: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(CursosActions.loadCursoss, (state) => ({...state, loading:true})),
  on(CursosActions.loadCursossSuccess, (state, action) => ({...state, loading:false, cursos: action.data})),
  on(CursosActions.loadCursossFailure, (state, action) =>({...state, loading:false, error: action.error})),
);

export const cursosFeature = createFeature({
  name: cursosFeatureKey,
  reducer,
});

