import {
  Component,
  inject,
} from '@angular/core'
import {
  Store,
} from '@ngrx/store'
import {
  init,
  pause,
  reset,
  run,
} from '../../store/stopwatch/actions'
import {
  stopWatchStatusSelector,
  stopWatchValueSelector,
} from '../../store/stopwatch/selectors'
import { Observable } from 'rxjs'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  private storeObservable = inject(Store)

  stopwatchValue: Observable<number> = this.storeObservable.select(stopWatchValueSelector)
  stopwatchIsRunStatus: Observable<boolean> = this.storeObservable.select(stopWatchStatusSelector)

  runWatch() {
    this.storeObservable.dispatch(init())
    this.storeObservable.dispatch(run())
  }

  pauseWatch() {
    this.storeObservable.dispatch(pause())
  }

  resetWatch() {
    this.storeObservable.dispatch(reset())
  }
}
