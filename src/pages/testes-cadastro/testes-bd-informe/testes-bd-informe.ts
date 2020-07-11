import { Component} from '@angular/core';
import { ServidorTesteProvider } from '../../../providers/servidor-teste/servidor-teste';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Informe } from '../../../app/Modelos/informe';

@IonicPage()
@Component({
  selector: 'page-testes-bd-informe',
  templateUrl: 'testes-bd-informe.html',
})
export class TestesBdInformePage {

  informes: Informe[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private servidorTesteProvider: ServidorTesteProvider
    ) {
  }

  //carrega uma lista de prontuários ao iniciar a página
  ngOnInit(){
    this.getInforme();
  }

  //traz uma lista de usuários cadastrados no banco de dados
  getInforme() {
    this.servidorTesteProvider.getInforme().subscribe((informes: Informe[]) => {
      this.informes = informes;
    });
  }

}


