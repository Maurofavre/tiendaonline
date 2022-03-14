import React from 'react'  
import { Link } from 'react-router-dom';

export const ItemList = ({ title, price, thumbnail,id }) => {

  return (
    <div  className="card" style={{width:'18rem', margin:'10px', padding:'2px'}}>
            <img className="card" src={thumbnail} style={{width: 280}} alt="Imagen"></img>

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p> ${price}</p>
                <Link to={`/item/${id}`}>
                <button class="btn btn-primary"> Ver mas </button>
                </Link>
            </div>
        </div>
  );
} 