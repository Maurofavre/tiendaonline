import '../ItemListContainer/ItemListContainer.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList' 
import { collection, doc, query, where, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebases';
import { useParams } from 'react-router-dom';
// import { Spinner } from 'react-bootstrap';


export const ItemListContainer = ({}) =>{
  
    const [items, setItems] = useState([]);
//  const [load, setLoad] = useState (true)
    const {categoryId} = useParams() 


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
  
    const getDataCategory_query = async()=>{
        try{
            const q = query(collection(db, 'items'), where('category', '===', 'categoryId'));
            const querySnapShot = await getDocs(q)
             
            setItems(querySnapShot.docs.map(doc=> doc = {id: doc.id, ...doc.data()})) 

            } catch (error) {
                console.warn("error", error);
            } 
    }

    useEffect(()=>{
        categoryId ?
            getDataCategory_query() :
            getData()
    }, [categoryId])
    
 console.log('items: ', items);
    




  return(
    <>  
    <div style={{textAlign: 'center'}}>             
       <div className="container">
            <div className="row">
                    <ItemList items={items}/>
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