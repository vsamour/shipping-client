import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from '@core/core.module';
import {LottieModule} from 'ngx-lottie';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    CoreModule.forRoot(),

    LottieModule.forRoot({
      player: playerFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
