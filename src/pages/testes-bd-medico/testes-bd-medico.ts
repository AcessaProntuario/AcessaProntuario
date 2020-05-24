import { Component} from '@angular/core';
import { ServidorTesteProvider } from '../../providers/servidor-teste/servidor-teste';
import { Medico } from '../../app/Modelos/medico';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-testes-bd-medico',
  templateUrl: 'testes-bd-medico.html',
})
export class TestesBdMedicoPage {

  
  medico = {
    tipo: 'Medico',
    ativo: 'SIM'
  } as Medico;
  medicos: Medico[];
  dataHora = new Date();
  idUsuario;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private servidorTesteProvider: ServidorTesteProvider
    ) {
  }

  //carrega uma lista de usuários ao iniciar a página
  ngOnInit(){
    this.getMedicos();
  }

  //verifica se o formulário preenchido já possui um id ou não. Se possuir é uma edição, se não, é uma inclusão
  cadastraMedico(form: NgForm){
    if(this.medico.idMed==null)
      this.insertUsuarioMedico(form);
    else
      this.updateMedico(form);
  }

  //atualiza um registro do banco de dados
  updateMedico(form: NgForm) {
    this.servidorTesteProvider.mantemMedico(this.medico, 'update', this.idUsuario).subscribe(() => {
      this.limpaForm(form);
    });
  }

  //insere um novo registro no banco de dados
  insertUsuarioMedico(form: NgForm){
    this.medico.dtCadastro = this.dataHora.getDate() + '/' + this.dataHora.getMonth() + '/' + this.dataHora.getFullYear();   
    this.servidorTesteProvider.mantemMedico(this.medico, 'insert', this.idUsuario).subscribe(() => {
    });
    this.buscaUltimoIdUsuario();
  }

  buscaUltimoIdUsuario(){
    this.servidorTesteProvider.getUltimoIdUsuario().subscribe((result: any) => {
      this.idUsuario = +result.idTipoUsu; //esse + é para fazer um parse para number
      this.insereMedico();
    });
  }

  insereMedico(){
    this.servidorTesteProvider.mantemMedico(this.medico, 'insert2', this.idUsuario).subscribe(() => {
    });
  }

  //traz uma lista de usuários cadastrados no banco de dados
  getMedicos() {
    this.servidorTesteProvider.getMedicos().subscribe((medicos: Medico[]) => {
      this.medicos = medicos;
    });
  }

  //exclui um registro no banco de dados
  deleteMedico(medico: Medico) {
    this.servidorTesteProvider.mantemMedico(medico, 'delete', this.idUsuario).subscribe(() => {
    });
  }

  //preenche o formulário com os dados do usuário selecionado para edição
  editMedico(medico: Medico) {
    this.medico = { ...medico };
  }

  //limpa o formulário
  limpaForm(form: NgForm) {
    form.resetForm();
    this.medico = {} as Medico;
  }

}
