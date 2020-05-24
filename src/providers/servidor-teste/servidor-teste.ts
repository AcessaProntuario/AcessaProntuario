import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {_throw} from 'rxjs/observable/throw';
import { retry, catchError } from 'rxjs/operators';
import { Medico } from '../../app/Modelos/medico';

@Injectable()
export class ServidorTesteProvider {

  url: string = 'http://ec2-54-162-53-143.compute-1.amazonaws.com/';
  data:Observable<any>;

  constructor(public httpClient: HttpClient) {
    console.log('Hello ServidorProvider Provider');
  }

  getMedicos(): Observable<Medico[]>{
    return this.httpClient.get<Medico[]>(this.url+'dadosMedicoTeste.php').pipe(retry(2), catchError(this.handleError));
  }

  getUltimoIdUsuario(): Observable<any>{
    return this.httpClient.get<any>(this.url+'ultimoIdUsuarioTeste.php').pipe(retry(2), catchError(this.handleError));
  }

  mantemMedico(medico: Medico, acao: string, idUsuario: number):Observable<Medico>{
    let postData = JSON.stringify({
                              acao: acao,
                              idTipoUsu: +medico.idTipoUsu,
                              login: medico.login,
                              senha: medico.senha,
                              tipo: medico.tipo,
                              ativo: medico.ativo,
                              idMed: +medico.idMed,
                              idTipo: +medico.idTipoUsu,
                              loginMed: medico.login,
                              nome: medico.nome,
                              sobrenome: medico.sobrenome,
                              dtNasc: medico.dtNasc,
                              dtCadastro: medico.dtCadastro,
                              cpf: medico.cpf,
                              rg: medico.rg,
                              crm: medico.crm,
                              ufCrm: medico.ufCrm,
                              email: medico.email,
                              ativoMed: medico.ativo,
                              idUsuario: idUsuario
                    })
    this.data = this.httpClient.post<Medico>(this.url+'mantemMedicoTeste.php', postData);
    return this.data.map(res=>res.json());
  }

  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      //erro ocorreu no lado do cliente
      errorMessage = error.error.message;
    }else{
      //erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return _throw (errorMessage);
  }

}
