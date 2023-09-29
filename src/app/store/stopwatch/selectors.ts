import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store'
import { stopwatchFeatureKey } from './reducers'
import { WatchInterface } from '../../interfaces/watch.interface'

export const stopWatchFeatureSelector = createFeatureSelector<WatchInterface>(stopwatchFeatureKey)

export const stopWatchValueSelector = createSelector(
  stopWatchFeatureSelector,
  (state: WatchInterface): number => state.value
)
