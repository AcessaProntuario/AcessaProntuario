import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestesBdPacientePage } from './testes-bd-paciente';

@NgModule({
  declarations: [
    TestesBdPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(TestesBdPacientePage),
  ],
})
export class TestesBdPacientePageModule {}
