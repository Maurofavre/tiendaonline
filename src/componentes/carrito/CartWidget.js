import logo from '../../assets/cart.png';
import "./CartWidget.css"

export const CartWidget = () =>{
    return(
        <div>
            <img src={logo} width="30px" alt="logo"></img>
            <span className='spancart'>1</span>
        </div>
    )
}