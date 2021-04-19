import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import { useState } from "react";
import "./App.scss";

function App() {
	const [navToggle, setNavToggle] = useState(true);

	const navClick = () => {
		setNavToggle(!navToggle);
	};

	return (
		<div className="App">
			<div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
				<NavBar />
			</div>
			<div className="nav-btn" onClick={navClick}>
				<div className="lines-1"></div>
				<div className="lines-2"></div>
				<div className="lines-3"></div>
			</div>
			<div className="main-content">
				<div className="content">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/portfolios" component={ProjectsPage} />
						<Route exact path="/contact" component={ContactPage} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default App;
