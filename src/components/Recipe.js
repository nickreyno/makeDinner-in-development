import React, { Component, Fragment } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
// import relatedRecipesObj from "./relatedRecipesDev.js";

class Recipe extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipe: this.props.recipe,
			recipeClicked: [],
			summaryLinkName: "",
			relatedIDs: "",
			relatedRecipes: [],
			apiKey: [
				"cd74bd0589054098a2161681f58192c0",
				"a8e92198263545bcb214ec6e78a03c7f",
				"03807c83cc6546a980c784079a8c2fd8",
				"ffbaefcb24f942e3b26825d47ad292b0",
				"0d411c50c97a49d5a155391721a6abea",
				"e429c44d3e5e48beacacf5b14cc993a2",
			],
		};
	}
	componentDidMount() {
		console.log("props", this.props);
		console.log("related", this.state.relatedRecipes);
		this.scrollToTop();
		this.manipulateSummary();
	}

	// used to generate new recipe page for link clicked
	updateRecipePage = (recipe) => {
		this.setState(
			{
				recipe: recipe,
				relatedRecipes: [],
			},
			() => {
				console.log("second round", this.state.recipe);
				this.manipulateSummary();
			}
		);
	};

	scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	// this function manipulates the summary key adds semantic meaning as well as formatting to enable router-dom to mesh with this html
	manipulateSummary = () => {
		let summary = this.state.recipe.summary;
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
				this.relatedRecipes();
				// gets rid of non-semantic b tag
				// rips data from broken spoonacular tag and manipulates it to populate a router-dom-link below
				let summaryMod = summary.replace(/b>/g, "strong>").split(/<a(.*?)>/);
				// const summaryAfterLink = summary.split("</a>")[1].split(" All things considered");
				this.setState({
					summaryLinkName: summaryMod[2].split("</a>")[0],
					summaryLinkPath: summaryID[summaryID.length - 1],
				});
				console.log(summaryMod);
				summaryMod = summaryMod[0].split("spoonacular")[0].split(".");
				summaryMod.pop();
				summaryMod = summaryMod.join(". ") + ". If you enjoy this recipe, you should try ";
				// update the page's html with the correct info
				document.querySelector(".beforeLink").innerHTML = summaryMod;
				// document.querySelector(".afterLink").innerHTML = summaryAfterLink[0];
			}
		);
	};

	// extracts recipe id's from the featured recipe's summary key for the related recipes section
	relatedRecipes = () => {
		let summary = this.state.recipe.summary.split("<a");
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
				this.relatedRecipesCall(this.state.relatedIDs);
				// this.relatedRecipesCallDev(this.state.relatedIDs);
			}
		);
	};

	// makes an api call on the three related recipes so that I can pass their info through props and reuse the recipe.js component
	relatedRecipesCall = (ids) => {
		axios({
			url: `https://api.spoonacular.com/recipes/informationBulk`,
			method: "GET",
			params: {
				apiKey: this.state.apiKey[0],
				ids: ids,
				instructionsRequired: true,
				addRecipeInformation: true,
				fillIngredients: true,
			},
		})
			// to make sure if the word has definition
			.then((result) => {
				console.log("hey this is my .related recipes");
				console.log(result);
				const resultMod = [];
				// api doesn't properly filter for instructions so I double check and filter out.
				result.data.forEach((result) => {
					if (result.instructions != null) {
						resultMod.push(result);
					}
				});

				this.setState({ relatedRecipes: resultMod }, () => {
					console.log(this.state.relatedRecipes);
				});
			})
			.catch((err) => {
				// added if err due to poor internet not making axios call properly
				if (err) {
					console.log(err.response.status);
					// if 402 error, switch API key
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
								this.relatedRecipesCall(ids);
							}
						);
					}
				}
			});
	};

	// for dev work to conserve API rate limit
	// relatedRecipesCallDev = (ids) => {
	// 	const result = relatedRecipesObj;
	// 	const relatedData = [];
	// 	result.data.forEach((item) => {
	// 		// until i know all data needed, i'm just grabbing everything
	// 		// relatedData.push({ id: item.id, title: item.title, image: item.image, summary: item.summary });
	// 		relatedData.push(item);
	// 	});
	// 	this.setState({ relatedRecipes: relatedData }, () => {
	// 		console.log(this.state.relatedRecipes);
	// 	});
	// };

	render() {
		const { recipe } = this.state;
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
								{this.state.relatedRecipes.length > 0 ? (
									<Link
										className="summaryLink"
										to={`/recipe/${this.state.relatedRecipes[0].id}`}
										onClick={() => {
											this.updateRecipePage(this.state.relatedRecipes[0]);
										}}
									>
										{this.state.relatedRecipes[0].title}
									</Link>
								) : null}
								. Happy Cooking!
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
						<div className="wrapper">
							<h2 className="relatedRecipesTitle">Try Similar Recipes</h2>
							<ul>
								{this.state.relatedRecipes.length > 0 ? this.state.relatedRecipes.id : "1"}
								{this.state.relatedRecipes.map((item, i) => {
									// if (i != 0) {
									return (
										<li key={item.id}>
											<img src={item.image} alt={item.title} />
											<h3>{item.title}</h3>
											<p>{item.summary.split(".")[0].replace("<b>", "").replace("</b>", "")}.</p>
											<p>
												<strong>Diets: </strong>
												{item.diets.join(", ")}
											</p>
											<p>
												<strong>Ready in: </strong>
												{item.readyInMinutes} minutes, serves {item.servings}
											</p>
										</li>
									);
									// }
								})}
							</ul>
						</div>
					</section>
					<div className="randomRecipe">
						<h2>Try Something New</h2>
					</div>
					<div className="dessertRecipe">
						<h2>Skip to Dessert</h2>
					</div>
				</main>
			</div>
		);
	}
}
export default Recipe;
