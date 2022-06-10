import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


const NavBar = () => {
    
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/makeAPlanit">Make a Planit</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end" id="navbar-right">
              <Nav>

                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">SignUp</Nav.Link>

              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

  export default NavBar;