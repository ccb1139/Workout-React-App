import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavItem>
          <Link to="/" className="nav-link">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/routine" className="nav-link">Routine</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavBar