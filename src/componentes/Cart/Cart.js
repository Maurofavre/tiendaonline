import React from 'react' 
import { CartContext } from '../../Context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {collection, Timestamp, addDoc, updateDoc} from "firebase/firestore";
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

      }
      console.log('order', order);
      order.date = Timestamp.fromDate(new Date ());


      const queryCollection = collection(db, 'orders');
      console.log('order', order);
      
      const docRef = await addDoc(queryCollection, order);
      console.log('docref', docRef.id);

    }

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

    <div>
   
     <table class="table">
              <thead>
                  <tr>
                    <th scope="col">CANTIDAD</th> 
                    <th scope="col">PRODUCTO</th>
                    <th scope="col">PRODUCTO</th>
                    <th scope="col"> PRECIO</th>
                  </tr>
              </thead>
              <tbody>
                
       {

         items.map((item)=> (
            
               <tr>
                    <th scope="row"> {item.count} </th>
                    <td> {item.title} </td>
                    <td> <img src={item.pictureUrl} style= {{width: 150}} alt="imagen" /> </td>
                    
                    <td> {item.price} </td>

                    <button className='btn btn-outline-danger' onClick={() => removeItem(item.id)}>Eliminar</button>
          
              </tr>
      

            
            
            ))
    
       }
         </tbody>
    </table> 
      
      {/* <button onClick={updateOrder}> prueba </button> */}
      
       <div className="d-flex m-1 pt-1">
          <h5 style={{marginLeft:'1100px'}}>{`Total: $ ${items.reduce((acum, item) => acum + (item.price * item.count), 0)}`}</h5>
       </div> 
      <center><Link to="/" style={{marginLeft:'10px'}} type="button" className="btn btn-outline-primary">Seguir comprando</Link> </center>
           <center><button className='btn btn-danger m-2' onClick={ () => clearItems()}>Limpiar Carrito </button></center>

 

            <form onSubmit={sendOrder}>
                    <div className="mb-3 mt-4">
                        <label>Nombre y Apellido</label>
                        <input type="text" className="form-control"/>
                      </div> 
                      
                      <div className="mb-3">
                        <label>Numero de Contacto</label>
                        <input type="number" className="form-control"/>
                      </div> 
                      <div className="mb-3">
                       <label>Correo </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          <div id="emailHelp" className="form-text">Coloca tu email para recibir mas informacion</div>
                      </div>
                      <div style={{textAlign:'center', padding:'10px'}}>
                      <button type="submit" className="btn btn-danger">Enviar Informacion</button>
                      </div>
                  

          
          </form> 
          
 
 

  

    </div>

 

  
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