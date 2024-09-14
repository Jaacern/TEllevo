import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoyPasajeroPage } from './soy-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: SoyPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoyPasajeroPageRoutingModule {}
