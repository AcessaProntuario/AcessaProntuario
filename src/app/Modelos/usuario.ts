export interface Usuario{
    id: number;
    prontuario?: string;
    nome: string;
    sobrenome: string;
    dtNasc?: string;
    login: string;
    senha: string;
    tipo: string;
}