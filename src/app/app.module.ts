import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { DataService } from './data.service';
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
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AsyncCacheModule.forRoot({
      provide: AsyncCacheOptions,
      useFactory: asyncCacheOptionsFactory
    }),
    FlexLayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
