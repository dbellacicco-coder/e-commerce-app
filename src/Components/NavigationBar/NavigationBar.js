import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../Assets/CartWidget';



const NavigationBar = ({countItem}) => {
    return ( <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as="span"> <Link to="/"> Food Delivery App</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as="span" > <Link to="/"> Home </Link> </Nav.Link>
          <Nav.Link  as="span"> <Link to="/about"> About </Link></Nav.Link>
          <Nav.Link  as="span"> <Link to="/contact"> Contact </Link></Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item as="span" ><Link to="category/electronics">Electronics </Link> </NavDropdown.Item>
            <NavDropdown.Item as="span" ><Link to="category/jewelery"> Jewelery</Link></NavDropdown.Item>
            <NavDropdown.Item as="span" ><Link to="category/men's clothing"> Men`s` Clothing</Link></NavDropdown.Item>
            <NavDropdown.Item as="span" ><Link to="category/women's clothing"> Women`s` Clothing</Link></NavDropdown.Item>

            <NavDropdown.Divider />
          
          </NavDropdown>
          <CartWidget countItem={countItem} />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>  );
}
 
export default NavigationBar;