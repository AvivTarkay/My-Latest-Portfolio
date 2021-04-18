import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import saveAs from "file-saver";
import about from "../img/about.jpg";

function ImageSection() {
	const downloadCv = () => {
		let link = "./CV AvivTarkay.pdf";
		axios({
			url: link, //your url
			method: "GET",
			responseType: "blob", // important
		}).then(response => {
			const url = window.URL.createObjectURL(new Blob([response.data]));
			var blob = new Blob([response.data], {
				type: "text/plain;charset=utf-8",
			});
			saveAs(blob, link);
		});
	};
	return (
		<section className="ImageSection">
			<div className="img">
				<img src={about} alt="" />
			</div>
			<div className="about-info">
				<h4>
					I am<span> Aviv Tarkay</span>
				</h4>
				<div className="about-text">
					<p>• Full Stack Developer.</p>
					<p>
						• Has experience in professional positions that required the ability
						to work independently and, in a team, high self- study ability and
						multiple investment.
					</p>
					<p>
						• Experience in managing a large staff, with high work ethic,
						systemic vision, ability to plan and see the big picture.
					</p>
				</div>
				<div className="about-details">
					<div className="left-section">
						<p>Full Name</p>
						<p>Age</p>
						<p>Languages</p>
						<p>Address</p>
					</div>
					<div className="right-section">
						<p>: Aviv Tarkay</p>
						<p>: 28</p>
						<p>: Hebrew, English, Amharic</p>
						<p>: Bnei-Re'em, Southern District</p>
					</div>
				</div>
				<button className="btn" onClick={downloadCv}>
					Download Cv
				</button>
			</div>
		</section>
	);
}

export default ImageSection;
