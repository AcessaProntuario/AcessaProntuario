import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomeAdmPage } from '../pages/home-adm/home-adm';
import { LoginPage } from '../pages/login/login';
import { CadastroMedicoPage } from '../pages/cadastro-medico/cadastro-medico';
import { CadastroRecepPage } from '../pages/cadastro-recep/cadastro-recep';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { HomeMedicoPage } from '../pages/home-medico/home-medico';
import { HomeRecepPage } from '../pages/home-recep/home-recep';
import { HomeUserPage } from '../pages/home-user/home-user';
import { CadastroInformePage } from '../pages/cadastro-informe/cadastro-informe';
import { DetalheInformePage } from '../pages/detalhe-informe/detalhe-informe';
import { RedefinirSenhaPage } from '../pages/redefinir-senha/redefinir-senha';

import { ServidorProvider } from '../providers/servidor/servidor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CadastroMedicoPage,
    CadastroRecepPage,
    CadastroUsuarioPage,
    HomeMedicoPage,
    HomeAdmPage,
    HomeRecepPage,
    HomeUserPage,
    CadastroInformePage,
    DetalheInformePage,
    RedefinirSenhaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CadastroMedicoPage,
    CadastroRecepPage,
    CadastroUsuarioPage,
    HomeMedicoPage,
    HomeAdmPage,
    HomeRecepPage,
    HomeUserPage,
    CadastroInformePage,
    DetalheInformePage,
    RedefinirSenhaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServidorProvider
  ]
})
export class AppModule {}
