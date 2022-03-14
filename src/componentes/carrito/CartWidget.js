import logo from '../../assets/cart.png';
import "./CartWidget.css"
import React from 'react';
import { CartContext} from '../../Context';
import { useContext } from 'react';



export const CartWidget = () =>{
    
    const {items} = useContext(CartContext) 
    let itemsInCart = 0; 

    items.map((item)=> {
        itemsInCart = itemsInCart + item.count; 
    })
    
    
    return(
        <div>
            <img className='carrito' src={logo} width="30px" alt="logo"></img>
            <span className='spancart'> {itemsInCart} </span>
        </div>
    )
}

































// import logo from '../../assets/cart.png';
// import "./CartWidget.css"
// import React from 'react';
// import { CartContext} from '../../Context';
// import { useContext } from 'react';



// export const CartWidget = () =>{
    
//     const {cartCount} = useContext(CartContext) 
    
//     return(
//         <div>
//             <img className='carrito' src={logo} width="30px" alt="logo"></img>
//             <span className='spancart'> {cartCount} </span>
//         </div>
//     )
// }