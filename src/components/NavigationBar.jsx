import { Container, Nav, Navbar } from 'react-bootstrap';
import logoImg from './images/Untitled.png';
import { Link, useLocation } from 'react-router-dom';


function NavigationBar() {
    const currentPage = useLocation().pathname;
    return (

        <Navbar collapseOnSelect expand="lg" className=" border-bottom border-danger top-0">
            <Container>
                <Link to="/">

                    <div className='logoImg'>
                        <img src={logoImg} alt='logo' className='img-fluid' />
                    </div>

                </Link>
                <h1 className='mx-2'>OLIVER N.</h1>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark' />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav>

                        <Link to="/" >

                            <Nav.Item className={currentPage === '/' ? 'active' : 'notactive'} >About</Nav.Item>
                        </Link>

                        <Link to="/Projects" >
                            <Nav.Item className={currentPage === '/Projects' ? 'active' : 'notactive'} >Projects</Nav.Item>
                        </Link>

                        <Link to="Contact" >
                            <Nav.Item className={currentPage === '/Contact' ? 'active' : 'notactive'} >Contact</Nav.Item>
                        </Link>

                        <Link to="/Resume">
                            <Nav.Item className={currentPage === '/Resume' ? 'active' : 'notactive'}>Resume</Nav.Item>
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavigationBar;