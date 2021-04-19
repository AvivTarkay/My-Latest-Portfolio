import React, { useState } from "react";

const ToggleTheme = () => {
	const body = document.querySelector("body");

	const toggleFunction = () => {
		body.classList.toggle("light");
	};

	return <div className="toggle" onClick={toggleFunction}></div>;
};

export default ToggleTheme;
