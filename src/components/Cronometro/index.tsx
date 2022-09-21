import { useEffect, useState } from "react"
import { Atividade } from "../../types/atividade"
import { Tempo } from "../../utils/Tempo"
import Botao from "../Botao"
import CronometroStyles from "./CronometroStyle.module.scss"
import Relogio from "./Relogio"

interface Props {
    selecionado:Atividade | undefined,
    finalizarAtividade:(atividade:Atividade) => void
}

const Cronometro = ({selecionado, finalizarAtividade}:Props) => {

    const [novoTempo, setNovoTempo] = useState<number>(0)

    useEffect(() => {
        setNovoTempo(Tempo.tempoTotal(selecionado?.tempo))
    },[selecionado])

    function comecar (contador:number) {
        setTimeout(() => {
            if(contador > 0){
                setNovoTempo(contador - 1)
                return comecar(contador - 1);
            }
            if(selecionado) {
                finalizarAtividade(selecionado);
            }

        }, 1000);
    }

    return (
        <div className={CronometroStyles.cronometro}>
            <Relogio label="Tempo" valorRelogio={novoTempo}/>
            <Botao clicado={()=>comecar(novoTempo)}>Começar</Botao>
        </div>
    )
}

export default Cronometro