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

			<Project name="Weather Dashboard" />

			<Project name="Galaxy Getaway" />

			<Project name="Day Planner" />
		</Container>
	);
}
