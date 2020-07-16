import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ServidorTesteProvider } from '../../providers/servidor-teste/servidor-teste';
import { Usuario } from '../../app/Modelos/usuario';
import { NgForm } from '@angular/forms';
import { TipoUsuario } from '../../app/Modelos/tipoUsuario';
import { RedefinirSenhaPage } from '../redefinir-senha/redefinir-senha';
import { HomeRecepPage } from '../home-recep/home-recep';
import { HomeMedicoPage } from '../home-medico/home-medico';
import { HomeAdmPage } from '../home-adm/home-adm';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  preUsuarios: any[];
  usuarios: Usuario[];

  tipoUsuario = {
    login: '',
    senha: ''
  } as TipoUsuario;

  usuario = {} as Usuario;

  tipoUsuarioBanco = {} as TipoUsuario;

  tiposUsuario: TipoUsuario[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public servidorTesteProvider: ServidorTesteProvider
    ) {
  }

  loginUsuario(form: NgForm){

    this.servidorTesteProvider.getTipoUsuario().subscribe(data =>{
      this.tiposUsuario = data;

      for(var i = 0; i < this.tiposUsuario.length; i++){
        if((this.tiposUsuario[i].login.toUpperCase()) == this.tipoUsuario.login){
          this.tipoUsuarioBanco = this.tiposUsuario[i];
        }
      }

      if(this.tipoUsuario.login == '' || this.tipoUsuario.senha == ''){
        const alerta = this.alertCtrl
          .create({
            subTitle: 'Login falhou',
            message: 'Login e senha devem estar preenchidos',
            buttons: ['OK']
          });
          alerta.present();
      }
      else{
        /*if(this.tipoUsuario.senha == this.tipoUsuarioBanco.senha){
          //if(this.tipoUsuarioBanco.senha == '12345678'){
          //  this.navCtrl.push(RedefinirSenhaPage, {
          //    nome: this.tipoUsuarioBanco.login
          //  });
          //}
        }
        else */if(this.tipoUsuarioBanco.tipo == 'Recepcionista'){
          this.navCtrl.push(HomeRecepPage, {
            nome: this.tipoUsuarioBanco.login
          });
        }
        else if(this.tipoUsuarioBanco.tipo == 'Medico'){
            this.navCtrl.push(HomeMedicoPage, {
            nome: this.tipoUsuarioBanco.login
          });
        }
        else if(this.tipoUsuarioBanco.tipo == 'Administrador'){
          this.navCtrl.push(HomeAdmPage, {
              nome: this.tipoUsuarioBanco.login
          });
        }
        else{
          const alerta = this.alertCtrl
            .create({
              subTitle: 'Login falhou',
              message: 'Verifique o login e a senha e tente novamente',
              buttons: ['OK']
            });
            alerta.present();
        }
      }
    });
  }


  ngOnInit(){
    this.getAdmins();
  }


  getAdmins(){

    this.servidorTesteProvider.getAdmin().subscribe(data => {
      this.preUsuarios=data;
      this.getMedicos(); },
      err => console.log(err)
    );
  }

  getMedicos(){
    this.servidorTesteProvider.getMedicos().subscribe(data => {
      let x = 0;
      let qtdeDados = data.length;
      while(x < qtdeDados){
        this.preUsuarios.push(data[x]);
        x++; };
      this.getPacientes(); },
      err => console.log(err)
    );
  }

  getPacientes(){
    this.servidorTesteProvider.getPaciente().subscribe(data => {
      let x = 0;
      let qtdeDados = data.length;
      while(x < qtdeDados){
        this.preUsuarios.push(data[x]);
        x++; }
      this.getReceps(); },
      err => console.log(err)
    );
  }

  getReceps(){
    this.servidorTesteProvider.getRecep().subscribe(data => {
      let x = 0;
      let qtdeDados = data.length;
      while(x < qtdeDados){
        this.preUsuarios.push(data[x]);
        x++; };
      this.getUsuarios(); },
      err => console.log(err)
    );
  }

  getUsuarios(){
    let x = 0;
    let y = 0;
    this.usuarios=[];
    let qtdeDados = this.preUsuarios.length;
    while(this.usuarios.length < qtdeDados){
      let pos = this.preUsuarios[y].idTipoUsu;
      if(pos -1 == x){
        this.usuarios.push(this.preUsuarios[y]);
        this.preUsuarios.splice(y, 1);
        x++; y=0;
      }else
        y++;
    }
  }

}
