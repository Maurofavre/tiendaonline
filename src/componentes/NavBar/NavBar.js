import ReplaceImg from '../../assets/replace.png'
import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {CartWidget} from '../Carrito/CartWidget'

export default class NavbarComp extends Component {
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark"
                sticky='top' expand='lg'>
                    <Navbar.Brand>
                        <img src={ReplaceImg} className="ReplaceImg"/>
                    </Navbar.Brand>

                    <CartWidget/>
                    
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                    <Nav style={{alignItems:'center'}}>
                        <NavDropdown title='Equipos'>
                        <NavDropdown.Item href='equipos/iphone'>Iphone</NavDropdown.Item>
                        <NavDropdown.Item href='equipos/samsung'>Samsung</NavDropdown.Item>
                        <NavDropdown.Item href='equipos/motorola'>Motorola</NavDropdown.Item>
                        <NavDropdown.Item href='equipos/xiaomi'>Xiaomi</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href='equipos/promo'>Promociones</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="redes">Redes</Nav.Link>
                        <Nav.Link href="contact">Contacto</Nav.Link>
                        <Nav.Link href="about">Carrito</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}