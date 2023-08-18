import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoImg from './images/Untitled.png';
import './styles/NavBar.css'



function NavigationBar (){
    return (
        <Navbar expand="lg" className="darkBackground border-bottom border-dark">
            <Container>
                <Navbar.Brand href="#home">
                    <div className='imgDiv'>
                     <img src={logoImg} alt='logo' className='img-fluid' />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark' />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav className= ''>
                        <Nav.Link className='text-white' href="#home">About</Nav.Link>
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