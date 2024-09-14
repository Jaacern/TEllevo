import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiBilleteraPage } from './mi-billetera.page';

const routes: Routes = [
  {
    path: '',
    component: MiBilleteraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiBilleteraPageRoutingModule {}
