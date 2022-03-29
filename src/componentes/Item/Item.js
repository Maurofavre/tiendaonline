 import React from "react"
 import { Link } from "react-router-dom"

 export const Item = ({item}) => {
    

 return (
         <>            
 <div className="card" style= {{width: "18rem", alignItems: "center", margin:"20px"}}>
             <img className="card-img-top" src= {item.pictureUrl} alt="imagen"/> 
               
       <div className="card-body">
                 <h5 className="card-title">{item.title}</h5>
                <p className="card-text">  Precio:$ {item.price} </p>
                <Link to={`/items/${item.id}`}>
               <button className="btn btn-primary">Informacion</button>
               </Link>
     </div>
 </div>
           
         </>
     )
 }














 