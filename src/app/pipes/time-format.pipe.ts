import {
  Pipe,
  PipeTransform,
} from '@angular/core'

@Pipe({
  name: 'timeFormat',
})

export class TimeFormatPipe implements PipeTransform {
  transform(value: number | null): string {
    if (!value) {
      return '00:00:00'
    }

    // YYYY-MM-DDTHH:mm:ss.sssZ
    return new Date(value * 1000).toISOString().slice(11, -5)
  }
}
