import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';
import {NgForm} from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-cadastro-recep',
  templateUrl: 'cadastro-recep.html',
})
export class CadastroRecepPage {


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private servidorProvider: ServidorProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroRecepPage');
  }

 
}
