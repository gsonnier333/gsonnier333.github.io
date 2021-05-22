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
			{/* <!-- Project 1 --> */}
			<Project name="Meal Planner" />
			{/* <!-- Project 2 --> */}
			<Project name="Password Generator" />
			{/* <!-- Project 3 --> */}
			<Project name="Day Planner" />
		</Container>
	);
}
