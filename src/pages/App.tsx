import AppStyles from "./AppStyles.module.scss"
import Formulario from "../components/Formulario";
import Cronometro from "../components/Cronometro";
import Lista from "../components/Lista";
import React, { useState } from 'react';
import { Atividade } from "../types/atividade";

function App() {

  const [atividades, setAtividades] = useState<Array<Atividade>>([]);
  const [selecionado, setSelecionado] = useState<Atividade>()

  function selecionarAtividade (atividadeSeleciona:Atividade) {
      setSelecionado(atividadeSeleciona);
      setAtividades(atividadesAntigas => atividadesAntigas.map(atividade=>{
          return {
            ...atividade,
            selecionado: atividade.id === atividadeSeleciona.id ? true : false
          }
      }))
  }

  function finalizarAtividade (atividadeSelecionada: Atividade) {
      if (atividadeSelecionada) {
        setAtividades((atividadesAntigas) => atividadesAntigas.map(atividade => {
          if(atividadeSelecionada.id === atividade.id){
            return{
              ...atividade,
              selecionado:false,
              completado:true
            }
          }
          return atividade
        }))
        setSelecionado(undefined);
      }

  }

  return (
    <div className={AppStyles.main}>
      <div className={AppStyles.sidebarEsquerda}>
        <Formulario setAtividades={setAtividades}/>
        <Cronometro selecionado={selecionado} finalizarAtividade={finalizarAtividade}/>
      </div>
      <div className={AppStyles.sideBarDireita}>
        <Lista atividades={atividades} selecionarAtividade={selecionarAtividade}/>
      </div>
    </div>
  );
}

export default App;
