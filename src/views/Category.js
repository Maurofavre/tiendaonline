import React from 'react'
import { useParams } from 'react-router-dom'
import { ItemListContainer } from '../componentes/ItemListContainer/ItemListContainer'

export const Category = () => {

    const {categoryId, categoryName} = useParams()

  return (
    <div className='container'>
        <div className='contain'>
            <ItemListContainer categoryId={categoryId} categoryName={categoryName}/>
        </div>
    </div>
  )
}