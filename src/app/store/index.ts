import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store'
import * as fromWatch from './stopwatch/reducers'
import { AppStateInterface } from '../interfaces/app-state.interface'
import { environment } from '../../environments/environment'

export const reducers: ActionReducerMap<AppStateInterface> = {
  [fromWatch.stopwatchFeatureKey]: fromWatch.watchReducer,
};


export const metaReducers: MetaReducer<AppStateInterface>[] = !environment.production ? [] : [];
