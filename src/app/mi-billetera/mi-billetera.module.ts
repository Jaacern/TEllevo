import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiBilleteraPageRoutingModule } from './mi-billetera-routing.module';

import { MiBilleteraPage } from './mi-billetera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiBilleteraPageRoutingModule
  ],
  declarations: [MiBilleteraPage]
})
export class MiBilleteraPageModule {}
