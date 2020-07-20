import React, { Component, Fragment } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MealGallery from "./MealGallery.js";
import resultObj from "./assets/resultObj.js"
// import resultExt from "./assets/resultExt.js"

class App extends Component {
	constructor() {
		super();

		this.state = {
			test: "work",
			ingredient: "",
			meals: [],
			resultObj: resultObj,
			// resultExt: resultExt,
		};
	}

	componentDidMount(){
		this.getResultsDev('chicken');
	}
	updateIngredient = (e) => {
		this.setState({
			ingredient: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	getResultsDev = (placeHolder) => {
		console.log(this.state.resultObj.data.results);
		// console.log(this.state.resultExt)
		// result = result.data.results;
		// console.log(result.data.results)
	};

	getResultsLive = (chosenWord) => {
		chosenWord = "chicken";
		axios({
			url: `https://api.spoonacular.com/recipes/complexSearch`,
			method: "GET",
			// responseType: 'json',
			params: {
				apiKey: "cd74bd0589054098a2161681f58192c0",
				// ids: "723984,584549,667917,482574,551452,537208,",
				// includeNutrition: false,
				ingredients: chosenWord,
				instructionsRequired: true,
				addRecipeInformation: true,
				fillIngredients: true,
				number: 10,
			},
		})
			// to make sure if the word has definition
			.then((result) => {
				console.log("hey this is my .then");
				console.log(result);
				// this.setState(
				// 	{
				// 		meals: result.meals,
				// 	},
				// 	() => {
				// 		console.log(this.state.meals[0]);
				// 	}
				// );
			})
			.catch((err) => {
				console.log(err.response.status);
				// if 402 error, switch API key
			});
	};

	render() {
		const {results} = this.state.resultObj.data
		return (
			<Router>
				<Fragment>
					<nav>
						<h2>just eat</h2>
						<button
							onClick={() => {
								this.getResultsDev(this.state.ingredient);
							}}
						>
							dev
						</button>
						<button
							onClick={() => {
								this.getResultsLive("chicken");
							}}
						>
							live
						</button>
						<form action="submit" onSubmit={this.handleSubmit}>
							<input type="text" onChange={this.updateIngredient} />
							<input
								type="submit"
								onClick={() => {
									this.getResultsDev(this.state.ingredient);
								}}
							/>
						</form>
					</nav>
					<Route path="/" exact>
						<header>
							<h1>What's for Dinner?</h1>
						</header>
					</Route>
					<main>
						<div className="wrapper">
							<h2> Some of our Favourites </h2>
							<ul className="homePageRecipes">
								<li className="feature">
									<img className="featureImg" src={results[0].image} alt="food" />
									<div className="featureBlurb">
										<h3>{results[0].title}</h3>
										<ul>
											<li> ready in: {results[0].readyInMinutes} minutes</li>
											<li> serves: {results[0].servings}</li>
											<li>{results[0].summary.split(".")[0]}</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</main>
					{/* <ul className="gallery">{this.state.resultObj ? <MealGallery resultObj={this.state.resultObj} resultExt={this.state.resultExt}/> : null}</ul> */}
				</Fragment>
			</Router>
		);
	}
}
export default App;
