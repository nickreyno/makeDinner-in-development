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
			showFilters: false,
			showSubFilter: "",
		};
	}

	showFilter = () => {
		this.setState(
			{
				showFilters: !this.state.showFilters,
			},
			() => {
				console.log(this.state.showFilters);
			}
		);
	};
	showSubFilter = (e) => {
		const picked = e.target.children[0];
		const navToClose = document.querySelector(".navFilterShow");
		if ([...picked.classList].toString().includes("navFilterShow")) {
			navToClose.classList.add("hidden");
			navToClose.classList.remove("navFilterShow");
		} else {
			if (navToClose) {
				navToClose.classList.add("hidden");
				navToClose.classList.remove("navFilterShow");
			}
			console.log(picked.classList.toString());
			picked.classList.add("navFilterShow");
			picked.classList.remove("hidden");
		}
	};

	render() {
		return (
			<Fragment>
				<button className="filterNavButton" onClick={this.showFilter}>
					🍑target
				</button>
				{this.state.showFilters ? (
					<ul className="filterNav">
						{this.state.filters.map((filter, i) => {
							return (
								<li
									key={i}
									className={`filter ${filter.type}`}
									onClick={(e) => {
										this.showSubFilter(e);
									}}
								>
									{filter.type}
									<ul className="subFilters hidden">
										{this.state.filters[i].subFilters.map((subFilter, i) => {
											return <li key={i}>{subFilter}</li>;
										})}
									</ul>
								</li>
							);
						})}
					</ul>
				) : null}
			</Fragment>
		);
	}
}

export default Filters;
