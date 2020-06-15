import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {_throw} from 'rxjs/observable/throw';
import { retry, catchError } from 'rxjs/operators';
import { Medico } from '../../app/Modelos/medico';
import { Recepcionista } from '../../app/Modelos/recepcionista';
import { Paciente } from '../../app/Modelos/paciente';
import { Prontuario } from '../../app/Modelos/prontuario';
import { Informe } from '../../app/Modelos/informe';
import { Administrador } from '../../app/Modelos/administrador';

@Injectable()
export class ServidorTesteProvider {

  url: string = 'http://ec2-54-162-53-143.compute-1.amazonaws.com/';

  constructor(public httpClient: HttpClient) {  
  }

  /************************************* FUNÇÕES DE USO COMUM *************************************/

  getUltimoIdUsuario(): Observable<any>{
    return this.httpClient.get<any>(this.url+'ultimoIdUsuarioTeste.php').pipe(retry(2), catchError(this.handleError));
  }

  getUltimoIdProntuario(): Observable<any>{
    return this.httpClient.get<any>(this.url+'ultimoIdProntuarioTeste.php').pipe(retry(2), catchError(this.handleError));
  }

  formataDataAtual(){
    let data = new Date();
    let dia = (data.getDate()).toString();
    let tamDia = dia.length;
    if(tamDia==1){
      dia='0'+dia;
    }
    let mes = (data.getMonth() + 1).toString();
    let tamMes = mes.length;
    if(tamMes==1){
      mes='0'+mes;
    }
    let ano = data.getFullYear();
    return dia + '/' + mes + '/' + ano;
  }

  formataHoraAtual(){
    let data = new Date();
    let hora = (data.getHours()).toString();
    let tamHora = hora.length;
    if(tamHora==1){
      hora='0'+hora;
    }
    let minuto = (data.getMinutes()).toString();
    let tamMinuto = minuto.length;
    if(tamMinuto==1){
      minuto='0'+minuto;
    }
    return hora + ':' + minuto;
  }

  geraLogin(nome: string, sobrenome: string){
    var meioNomeArray = nome.split("");
    var meioNome = (meioNomeArray[0]+
                    meioNomeArray[1]+
                    meioNomeArray[2]).toUpperCase();
    var meioSobrenomeArray= sobrenome.split("")
    var num = meioSobrenomeArray.length
    var meioSobrenome=(meioSobrenomeArray[num-2]+meioSobrenomeArray[num-1]).toUpperCase();
    var fimLogin = Math.round(Math.random() * 100);
    return meioNome + meioSobrenome + fimLogin;
  }

  geraRandom(){
    return Math.random().toString(36).slice(-10);
  }

  /************************************* CRUD ADMIN *************************************/

  getAdmin(): Observable<Administrador[]>{
    return this.httpClient.get<Administrador[]>(this.url+'dadosAdminTeste.php').pipe(retry(2), catchError(this.handleError));
  }

  mantemAdmin(administrador: Administrador, acao: string):Observable<Administrador>{
    let data:Observable<any>;
    let postData = JSON.stringify({
                              acao:       acao,
                              idTipoUsu: +administrador.idTipoUsu,
                              login:      administrador.login,
                              senha:      administrador.senha,
                              tipo:       administrador.tipo,
                              ativo:      administrador.ativo,
                              idAdmin:   +administrador.idAdmin,
                              idTipo:    +administrador.idTipoUsu,
                              loginAdmin: administrador.login,
                              nome:       administrador.nome,
                              sobrenome:  administrador.sobrenome,
                              dtCadastro: administrador.dtCadastro,
                              email:      administrador.email,
                              ativoAdmin: administrador.ativo
                    })
    data = this.httpClient.post<Administrador>(this.url+'mantemAdminTeste.php', postData);
    return data.map(res=>res.json());
  }
  /************************************* CRUD MEDICO *************************************/
  getMedicos(): Observable<Medico[]>{
    return this.httpClient.get<Medico[]>(this.url+'dadosMedicoTeste.php').pipe(retry(2), catchError(this.handleError));
  }

  mantemMedico(medico: Medico, acao: string):Observable<Medico>{
    let data:Observable<any>;
    let postData = JSON.stringify({
                              acao:       acao,
                              idTipoUsu: +medico.idTipoUsu,
                              login:      medico.login,
                              senha:      medico.senha,
                              tipo:       medico.tipo,
                              ativo:      medico.ativo,
                              idMed:     +medico.idMed,
                              idTipo:    +medico.idTipoUsu,
                              loginMed:   medico.login,
                              nome:       medico.nome,
                              sobrenome:  medico.sobrenome,
                              dtNasc:     medico.dtNasc,
                              dtCadastro: medico.dtCadastro,
                              cpf:        medico.cpf,
                              rg:         medico.rg,
                              crm:        medico.crm,
                              ufCrm:      medico.ufCrm,
                              email:      medico.email,
                              ativoMed:   medico.ativo
                    })
    data = this.httpClient.post<Medico>(this.url+'mantemMedicoTeste.php', postData);
    return data.map(res=>res.json());
  }

  /************************************* CRUD RECEPCIONISTA *************************************/

  getRecep(): Observable<Recepcionista[]>{
    return this.httpClient.get<Recepcionista[]>(this.url+'dadosRecepTeste.php').pipe(retry(2), catchError(this.handleError));
  }

  mantemRecep(recepcionista: Recepcionista, acao: string):Observable<Recepcionista>{
    let data:Observable<any>;
    let postData = JSON.stringify({
                              acao:       acao,
                              idTipoUsu: +recepcionista.idTipoUsu,
                              login:      recepcionista.login,
                              senha:      recepcionista.senha,
                              tipo:       recepcionista.tipo,
                              ativo:      recepcionista.ativo,
                              idRecep:   +recepcionista.idRecep,
                              idTipo:    +recepcionista.idTipoUsu,
                              loginRecep: recepcionista.login,
                              nome:       recepcionista.nome,
                              sobrenome:  recepcionista.sobrenome,
                              dtNasc:     recepcionista.dtNasc,
                              dtCadastro: recepcionista.dtCadastro,
                              cpf:        recepcionista.cpf,
                              rg:         recepcionista.rg,
                              email:      recepcionista.email,
                              ativoRecep: recepcionista.ativo
                    })
    data = this.httpClient.post<Recepcionista>(this.url+'mantemRecepTeste.php', postData);
    return data.map(res=>res.json());
  }

  /************************************* CRUD PACIENTE *************************************/

  getPaciente(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(this.url+'dadosPacienteTeste.php').pipe(retry(2), catchError(this.handleError));
  }

  mantemPaciente(paciente: Paciente, acao: string, idRecep: number):Observable<Paciente>{
    let data:Observable<any>;
    let postData = JSON.stringify({
                              acao:           acao,
                              idTipoUsu:     +paciente.idTipoUsu,
                              login:          paciente.login,
                              senha:          paciente.senha,
                              tipo:           paciente.tipo,
                              ativo:          paciente.ativo,
                              idPac:         +paciente.idPac,
                              idTipo:        +paciente.idTipoUsu,
                              numProntuario:  paciente.numProntuario,
                              loginPac:       paciente.login,
                              nome:           paciente.nome,
                              sobrenome:      paciente.sobrenome,
                              dtNasc:         paciente.dtNasc,
                              sexo:           paciente.sexo,
                              estadoCivil:    paciente.estadoCivil,
                              dtCadastro:     paciente.dtCadastro,
                              nomeMae:        paciente.nomeMae,
                              nomePai:        paciente.nomePai,
                              cpf:            paciente.cpf,
                              rg:             paciente.rg,
                              telefone1:      paciente.telefone1,
                              telefone2:      paciente.telefone2,
                              telefone3:      paciente.telefone3,
                              email:          paciente.email,
                              tipoLogradouro: paciente.tipoLogradouro,
                              endereco:       paciente.endereco,
                              numEndereco:    paciente.numEndereco,
                              complEndereco:  paciente.complEndereco,
                              bairro:         paciente.bairro,
                              cep:            paciente.cep,
                              cidade:         paciente.cidade,
                              estado:         paciente.estado,
                              tipoSanguineo:  paciente.tipoSanguineo,
                              fatorRh:        paciente.fatorRh,
                              alergias:       paciente.alergias,
                              respCadastro:  +idRecep,
                              ativoPac:       paciente.ativo
                    })
    data = this.httpClient.post<Paciente>(this.url+'mantemPacienteTeste.php', postData);
    return data.map(res=>res.json());
  }

  /************************************* CRUD PRONTUARIO *************************************/

  getProntuario(): Observable<Prontuario[]>{
    return this.httpClient.get<Prontuario[]>(this.url+'dadosProntuarioTeste.php').pipe(retry(2), catchError(this.handleError));
  }

  mantemProntuario(prontuario: Prontuario, acao: string):Observable<Prontuario>{
    let data:Observable<any>;
    let postData = JSON.stringify({
                              acao:            acao,
                              idPront:       	+prontuario.idPront,
                              numProntPac:     prontuario.numProntPac,
                              idPaciente:     +prontuario.idPaciente,
                              idade:          +prontuario.idade,
                              peso:           +prontuario.peso,
                              altura:         +prontuario.altura,
                              dtInternacao:    prontuario.dtInternacao,
                              crmResp:         prontuario.crmResp,
                              ufCrmResp:       prontuario.ufCrmResp,
                              idMedResp:      +prontuario.idMedResp,
                              dtProntuario:    prontuario.dtProntuario,
                              hrProntuario:    prontuario.hrProntuario,
                              dtUltimaVisita:  prontuario.dtUltimaVisita,
                              hrUltimaVisita:  prontuario.hrUltimaVisita,
                              temperatura:    +prontuario.temperatura,
                              pressaoSist:    +prontuario.pressaoSist,
                              pressaoDiast:   +prontuario.pressaoDiast,
                              batimentosCard: +prontuario.batimentosCard,
                              estadoSaude:     prontuario.estadoSaude,
                              examesSolicit:   prontuario.examesSolicit,
                              remediosMinistr: prontuario.remediosMinistr,
                              previsaoAlta:    prontuario.previsaoAlta,
                              dtPrevisaoAlta:  prontuario.dtPrevisaoAlta,
                              alta:            prontuario.alta,
                              dtAlta:          prontuario.dtAlta,
                              crmRespInfo:     prontuario.crmRespInfo,
                              ufCrmRespInfo:   prontuario.ufCrmRespInfo,
                              idMedRespInfo:  +prontuario.idMedRespInfo,
                              dadosAdicionais: prontuario.dadosAdicionais,
                              ativoPront:   	 prontuario.ativoPront
                    })
    data = this.httpClient.post<Prontuario>(this.url+'mantemProntuarioTeste.php', postData);
    return data.map(res=>res.json());
  }

  /************************************* CRUD INFORME *************************************/

  getInforme(): Observable<Informe[]>{
    return this.httpClient.get<Informe[]>(this.url+'dadosInformeTeste.php').pipe(retry(2), catchError(this.handleError));
  }

  mantemInforme(prontuario: Prontuario, acao: string):Observable<Informe>{
    let data:Observable<any>;
    let postData = JSON.stringify({
                              acao:               acao,
                              idProntInf:        +prontuario.idPront,
                              numProntPacInf:     prontuario.numProntPac,
                              idPacienteInf:     +prontuario.idPaciente,
                              idadeInf:          +prontuario.idade,
                              pesoInf:           +prontuario.peso,
                              alturaInf:         +prontuario.altura,
                              dtInternacaoInf:    prontuario.dtInternacao,
                              crmRespInf:         prontuario.crmResp,
                              ufCrmRespInf:       prontuario.ufCrmResp,
                              idMedRespInf:      +prontuario.idMedResp,
                              dtProntuarioInf:    prontuario.dtProntuario,
                              hrProntuarioInf:    prontuario.hrProntuario,
                              dtUltimaVisitaInf:  prontuario.dtUltimaVisita,
                              hrUltimaVisitaInf:  prontuario.hrUltimaVisita,
                              temperaturaInf:    +prontuario.temperatura,
                              pressaoSistInf:    +prontuario.pressaoSist,
                              pressaoDiastInf:   +prontuario.pressaoDiast,
                              batimentosCardInf: +prontuario.batimentosCard,
                              estadoSaudeInf:     prontuario.estadoSaude,
                              examesSolicitInf:   prontuario.examesSolicit,
                              remediosMinistrInf: prontuario.remediosMinistr,
                              previsaoAltaInf:    prontuario.previsaoAlta,
                              dtPrevisaoAltaInf:  prontuario.dtPrevisaoAlta,
                              altaInf:            prontuario.alta,
                              dtAltaInf:          prontuario.dtAlta,
                              crmRespInfoInf:     prontuario.crmRespInfo,
                              ufCrmRespInfoInf:   prontuario.ufCrmRespInfo,
                              idMedRespInfoInf:  +prontuario.idMedRespInfo,
                              dadosAdicionaisInf: prontuario.dadosAdicionais,
                              ativoInf:   	      prontuario.ativoPront      
                    })
    data = this.httpClient.post<Informe>(this.url+'mantemInformeTeste.php', postData);
    return data.map(res=>res.json());
  }

  /************************************* RETORNO DE ERRO *************************************/

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
