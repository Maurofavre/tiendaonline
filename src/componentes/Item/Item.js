import ItemCount from '../ItemCount/ItemCount'

export const Item = ({products}) => {
    const onAdd = () => {
    }

    return (
        <>
            {
                products.map(p =>
                    <div key={p.id} sm={6} md={4} lg={4} xxl={3}>
                        <div className='itemContainer'>
                            <div className='itemContainer__img'></div>
                            <div className='itemContainer__info'>
                                <span className='item__price'>{p.price}</span>
                                <div to={p.id}>'
                                <h2>{p.title}</h2>
                                </div>
                                <ItemCount initial={1} stock={3} onAdd={onAdd}/>
                            </div>
                        </div>
                    </div>)
            }
        </>
    )
}