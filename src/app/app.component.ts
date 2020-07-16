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
import { TestesBdMedicoPage } from '../pages/testes-cadastro/testes-bd-medico/testes-bd-medico';
import { TestesBdRecepPage } from '../pages/testes-cadastro/testes-bd-recep/testes-bd-recep';
import { TestesBdPacientePage } from '../pages/testes-cadastro/testes-bd-paciente/testes-bd-paciente';
import { TestesBdProntuarioPage } from '../pages/testes-cadastro/testes-bd-prontuario/testes-bd-prontuario';
import { TestesBdInformePage } from '../pages/testes-cadastro/testes-bd-informe/testes-bd-informe';
import { TestesBdAdminPage } from '../pages/testes-cadastro/testes-bd-admin/testes-bd-admin';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'person-add', title: 'Login',                     component: LoginPage            },
      { icon: 'person-add', title: 'Teste BD Admin',            component: TestesBdAdminPage   },
      { icon: 'person-add', title: 'Teste BD Medico',           component: TestesBdMedicoPage   },
      { icon: 'person-add', title: 'Teste BD Recepcionista',    component: TestesBdRecepPage    },
      { icon: 'person-add', title: 'Teste BD Paciente',         component: TestesBdPacientePage },
      { icon: 'person-add', title: 'Teste BD Prontuario',       component: TestesBdProntuarioPage },
      { icon: 'person-add', title: 'Teste BD Informe',          component: TestesBdInformePage  },
      { icon: 'person-add', title: 'Cadastro de Médico',        component: CadastroMedicoPage   },
      { icon: 'person-add', title: 'Cadastro de Recepcionista', component: CadastroRecepPage    },
      { icon: 'person-add', title: 'Cadastro de Usuário',       component: CadastroUsuarioPage  },
      { icon: 'person-add', title: 'HomeMedico',                component: HomeMedicoPage       },
      { icon: 'person-add', title: 'HomeAdm',                   component: HomeAdmPage          },
      { icon: 'person-add', title: 'HomeRecepcionista',         component: HomeRecepPage        },
      { icon: 'person-add', title: 'HomeUser',                  component: HomeUserPage         },
      { icon: 'person-add', title: 'Cadastro de Informe',       component: CadastroInformePage  },
      { icon: 'person-add', title: 'Detalhe do Informe',        component: DetalheInformePage   },
      { icon: 'person-add', title: 'Redefinir Senha',           component: RedefinirSenhaPage   }
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
