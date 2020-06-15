import { Component} from '@angular/core';
import { ServidorTesteProvider } from '../../providers/servidor-teste/servidor-teste';
import { Paciente } from '../../app/Modelos/paciente';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-testes-bd-paciente',
  templateUrl: 'testes-bd-paciente.html',
})
export class TestesBdPacientePage {

  
  paciente = {
    tipo: 'Paciente',
    ativo: 'SIM'
  } as Paciente;
  pacientes: Paciente[];
  idRecep=1;  // o valor está fixado, mas deve ser alterado para pegar o idRecep do recepcionista que estiver cadastrando o paciente

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private servidorTesteProvider: ServidorTesteProvider
    ) {
  }

  //carrega uma lista de usuários ao iniciar a página
  ngOnInit(){
    this.getPaciente();
  }

  //verifica se o formulário preenchido já possui um id ou não. Se possuir é uma edição, se não, é uma inclusão
  cadastraPaciente(form: NgForm){
    if(this.paciente.idPac==null)
      this.buscaUltimoIdUsuario(form);
    else
      this.updatePaciente(form);
  }

  //atualiza um registro do banco de dados
  updatePaciente(form: NgForm) {
    this.servidorTesteProvider.mantemPaciente(this.paciente, 'update', this.idRecep).subscribe(() => {
    });
    this.paciente.idTipoUsu = null;
    this.limpaForm(form);
  }

  //insere um novo registro no banco de dados
  insertUsuarioPaciente(){
    this.paciente.dtCadastro = this.servidorTesteProvider.formataDataAtual();
    this.paciente.login = this.servidorTesteProvider.geraLogin(this.paciente.nome, this.paciente.sobrenome);
    this.paciente.senha = this.servidorTesteProvider.geraRandom();
    this.servidorTesteProvider.mantemPaciente(this.paciente, 'insert', this.idRecep).subscribe(() => {
    });
  }

  async buscaUltimoIdUsuario(form: NgForm){
    await this.insertUsuarioPaciente();
    this.servidorTesteProvider.getUltimoIdUsuario().subscribe((result: any) => {
      this.paciente.idTipoUsu = +result.idTipoUsu; //esse + é para fazer um parse para number
      this.inserePaciente();
      this.paciente.idTipoUsu = null;
      this.limpaForm(form)
    });
  }

  inserePaciente(){
    this.servidorTesteProvider.mantemPaciente(this.paciente, 'insert2', this.idRecep).subscribe(() => {
    });
  }

  //traz uma lista de usuários cadastrados no banco de dados
  getPaciente() {
    this.servidorTesteProvider.getPaciente().subscribe((pacientes: Paciente[]) => {
      this.pacientes = pacientes;
    });
  }

  //exclui um registro no banco de dados
  deletePaciente(paciente: Paciente) {
    this.servidorTesteProvider.mantemPaciente(paciente, 'delete', this.idRecep).subscribe(() => {
    });
  }

  //preenche o formulário com os dados do usuário selecionado para edição
  editPaciente(paciente: Paciente) {
    this.paciente = { ...paciente };
  }

  //limpa o formulário
  limpaForm(form: NgForm) {
    form.resetForm();
    this.paciente = {} as Paciente;
  }

}


