import React, { Component, Fragment } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MealGallery from "./components/MealGallery.js";
import Recipe from "./components/Recipe.js";
import resultObj from "./assets/resultObj.js";
import Filters from "./components/Filters.js";
// import resultExt from "./assets/resultExt.js"

class App extends Component {
	constructor() {
		super();

		this.state = {
			test: "work",
			ingredient: "",
			meals: [],
			resultObj: resultObj,
			recipeClicked: resultObj[0],
			// resultExt: resultExt,
		};
	}

	componentDidMount() {
		this.getResultsDev("chicken");
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
		console.log(this.state.resultObj);
		// console.log(this.state.resultExt)
		// result = result.data.results;
		// console.log(result.data.results)
	};

	getResultsLive = (chosenWord) => {
		chosenWord = "main course";
		console.log("working");
		axios({
			// url: `https://api.spoonacular.com/recipes/complexSearch`,
			url: `https://api.spoonacular.com/recipes/130933/information`,
			method: "GET",
			// responseType: 'json',
			params: {
				apiKey: "cd74bd0589054098a2161681f58192c0",
				// ids: "723984,584549,667917,482574,551452,537208,",
				// includeNutrition: false,
				// type: chosenWord,
				// instructionsRequired: true,
				// addRecipeInformation: true,
				// fillIngredients: true,
				// number: 17,
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
	passRecipeInfo = (recipe) => {
		this.setState({
			recipeClicked: recipe,
		});
	};

	render() {
		const results = this.state.resultObj;
		return (
			<Router>
				<Fragment>
					<nav>
						<div className="wrapper">
							<Filters />
							<Link to="/">
								<p>just eat</p>
							</Link>
							<button
								className="left"
								onClick={() => {
									this.getResultsDev(this.state.ingredient);
								}}
							>
								dev
							</button>
							<button
								className="left"
								onClick={() => {
									this.getResultsLive("chicken");
								}}
							>
								live
							</button>
							<form className="searchForm" action="submit" onSubmit={this.handleSubmit}>
								<input className="searchField" type="text" onChange={this.updateIngredient} />
								<button
									className="searchButton"
									type="submit"
									onClick={() => {
										this.getResultsLive(this.state.ingredient);
									}}
								>
									<i className="fas fa-search"></i>
								</button>
							</form>
							<form action="submit">
								<button className="right">log in</button>
								<button className="right">sign up</button>
							</form>
						</div>
					</nav>
					<Route path="/" exact>
						<header>
							<h1>What's for Dinner?</h1>
						</header>
						<main>
							<div className="wrapper">
								<h2> Some of our Favourites </h2>
								<ul className="homePageRecipes">
									<li className="feature">
										<Link
											to={`/recipe/${results[5].id}`}
											onClick={() => {
												this.passRecipeInfo(results[5]);
											}}
										>
											<img src={results[5].image} alt="food" />
											<div className="featureBlurb">
												<h3>{results[5].title}</h3>
												<ul>
													<li> ready in: {results[5].readyInMinutes} minutes</li>
													<li> serves: {results[5].servings}</li>
													<li>{results[5].summary.split(".")[5]}</li>
												</ul>
											</div>
										</Link>
									</li>
									{results.map((entry, i) => {
										if (i != 5) {
											return (
												<li key={entry.id} className="support">
													<Link
														to={`/recipe/${results[i].id}`}
														onClick={() => {
															this.passRecipeInfo(results[i]);
														}}
													>
														<img src={entry.image} alt="food" />
														<div className="supportBlurb">
															<h4>{entry.title}</h4>
															<p>
																Ready in:{entry.readyInMinutes} minutes, serves {entry.servings}
															</p>
														</div>
													</Link>
												</li>
											);
										}
									})}
								</ul>
							</div>
						</main>
					</Route>
					<Route path="/recipe">
						<Recipe recipe={this.state.recipeClicked} />
					</Route>
					<footer>
						<div className="wrapper">
							<ul>
								<li>placeholder</li>
								<li>placeholder</li>
								<li>placeholder</li>
								<li>placeholder</li>
								<li>placeholder</li>
								<li>placeholder</li>
								<li>placeholder</li>
							</ul>
						</div>
					</footer>
					{/* <ul className="gallery">{this.state.resultObj ? <MealGallery resultObj={this.state.resultObj} resultExt={this.state.resultExt}/> : null}</ul> */}
				</Fragment>
			</Router>
		);
	}
}
export default App;
