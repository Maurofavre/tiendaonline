import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import data from '../Data/Data'
import '../ItemDetail/ItemDetail.css'

 export const ItemDetail = (props) =>{

    // const {itemName} = useParams();
    // console.log('itemName', itemName);

    const proid = useParams();
    const proDetail = data.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

     return(
        <>
        <div className='container'>
            <div className='row' style={{textAlign:'justify'}}>
                <div className='col-md-6' style={{marginTop: '1rem'}}> 
                    <img className="card-img-top" src={product.pictureUrl} alt="Imagen"></img> 
                </div>
                <div className='col-md-6' style={{marginTop: '1rem', marginBottom: '1.5rem'}}>
                    <h5 className="card-title"> {product.title}</h5>
                    <p>Detalle del Producto: {product.description}</p>
                    <h3>Precio: ${product.price}</h3>
                    <p>Stock: {product.stock}</p>
                    <ItemCount stock={product.stock} initial={1} />
                </div>
            </div>
            </div>
        </>
     )
}