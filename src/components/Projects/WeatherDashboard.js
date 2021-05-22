import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dashboardScreen from "../../images/weather-dashboard.PNG";

export default function WeatherDashboard() {
	return (
		<>
			<Row>
				<Col sm={3}>
					<a
						href="https://gsonnier333.github.io/weather-dashboard/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={dashboardScreen}
							alt="Weather Dashboard page"
						/>
					</a>
				</Col>
				<Col lg={8}>
					<h3>Weather Dashboard</h3>
					<br />
					<p>
						For this assignment, I created a page that allows the
						user to search for cities by name and get a weather
						forecast for any city they want that includes the
						current day as well as the next five. After a user
						searches for a city, that city can be instantly searched
						for again by clicking the dynamically created button on
						the left side of the screen with the city's name on it.
						As the user searches for more cities, more buttons will
						appear on the side of the screen, one for each city.
						This search history is stored in local storage, so the
						list of previously searched cities persists even after
						the tab is refreshed.
					</p>
					<p>
						Repository:
						<br />
						<a
							href="https://github.com/gsonnier333/weather-dashboard"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://github.com/gsonnier333/weather-dashboard
						</a>
					</p>
					<p>
						Deployed:
						<br />
						<a
							href="https://gsonnier333.github.io/weather-dashboard/"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://gsonnier333.github.io/weather-dashboard/
						</a>
					</p>
				</Col>
			</Row>
			<br />
			<hr />
		</>
	);
}
