import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoyChoferPageRoutingModule } from './soy-chofer-routing.module';

import { SoyChoferPage } from './soy-chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoyChoferPageRoutingModule
  ],
  declarations: [SoyChoferPage]
})
export class SoyChoferPageModule {}
