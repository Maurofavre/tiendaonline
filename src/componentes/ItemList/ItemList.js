
import { useEffect } from "react"
import { useState } from "react"
import {ItemCard} from '../ItemCard/ItemCard'
import data from '../Data/Data'

const productos = data;


export const ItemListNew = (props) =>{
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
        <div style={{textAlign:'center'}}>
            {loading && <p>LOADING...</p> }
            {products.map(product => <ItemCard title={product.title} sub={product.sub} price={product.price} onAddCard={(evento) => console.log(evento)}/>)}
        </div>
    )
}