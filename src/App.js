import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar'
import {ItemDetailContainer} from "./componentes/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { Home } from "./componentes/Home/Home";
import {Cart} from "./componentes/Cart/Cart";
import { CartProvider } from "./Context";
import {Category} from "./views/Category"



function App() {



  return (
    <>
    <CartProvider>
      <BrowserRouter>
      <NavBar/>
        
          <Routes>
            
            <Route path="/" element={<Home/>} />
            <Route path="/items/:id" element={<ItemDetailContainer/>} />
            <Route exact path='category/:categoryId' element={<Category/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/contexto" element={<CartProvider/>} />
          
          </Routes>

    </BrowserRouter>
  </CartProvider>
  </>
);
}

export default App;


