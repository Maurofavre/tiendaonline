import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'
import data from '../Data/Data'
import '../ItemDetail/ItemDetail.css'
import { useState } from 'react'
import React from 'react'
import { useCartContext } from '../../Context'






 export const ItemDetail = (props) =>{

    

    const proid = useParams();
    const proDetail = data.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    const [item, setItem] = useState([]);
    const [count, setCount] = useState(0);
    const {cartCount, onAdd} = useCartContext()
    
    
    const handlerAdd = () => {
      setCount(count + 1);
    };
  
    const handlerSub = () => {
      setCount(count - 1);
    };
  
     return(
        <>
        <div className='container'>
            <div className='row' style={{textAlign:'justify'}}>
                <div className='col-md-6' style={{marginTop: '1rem'}}> 
                    <img className="card-img-top" src={product.pictureUrl} alt="Imagen"></img> 
                </div>
                <div className='col-md-6' style={{marginTop: '1rem', marginBottom: '1.5rem'}}>
                   <u><center><b> <h5 className="card-title"> {product.title}</h5></b></center></u>
                    <p><b>Detalle del Producto:</b> {product.description}</p>
                    <h3>Precio: ${product.price}</h3>
                    <p>Stock: {product.stock}</p>
                     <ItemCount 
                     stock={product.stock} 
                     initial={1}
                     count={count}
                     sub={handlerSub}
                     add={handlerAdd}
                    
                     />
                     <button className="btn btn-primary" onClick={ ()=> onAdd (item, count) }> Agregar </button>
                </div>
            </div>
            </div>
        </>
     )
}