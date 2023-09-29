import {
  createReducer,
  on,
} from '@ngrx/store'
import * as fromWatchActions from './actions'
import { WatchInterface } from '../../interfaces/watch.interface'


export const stopwatchFeatureKey = 'stopwatch'

const initialState: WatchInterface = {
  value: 0,
  isRunning: false
}

export const watchReducer = createReducer(
  initialState,
  on(fromWatchActions.init, (state) => ({ ...state })),
)
