import { useState } from 'react'
import { Atividade } from '../../types/atividade'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import CampoTime from '../CampoTime'
import FormStyles from './FormStyles.module.scss'

const Formulario = ({setAtividades}:{setAtividades:React.Dispatch<React.SetStateAction<Atividade[]>>}) => {

    const [nome, setNome] = useState("");
    const [tempo, setTempo] = useState("");

    function adicionarAtividade(evento:React.FormEvent) {
        evento.preventDefault();
        setAtividades(atividadesAntigas => [...atividadesAntigas,{nome, tempo, selecionado:false}]);
        setNome("");
        setTempo("");
    }

    return(
        <form className={FormStyles.formulario} onSubmit={adicionarAtividade}>
            <CampoTexto label="Informe a atividade:" setNome={setNome} value={nome}/>
            <CampoTime label="Tempo:" setTempo={setTempo} value={tempo}/>
            <Botao>Adicionar</Botao>
        </form>
    )
}

export default Formulario