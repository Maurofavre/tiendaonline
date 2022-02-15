import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListNew} from './componentes/ItemList/ItemList'
import NavbarComp from './componentes/NavBar/NavBar';

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
