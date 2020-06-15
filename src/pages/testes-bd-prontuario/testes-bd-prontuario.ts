import { Component} from '@angular/core';
import { ServidorTesteProvider } from '../../providers/servidor-teste/servidor-teste';
import { Paciente } from '../../app/Modelos/paciente';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Prontuario } from '../../app/Modelos/prontuario';
import { Medico } from '../../app/Modelos/medico';

@IonicPage()
@Component({
  selector: 'page-testes-bd-prontuario',
  templateUrl: 'testes-bd-prontuario.html',
})
export class TestesBdProntuarioPage {

  paciente = {  // os valores estão fixados, mas deve ser alterado para pegar os dados do paciente
    numProntuario: '111',
    idPac: 1  
  } as Paciente;
  
  medResp = {  // os valores estão fixados, mas deve ser alterado para pegar os dados do médico que estiver responsável pelo paciente
    idMed: 1,  
    crm: '1111111',
    ufCrm: 'SP'
  } as Medico;
  
  medRespInfo = {  // os valores estão fixados, mas deve ser alterado para pegar os dados do médico que estiver fornecendo as informações do prontuário
    idMed: 2,
    crm: '2222222',
    ufCrm: 'SP'
  } as Medico;
  
  prontuario = {
    ativoPront: 'SIM'
  } as Prontuario;
  
  prontuarios: Prontuario[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private servidorTesteProvider: ServidorTesteProvider
    ) {
  }

  //carrega uma lista de prontuários ao iniciar a página
  ngOnInit(){
    this.getProntuario();
  }

  //verifica se o formulário preenchido já possui um id ou não. Se possuir é uma edição, se não, é uma inclusão
  cadastraProntuario(form: NgForm){
    if(this.prontuario.idPront==null)
      this.buscaUltimoIdProntuario(form);
    else
      this.updateProntuario(form);
  }

  //atualiza um registro do banco de dados
  async updateProntuario(form: NgForm) {
    await this.servidorTesteProvider.mantemProntuario(this.prontuario, 'update').subscribe(() => {
    });
    await this.servidorTesteProvider.mantemInforme(this.prontuario, 'update').subscribe(() => {
    });
    this.limpaForm(form);
    this.prontuario.idPront=null;
  }

  //insere um novo registro no banco de dados
  insertProntuario(){
    this.prontuario.dtProntuario = this.servidorTesteProvider.formataDataAtual();
    this.prontuario.hrProntuario = this.servidorTesteProvider.formataHoraAtual();
    this.prontuario.idPaciente = this.paciente.idPac;
    this.prontuario.numProntPac = this.paciente.numProntuario;
    this.prontuario.idMedResp = this.medResp.idMed;
    this.prontuario.crmResp = this.medResp.crm;
    this.prontuario.ufCrmResp = this.medResp.ufCrm;
    this.prontuario.idMedRespInfo = this.medRespInfo.idMed;
    this.prontuario.crmRespInfo = this.medRespInfo.crm;
    this.prontuario.ufCrmRespInfo = this.medRespInfo.ufCrm;
    this.servidorTesteProvider.mantemProntuario(this.prontuario, 'insert').subscribe(() => {
    });    
  }

  async buscaUltimoIdProntuario(form: NgForm){
    await this.insertProntuario();
    this.servidorTesteProvider.getUltimoIdProntuario().subscribe((result: any) => {
      this.prontuario.idPront = +result.idPront; //esse + é para fazer um parse para number
      this.insereInforme();
      this.limpaForm(form);
      this.prontuario.idPront=null;
    });
  }

  insereInforme(){
    this.servidorTesteProvider.mantemInforme(this.prontuario, 'insert').subscribe(() => {
    });
  }

  //traz uma lista de usuários cadastrados no banco de dados
  getProntuario() {
    this.servidorTesteProvider.getProntuario().subscribe((prontuarios: Prontuario[]) => {
      this.prontuarios = prontuarios;
    });
  }

  //exclui um registro no banco de dados
  deleteProntuario(prontuario: Prontuario) {
    this.servidorTesteProvider.mantemProntuario(prontuario, 'delete').subscribe(() => {
    });
  }

  //preenche o formulário com os dados do usuário selecionado para edição
  editProntuario(prontuario: Prontuario) {
    this.prontuario = { ...prontuario };
  }

  //limpa o formulário
  limpaForm(form: NgForm) {
    form.resetForm();
    this.prontuario = {} as Prontuario;
  }

}


