import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects'
import {
  inject,
  Injectable,
} from '@angular/core'
import { Store } from '@ngrx/store'
import { TickWatchService } from '../../services/tick-watch.service'
import * as fromWatchActions from './actions'
import {
  EMPTY,
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs'
import {
  stopWatchValueSelector,
} from './selectors'


@Injectable({ providedIn: 'root' })

export class WatchEffects {
  private actionsStream = inject(Actions)
  private store = inject(Store)
  tickService = inject(TickWatchService)

  initWatchEffect = createEffect(() => this.actionsStream.pipe(
      ofType(fromWatchActions.init),
      withLatestFrom(this.store.select(stopWatchValueSelector)),
    ),
    { dispatch: false },
  )

  runWatchEffect = createEffect(() => this.actionsStream.pipe(
    ofType(fromWatchActions.init),
    withLatestFrom(this.store.select(stopWatchValueSelector)),
    mergeMap(() => {
        return this.tickService.startTick().pipe(
          map(() => fromWatchActions.run()),
        )
      },
    ),
  ))

  pauseWatchEffect = createEffect(() => this.actionsStream.pipe(
      ofType(fromWatchActions.pause),
      withLatestFrom(this.store.select(stopWatchValueSelector)),
      mergeMap(() => {
        this.tickService.stopTick()
        return EMPTY
      }),
    ),
    { dispatch: false },
  )

  stopWatchEffect = createEffect(() => this.actionsStream.pipe(
      ofType(fromWatchActions.reset),
      mergeMap(() => {
        this.tickService.stopTick()
        return EMPTY
      }),
    ),
    { dispatch: false },
  )
}
