import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroRecepPage } from './cadastro-recep';

@NgModule({
  declarations: [
    CadastroRecepPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroRecepPage),
  ],
})
export class CadastroRecepPageModule {}
