import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Cursos } from '../models';

export const CursosActions = createActionGroup({
  source: 'Cursos',
  events: {
    'Load Cursoss': emptyProps(),
    'Load Cursoss Success': props<{ data: Cursos[] }>(),
    'Load Cursoss Failure': props<{ error: unknown }>(),
  }
});
