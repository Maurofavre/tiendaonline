import {ItemCount}  from "../ItemCount/ItemCount"
import {ItemList} from "../ItemList/ItemList"

export const ItemListContainer = (props) =>{

    const {greetings} = props

        return( 
            <div>
                 <h1 style={{textAlign:'center'}}>{greetings}</h1> 
                 <ItemList/>
                
            </div>
        ) 
         }  

         