
import {Container, Nav, Navbar} from 'react-bootstrap';
import logoImg from './images/Untitled.png';
import { Link, useLocation } from 'react-router-dom';
// import './styles/NavBar.css'



function NavigationBar (){
    const currentPage = useLocation().pathname;
    return (

        <Navbar collapseOnSelect expand="lg" className=" border-bottom border-danger">
            <Container>
                <Link to="/">
      
                    <div className='imgDiv'>
                     <img src={logoImg} alt='logo' className='img-fluid' />
                    </div>
                
                </Link>
                     <h1>Oliver N.</h1>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark' />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav className= ''>

                        <Link to="/">
                        <Nav.Link className='' href="#link">About</Nav.Link>
                        </Link>

                        <Link to="/Projects">
                        <Nav.Link className='' href="#link">Projects</Nav.Link>
                        </Link>

                        <Link to="Contact">
                        <Nav.Link className='' href="#link">Contact</Nav.Link>
                        </Link>
                        
                        <Link to="/Resume">
                        <Nav.Link className='' href="#link">Resume</Nav.Link>
                        </Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavigationBar;