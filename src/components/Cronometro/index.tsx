import { useEffect, useState } from "react"
import { Atividade } from "../../types/atividade"
import { Tempo } from "../../utils/Tempo"
import Botao from "../Botao"
import CronometroStyles from "./CronometroStyle.module.scss"
import Relogio from "./Relogio"

interface Props {
    selecionado:Atividade | undefined
}

const Cronometro = ({selecionado}:Props) => {

    const [novoTempo, setNovoTempo] = useState<number>(0)

    useEffect(() => {
        setNovoTempo(Tempo.tempoTotal(selecionado?.tempo))
    },[selecionado])

    function comecar () {
        setTimeout(() => {
            setNovoTempo((valorAntigo) => valorAntigo - 1)
            comecar();
        }, 1000);
    }

    return (
        <div className={CronometroStyles.cronometro}>
            <Relogio label="Tempo" valorRelogio={novoTempo}/>
            <Botao clicado={comecar}>Começar</Botao>
        </div>
    )
}

export default Cronometro