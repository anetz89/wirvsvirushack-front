import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { MapComponent } from './map/map.component';
import { DecisionComponent } from './decision/decision.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

const routes: Routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'start', component: StartComponent },
    { path: 'map', component: MapComponent },
    { path: 'decision', component: DecisionComponent },
    { path: 'shoppinglist/:id', component: ShoppinglistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
