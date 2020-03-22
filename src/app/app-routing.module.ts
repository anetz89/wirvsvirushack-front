import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeedhelpComponent } from './needhelp/needhelp.component';
import { MapComponent } from './map/map.component';
import { DecisionComponent } from './decision/decision.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

const routes: Routes = [
    { path: '', redirectTo: '/decision', pathMatch: 'full' },
    { path: 'needhelp', component: NeedhelpComponent },
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
