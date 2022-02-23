import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar'
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./componentes/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { Home } from "./componentes/Home/Home";
import { ItemDetail } from "./componentes/ItemDetail/ItemDetail";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/items/" element={<ItemListContainer/>} />
      <Route path="/lista-productos" element={<ItemDetail/>} />
      <Route path="/items/:id" element={<ItemDetailContainer/>} />
    </Routes>
  </BrowserRouter>
);
}

export default App;



