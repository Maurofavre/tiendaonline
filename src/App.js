import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListNew} from './components/ItemList/ItemList'
import NavbarComp from './components/NavBar/NavBar';
import NavBarComp from './componentes/NavBar/NavBarComp';
import React from 'react';
import carro from './assets/carro.png';
function App() {
  return (
    <>
      <div className='App'> 
      <NavbarComp />
       <ItemListNew />      
      </div>
    </>
  );
}

export default App;


