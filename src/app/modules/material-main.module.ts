import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatTooltipModule } from '@angular/material/tooltip'


@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class MaterialMainModule {}
