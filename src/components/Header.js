import React from "react";
import { Dropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<Navbar bg="light" expand="false" className="customNavbar">
			<Dropdown>
				<Dropdown.Toggle
					as={Navbar.Toggle}
					className="navbarToggleBtn"
				/>
				<h5>Greg Sonnier, Web Developer</h5>
				<Dropdown.Menu className="dropdownWindow">
					<Dropdown.Item className="dropItem">
						<Link to="/">Portfolio</Link>
					</Dropdown.Item>
					<Dropdown.Item className="dropItem">
						<Link to="/contact">Contact</Link>
					</Dropdown.Item>
					<Dropdown.Item className="dropItem">
						<Link to="/about">About Me</Link>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Navbar>
	);
}
