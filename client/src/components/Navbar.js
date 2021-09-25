import React from 'react'
import {Nav,Navbar,Container,NavDropdown}from 'react-bootstrap';
import Login from './login/Login';
import {
  Link
} from "react-router-dom";

const Navber = ()=>{
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-crud project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-center" style={{margin:"10px"}}>
              <Link to='/home'>Home</Link>
              <Link to="/Form">Form singup</Link>
              <Link to="/login">Login</Link>
              
              <Link href="/logout">Logout</Link>
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Navber 