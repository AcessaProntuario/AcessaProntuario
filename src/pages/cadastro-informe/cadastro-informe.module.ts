import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroInformePage } from './cadastro-informe';

@NgModule({
  declarations: [
    CadastroInformePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroInformePage),
  ],
})
export class CadastroInformePageModule {}
