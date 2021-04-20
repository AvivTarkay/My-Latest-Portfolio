import React, { useState } from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import $ from "jquery";

function HomePage() {
	const [showDiv, setShowDiv] = useState(false);
	const [flag, setFlag] = useState(true);

	const onclick = () => {
		setFlag(currentState => !currentState);
		setShowDiv(currentState => !currentState);
		if (flag) {
			$(".plusBtn").css({ transform: "rotate(45deg)" });
		} else {
			$(".plusBtn").css({ transform: "rotate(0deg)" });
		}
	};
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
				{/* <div className="icons">
					<Link to="test" className="icon-holder">
						<FontAwesomeIcon icon={faFacebook} className="icon fb" />
					</Link>
					<Link to="test" className="icon-holder">
						<FontAwesomeIcon icon={faGithub} className="icon gh" />
					</Link>
					<Link to="test" className="icon-holder">
						<FontAwesomeIcon icon={faYoutube} className="icon yt" />
					</Link>
				</div> */}
				<section className="socialContact">
					<div className="divsWrapper">
						<div className="plusBtn" onClick={onclick}>
							&#43;
						</div>
						<div className="shareBtn">
							<div className={`socialPart${showDiv ? "" : "HideDiv"}`}>
								<div className="social1">
									<FontAwesomeIcon icon={faFacebook} className="icon fb" />
								</div>
								<div className="social2">
									<FontAwesomeIcon icon={faGithub} className="icon fb" />
								</div>
								<div className="social3">
									<FontAwesomeIcon icon={faLinkedin} className="icon fb" />
								</div>
								<div className="social4">
									<FontAwesomeIcon icon={faInstagram} className="icon fb" />
								</div>
								<div className="social5">
									<FontAwesomeIcon icon={faTwitter} className="icon fb" />
								</div>
							</div>
							<div className={`msg${showDiv ? "Slide" : ""}`}>Contact Me</div>
						</div>
					</div>
				</section>
			</header>
		</div>
	);
}

export default HomePage;
