import { Component} from '@angular/core';
import { ServidorTesteProvider } from '../../providers/servidor-teste/servidor-teste';
import { Recepcionista } from '../../app/Modelos/recepcionista';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-testes-bd-recep',
  templateUrl: 'testes-bd-recep.html',
})
export class TestesBdRecepPage {

  
  recepcionista = {
    senha: '12345678',
    tipo: 'Recepcionista',
    ativo: 'SIM'
  } as Recepcionista;
  recepcionistas: Recepcionista[];
  idUsuario;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private servidorTesteProvider: ServidorTesteProvider
    ) {
  }

  //carrega uma lista de usuários ao iniciar a página
  ngOnInit(){
    this.getRecep();
  }

  //verifica se o formulário preenchido já possui um id ou não. Se possuir é uma edição, se não, é uma inclusão
  cadastraRecep(form: NgForm){
    if(this.recepcionista.idRecep==null)
      this.insertUsuarioRecep(form);
    else
      this.updateRecep(form);
  }

  //atualiza um registro do banco de dados
  updateRecep(form: NgForm) {
    this.servidorTesteProvider.mantemRecep(this.recepcionista, 'update', this.idUsuario).subscribe(() => {
      this.limpaForm(form);
    });
  }

  //insere um novo registro no banco de dados
  insertUsuarioRecep(form: NgForm){
    this.recepcionista.dtCadastro = this.servidorTesteProvider.formataDataAtual();
    this.recepcionista.login = this.servidorTesteProvider.geraLogin(this.recepcionista.nome, this.recepcionista.sobrenome);
    this.servidorTesteProvider.mantemRecep(this.recepcionista, 'insert', this.idUsuario).subscribe(() => {
    });
    this.buscaUltimoIdUsuario();
  }

  buscaUltimoIdUsuario(){
    this.servidorTesteProvider.getUltimoIdUsuario().subscribe((result: any) => {
      this.idUsuario = +result.idTipoUsu; //esse + é para fazer um parse para number
      this.insereRecep();
    });
  }

  insereRecep(){
    this.servidorTesteProvider.mantemRecep(this.recepcionista, 'insert2', this.idUsuario).subscribe(() => {
    });
  }

  //traz uma lista de usuários cadastrados no banco de dados
  getRecep() {
    this.servidorTesteProvider.getRecep().subscribe((recepcionistas: Recepcionista[]) => {
      this.recepcionistas = recepcionistas;
    });
  }

  //exclui um registro no banco de dados
  deleteRecep(recepcionista: Recepcionista) {
    this.servidorTesteProvider.mantemRecep(recepcionista, 'delete', this.idUsuario).subscribe(() => {
    });
  }

  //preenche o formulário com os dados do usuário selecionado para edição
  editRecep(recepcionista: Recepcionista) {
    this.recepcionista = { ...recepcionista };
  }

  //limpa o formulário
  limpaForm(form: NgForm) {
    form.resetForm();
    this.recepcionista = {} as Recepcionista;
  }

}
