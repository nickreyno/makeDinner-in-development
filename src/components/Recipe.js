import React, { Component, Fragment } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import relatedRecipesObj from "./relatedRecipesDev.js";

class Recipe extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipeClicked: "",
			summaryLinkName: "",
			relatedIDs: "",
			relatedRecipes: [],
		};
	}
	// used to generate new recipe page for link clicked
	passRecipeInfo = (recipe) => {
		this.setState({
			recipeClicked: recipe,
		});
	};

	componentDidMount() {
		console.log("props", this.props);
		this.scrollToTop();
		this.manipulateSummary();
	}
	scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	// this function manipulates the summary key adds semantic meaning as well as formatting to enable router-dom to mesh with this html
	manipulateSummary = () => {
		let summary = this.props.recipe.summary;
		// populate with api's html markup to target and manipulate it
		const summaryBlurb = document.getElementsByClassName("beforeLink");
		summaryBlurb[0].innerHTML = summary;
		// grab recipe ID to use for subsequent recipe pages
		const summaryID = summaryBlurb[0].querySelector("a").href.split("-");
		this.setState(
			{
				relatedIDs: summaryID[summaryID.length - 1],
			},
			() => {
				this.relatedRecipes("props", "recipe");
			}
		);
		// gets rid of non-semantic b tag
		// rips data from broken spoonacular tag and manipulates it to populate a router-dom-link below
		const summaryBeforeLink = summary.replace(/b>/g, "strong>").split(/<a(.*?)>/);
		const summaryAfterLink = summary.split("</a>")[1].split(" All things considered");
		this.setState({
			summaryLinkName: summaryBeforeLink[2].split("</a>")[0],
			summaryLinkPath: summaryID[summaryID.length - 1],
		});
		// update the page's html with the correct info
		document.querySelector(".beforeLink").innerHTML = summaryBeforeLink[0];
		document.querySelector(".afterLink").innerHTML = summaryAfterLink[0];
	};

	// extracts recipe id's from the featured recipe's summary key for the related recipes section
	relatedRecipes = (propOrState, key) => {
		let summary = this[propOrState][key].summary.split("<a");
		const id = [];
		summary.map((item, i) => {
			if (i != 0 && i != 1) {
				const data = item.split('">')[0].split("/");
				const dataMod = data[data.length - 1].split("-");
				id.push(dataMod.pop());
			} else return;
		});
		const firstID = this.state.relatedIDs;
		console.log(firstID);
		this.setState(
			{
				relatedIDs: `${firstID},${id.join(",")}`,
			},
			() => {
				console.log(this.state.relatedIDs);
				this.relatedRecipesCallDev(this.state.relatedIDs);
			}
		);
	};

	// makes an api call on the three related recipes so that I can pass their info through props and reuse the recipe.js component
	relatedRecipesCall = (ids) => {
		axios({
			url: `https://api.spoonacular.com/recipes/informationBulk`,
			method: "GET",
			params: {
				apiKey: "cd74bd0589054098a2161681f58192c0",
				ids: ids,
				includeNutrition: false,
				addRecipeInformation: true,
				fillIngredients: true,
			},
		})
			// to make sure if the word has definition
			.then((result) => {
				console.log("hey this is my .related recipes");
				console.log(result);
			})
			.catch((err) => {
				console.log(err.response.status);
				// if 402 error, switch API key
			});
	};

	// for dev work to conserve API rate limit
	relatedRecipesCallDev = (ids) => {
		const result = relatedRecipesObj;
		const relatedData = [];
		result.data.forEach((item) => {
			// until i know all data needed, i'm just grabbing everything
			// relatedData.push({ id: item.id, title: item.title, image: item.image, summary: item.summary });
			relatedData.push(item);
		});
		this.setState({ relatedRecipes: relatedData }, () => {
			console.log(this.state.relatedRecipes);
		});
	};

	render() {
		const { recipe } = this.props;
		// const { relatedRecipes } = this.state;
		return (
			<div className="recipePage">
				<header>
					<h1>{recipe.title}</h1>
				</header>
				<main>
					<div className="titleCard">
						{/* <h2>{recipe.title}</h2> */}
						{recipe.diets.length < 1 ? null : recipe.diets.length == 1 ? (
							<p className="dietaryInfo">This meal is{recipe.diets[0]}. </p>
						) : recipe.diets.length == 2 ? (
							<p className="dietaryInfo">
								This meal is {recipe.diets[0]}, and {recipe.diets[1]}.
							</p>
						) : (
							<p className="dietaryInfo">
								This meal is:{" "}
								{recipe.diets.map((item, i) => {
									if (i == recipe.diets.length - 2) {
										return (item += ", and ");
									} else if (i == recipe.diets.length - 1) {
										return (item += ".");
									} else return (item += ", ");
								})}
							</p>
						)}
					</div>
					<div className="wrapper">
						<section className="featuredRecipe clearfix">
							<img src={recipe.image} alt={recipe.title} />
							<p className="summaryBlurb">
								<span role="text" className="beforeLink"></span>
								<Link
									className="summaryLink"
									to={`/recipe/${this.state.summaryLinkPath}`}
									onClick={() => {
										this.passRecipeInfo(this.state.summaryLinkPath);
									}}
								>
									{this.state.summaryLinkName}
								</Link>
								<span role="text" className="afterLink"></span>
							</p>
						</section>
						<section className="cookingInfo">
							<div className="ingredients">
								<h3>Ingredients</h3>
								<ul>
									{recipe.extendedIngredients.map((item, i) => {
										return (
											<li key={item.id}>
												<img src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt="" />
												<p>{item.original}</p>
											</li>
										);
									})}
								</ul>
							</div>
							<div className="instructions">
								<h3>Instructions</h3>
								<ol>
									{recipe.analyzedInstructions[0].steps.map((item) => {
										return <li key={item.number}>{item.step}</li>;
									})}
								</ol>
							</div>
						</section>
					</div>
					<section className="relatedRecipes">
						<h2 className="relatedRecipesTitle">Try Similar Recipes</h2>
						<div className="wrapper">
							<ul>
								{this.state.relatedRecipes ? this.state.relatedRecipes.id : "1"}
								{this.state.relatedRecipes.map((item, i) => {
									// if (i != 0) {
										return (
											<li key={item.id}>
												<img src={item.image} alt={item.title} />
												<h3>{item.title}</h3>
                                                <p>{item.summary.split(".")[0].replace("<b>","").replace("</b>","")}.</p>
                                                <p><strong>Diets: </strong>{item.diets.join(", ")}</p>
												<p>
													<strong>Ready in: </strong>{item.readyInMinutes} minutes, serves {item.servings}
												</p>
											</li>
										);
									// }
								})}
							</ul>
						</div>
					</section>
				</main>
			</div>
		);
	}
}
export default Recipe;
