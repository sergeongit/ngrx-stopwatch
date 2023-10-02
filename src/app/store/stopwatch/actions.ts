import { createAction } from '@ngrx/store'


enum WatchActions {
  init = '[Main] watch init',
  run = '[Main] watch run',
  pause = '[Main] watch pause',
  reset = '[Main] watch reset',
}

export const init = createAction(WatchActions.init)
export const run = createAction(WatchActions.run)
export const pause = createAction(WatchActions.pause)
export const reset = createAction(WatchActions.reset)
