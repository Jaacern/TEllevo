import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditoDebitoPage } from './credito-debito.page';

const routes: Routes = [
  {
    path: '',
    component: CreditoDebitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditoDebitoPageRoutingModule {}
