import React from 'react';
// import '../img/userLogo';
import '../css/Navbar.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import myImage from '../img/userLogo.png';




function Header() {
	return (

        <Navbar bg="light" expand="lg">  
        <Container fluid>
        <Navbar.Brand href="#">Learnfy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1">Partners</Nav.Link>
            <Nav.Link href="#action2">Bussines</Nav.Link>
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Why learnfy?</Nav.Link>
          </Nav>
        <div class="triangle"></div>
        <Nav className='buttonb'>
            <Button variant="outline-primary">Sign in</Button>{' '}
            <Button variant="primary">Register for free</Button>{' '}
        </Nav>
        {/* <button><img src={myImage} alt="" className='userl'/></button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
	);
}

export default Header;