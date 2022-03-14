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
import {Category} from "./views/Category"



export function App() {



  return (
    <CartProvider>
      <BrowserRouter>
      
         <NavBar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/lista-productos" element={<ItemDetail/>} />
        <Route exact path='category/:categoryId/categoryName' element={<Category/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>
  </CartProvider>
);
}

export default App;


