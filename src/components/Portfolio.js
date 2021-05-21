import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import project1Screen from "../images/project1-screen.png";
import passwordGenScreen from "../images/password-gen-screen.PNG";
import dayPlannerScreen from "../images/day-planner-screen.PNG";

export default function Portfolio() {
	return (
		<Container className="customCont">
			<h1>
				<u>
					Portfolio&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</u>
			</h1>
			{/* <!-- Project 1 --> */}
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
			{/* <!-- Project 2 --> */}
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
							href="https://gsonnier333.github.io/password-generator"
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
			{/* <!-- Project 3 --> */}
			<Row>
				<Col sm={3}>
					<a
						href="https://gsonnier333.github.io/day-scheduler/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={dayPlannerScreen} alt="Day Planner page" />
					</a>
				</Col>
				<Col lg={8}>
					<h3>Day Planner</h3>
					<br />
					<p>
						For this assignment, I was tasked with creating a
						functioning day-planner that can be used in a web
						browser. The planner will list out anything you've
						written and saved to it for each hour from 9AM to 5PM,
						and you can change and add items by typing in new text
						in their respective rows and clicking the Save button
						next to the changed item. If an item has been saved, it
						will still be there when the page is refreshed.
						Additionally, the rows change colors based on whether
						the respective time was at least an hour ago (grey),
						within an hour ago (yellow-green), or coming up later in
						the day (green). The page also displays the current date
						at the top of the screen. At present, the colors of the
						rows will only update when the page is loaded, so the
						user has to refresh the page periodically if they want
						the colors to accurately reflect the current time of
						day.
					</p>
					<p>
						Repository:
						<br />
						<a
							href="https://github.com/gsonnier333/day-scheduler"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://github.com/gsonnier333/day-scheduler
						</a>
					</p>
					<p>
						Deployed:
						<br />
						<a
							href="https://gsonnier333.github.io/day-scheduler"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://gsonnier333.github.io/day-scheduler
						</a>
					</p>
				</Col>
			</Row>
			<br />
		</Container>
	);
}
