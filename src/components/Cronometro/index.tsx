import { Atividade } from "../../types/atividade"
import CronometroStyles from "./CronometroStyle.module.scss"
import Relogio from "./Relogio"

interface Props {
    selecionado:Atividade | undefined,
    setSelecionado:React.Dispatch<React.SetStateAction<Atividade | undefined>>
}

const Cronometro = ({selecionado, setSelecionado}:Props) => {
    return (
        <div className={CronometroStyles.cronometro}>
            <Relogio label="Tempo" selecionado={selecionado} setSelecionado={setSelecionado}/>
        </div>
    )
}

export default Cronometro