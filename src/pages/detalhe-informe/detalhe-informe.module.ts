import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheInformePage } from './detalhe-informe';

@NgModule({
  declarations: [
    DetalheInformePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheInformePage),
  ],
})
export class DetalheInformePageModule {}
