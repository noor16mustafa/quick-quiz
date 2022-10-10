import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbars = () => {
    return (
        <>
            <Navbar className='fw-bolder' bg="warning" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Quick quiz</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/statistics"}>Statistics</Nav.Link>
                        <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navbars;