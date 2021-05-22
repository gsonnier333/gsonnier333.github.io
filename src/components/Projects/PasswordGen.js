import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import passwordGenScreen from "../../images/password-gen-screen.PNG";

export default function PasswordGen() {
	return (
		<>
			<Row>
				<Col sm={3}>
					<a
						href="https://gsonnier333.github.io/password-generator"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={passwordGenScreen}
							alt="Password Generator page"
						/>
					</a>
				</Col>
				<Col lg={8}>
					<h3>Password Generator</h3>
					<br />
					<p>
						With this assignment, I wrote code in JavaScript to
						randomly generate a password from a number of chosen
						criteria, including the length of the password and
						whether to include lower case letters, upper case
						letters, numbers, and/or special characters. With it,
						the user can click on the "Generate Password" button on
						the page to be asked what their criteria are for the
						final result. They're first asked how long it should be,
						then are given four confirmation popups for which
						characters they'd like to include. After they've made
						their selections, they are given a randomly generated
						string of characters they can use as a password that
						matches all of the chosen criteria. If they enter an
						invalid number for the length of the password or fail to
						select any of the criteria, they will be given an error
						message and instructed to try again.
					</p>
					<p>
						Repository:
						<br />
						<a
							href="https://github.com/gsonnier333/password-generator"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://github.com/gsonnier333/password-generator
						</a>
					</p>
					<p>
						Deployed:
						<br />
						<a
							href="https://gsonnier333.github.io/password-generator"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://gsonnier333.github.io/password-generator
						</a>
					</p>
				</Col>
			</Row>
			<br />
			<hr />
		</>
	);
}
