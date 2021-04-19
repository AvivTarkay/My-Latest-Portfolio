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
	const [hideNav, setHideNav] = useState(false);

	const navClick = () => {
		setNavToggle(!navToggle);
		setHideNav(previous => !previous);
	};

	return (
		<div className="App">
			<div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
				{hideNav && <NavBar hideNav={setHideNav} />}
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
						<Route path="/my-latest-portfolio/about" component={AboutPage} />
						<Route path="/portfolios" component={ProjectsPage} />
						<Route path="/contact" component={ContactPage} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default App;
