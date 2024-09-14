import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaTuCuentaPage } from './crea-tu-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: CreaTuCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaTuCuentaPageRoutingModule {}
