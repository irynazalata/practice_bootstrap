import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            {/* <img src="" alt="logo" /> */}
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <NavLink to="/">Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/about">About</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/contacts">Contacts</NavLink>
              </Nav.Link>
            </Nav>
            <Nav className="mr-auto">
              <Button variant="primary" className="mr-2">
                Sign In
              </Button>
              <Button variant="primary" className="mr-2">
                Sign Out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
