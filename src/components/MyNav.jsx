import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => (
  <Navbar collapseOnSelect className = "sticky-top" expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img src= "https://media.voulezvouz.com/2020/12/Asset-2@4x-1.png" height="40px"alt="VoulezVouz"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#features">Home</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
        <Nav.Link href="#pricing">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
