import { Atividade } from "../../../types/atividade";
import Botao from "../../Botao";
import RelogioStyles from "./RelogioStyles.module.scss"
interface Props {
    label:string
    selecionado:Atividade|undefined,
    setSelecionado:React.Dispatch<React.SetStateAction<Atividade | undefined>>
}
const Relogio = ({label, selecionado, setSelecionado}:Props) =>{
    return (
        <>
            <div className={RelogioStyles.label}>
                <label>{label}</label>
            </div>
            <div className={RelogioStyles.relogio}>
                <span>{selecionado?.tempo}</span>
            </div>
            <Botao>Começar</Botao>            
        </>

    );
}

export default Relogio