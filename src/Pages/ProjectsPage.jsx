import React from "react";
import Categories from "../Components/Categories";
import MenuItems from "../Components/projectsItems";
import Tittle from "../Components/Tittle";
import Projects from "../Components/allProjects";
import { useState } from "react";

const allCategories = ["All", ...new Set(Projects.map(item => item.category))];

function ProjectsPage() {
	const [categories, setCategories] = useState(allCategories);
	const [projectsItems, setProjectsItems] = useState(Projects);

	const filter = category => {
		if (category === "All") {
			setProjectsItems(Projects);
			return;
		}
		const filteredData = Projects.filter(item => {
			return item.category === category;
		});
		setProjectsItems(filteredData);
	};

	return (
		<div className="PortfolioPage">
			<div className="title">
				<Tittle title={"Projects"} span={"Projects"} />
			</div>
			<div className="portfolios-data">
				<Categories filter={filter} categories={categories} />
				<MenuItems menuItem={projectsItems} />
			</div>
		</div>
	);
}

export default ProjectsPage;
