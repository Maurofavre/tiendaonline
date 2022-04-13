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
                        <NavDropdown title='Juan Lambertucci'>
                        </NavDropdown>

                        <Link style={{ textDecoration: 'none', color: 'white', fontSize: 17, padding: 5, margin: 5 }} to="/">Home</Link>
                            {/* <Link style={{ textDecoration: 'none', color: 'white', fontSize: 17, padding: 5, margin: 5 }} to="/category/herrajes">Herrajes</Link>
                            <Link style={{ textDecoration: 'none', color: 'white', fontSize: 17, padding: 5, margin: 5 }} to="/category/Machimbres">Machimbres</Link> */}
                            <Link style={{ textDecoration: 'none', color: 'white', fontSize: 17, padding: 5, margin: 5 }} to="/cart">Carrito</Link>
                        
                        <CartWidget/>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}