import React, { Component, Fragment } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Filters extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filters: [
				{
					type: "type",
					subFilters: [
						"main course",
						"side dish",
						"dessert",
						"appetizer",
						"salad",
						"bread",
						"breakfast",
						"soup",
						"beverage",
						"sauce",
						"marinade",
						"fingerfood",
						"snack",
						"drink",
					],
				},
				{
					type: "cuisine",
					subFilters: [
						"African",
						"American",
						"British",
						"Cajun",
						"Caribbean",
						"Chinese",
						"Eastern European",
						"European",
						"French",
						"German",
						"Greek",
						"Indian",
						"Irish",
						"Italian",
						"Japanese",
						"Jewish",
						"Korean",
						"Latin American",
						"Mediterranean",
						"Mexican",
						"Middle Eastern",
						"Nordic",
						"Southern",
						"Spanish",
						"Thai",
						"Vietnamese",
					],
				},
				{
					type: "diet",
					subFilters: [
						"Gluten Free",
						"Ketogenic",
						"Vegetarian",
						"Lacto-Vegetarian",
						"Ovo-Vegetarian",
						"Vegan",
						"Pescetarian",
						"Paleo",
						"Primal",
						"Whole30",
					],
				},
				{
					type: "intolerances",
					subFilters: [
						"Dairy",
						"Egg",
						"Gluten",
						"Grain",
						"Peanut",
						"Seafood",
						"Sesame",
						"Shellfish",
						"Soy",
						"Sulfite",
						"Tree Nut",
						"Wheat",
					],
				},
			],
		};
    }
    
    showFilter = ()=>{

    }
	render() {
		return (
			<div className="filterNav">
				🍑
				<ul>
					{this.state.filters.map((filter, i) => {
						return (
							<li className={`filter ${filter.type}`}>
								{filter.type}
								<ul className="subFilters">
									{filter.subFilters.map((subFilter, i) => {
										return <li>{subFilter}</li>;
									})}
								</ul>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Filters;
