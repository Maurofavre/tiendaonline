import React, {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) =>{

    // const inicial = parseInt(initial);
    const [count, setCount] = useState(initial);

    const sumar = () => {
        if (count < stock){
        setCount(count+1);
    }   else{
        alert('No tenemos mas stock')
        }
    }

    const restar = () => {
        if (count > initial){
        setCount(count-1);
        }
    }

    // const addCart = () => {
    //     onAdd(count)
    // }

    return(
       <>
            <p>Cantidad: {count}</p>
                <button className="btn btn-secondary" style={{margin:"5px"}} onClick={restar}>-</button>
                <button className="btn btn-primary" >Comprar</button>
                <button className="btn btn-secondary" style={{margin:"5px"}} onClick={sumar}>+</button>

        </>
    )
}
export default ItemCount
