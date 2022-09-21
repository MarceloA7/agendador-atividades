import AppStyles from "./AppStyles.module.scss"
import Formulario from "../components/Formulario";
import Cronometro from "../components/Cronometro";
import Lista from "../components/Lista";
import React, { useState } from 'react';
import { Atividade } from "../types/atividade";

function App() {

  const [atividades, setAtividades] = useState<Array<Atividade>>([]);
  const [selecionado, setSelecionado] = useState<Atividade>()

  return (
    <div className={AppStyles.main}>
      <div className={AppStyles.sidebarEsquerda}>
        <Formulario setAtividades={setAtividades}/>
        <Cronometro selecionado={selecionado}/>
      </div>
      <div className={AppStyles.sideBarDireita}>
        <Lista atividades={atividades} selecionado={selecionado} setSelecionado={setSelecionado}/>
      </div>
    </div>
  );
}

export default App;
