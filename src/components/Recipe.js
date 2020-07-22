import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Recipe extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipeClicked: "",
			summaryLinkName: "",
		};
	}

	passRecipeInfo = (recipe) => {
		this.setState({
			recipeClicked: recipe,
		});
	};

	componentDidMount() {
		console.log("props", this.props);
        this.manipulateSummary();
        this.relatedRecipes();
	}

	manipulateSummary = () => {
		let summary = this.props.recipe.summary;
		// populate with api's html markup to target and manipulate it
		const summaryBlurb = document.getElementsByClassName("beforeLink");
		summaryBlurb[0].innerHTML = summary;
		// grab recipe ID to use for subsequent recipe pages
		const summaryID = summaryBlurb[0].querySelector("a").href.split("-");
		console.log(summaryID);
		// get rid of non-semantic b tag
		// ripped data from broken spoonacular tag and manipualted it to populate a router-dom-link below
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
    // to make more modular, you should gather this in app as well to trigger all of these api calls together to conserve your hit number
    relatedRecipes = () =>{
        let summary = this.props.recipe.summary.split("<a")
        summary.map((item,i)=>{
            if (i != 0 && i != 1){
                const data = item.split('">')[0].split("/")
                const dataMod = data[data.length-1].split("-")
                console.log(dataMod)
            } else return
        })
    }

	render() {
		const { recipe } = this.props;
		return (
			<div className="recipePage">
				<header>
					<h2>{recipe.title}</h2>
				</header>
				<main>
					<h2>placeholder</h2>
					<div className="summaryBlurb">
						<p>
							<span role="text" className="beforeLink"></span>
							<Link
								className="summaryLink"
								to={`/recipe/${"fill in"}`}
								onClick={() => {
									this.passRecipeInfo("fill in with recipe clicked");
								}}
							>
								{this.state.summaryLinkName}
							</Link>
							<span role="text" className="afterLink"></span>
						</p>
					</div>
				</main>
			</div>
		);
	}
}
export default Recipe;
