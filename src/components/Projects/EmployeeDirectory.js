import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import directoryScreen from "../../images/employee-directory-screenshot.PNG";

export default function EmployeeDirectory() {
	return (
		<>
			<Row>
				<Col sm={3}>
					<a
						href="https://gsonnier333.github.io/employee-directory/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={directoryScreen}
							alt="Employee Directory page"
						/>
					</a>
				</Col>
				<Col lg={8}>
					<h3>Employee Directory</h3>
					<br />
					<p>
						This is a React app that can display an employee
						directory for a business in the form of a table. I used
						the "random user" api to populate the table with
						"employees" for the purposes of showing the app in
						action. For each employee, the user can see their full
						name, email, phone number, date of birth, and the
						country in which they are located. The table lists the
						employees (of which there are currently 30) in the order
						the api gives it, but using the buttons along the top,
						the employees can be resorted in alphabetical order
						based on either their first or last names. There's also
						a button along the top of the table that allows the user
						to filter the employees down to only those that work in
						the US. If the user wishes to see the original
						unsorted/unfiltered list again, there is likewise
						another button to revert the list to its original state.
					</p>
					<p>
						Repository:
						<br />
						<a
							href="https://github.com/gsonnier333/employee-directory"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://github.com/gsonnier333/employee-directory
						</a>
					</p>
					<p>
						Deployed:
						<br />
						<a
							href="https://gsonnier333.github.io/employee-directory/"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://gsonnier333.github.io/employee-directory/
						</a>
					</p>
				</Col>
			</Row>
			<br />
			<hr />
		</>
	);
}
