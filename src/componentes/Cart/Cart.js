import React from 'react' 
import { CartContext } from '../../Context'
import { useContext } from 'react'


export const Cart = () => {
const {items, addItem} = useContext(CartContext)

  // asi se trae los datos definidos en el contex ( useContext)
//  const {items, addItem} = useContext(CartContext);
    
  return (
  
    <div>
  {

items.map((item)=> (
         
  <table class="table">
  <thead>
    <tr>
      <th scope="col">CANTIDAD</th> 
      <th scope="col">PRODUCTO</th>
      <th scope="col">PRODUCTO</th>
      <th scope="col">TOTAL</th>
    </tr>
  </thead>
  <tbody>
          <tr>
            <th scope="row"> {item.count} </th>
            <td> {item.title} </td>
            <td> <img src={item.pictureUrl} style= {{width: 150}} alt="imagen" />  </td>
            
            <td> {item.price} </td>
          </tr>
  
  </tbody>
</table>
         
        
))

  }
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