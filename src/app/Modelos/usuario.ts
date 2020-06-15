export interface Usuario{
    idTipoUsu:  number;
    login:      string;
    senha:      string;
    tipo:       string;
    ativo:      string;
    nome:       string;
    sobrenome:  string;
    idAdmin?:   number;
    idPac?:     number;
    idRecep?:   number;
    idMed?:     number;
}