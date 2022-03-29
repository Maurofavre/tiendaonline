import React, { useState, useContext }  from 'react' 
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.css'  

    export const ItemDetail = ({item}) =>{

    const [add, setAdd] = useState(false)

    const {addItem} = useContext(CartContext)
  
     return(
        <>
            <div className='container'>
            <div className='row' style={{textAlign:'justify', margin:'2rem'}}>
                <div className='col-md-6' style={{marginTop: '1rem'}}> 
                <h2 className="card-title m-3">{item.title}</h2> 
                <h5> {item.description} </h5>
                    <img className="card-img-top" src={item.pictureUrl} alt="imagen"/> 
                </div>
                
                <div className='col-md-6' style={{textAlign:'center', marginBottom:'1rem'}}>
                          
                    <h3 className='m-3'>Precio: ${item.price}</h3>
                       {
                           add  ?
                                <div>Añadido!</div>
                                :
                                <ItemCount item={item} stock={5} initial={0} addItem={addItem}/>   
                       }
                        <br/>
                        <Link to="/cart" style={{margin:'10px'}} type="button" className="btn btn-outline-primary">
                            Finalizar compra
                        </Link>
                    </div>
                    
                </div>
            </div>  
        </>
     )
}