import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoyChoferPage } from './soy-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: SoyChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoyChoferPageRoutingModule {}
