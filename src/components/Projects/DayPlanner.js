import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dayPlannerScreen from "../../images/day-planner-screen.PNG";

export default function DayPlanner() {
	return (
		<>
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
						This is a functioning day-planner that can be used in a
						web browser. The planner will list out anything you've
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
			<hr />
		</>
	);
}
