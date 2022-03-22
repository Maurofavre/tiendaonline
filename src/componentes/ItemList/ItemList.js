import React from 'react'  
import {Item} from '../Item/Item'

export const ItemList = ({ items }) => {

  return (
 <>
 {
   items.map(item =>(
     <Item key={item.id} item={item}/>
   )) 
 }
 
 </>
  );
} 