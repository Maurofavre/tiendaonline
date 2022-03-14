import ReplaceImg from '../../assets/logo.png'
import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {CartWidget} from '../carrito/CartWidget'
import "./Estilo.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context';
import { useContext } from 'react';


export default class NavbarComp extends Component {

//  const {cartCount} = useContext(CartContext) 

    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark"
                sticky='top' expand='lg'>
                    <Navbar.Brand>
                        
                        <img src={ReplaceImg} className="ReplaceImg"/>
                    </Navbar.Brand>

                    
                    
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                    <Nav  style={{alignItems:'center'}}>
                        <NavDropdown title='Productos'>
                        <NavDropdown.Item href='equipos/machimbres'>Machimbres</NavDropdown.Item>
                        <NavDropdown.Item href='equipos/vigas'>VIGAS</NavDropdown.Item>
                        <NavDropdown.Item href='equipos/herrajes'>HERRAJES</NavDropdown.Item>
                        
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href='equipos/promo'>Promociones</NavDropdown.Item>
                        </NavDropdown>

                        <Link style={{color:'white', fontSize:18, padding:5}} to="/">Home</Link>

                        <Link style={{color:'white', fontSize:18, padding:5}} to="/category/MLA1051/Automovil">Automovil</Link>

                        <Link style={{color:'white', fontSize:18, padding:5}} to="/category/MLA1648/Tecnologia">Tecnologia</Link>


                        <Link style={{color:'white', fontSize:18, padding:5}} to="/category/MLA1144/Libros">Libros</Link>

                        <Link style={{color:'white', fontSize:18, padding:5}} to="/cart">Carrito</Link> 
                        
                        <CartWidget/>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}