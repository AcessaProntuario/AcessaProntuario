export interface Informe{
    idInf:                 number;
    idProntInf:            number;
    numProntPacInf:        string;
    idPacienteInf:         number;
    idadeInf?:             number;
    pesoInf?:              number;
    alturaInf?:            number;
    dtInternacaoInf:       string;
    crmRespInf:            string;
    ufCrmRespInf:          string;
    idMedRespInf:          number;
    dtProntuarioInf:       string;
    hrProntuarioInf:       string;
    dtUltimaVisitaInf?:    string;
    hrUltimaVisitaInf?:    string;
    temperaturaInf?:       number;
    pressaoSistInf?:       number;
    pressaoDiastInf?:      number;
    batimentosCardInf?:    number;
    estadoSaudeInf?:       string;
    examesSolicitInf?:     string; //enviar em formato JSON
    remediosMinistrInf?:   string; //enviar em formato JSON
    previsaoAltaInf:       string;
    dtPrevisaoAltaInf?:    string;
    altaInf:               string;
    dtAltaInf?:            string;
    crmRespInfoInf:        string;
    ufCrmRespInfoInf:      string;
    idMedRespInfoInf:      number;
    dadosAdicionaisInf?:   string;
    ativoInf:              string;
}