import React from 'react';  

const welcome = ({title, number, children}) => {
    return(
        <div>
            <h1> Bienvenidos! {title}!</h1> 
            {children}
        </div>
    )
}
export default welcome; 