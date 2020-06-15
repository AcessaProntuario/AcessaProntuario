import { Component, OnInit } from '@angular/core';
// import { ServidorProvider } from '../../providers/servidor/servidor';
// import { Usuario } from '../../app/Modelos/usuario';
// import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage implements OnInit{

  // usuario = {} as Usuario;
  // usuarios: Usuario[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    // private servidorProvider: ServidorProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUsuarioPage');
  }
  
  //carrega uma lista de usuários ao iniciar a página
  ngOnInit(){
    // this.getUsuarios();
  }

  // //verifica se o formulário preenchido já possui um id ou não. Se possuir é uma edição, se não, é uma inclusão
  // cadastraUsuario(form: NgForm){
  //   if(this.usuario.id==null)
  //     this.insertUsuario(form);
  //   else
  //     this.updateUsuario(form);
  // }

  // //atualiza um registro do banco de dados
  // updateUsuario(form: NgForm) {
  //   this.servidorProvider.mantemUsuario(this.usuario, 'update').subscribe(() => {
  //     this.limpaForm(form);
  //   });
  // }

  // //insere um novo registro no banco de dados
  // insertUsuario(form: NgForm){
  //   this.servidorProvider.mantemUsuario(this.usuario, 'insert').subscribe(() => {
  //     this.limpaForm(form);
  //   });
  // }

  // //traz uma lista de usuários cadastrados no banco de dados
  // getUsuarios() {
  //   this.servidorProvider.getUsuarios().subscribe((usuarios: Usuario[]) => {
  //     this.usuarios = usuarios;
  //   });
  // }

  // //exclui um registro no banco de dados
  // deleteUsuario(usuario: Usuario) {
  //   this.servidorProvider.mantemUsuario(usuario, 'delete').subscribe(() => {
  //     this.getUsuarios();
  //   });
  // }

  // //preenche o formulário com os dados do usuário selecionado para edição
  // editUsuario(usuario: Usuario) {
  //   this.usuario = { ...usuario };
  // }

  // //limpa o formulário
  // limpaForm(form: NgForm) {
  //   this.getUsuarios();
  //   form.resetForm();
  //   this.usuario = {} as Usuario;
  // }

}
