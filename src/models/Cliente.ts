import Conteiner from "./Conteiner";

interface Cliente{
    id: number;
    cliente: string;
    conteiner?: Conteiner|null
}
export default Cliente;