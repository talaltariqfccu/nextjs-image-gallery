"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container className="container-fluid">
        <Navbar.Brand as={Link} href="/">
          Product
        </Navbar.Brand>
        <Nav className="">
          <Nav.Link as={Link} href="static">
            Static
          </Nav.Link>
          <Nav.Link as={Link} href="dynamic">
            Dynamic
          </Nav.Link>
          <Nav.Link as={Link} href="isr">ISR</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
