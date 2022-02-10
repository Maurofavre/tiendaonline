import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './componentes/NavBar/NavBarComp';
import {Alerta} from './componentes/Alerta/Alerta';
import React from 'react';
import carro from './assets/carro.png';

function App() {
  const danger ="red"
  const good ="green"
  return (
    <React.Fragment>
    <div className="App">
      <NavBarComp/>
      <center><Alerta title="Bienvenidos a mi Tienda Onlines" type={danger} /></center>
      <center> <Alerta title="Mensaje de alerta" type={good} /></center>
    </div>
    
    </React.Fragment>
  );
}

export default App;
