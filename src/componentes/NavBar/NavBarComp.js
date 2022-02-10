import React , {Component} from 'react' 
import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {Carrito} from '../../componentes/carrito/carrito';
import './nav.css';
export default class NavBarComp extends Component { 
    render () { 
        return ( 
            <div> 
            
<Navbar bg="dark" variant={"dark"} expand="lg">
  <Container>
 
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">INICIO</Nav.Link>
        <Nav.Link href="#link">PRODUCTOS</Nav.Link>
        <NavDropdown title="OPCIONES" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">NOTICIAS</NavDropdown.Item>
          
          
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">OFERTAS</NavDropdown.Item>
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <Carrito/> <p > CARRITO</p>
  </Container>
</Navbar>
            </div>
        )
    }
}