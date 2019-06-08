import { Cliente } from "../../cliente/model/cliente";

export class Locacao  {
    locacaoId: number;
    cliente: Cliente;
    observacao: string;
    valorLocacao: string;
    locacao: Date;
    devolucao: Date;
}
