 import React from "react"
 import { Link } from "react-router-dom"

 export const Item = ({item}) => {
    

 return (
         <>            
 <div className="card" style= {{width: "18rem", alignItems: "center", margin:"20px"}}>
             <img className="card-img-top" style={{width: '35vh', height: '140px'}}  src= {item.pictureUrl} alt="imagen"/> 
               
       <div className="card-body">
                 
       <u>   <h5 className="card-title">{item.title}</h5></u>
              
                <p className="card-text">  Precio:$ {item.price} </p>
                <Link to={`/items/${item.id}`}>
               <button className="btn btn-primary">Informacion</button>
               </Link>
     </div>
 </div>
           
         </>
     )
 }














 