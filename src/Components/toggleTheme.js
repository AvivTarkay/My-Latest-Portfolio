import React, { useState } from "react";

function ToggleTheme() {
	const body = document.querySelector("body");

	const toggleFunction = () => {
		body.classList.toggle("light");
	};

	return <div className="toggle" onClick={toggleFunction}></div>;
}

export default ToggleTheme;
