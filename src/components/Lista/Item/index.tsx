import { Atividade } from "../../../types/atividade"
import ItemStyles from "./ItemStyles.module.scss"

interface Props {
    atividade:Atividade,
    selecionado:Atividade | undefined,
    setSelecionado:React.Dispatch<React.SetStateAction<Atividade | undefined>>
}

const Item = ({atividade, selecionado, setSelecionado}:Props) => {
    function selecionar(){
        setSelecionado(atividade)
    }
    return(
        <li className={`${ItemStyles.item} ${selecionado?.nome === atividade.nome? ItemStyles.selecionado : ""}`} onClick={selecionar}>
            <div className={ItemStyles.cabecalho}>
                <h2>{atividade.nome}</h2>
            </div>
            <div className={ItemStyles.rodape}>
                <span>{atividade.tempo}</span>
            </div>
        </li>
    )
}

export default Item