import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestesBdAdminPage } from './testes-bd-admin';

@NgModule({
  declarations: [
    TestesBdAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(TestesBdAdminPage),
  ],
})
export class TestesBdAdminPageModule {}
