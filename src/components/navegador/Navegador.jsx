import {useState, useContext} from 'react'
import {Container, Nav, Navbar, Button, Modal} from "react-bootstrap";
import Login from '../login/Login';
import { userContext } from "../context/UserProvider";

import {useNavigate} from 'react-router-dom'

import "./styleNavegador.css"

function BasicExample() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()

    const {user, logoutUsuario} = useContext(userContext)


  return (
    <>
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand  className="navbar"   href="#home">Comision 5i</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto navbar">
            <Nav.Link  className="navbar" href="#home">Home</Nav.Link>
            <Nav.Link   className="navbar" href="#link">Link</Nav.Link>
            {user ? <Button className="btn btn-danger" onClick={() => [logoutUsuario(), navigate("/")]  }> Cerrar Sesion </Button> : <Button className="btn btn-success" onClick={handleShow}> Login </Button> }
           
           

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <Login />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    
    </>
  );
}

export default BasicExample;
