import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
        <Navbar expanded={expanded} expand="lg" className="bg-Blue-800 text-black" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="logo.png"
                        width="40"
                        height="30"
                        className="d-inline-block align-top mr-2"
                        alt="First Logo"
                    />
                    <img
                        src="logo2.png"
                        width="120"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Second Logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to="/" exact className=" text-xl font-weight-extrabold mr-3 nav-link" activeClassName="active-link">Home</NavLink>
                        <NavLink to="/AboutUstwo" className=" text-xl font-weight-bold mr-3 nav-link" activeClassName="active-link">About</NavLink>
                        <NavLink to="/Services" className="  text-xl  font-weight-bold mr-3 nav-link" activeClassName="active-link">Services</NavLink>
                        <NavLink to="/Internship" className="  text-xl font-weight-bold mr-3 nav-link" activeClassName="active-link">Internship</NavLink>
                        <NavLink to="/ContactUs" className="  text-xl font-weight-bold mr-3 nav-link" activeClassName="active-link">Contact</NavLink>
                        <NavLink to="/OurAchievementstwo" className=" text-xl font-weight-bold mr-3 nav-link" activeClassName="active-link">Our Achievements</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default NavBar;
