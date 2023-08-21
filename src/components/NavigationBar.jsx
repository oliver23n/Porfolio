
import {Container, Nav, Navbar} from 'react-bootstrap';
import logoImg from './images/Untitled.png';
import './styles/NavBar.css'



function NavigationBar (){
    return (
        <Navbar expand="lg" className=" border-bottom border-danger">
            <Container>
                <Navbar.Brand href="#">
                    <div className='imgDiv'>
                     <img src={logoImg} alt='logo' className='img-fluid' />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark' />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav className= ''>
                        <Nav.Link className='text-white' href="#about">About</Nav.Link>
                        <Nav.Link className='text-white' href="#link">Projects</Nav.Link>
                        <Nav.Link className='text-white' href="#link">Contact</Nav.Link>
                        <Nav.Link className='text-white' href="#link">Resume</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavigationBar;