import React, { Component, Fragment } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MealGallery from "./components/MealGallery.js";
import Recipe from "./components/Recipe.js";
// import resultObj from "./assets/resultObj.js";
import resultObj from "./assets/resultObjNew.js";
import Filters from "./components/Filters.js";
import Browse from "./components/Browse.js";
// import resultExt from "./assets/resultExt.js"

class App extends Component {
	constructor() {
		super();

		this.state = {
			test: "work",
			ingredient: "",
			meals: [],
			resultObj: resultObj,
			// resultObj: {},
			recipeClicked: resultObj[0],
			// resultExt: resultExt,
			apiKey: [
				"cd74bd0589054098a2161681f58192c0",
				"a8e92198263545bcb214ec6e78a03c7f",
				"03807c83cc6546a980c784079a8c2fd8",
				"ffbaefcb24f942e3b26825d47ad292b0",
				"0d411c50c97a49d5a155391721a6abea",
				"e429c44d3e5e48beacacf5b14cc993a2",
			],
			browseComponentInfo: [],
		};
	}

	componentDidMount() {
		this.shorten();
	}

	handleLinks = (filter, subFilter) => {
		console.log("it worked baby");

		this.setState({
			browseComponentInfo: [filter, subFilter],
		});
	};
	shorten = () => {
		const shorter = [];
		this.state.resultObj.map((item, i) => {
			shorter.push({
				id: item.id,
				summary: item.summary,
				diets: item.diets,
				title: item.title,
				image: item.image,
				extendedIngredients: item.extendedIngredients,
				analyzedInstructions: item.analyzedInstructions,
				readyInMinutes: item.readyInMinutes,
				servings: item.servings,
				spoonacularScore: item.spoonacularScore,
			});
		});
		console.log(shorter);
	};

	updateIngredient = (e) => {
		this.setState({
			ingredient: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	getResultsLive = (chosenWord) => {
		// chosenWord = "main course";
		console.log("working");
		axios({
			url: `https://api.spoonacular.com/recipes/complexSearch`,
			// url: `https://api.spoonacular.com/recipes/130933/information`,
			method: "GET",
			params: {
				apiKey: this.state.apiKey[0],
				query: chosenWord,
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
							this.getResultsLive(chosenWord);
						}
					);
				}
			});
	};
	passRecipeInfo = (recipe) => {
		this.setState({
			recipeClicked: recipe,
		});
	};

	render() {
		const results = this.state.resultObj;
		const param = this.state.browseComponentInfo
		return (
			<Router>
				<Fragment>
					<nav>
						<div className="wrapper">
							<Filters linksToParent={this.handleLinks} />
							<Link to="/">
								<p>just eat</p>
							</Link>
							<form className="searchForm" action="submit" onSubmit={this.handleSubmit}>
								<input className="searchField" type="text" onChange={this.updateIngredient} />
								<button
									className="searchButton"
									type="submit"
									onClick={() => {
										this.getResultsLive(this.state.ingredient);
									}}
								>
									{/* <i className="fas fa-search"></i> */}
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
							<h2> Browse our favs or search for your own! </h2>
							<div className="wrapper">
								{this.state.resultObj.length > 0 ? (
									<ul className="homePageRecipes">
										<li className="feature">
											<Link
												to={`/recipe/${results[0].id}`}
												onClick={() => {
													this.passRecipeInfo(results[0]);
												}}
											>
												<img src={results[0].image} alt="food" />
												<div className="featureBlurb">
													<h3>{results[0].title}</h3>
													<ul>
														<li> ready in: {results[0].readyInMinutes} minutes</li>
														<li> serves: {results[0].servings}</li>
														<li>{results[0].summary.split(".")[0]}</li>
													</ul>
												</div>
											</Link>
										</li>
										{results.map((entry, i) => {
											if (i != 0) {
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
								) : null}
							</div>
						</main>
					</Route>
					<Route path="/recipe">
						<Recipe recipe={this.state.recipeClicked} />
					</Route>
					<Route path={`/browse/${param[0]}/${param[1]}`}>
						<Browse filters={param} />
					</Route>
					<footer>
						<div className="wrapper">
							<ul>
								<li>
									<Link to="/about_us">About us</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
								<li>
									<Link to="/FAQ">FAQ</Link>
								</li>
								<li>
									<Link to="/Jobs">Jobs</Link>
								</li>
								<li>
									<Link to="/our_work">Our Work</Link>
								</li>
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
