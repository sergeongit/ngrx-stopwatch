import { Injectable } from '@angular/core'
import {
  interval,
  Subject,
  takeUntil,
} from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class TickWatchService {
  stopTickStream = new Subject<boolean>()
  tickWatchStream = interval(1000).pipe(takeUntil(this.stopTickStream))

  startTick() {
    return this.tickWatchStream
  }

  stopTick() {
    return this.stopTickStream.next(false)
  }
}
