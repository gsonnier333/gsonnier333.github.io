import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import galaxyHomeScreen from "../../images/galaxy-getaway.PNG";

export default function GalaxyGetaway() {
	return (
		<>
			<Row>
				<Col sm={3}>
					<a
						href="https://galaxy-getaway.herokuapp.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={galaxyHomeScreen} alt="Galaxy Getaway site" />
					</a>
				</Col>
				<Col lg={8}>
					<h3>Galaxy Getaway</h3>
					<br />
					<p>
						This is a website for learning about and viewing
						different locations in outer space. The user can
						register for an account, the information for which is
						encrypted and stored securely in a back end database,
						and can select where they'd like to "visit" from a
						premade list of destinations. Afterward, they can see a
						variety of fun facts about those places, including links
						they can visit to learn more. The user can "favorite"
						the locations they like the most, and if they're logged
						in, they can view their favorites at any time.
					</p>
					<p>
						Repository:
						<br />
						<a
							href="https://github.com/seff0/DUFullStackProject2"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://github.com/seff0/DUFullStackProject2
						</a>
					</p>
					<p>
						Deployed:
						<br />
						<a
							href="https://galaxy-getaway.herokuapp.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://galaxy-getaway.herokuapp.com/
						</a>
					</p>
				</Col>
			</Row>
			<br />
			<hr />
		</>
	);
}
