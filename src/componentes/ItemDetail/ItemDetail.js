import ItemCount from "../ItemCount/ItemCount";

export const ItemDetail = ({id, stock, title, img, price}) => {
    

    return (
            <>            
    <div key={id}  className="card" style= {{width: "18rem", alignItems: "center", margin:"20px"}}>
                   <img className="card-img-top" src= {img} alt="image"/>
          <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                   <p className="card-text">  Precio:${price} </p>
                  <ItemCount stock={5} initial={1}/>
        </div>
    </div>
               
            </>
        )
    }