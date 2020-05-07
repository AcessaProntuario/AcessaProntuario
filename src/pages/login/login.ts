import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ServidorProvider } from '../../providers/servidor/servidor'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // usuarios: Observable<any>;
  usuarios: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public servidor: ServidorProvider
    ) {
    //this.usuarios = this.servidor.getUsuario();

    this.servidor.getUsuarios()
    .subscribe(
      data => this.usuarios = data,
      err => console.log(err)
    );
    console.log('usuario', this.usuarios)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage'); 
  }
}
