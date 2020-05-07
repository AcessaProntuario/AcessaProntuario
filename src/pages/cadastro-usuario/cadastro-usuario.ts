import { Component, OnInit } from '@angular/core';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { Usuario } from '../../app/Modelos/usuario';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage implements OnInit{

  usuario = {} as Usuario;
  usuarios: Usuario[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private servidorProvider: ServidorProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUsuarioPage');
  }

  ngOnInit(){
    this.getUsuarios();
  }

  updateUsuario(form: NgForm) {
    this.servidorProvider.updateUsuario(this.usuario).subscribe(() => {
      this.limpaForm(form);
    });
  }

  saveUsuario(form: NgForm){
    this.servidorProvider.saveUsuario(this.usuario).subscribe(() => {
      this.limpaForm(form);
    });
  }

  getUsuarios() {
    this.servidorProvider.getUsuarios().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
  }

  deleteUsuario(usuario: Usuario) {
    this.servidorProvider.deleteUsuario(usuario).subscribe(() => {
      this.getUsuarios();
    });
  }

  editUsuario(usuario: Usuario) {
    this.usuario = { ...usuario };
  }

  limpaForm(form: NgForm) {
    this.getUsuarios();
    form.resetForm();
    this.usuario = {} as Usuario;
  }

}
