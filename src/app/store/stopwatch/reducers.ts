import {
  createReducer,
  on,
} from '@ngrx/store'
import * as fromWatchActions from './actions'
import { WatchInterface } from '../../interfaces/watch.interface'


export const stopwatchFeatureKey = 'stopwatch'

export const initialState: WatchInterface = {
  value: 0,
  isRunning: false,
}

export const watchReducer = createReducer(
  initialState,
  on(fromWatchActions.init, (state) => ({ ...state })),
  on(fromWatchActions.run, (state) => ({ ...state, value: state.value + 1, isRunning: true })),
  on(fromWatchActions.pause, (state) => ({ ...state, value: state.value, isRunning: false })),
  on(fromWatchActions.reset, (state) => ({ ...state, value: 0, isRunning: false })),
)
