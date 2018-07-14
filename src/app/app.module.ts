import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { SideComponent } from './components/side-bar/side.component';
import { EmptyComponent } from './components/empty/empty.component';
import { DetailComponent } from './components/detail/detail.component';
import { DataService } from './data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { routerConfigFn } from './router.config';
import { APP_STATES } from './app.states';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {
  AsyncCache,
  LocalStorageDriver,
  MemoryDriver,
  AsyncCacheModule,
  AsyncCacheOptions
} from 'angular-async-cache';

export function asyncCacheOptionsFactory(): AsyncCacheOptions {
  return new AsyncCacheOptions({
    // Default cache driver to use. Default in memory.
    // You can also roll your own by implementing the CacheDriver interface
    driver: new LocalStorageDriver(),

    // this is the special sauce - first emit the data from localstorage,
    // then re-fetch the live data from the API and emit a second time.
    // The async pipe will then re-render and update the UI. Default: false
    fromCacheAndReplay: true
  });
}


@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    DetailComponent,
    EmptyComponent
  ],
  imports: [
    UIRouterModule.forRoot({ states: APP_STATES, otherwise: { state: 'home' },config: routerConfigFn}),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot(),
    AsyncCacheModule.forRoot({
      provide: AsyncCacheOptions,
      useFactory: asyncCacheOptionsFactory
    }),
    FlexLayoutModule
  ],
  providers: [DataService],
  bootstrap: [UIView]
})
export class AppModule { }
