import React, {useState} from "react";

const ItemCount = ({count,add,sub}) =>{

    // const [count, setCount] = useState(initial);

    // const sumar = () => {
    //     if (count < stock){
    //     setCount(count + 1);
    // }   else{
    //     alert('No tenemos mas stock')
    //     }
    // }

    // const restar = () => {
    //     if (count > initial){
    //     setCount(count-1);
    //     }
    // }
   
    return(
       <>
            <p>Cantidad: {count}</p>
            
                <button className="btn btn-secondary" style={{margin:"5px"}} onClick={sub}>-</button>
                {/* <button className="btn btn-primary" > Comprar</button> */}
                <button className="btn btn-secondary" style={{margin:"5px"}} onClick={add}>+</button>

        </>
    )
}
export default ItemCount
