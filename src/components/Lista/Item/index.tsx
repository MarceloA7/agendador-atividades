import { Atividade } from "../../../types/atividade"
import ItemStyles from "./ItemStyles.module.scss"

interface Props {
    atividade:Atividade,
    selecionarAtividade:(atividade:Atividade) => void
}

const Item = ({atividade, selecionarAtividade}:Props) => {
    return(
        <li className={`${ItemStyles.item} ${atividade.selecionado? ItemStyles.selecionado : ""} ${atividade.completado ? ItemStyles.completado : ""}`} onClick={()=>selecionarAtividade(atividade)}>
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