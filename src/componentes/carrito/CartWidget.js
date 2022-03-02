import logo from '../../assets/cart.png';
import "./CartWidget.css"
import React from 'react';
import { CartContext} from '../../Context';
import { useContext } from 'react';



export const CartWidget = () =>{
    
    const {cartCount} = useContext(CartContext) 
    
    return(
        <div>
            <img className='carrito' src={logo} width="30px" alt="logo"></img>
            <span className='spancart'> {cartCount} </span>
        </div>
    )
}