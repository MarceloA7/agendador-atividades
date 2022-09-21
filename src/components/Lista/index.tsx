import { Atividade } from "../../types/atividade"
import Item from "./Item";
import ListaStyles from "./ListaStyles.module.scss"

interface Props {
    atividades:Array<Atividade>, 
    selecionado:Atividade | undefined,
    setSelecionado:React.Dispatch<React.SetStateAction<Atividade | undefined>>
}


const Lista = ({atividades, selecionado, setSelecionado}:Props) => {
    return(

        <ul className={ListaStyles.Lista}>
            {atividades.map((atividade, index)=>{
                return(<Item key={index} atividade={atividade} selecionado={selecionado} setSelecionado={setSelecionado}/>);
            })}
        </ul>
    )
}

export default Lista