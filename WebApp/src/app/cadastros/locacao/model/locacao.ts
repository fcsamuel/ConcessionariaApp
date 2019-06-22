import { Cliente } from "../../cliente/model/cliente";
import { Veiculo } from "../../veiculo/model/veiculo";

export class Locacao  {
    locacaoid: number;
    cliente: Cliente;
    veiculo: Veiculo;
    observacao: string;
    valorlocacao: string;
    dtLocacao: Date;
    dtDevolucao: Date;
}
