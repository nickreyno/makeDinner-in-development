import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Recipe extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
        console.log("props", this.props);
        const summary = this.props.recipe.summary
        summary.split("b>").join("strong>")
document.querySelector('.test').innerHTML = summary.split("b>").join("strong>").split("<a").join(`<a rel="noopener" target="_blank"`).split(" All things considered")[0];
    }
    // you can get the summary links to work by grabbing the id in the url link and doing a api call with it.

	render() {
		const { recipe } = this.props;
		return (
			<div className="recipePage">
				<header>
					<h2>{recipe.title}</h2>
				</header>
				<h2>placeholder</h2>
                <p className="test"></p>
			</div>
		);
	}
}
export default Recipe;
