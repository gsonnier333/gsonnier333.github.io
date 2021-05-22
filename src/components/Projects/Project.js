import React, { Component } from "react";
import MealPlanner from "./MealPlanner";
import PasswordGen from "./PasswordGen";
import DayPlanner from "./DayPlanner";
import GalaxyGetaway from "./GalaxyGetaway";

//here, we split all of the projects up into their own separate functional components and render them using this Project component based on the name passed in on our portfolio page to increase readability and structure for our codebase

export default class Project extends Component {
	render() {
		return (
			<>
				{this.props.name === "Meal Planner" && <MealPlanner />}
				{this.props.name === "Password Generator" && <PasswordGen />}
				{this.props.name === "Day Planner" && <DayPlanner />}
				{this.props.name === "Galaxy Getaway" && <GalaxyGetaway />}
			</>
		);
	}
}
