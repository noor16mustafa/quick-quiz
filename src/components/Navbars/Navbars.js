import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbars = () => {
    return (
        <>
            <Navbar collapseOnSelect className='fw-bolder' bg="warning" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Quick quiz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/statistics"}>Statistics</Nav.Link>
                            <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navbars;