import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListNew} from './componentes/ItemList/ItemList'
import NavBar from './componentes/NavBar/NavBar'
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./componentes/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <div className='App'> 
      <NavBar />
      <ItemListContainer greetings = "Bienvenidos a mi Ecommerce "/>
      <ItemDetailContainer/>
      </div>
    </>
  );
}

export default App;
