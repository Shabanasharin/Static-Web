import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
   <>
        {[ 'sm'].map((expand) => (
            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 nav">
              <Container fluid>
                <Navbar.Brand href="#"><h1 style={{marginLeft:'100px'}}>Elite Adorn</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-start flex-grow-1 pe-3">
                      <Nav.Link href="#action1" style={{marginLeft:'200px'}}> <a href="" style={{textDecoration:'none',color:'black'}}>Home</a> </Nav.Link>
                      <Nav.Link href="#action2" style={{marginLeft:'40px'}}> <a href="" style={{textDecoration:'none',color:'black'}}>Cart</a></Nav.Link>
                      <Nav.Link href="#action2" style={{marginLeft:'40px'}}> <a href="" style={{textDecoration:'none',color:'black'}}>About</a></Nav.Link>
                      <Nav.Link href="#action2" style={{marginLeft:'40px'}}> <a href="" style={{textDecoration:'none',color:'black'}}>HContact</a></Nav.Link>

                      <NavDropdown style={{marginLeft:'40px',color:'blue'}}
                        title="Categeries" 
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3" >Mekup</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Skin Care 
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                         Hair Care
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action6">
                         Fragrens
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Form className="d-flex" style={{marginRight:'80px'}}>
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
   </>
  )
}

export default Header