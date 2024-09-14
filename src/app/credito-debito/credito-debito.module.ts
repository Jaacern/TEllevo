import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditoDebitoPageRoutingModule } from './credito-debito-routing.module';

import { CreditoDebitoPage } from './credito-debito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditoDebitoPageRoutingModule
  ],
  declarations: [CreditoDebitoPage]
})
export class CreditoDebitoPageModule {}
