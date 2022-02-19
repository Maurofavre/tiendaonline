import { useEffect } from "react"
import { useState } from "react"
import { Item } from '../Item/Item'
import data from '../Data/Data'
import { ItemDetail } from "../ItemDetail/ItemDetail";
 
const productos = data;

export const ItemList = (props) =>{ 
       
        const [products, setProducts] = useState([])
        const [loading, setLoading] = useState()
       
    
        useEffect(() => {
            setLoading(true)
            const promise = getItems()
            promise.then(json => { 
                setLoading(false)
                setProducts(json) 
            })
        }, [])
    
     
        const getItems = () => {
    
            const promise = new Promise((resolve, reject) => {
             
                setTimeout(() => {
                    resolve(productos)
                  
                }, 2000)
            })
    
            return promise
        }

    return(
        
        <div className='row justify-content-center' style={{textAlign:'center'}}>
           {loading && <p>CARGANDO PRODUCTOS</p> }
            {products.map(product => 
            <Item title={product.title} sub={product.sub}  price={product.price} img={product.pictureUrl} onAddCard={(evento) => console.log(evento)}/>)}
        </div>
    )
}