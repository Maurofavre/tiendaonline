import { ItemDetail } from '../ItemDetail/ItemDetail'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'




 
 export const ItemDetailContainer = () => {

const [item, setItems] =  useState([])
const [loading, setLoading ] = useState (true)
const params = useParams()

useEffect(() => {
    setTimeout(()=>{ 
        fetch(`https://api.mercadolibre.com/items/${params.id}`)
        .then((response) => response.json())
        .then(respJSON => {setItems(respJSON); setLoading(false)})
    
    }, 2000)
}, [params.id])
     
    return(
        <>   

            {
                loading 
                ? 
                <p>Cargando...</p>
                :
                <div>
                    <ItemDetail item = {item}/>
               </div>
                
            }


         
            
        </>
     )
}