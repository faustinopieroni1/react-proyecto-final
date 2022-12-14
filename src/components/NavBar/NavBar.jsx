

//BOOTSTRAp

import { Link } from "react-router-dom"

import CartCheckOutWidget from "../CartCheckOutWidget/CartCheckOutWidget"
import CartWidget from "../CartWidget/CartWidget"


function NavBar() {

    return (




        <div className="menuNav row fixed-top">

            <nav className="navBar navbar navbar-expand-lg navbar-light bg-secondary ">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse justify-content-around" id="navbarNav">

                    <ul className="navbar-nav">

                        <a className="navbar-brand" href="">Like Nutrition Brand</a>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="">Inicio</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="">Suplementos</a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Proteinas</a></li>
                                <li><a className="dropdown-item" href="#">Creatinas</a></li>
                                <li><a className="dropdown-item" href="#">Gainers</a></li>
                                <li><a className="dropdown-item" href="#">Preentrenos</a></li>
                            </ul>

                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="">Accesorios</a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Cintos</a></li>
                                <li><a className="dropdown-item" href="#">Shakers</a></li>
                                <li><a className="dropdown-item" href="#">Guantes</a></li>
                            </ul>

                        </li>

                        {/* <form className=" d-flex col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                                <button className="btn btn-warning" type="submit">Buscar</button>
                            </form> */}

                        <li className="nav-item">
                            <Link to={'/cart'}>
                                <CartWidget />
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/checkOut'}>
                                <CartCheckOutWidget />
                            </Link>
                        </li>

                    </ul>





                </div>

            </nav>

        </div>

    )
}

export default NavBar



//BOOTSTRAP REACT

//IMPORTS

/* import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample; */




//BOOTSTRAP



