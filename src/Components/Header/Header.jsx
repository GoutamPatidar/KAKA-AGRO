import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { NavLink } from 'react-router-dom'

function Header() {


  return (
    <>
      <Navbar expand="lg" className="bgcolor">
        <Container className='py-3'>
          <Navbar.Brand  className='Brand_logo'>
            <NavLink to="/" >
              KAKA-AGRO
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link className='mx-5' >
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link className='mx-5' >
                <NavLink to="/AboutUs" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                  AboutUs
                </NavLink>
              </Nav.Link>
              <Nav.Link className='mx-5' >
                <NavLink to="/ContactUs" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
                  ContactUs
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header


