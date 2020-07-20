import React, { Component, Fragment } from "react";
import axios from "axios";
import "./App.css";
import MealGallery from './MealGallery.js'

class App extends Component {
	constructor() {
		super();

		this.state = {
			test: "work",
			ingredient: "",
			meals: [],
		};
	}

	updateIngredient = (e) => {
		this.setState({
			ingredient: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	getResults = (chosenWord) => {
		// chosenWord = "chicken";
		axios({
			url: `https://www.themealdb.com/api/json/v1/1/filter.php`,
			method: "GET",
			params: {
				i: chosenWord,
				md: "d",
			},
		})
			// to make sure if the word has definition
			.then((result) => {
				console.log("hey this is my .then");
				result = result.data;
				this.setState(
					{
						meals: result.meals,
					},
					() => {
						console.log(this.state.meals[0]);
					}
				);
			});
	};

	render() {
		return (
			<div className="App">
				<form action="submit" onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.updateIngredient} />
					<input
						type="submit"
						onClick={() => {
							this.getResults(this.state.ingredient);
						}}
					/>
				</form>
				<ul className="gallery">
					{this.state.meals
						? <MealGallery result={this.state.meals}/> : null}
				</ul>
			</div>
		);
	}
}
export default App;
