import React from "react";

function Categories({ filter, categories }) {
	return (
		<div className="buttons">
			{React.Children.toArray(
				categories.map(cat => {
					return (
						<button
							type="button"
							className="btn-port"
							onClick={() => filter(cat)}
						>
							{cat}
						</button>
					);
				})
			)}
		</div>
	);
}

export default Categories;
