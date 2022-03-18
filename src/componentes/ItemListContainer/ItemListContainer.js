import '../ItemListContainer/ItemListContainer.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList' 
import { collection,getDocs } from 'firebase/firestore';
import { db } from '../utils/firebases';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


export const ItemListContainer = ({}) =>{
  
    const [Items, setItems] = useState([]);
    const [load, setLoad] = useState (true)
    const {categoryId} = useParams() 

    // useEffect(() => {
    //   db();
    // }, [categoryId]);
  
    // async function db() {
    //   const call = await fetch(
    //     `https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=8 `
    //   );
    //   const result = await call.json();
    //   setProducst(result.results);
    // }

    const getData = async()=>{
        try{
            const productosCollection = collection(db, 'Items');
            const response = await getDocs(productosCollection);
            const result = response.docs.map(doc=>{return {id: doc.id, ...doc.data()}})
            setItems(result)
            
           

            }  catch (error) {
                console.warn("error", error);
            } 
    }
  


//   const getDataCategory = async(categoryId)=>{
//     try{
//         const productosCollection = collection(db, 'items');
//         const response = await getDocs(productosCollection);
//         const result = response.docs.map(doc=>{return {id: doc.id, ...doc.data()}})
//         setProductos(result.filter(e=>e.categoryId === categoryId)) 

//         } catch (error) {
//             console.warn("error", error);
//         } 
// }

useEffect(()=>{
        getData()
}, [categoryId])

// console.log('productos: ', productos);
    




  return(
    <>  
    <div style={{textAlign: 'center'}}>             
       <div className="container">
            <div className="row">
                    <ItemList items={Items}/>
            </div>
        </div>
    </div>
    </>
)
}






















// import { useEffect } from "react"
// import { useState } from "react"
// import { Link } from "react-router-dom"
// import {Item} from '../Item/Item'
// import data from '../Data/Data'

// const productos = data;

//  export const ItemListContainer = (props) =>{ 

//     const [products, setProducts] = useState([])
//     const [loading, setLoading] = useState()

//     useEffect(() => {
//         setLoading(true)
//         const promise = getItems()
//         promise.then(json => { 
//             setLoading(false)
//             setProducts(json) 
//         })
//     }, [])

//     const getItems = () => {

//         const promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(productos)
//             }, 2000)
//         })
//         return promise
//     }

//     return(
//         <>  
//         <div style={{textAlign: 'center'}}>
//         {loading && <h5 style={{margin:"1rem", padding:"10px"}}>Cargando lista de productos</h5>}
//             <div className="row justify-content-center">
//             {
//                 products.map(product => 
                    
//                         <Item id={product.id} title={product.title} img={product.pictureUrl} 
//                         price={product.price} onAddCard={(e) => console.log(e)}/>
                    
//                 )
//             }
//             </div>
//             </div>  
//         </>
//     )
// }