import React from "react";
import Container from "react-bootstrap/Container";

export default function Contact() {
	return (
		<Container className="customCont">
			<h1>
				<u>
					Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</u>
			</h1>
			<br />
			<br />
			<h4>
				GitHub:{" "}
				<a href="https://github.com/gsonnier333">
					https://github.com/gsonnier333
				</a>
			</h4>
			<br />
			<h4>
				LinkedIn:{" "}
				<a href="https://www.linkedin.com/in/greg-sonnier/">
					https://www.linkedin.com/in/greg-sonnier/
				</a>
			</h4>
			<br />
			<h4>
				Email 📧:{" "}
				<a href="mailto:gsonnier3@gmail.com">gsonnier3@gmail.com</a>
			</h4>
			<br />
		</Container>
	);
}
