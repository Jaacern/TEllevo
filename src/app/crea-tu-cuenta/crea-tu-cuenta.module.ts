import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaTuCuentaPageRoutingModule } from './crea-tu-cuenta-routing.module';

import { CreaTuCuentaPage } from './crea-tu-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaTuCuentaPageRoutingModule
  ],
  declarations: [CreaTuCuentaPage]
})
export class CreaTuCuentaPageModule {}
