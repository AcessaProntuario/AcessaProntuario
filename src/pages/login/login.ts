import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorTesteProvider } from '../../providers/servidor-teste/servidor-teste';
import { Usuario } from '../../app/Modelos/usuario';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  preUsuarios: any[];
  usuarios: Usuario[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public servidorTesteProvider: ServidorTesteProvider
    ) {
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