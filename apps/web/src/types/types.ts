export interface Telefone {
    id: number;
    numero: string;
    ddd: string;
  }
  
export interface Endereco {
    id?: number;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    codigoPostal: string;
    informacoesAdicionais?: string;
  }
  
export interface Client {
    id: number;
    nome: string;
    nomeSocial: string;
    email: string | null;
    endereco: Endereco;
    telefones: Telefone[];
  }