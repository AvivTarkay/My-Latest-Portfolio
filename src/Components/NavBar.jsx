import React from "react";
import avatar from "../img/avatar.png";
import { NavLink } from "react-router-dom";
import ToggleTheme from "./toggleTheme";

const Navbar = ({ hideNav }) => {
	return (
		<div className="NavBar">
			<nav className="nav">
				<div className="profile">
					<img src={avatar} alt="" />
				</div>

				<ul className="nav-items">
					<li className="nav-item">
						<NavLink
							to="/"
							exact
							activeClassName="active"
							onclick={hideNav(previous => !previous)}
						>
							.Home()
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/about"
							exact
							activeClassName="active"
							onclick={hideNav(previous => !previous)}
						>
							.About()
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/portfolios"
							exact
							activeClassName="active"
							onclick={hideNav(previous => !previous)}
						>
							.Projects()
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/contact"
							exact
							activeClassName="active"
							onclick={hideNav(previous => !previous)}
						>
							.Contact()
						</NavLink>
					</li>
				</ul>
				<ToggleTheme />
				<footer className="footer">
					<p>@2021 Aviv Tarkay.</p>
				</footer>
			</nav>
		</div>
	);
};

export default Navbar;
