export interface Prontuario{
    idPront:            number;
    numProntPac:        string;
    idPaciente:         number;
    idade?:             number;
    peso?:              number;
    altura?:            number;
    dtInternacao:       string;
    crmResp:            string;
    ufCrmResp:          string;
    idMedResp:          number;
    dtProntuario:       string;
    hrProntuario:       string;
    dtUltimaVisita?:    string;
    hrUltimaVisita?:    string;
    temperatura?:       number;
    pressaoSist?:       number;
    pressaoDiast?:      number;
    batimentosCard?:    number;
    estadoSaude?:       string;
    examesSolicit?:     string; //enviar em formato JSON
    remediosMinistr?:   string; //enviar em formato JSON
    previsaoAlta:       string;
    dtPrevisaoAlta?:    string;
    alta:               string;
    dtAlta?:            string;
    crmRespInfo:        string;
    ufCrmRespInfo:      string;
    idMedRespInfo:      number;
    dadosAdicionais?:   string;
    ativoPront:         string;
}