import React from "react";
import avatar from "../img/avatar.png";
import { NavLink } from "react-router-dom";
import ToggleTheme from "./toggleTheme";

const Navbar = ({ setHideNav }) => {
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
							onClick={() => {
								setHideNav(previous => !previous);
							}}
						>
							.Home()
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/about"
							activeClassName="active"
							onClick={() => {
								setHideNav(previous => !previous);
							}}
						>
							.About()
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/portfolios"
							activeClassName="active"
							onClick={() => {
								setHideNav(previous => !previous);
							}}
						>
							.Projects()
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/contact"
							activeClassName="active"
							onClick={() => {
								setHideNav(previous => !previous);
							}}
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
