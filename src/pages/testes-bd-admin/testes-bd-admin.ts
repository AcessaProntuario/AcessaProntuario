import { Component} from '@angular/core';
import { ServidorTesteProvider } from '../../providers/servidor-teste/servidor-teste';
import { Administrador } from '../../app/Modelos/administrador';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-testes-bd-admin',
  templateUrl: 'testes-bd-admin.html',
})
export class TestesBdAdminPage {

  
  administrador = {
    senha: '12345',
    tipo: 'Administrador',
    ativo: 'SIM'
  } as Administrador;
  administradores: Administrador[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private servidorTesteProvider: ServidorTesteProvider
    ) {
  }

  //carrega uma lista de usuários ao iniciar a página
  ngOnInit(){
    this.getAdmin();
  }

  //verifica se o formulário preenchido já possui um id ou não. Se possuir é uma edição, se não, é uma inclusão
  cadastraAdmin(form: NgForm){
    if(this.administrador.idAdmin ==null)
      this.buscaUltimoIdUsuario(form);
    else
      this.updateAdmin(form);
  }

  //atualiza um registro do banco de dados
  updateAdmin(form: NgForm) {
    this.servidorTesteProvider.mantemAdmin(this.administrador, 'update').subscribe(() => {
    });
    this.administrador.idTipoUsu = null;
    this.limpaForm(form);
  }

  //insere um novo registro no banco de dados
  insertUsuarioAdmin(){
    this.administrador.dtCadastro = this.servidorTesteProvider.formataDataAtual();
    this.administrador.login = this.servidorTesteProvider.geraLogin(this.administrador.nome, this.administrador.sobrenome);
    this.servidorTesteProvider.mantemAdmin(this.administrador, 'insert').subscribe(() => {
    });
  }

  async buscaUltimoIdUsuario(form: NgForm){
    await this.insertUsuarioAdmin();
    this.servidorTesteProvider.getUltimoIdUsuario().subscribe((result: any) => {
      this.administrador.idTipoUsu = +result.idTipoUsu; //esse + é para fazer um parse para number
      this.insereAdmin();
      this.administrador.idTipoUsu = null;
      this.limpaForm(form);
    });
  }

  insereAdmin(){
    this.servidorTesteProvider.mantemAdmin(this.administrador, 'insert2').subscribe(() => {
    });
  }

  //traz uma lista de usuários cadastrados no banco de dados
  getAdmin() {
    this.servidorTesteProvider.getAdmin().subscribe((administradores: Administrador[]) => {
      this.administradores = administradores;
    });
  }

  //exclui um registro no banco de dados
  deleteAdmin(administrador: Administrador) {
    this.servidorTesteProvider.mantemAdmin(administrador, 'delete').subscribe(() => {
    });
  }

  //preenche o formulário com os dados do usuário selecionado para edição
  editAdmin(administrador: Administrador) {
    this.administrador = { ...administrador };
  }

  //limpa o formulário
  limpaForm(form: NgForm) {
    form.resetForm();
    this.administrador = {} as Administrador;
  }

}
