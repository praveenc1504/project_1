import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBarc.css'; // Make sure this path is correct

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <div className="container-fluid">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
            <Nav.Link as={Link} to="/bat">BAT</Nav.Link>        
            <Nav.Link as={Link} to="/ball">BALL</Nav.Link>
            <Nav.Link as={Link} to="/jersey">JERSEY</Nav.Link>
          </Nav>
          <Button variant="secondary" style={{background:"green",width:"100px",marginRight:"15px"}}>card</Button>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;
