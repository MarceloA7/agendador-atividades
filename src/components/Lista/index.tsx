import { Atividade } from "../../types/atividade"
import Item from "./Item";
import ListaStyles from "./ListaStyles.module.scss"

interface Props {
    atividades:Array<Atividade>,
    selecionarAtividade:(atividade:Atividade) => void
}


const Lista = ({atividades, selecionarAtividade}:Props) => {
    return(
        <>
            <ul className={ListaStyles.Lista}>
                <h1>Lista de Atividades</h1>
                <span></span>
                {atividades.map((atividade, index)=>{
                    return(<Item key={index} atividade={atividade} selecionarAtividade={selecionarAtividade}/>);
                })}
            </ul>
        </>
    )
}

export default Lista