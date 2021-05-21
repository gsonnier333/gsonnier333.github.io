import Container from "react-bootstrap/Container";
import profilePic from "../images/profile-pic.jpg";
import resumeLink from "../assets/Resume.pdf";

import React from "react";

export default function AboutMe() {
	return (
		<Container className="customCont">
			<h1>
				<u>
					About
					Me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</u>
			</h1>
			<div>
				<img alt="Greg smiling" src={profilePic} />
				<span id="profileDesc">
					I'm a full stack web developer from Aurora, Colorado. I have
					experience with JavaScript, CSS, HTML, Java 8, and Python.
					I've also worked as both a vocal coach, teaching singing
					lessons, as well as a coding coach, teaching programming
					fundamentals to kids K-12.
					<br />
					<br />
					<br />
					<a href={resumeLink} className="customLink">
						My Resume
					</a>
				</span>
			</div>
		</Container>
	);
}
