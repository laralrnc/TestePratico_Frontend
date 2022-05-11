import Conteiner from "./Conteiner";

interface Deslocamento{
    id: number;
    movimentacao: string;
    dataInicio: string;
    dataFim:string;
    conteiner?: Conteiner|null

}
export default Deslocamento;