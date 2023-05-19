import { useState } from 'react';
import Banner from './components/banner';
import Formulario from './components/formulario';
import Time from './components/time';



function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaborador)
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Equipe 1"/>
      <Time nome="Equipe 2"/>
      <Time nome="Equipe 3"/>
      <Time nome="Equipe 4"/>
    </div>
  );
}

export default App;
