import Link from 'next/link'
import {Navbar,Nav,NavDropdown,Card,Button,Toast} from 'react-bootstrap'

export default ()=>(
  
  
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className=" top-100  w-100" style={{overflow:"hidden",zIndex:"1" ,position:"fixed",top:"0"}}>
    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto container">
        <Nav.Link href="#qualification">Academic Qualification</Nav.Link>
        <Nav.Link href="#pricing">Language And Subjects</Nav.Link>
       
        <Nav.Link href="#the-team1">Projects</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
         About
        </Nav.Link>
        <Nav.Link href="#pricing">Contacts</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  

  


)