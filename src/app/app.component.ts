import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomeAdmPage } from '../pages/home-adm/home-adm';
import { LoginPage } from '../pages/login/login';
import { CadastroMedicoPage } from '../pages/cadastro-medico/cadastro-medico';
import { CadastroRecepPage } from '../pages/cadastro-recep/cadastro-recep';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { DetalheInformePage } from '../pages/detalhe-informe/detalhe-informe';
import { HomeMedicoPage } from '../pages/home-medico/home-medico';
import { HomeRecepPage } from '../pages/home-recep/home-recep';
import { HomeUserPage } from '../pages/home-user/home-user';
import { CadastroInformePage } from '../pages/cadastro-informe/cadastro-informe';
import { RedefinirSenhaPage } from '../pages/redefinir-senha/redefinir-senha';
import { TestesBdMedicoPage } from '../pages/testes-bd-medico/testes-bd-medico';
import { TestesBdRecepPage } from '../pages/testes-bd-recep/testes-bd-recep';
import { TestesBdPacientePage } from '../pages/testes-bd-paciente/testes-bd-paciente';
import { TestesBdProntuarioPage } from '../pages/testes-bd-prontuario/testes-bd-prontuario';
import { TestesBdInformePage } from '../pages/testes-bd-informe/testes-bd-informe';
import { TestesBdAdminPage } from '../pages/testes-bd-admin/testes-bd-admin';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [ 
      { title: 'Login',                     component: LoginPage            },
      { title: 'Teste BD Admin',            component: TestesBdAdminPage   },
      { title: 'Teste BD Medico',           component: TestesBdMedicoPage   },
      { title: 'Teste BD Recepcionista',    component: TestesBdRecepPage    },
      { title: 'Teste BD Paciente',         component: TestesBdPacientePage },
      { title: 'Teste BD Prontuario',       component: TestesBdProntuarioPage },
      { title: 'Teste BD Informe',          component: TestesBdInformePage  },
      { title: 'Cadastro de Médico',        component: CadastroMedicoPage   },
      { title: 'Cadastro de Recepcionista', component: CadastroRecepPage    },
      { title: 'Cadastro de Usuário',       component: CadastroUsuarioPage  },
      { title: 'HomeMedico',                component: HomeMedicoPage       },
      { title: 'HomeAdm',                   component: HomeAdmPage          },
      { title: 'HomeRecepcionista',         component: HomeRecepPage        },
      { title: 'HomeUser',                  component: HomeUserPage         },
      { title: 'Cadastro de Informe',       component: CadastroInformePage  },
      { title: 'Detalhe do Informe',        component: DetalheInformePage   },
      { title: 'Redefinir Senha',           component: RedefinirSenhaPage   }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
