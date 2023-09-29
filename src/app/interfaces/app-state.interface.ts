import * as fromWatch from './../store/stopwatch/reducers'
import { WatchInterface } from './watch.interface'

export interface AppStateInterface {
  [fromWatch.stopwatchFeatureKey]: WatchInterface,
}
