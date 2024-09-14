import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarInformacionPageRoutingModule } from './editar-informacion-routing.module';

import { EditarInformacionPage } from './editar-informacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarInformacionPageRoutingModule
  ],
  declarations: [EditarInformacionPage]
})
export class EditarInformacionPageModule {}
