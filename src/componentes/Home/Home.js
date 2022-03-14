import React from 'react'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'

export const Home = () => {

    const text = 'TOLEDO MAESTRO'

  return (
    <>
     <h1 style={{margin: 15, textAlign: 'center', fontFamily:''}}>{text}</h1>
        <div className='container'>
            <div className='contain'>
              <ItemListContainer categoryId="MLA1051" categoryName="CELULARES"/>
              <ItemListContainer categoryId="MLA5726" categoryName="HOGAR"/>
              <ItemListContainer categoryId="MLA1276" categoryName="DEPORTES"/>
            </div>
        </div>
    </>
  )
}
























// import React from 'react'
// import { ItemListContainer } from '../ItemListContainer/ItemListContainer'

// export const Home = () => {

//   return (
//     <>
//      <h1 style={{margin: 15, textAlign: 'center'}}>Lambertucci</h1>
//         <div className='container'>
//             <div className='contain'>
//                 <ItemListContainer categoryId="MLA1071" categoryName="Animales y Mascotas"/>
//                 <ItemListContainer categoryId="MLA5725" categoryName="Automovil"/>
//                 <ItemListContainer categoryId="MLA1367" categoryName="Antiguedades"/>
                
//                 <div style={{textaling:"center"}}>
//                 <p></p>Desarrollado por <b>Mauro Favre</b>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }