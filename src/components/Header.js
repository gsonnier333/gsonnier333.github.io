import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
	render() {
		return (
			<Navbar bg="light" expand="false">
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav>
						<Nav.Link href="#">Test</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
