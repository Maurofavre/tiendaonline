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
         
         
         
         <center> <div  key={item.id} className='row justify-content-center'>

          <h3>{item.name}</h3>
          <p>Total=$ {item.price} x {item.count} </p>
          <h5> Cantidad= {item.count}</h5>
          <img src={item.thumbnail} alt="foto" style={{ width: 200 }} />


          </div></center>
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