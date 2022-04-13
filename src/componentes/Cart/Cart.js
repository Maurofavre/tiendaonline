import React, { useState } from 'react' 
import { CartContext } from '../../Context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {collection, Timestamp, addDoc, updateDoc, getFirestore} from "firebase/firestore";
import {db} from  '../utils/firebases';
import { Button } from 'bootstrap';




export const Cart = () => {

const {items, removeItem, clearItems} = useContext(CartContext)


const sendOrder =  async(e) => { 
      e.preventDefault();
      console.log(e.target[0].value)

      let order = { 
        buyer: { 
          name: e.target[0].value,
          phone: e.target[1].value,
          email: e.target[2].value,
        },
        productos: items, 

      } 
      
      order.date = Timestamp.fromDate(new Date ());
      const queryCollection = collection(db, 'orders');
      console.log('order', order);
      
      try{
      const docRef = await addDoc(queryCollection, order);
      console.log('docRef', docRef.id);
    } catch (error) {
      console.log('Error', error);
    }
     

    };

  
  // asi se trae los datos definidos en el contex ( useContext)
//  const {items, addItem} = useContext(CartContext);
    
// const updateOrder = () => { 

//   const queryDoc = doc( db, 'orders','va8FPUT3nkoAaVrH9nKW')
//   await updateDoc(queryDoc, {
//     buyer:{
//       name:"mauro"
//     }
//   })
// }



return (
  <>
  <div className='container'>
    <h4 style={{ marginTop: '1.5rem' }} className="mb-0">Carrito de compras</h4><hr />
    {
      items.length > 0
        ? (
          <div>
            <div className="d-flex justify-content-between"><h5 style={{ margin: '10px' }}>Tienes {items.length} items en el carrito</h5>
            </div>

            <table class="table">
              <thead>
                  <tr>
                    <th scope="col">CANTIDAD</th> 
                    <th scope="col">PRODUCTO</th>
                    <th scope="col">IMAGEN</th>
                    <th scope="col">PRECIO</th>
                  </tr>
              </thead>
              <tbody>
                
       {

         items.map((item)=> (
            
               <tr>
                    <th scope="row"> {item.count} </th>
                    <td> {item.title} </td>
                    <td> <img src={item.pictureUrl} style= {{width: 150}} alt="imagen" /> </td>
                    
                    <td> $ {item.price} </td>

                    <button className='btn btn-outline-danger' onClick={() => removeItem(item.id)}>Eliminar</button>
          
              </tr>
      

            
            
            ))
    
       }
         </tbody>
    </table> 
       <div className="d-flex m-1 pt-1">
          <h5 style={{marginLeft:'800px'}}>{`Total: $ ${items.reduce((acum, item) => acum + (item.price * item.count), 0)}`}</h5>
       </div> 
           
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <button className='btn btn-danger m-2' onClick={() => clearItems()} >Vaciar carrito</button>
              <hr />
        </div>
            <hr/>
          
         <form onSubmit={sendOrder}>
              <div className="mb-3 mt-4">
                  <label>Nombre</label>
                  <input type="text" className="form-control"/>
                </div> 
                
                <div className="mb-3">
                  <label>Telefono</label>
                  <input type="number" className="form-control"/>
                </div> 
                <div className="mb-3">
                  <label>Email </label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">Tus datos son y seguiran siendo privados. </div>
                </div>
                <div style={{textAlign:'center', padding:'10px'}}>
                <button type="submit" className="btn btn-danger">Confirmar Compra</button>
                </div> 
           </form>
              <hr /> 
            </div> 
        )
        :
         <>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <h4>No has agregado productos</h4>
            <Link to="/" style={{ margin: '1rem' }} type="button" className="btn btn-outline-primary">Ir a productos</Link>
          </div>
        </>

    }
  </div>
</>
)
}


// import React from 'react'

// export const Cart = (props) => {

//     const {cartItems} = props;
    
//   return (
//       <>
//     <div> Carrito  </div>
//     <div> {cartItems.length === 0 && <div> Aqui productos</div>} </div>

//     </>
//   )
// }