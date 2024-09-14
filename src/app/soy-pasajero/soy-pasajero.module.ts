import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoyPasajeroPageRoutingModule } from './soy-pasajero-routing.module';

import { SoyPasajeroPage } from './soy-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoyPasajeroPageRoutingModule
  ],
  declarations: [SoyPasajeroPage]
})
export class SoyPasajeroPageModule {}
