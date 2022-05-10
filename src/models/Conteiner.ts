import Cliente from "./Cliente";
import Deslocamento from "./Deslocamento";

interface Conteiner{
    id: number;
    codigoConteiner: string;
    tipo: number;
    status:string;
    categoria: string;
    cliente?: Cliente|null
    deslocamento?: Deslocamento|null
}
export default Conteiner;