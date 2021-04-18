import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div className="HomePage">
			<header className="hero">
				<div className="wrapper">
					<section>
						<h1 className="hero-text">Hello,I'm Aviv Tarkay.</h1>
						<h1 className="hero-text"> </h1>
						<ul className="dynamic-text">
							<li>
								<span className="changedWord">Web Developer.</span>
							</li>
							<li>
								<span className="changedWord">Front-End Developer.</span>
							</li>
							<li>
								<span className="changedWord">Back-End Developer.</span>
							</li>
							<li>
								<span className="changedWord">Designer.</span>
							</li>
						</ul>
					</section>
				</div>
				<p className="h-sub-text">
					I like to code things from scratch, and enjoy bringing ideas to life
					in the browser.
				</p>
				<div className="icons">
					<Link to="test" className="icon-holder">
						<FontAwesomeIcon icon={faFacebook} className="icon fb" />
					</Link>
					<Link to="test" className="icon-holder">
						<FontAwesomeIcon icon={faGithub} className="icon gh" />
					</Link>
					<Link to="test" className="icon-holder">
						<FontAwesomeIcon icon={faYoutube} className="icon yt" />
					</Link>
				</div>
			</header>
		</div>
	);
}

export default HomePage;
