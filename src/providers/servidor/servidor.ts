import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {_throw} from 'rxjs/observable/throw';
import { retry, catchError } from 'rxjs/operators';
import { Usuario } from '../../app/Modelos/usuario';

import 'rxjs/add/operator/map'

@Injectable()
export class ServidorProvider {

  url: string = 'http://ec2-54-162-53-143.compute-1.amazonaws.com/';
  data:Observable<any>;

  constructor(public httpClient: HttpClient) {
    console.log('Hello ServidorProvider Provider');
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.url+'dadosUsuario.php').pipe(retry(2), catchError(this.handleError));
  }

  getUsuarioById(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.url+'dadosUsuario.php'+'/'+id).pipe(retry(2), catchError(this.handleError));
  }

  saveUsuario(usuario: Usuario):Observable<Usuario>{
    
    let postData = JSON.stringify({
                              prontuario: usuario.prontuario,
                              nome:usuario.nome, 
                              sobrenome:usuario.sobrenome, 
                              dtNasc: usuario.dtNasc,
                              login: usuario.login,
                              senha: usuario.senha,
                              tipo: usuario.tipo,
                    })
    this.data = this.httpClient.post<Usuario>(this.url+'insertUsuario.php', postData);
    return this.data.map(res=>res.json());
  }

  updateUsuario(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(this.url+'insertUsuario.php'+'/'+usuario.id, JSON.stringify(usuario), this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  deleteUsuario(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(this.url+'/'+usuario.id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
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
