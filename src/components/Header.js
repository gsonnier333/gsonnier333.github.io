import React, { Component } from "react";
import { Dropdown, Navbar } from "react-bootstrap";

export default class Header extends Component {
	render() {
		return (
			<Navbar bg="light" expand="false">
				<Dropdown>
					<Dropdown.Toggle
						as={Navbar.Toggle}
						className="navbarToggleBtn e-caret-hide"
					/>
					<Dropdown.Menu>
						<Dropdown.Item>Test</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar>
		);
	}
}
