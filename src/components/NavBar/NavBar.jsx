

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

                <div className="text-center collapse navbar-collapse justify-content-around" id="navbarNav">

                    <ul className="navbar-nav">

                        <Link className="navbar-brand" to={'/'}>
                            Like Nutrition Brand
                        </Link>


                        <Link className="nav-link active" to={'categoria/Suplementos'}>
                            Suplementos
                        </Link>


                        <Link className="nav-link active" to={'categoria/Accesorios'}>
                            Accesorios
                        </Link>


                        <Link to={'/cart'}>
                            <CartWidget />
                        </Link>


                        <Link to={'/checkOut'}>
                            <CartCheckOutWidget />
                        </Link>

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



