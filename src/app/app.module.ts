import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StartComponent } from './start/start.component';
import { MapComponent } from './map/map.component';
import { DecisionComponent } from './decision/decision.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { NeedhelpComponent } from './needhelp/needhelp.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MapComponent,
    DecisionComponent,
    ShoppinglistComponent,
    NeedhelpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
