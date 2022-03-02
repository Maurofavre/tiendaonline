import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar'
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./componentes/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { Home } from "./componentes/Home/Home";
import { ItemDetail } from "./componentes/ItemDetail/ItemDetail";
import {Cart} from "./componentes/Cart/Cart";
import { useState } from "react";
import { CartProvider } from "./Context";




function App() {

const [ cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
       <CartProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/items/" element={<ItemListContainer/>} />
      <Route path="/lista-productos" element={<ItemDetail/>} />
      <Route path="/items/:id" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<Cart cartItems={cartItems} />} />
    </Routes>
    </CartProvider>

  </BrowserRouter>
);
}

export default App;



