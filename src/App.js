import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Portfolio />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/about">
						<AboutMe />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
