import React from 'react'

export const Cart = (props) => {

    const {cartItems} = props;
    
  return (
      <>
    <div> Carrito  </div>
    <div> {cartItems.length === 0 && <div> Aqui productos</div>} </div>

    </>
  )
}

