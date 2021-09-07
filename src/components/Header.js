import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../images/logo-2.png";
const Header = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/posts">
					<img src={Logo} alt="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Link to="/" className="mr-4">Home</Link>
						<Link to="/friends">Friends</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
