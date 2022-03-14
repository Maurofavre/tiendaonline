import React, { useContext } from 'react';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom" 
import { CartContext } from '../../Context';


export const ItemDetail = ({ item }) => {
  
  
const [add,setAdd] = useState(false)
const {addItem} = useContext(CartContext)


  return (
    <>
    <div className='container'>
      <h3>{item.title}</h3>
      <p>${item.price}</p>

      <img src={item.thumbnail} alt="foto" style={{ width: 200 }} />
     </div>

    <div className='container'>
     
          { add ? 
                <p>Producto añadido al carrito</p>
                  : 
                
                <ItemCount item={item} initial={0} stock={5} addItem={addItem} />
          
          }
          <div>
              <Link to="/cart" type= "button" className="btn btn-success"> FINALIZAR COMPRA </Link>
          </div>
    </div>
    </>
  );
};














