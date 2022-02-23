import ReplaceImg from '../../assets/logo.png'
import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {CartWidget} from '../carrito/CartWidget'
import "./Estilo.css"
import { Link } from 'react-router-dom'


export default class NavbarComp extends Component {
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
                        <Link style={{ color:'white', fontSize:18, padding:5}} to="/items">Productos</Link>
                        <Link style={{color:'white', fontSize:18, padding:5}} to="/contacto">Contacto</Link> 



                        
                        <CartWidget/>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}