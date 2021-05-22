import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import project1Screen from "../../images/project1-screen.png";

export default function MealPlanner() {
	return (
		<>
			<br />
			<Row>
				<Col sm={3}>
					<a
						href="https://codingcobrascoding.github.io/CobrasCalorieCounter/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={project1Screen}
							alt="Meal Planner project main page"
						/>
					</a>
				</Col>
				<Col lg={8}>
					<h3>Meal Planner</h3>
					<br />
					<p>
						The Cobra Meal Planner allows a user to search for
						recipes based off of a single ingredient. 5 results will
						display and the user will be able to select a recipe and
						save it to a provided calendar. Upon selecting all
						desired meals, the user will be able to send them to
						their email!
					</p>
					<p>
						Repository:
						<br />
						<a
							href="https://github.com/CodingCobrasCoding/CobrasCalorieCounter"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://github.com/CodingCobrasCoding/CobrasCalorieCounter
						</a>
					</p>
					<p>
						Deployed:
						<br />
						<a
							href="https://codingcobrascoding.github.io/CobrasCalorieCounter"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://codingcobrascoding.github.io/CobrasCalorieCounter
						</a>
					</p>
				</Col>
			</Row>
			<br />
			<hr />
		</>
	);
}
