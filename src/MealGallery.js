import React, { Component } from "react";

class MealGallery extends Component {
	constructor() {
		super();
	}
	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<div>
				{this.props.result.map((i) => {
					return (
						<li key={i.idMeal}>
							{i.strMeal}
							<img className="galleryImg" src={i.strMealThumb} alt="" />
						</li>
					);
				})}
			</div>
		);
	}
}

export default MealGallery;
