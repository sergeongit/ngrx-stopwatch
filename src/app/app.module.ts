import {
  isDevMode,
  NgModule,
} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MaterialMainModule } from './modules/material-main.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MainComponent } from './components/main/main.component'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import {
  metaReducers,
  reducers,
} from './store'
import { EffectsModule } from '@ngrx/effects'
import { WatchEffects } from './store/stopwatch/effects'


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialMainModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([WatchEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
