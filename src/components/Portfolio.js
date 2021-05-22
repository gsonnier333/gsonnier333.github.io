import React from "react";
import Container from "react-bootstrap/Container";

import Project from "./Projects/Project";

export default function Portfolio() {
	return (
		<Container className="customCont">
			<h1>
				<u>
					Portfolio&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</u>
			</h1>

			<Project name="Meal Planner" />

			<Project name="Password Generator" />

			<Project name="Day Planner" />

			<Project name="Galaxy Getaway" />
		</Container>
	);
}
