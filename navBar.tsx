import * as React from 'react';
import { Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navBar.scss';
function NavBar(props) {
  return (
    <Navbar className="nav-bar" bg="light" expand="xxl">
      <Navbar.Brand href="#">
        <img
          className="logo"
          src="https://github.com/AlfonsoB/react-form-contact-us-5-Alfonso/blob/main/images/MHV2.png?raw=true"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav-bar-collapsed">
        <NavLink
          as={Link}
          to="/contactPage"
          className="btn btn-outline-primary mr-2"
        >
          {props.button1Name}
        </NavLink>
        {/* <NavLink as={Link} to="/component4" className="btn btn-outline-danger">
          {props.button2Name}
        </NavLink> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
