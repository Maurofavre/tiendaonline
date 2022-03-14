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
  <div key={item.id}>
    <h5> {item.count}</h5>
    <h1>{item.name} </h1>
    <img src={item.thumbnail} alt="foto" style={{ width: 200 }} ></img>
    
  </div>
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