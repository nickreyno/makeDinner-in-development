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
		this.manipulateSummary();
	}

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
			relatedData.push({ id: item.id, title: item.title, image: item.image, summary: item.summary });
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
					<h2>Let's get Cooking!</h2>
				</header>
				<main>
					<div className="wrapper">
						<section className="featuredRecipe">
							<h2>{recipe.title}</h2>
							<img src={recipe.image} alt={recipe.title} />
							<div className="summaryBlurb">
								<p>
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
							</div>
						</section>
						<section className="relatedRecipes">
							<ul>
								{this.state.relatedRecipes ? this.state.relatedRecipes.id : "1"}
								{this.state.relatedRecipes.map((item, i) => {
									if (i != 0) {
										return (
											<li key={item.id}>
												<img src={item.image} alt={item.title} />
												<h3>{item.title}</h3>
											</li>
										);
									}
								})}
							</ul>
						</section>
					</div>
				</main>
			</div>
		);
	}
}
export default Recipe;
