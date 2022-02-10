import './Alerta.css'; 

export const Alerta = ({title, type, button}) =>{
    return( 
        <div className="alert-container" style={{backgroundColor: type ? type : 
        'white'}}>
           
            <h1>{title}</h1>
            <button className='boton'> Presione aqui</button>
        
         </div>
    )
} 

