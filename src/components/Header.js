import React, { Component } from "react";
import { Dropdown, Navbar } from "react-bootstrap";

export default class Header extends Component {
	render() {
		return (
			<Navbar bg="light" expand="false" className="customNavbar">
				<Dropdown>
					<Dropdown.Toggle
						as={Navbar.Toggle}
						className="navbarToggleBtn"
					/>
					<Dropdown.Menu className="dropdownWindow">
						<Dropdown.Item className="dropItem">
							About Me
						</Dropdown.Item>
						<Dropdown.Item className="dropItem">
							Portfolio
						</Dropdown.Item>
						<Dropdown.Item className="dropItem">
							Contact
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar>
		);
	}
}
