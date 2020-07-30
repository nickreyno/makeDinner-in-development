import React, { Component, Fragment } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import resultObj from "../assets/resultObjNew.js";

class Browse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			this: "sucks",
		};
	}
	componentDidMount() {
		console.log(this.props);
		// const {filter, subFilter} = this.props.location.state
		// console.log(filter,subFilter)
        // console.log(this.props.location.state)
        console.log(window.location)
	}
	getResultsLive = (filter, subFilter) => {
		// chosenWord = "main course";
		console.log("working");
		axios({
			url: `https://api.spoonacular.com/recipes/complexSearch`,
			// url: `https://api.spoonacular.com/recipes/130933/information`,
			method: "GET",
			params: {
                apiKey: this.state.apiKey[0],
                filter: subFilter,
				instructionsRequired: true,
				addRecipeInformation: true,
				fillIngredients: true,
				number: 10,
				sort: "popularity",
				sortDirection: "desc",
			},
		})
			// to make sure if the word has definition
			.then((result) => {
				console.log("hey this is my .then");
				this.setState(
					{
						// meals: result.meals,
						resultObj: result.data.results,
					},
					() => {
						console.log(this.state.resultObj);
					}
				);
			})
			.catch((err) => {
				console.log(err.response.status);
				if (err.response.status != 402) {
					console.log("figure");
				}
				// if 402 error, switch API key
				if (err.response.status == 402) {
					const keys = [...this.state.apiKey];
					keys.shift();
					console.log(keys);
					this.setState(
						{
							apiKey: keys,
						},
						() => {
							// this.getResultsLive();
						}
					);
				}
			});
	};
	render() {
		return <h1>hello</h1>;
	}
}

export default Browse;
