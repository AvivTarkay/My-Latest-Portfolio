import React, { useState } from "react";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import Tittle from "../Components/Tittle";
import Projects from "../Components/allProjects";

const allCategories = ["All", ...new Set(Projects.map(item => item.category))];

function PortfoliosPage() {
	const [categories, setCategories] = useState(allCategories);
	const [projectItems, setProjectsItems] = useState(Projects);

	const filterCategories = category => {
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
				<Tittle title={"Portfolios"} span={"portfolios"} />
			</div>
			<div className="portfolios-data">
				<Categories filter={filterCategories} categories={categories} />
				<MenuItems menuItem={projectItems} />
			</div>
		</div>
	);
}

export default PortfoliosPage;
