import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home-adm',
  templateUrl: 'home-adm.html'
})

export class HomeAdmPage {

  loginUsuario;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
      this.loginUsuario = navParams.get('nome');
  }

}
