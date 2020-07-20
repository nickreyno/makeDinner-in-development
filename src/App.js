import React, { Component, Fragment } from "react";
import axios from "axios";
import "./App.css";
import MealGallery from "./MealGallery.js";

class App extends Component {
	constructor() {
		super();

		this.state = {
			test: "work",
			ingredient: "",
			meals: [],
			resultObj: [0,1,2],
    resultExt: [0,1,2],
  }}

	updateIngredient = (e) => {
		this.setState({
			ingredient: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	getResultsDev = (placeHolder) => {
    let result = this.state.resultExt;
    console.log(result)
		// result = result.data.results;
		// console.log(result.data.results)
  };
  
	getResultsLive = (chosenWord) => {
		chosenWord = "chicken";
		axios({
			url: `https://api.spoonacular.com/recipes/informationBulk`,
      method: "GET",
      // responseType: 'json',
			params: {
        apiKey: "cd74bd0589054098a2161681f58192c0",
        ids: "723984,584549,667917,482574,551452,537208,",
        includeNutrition: false,
				// ingredients: chosenWord,
				// instructionsRequired: true,
				// addRecipeInformation: true,
				// number: 10,
			}
		})
			// to make sure if the word has definition
			.then((result) => {
				console.log("hey this is my .then");
        console.log(result)
				// this.setState(
				// 	{
				// 		meals: result.meals,
				// 	},
				// 	() => {
				// 		console.log(this.state.meals[0]);
				// 	}
				// );
			}).catch((err)=>{
        console.log(err.response.status)
        // if 402 error, switch API key
      });
	};

	render() {
		return (
			<div className="App">
        <nav><h2>just eat</h2>
        <button onClick={() => {
							this.getResultsDev(this.state.ingredient);
						}}>dev</button>
        <button onClick={() => {
							this.getResultsLive("chicken");
						}}>live</button>
				<form action="submit" onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.updateIngredient} />
					<input
						type="submit"
						onClick={() => {
							this.getResultsDev(this.state.ingredient);
						}}
					/>
				</form></nav>
        <header>
          <h1>What's for Dinner?</h1>
        </header>
        <main>
          <div className="wrapper">
            <div className="feature">
              <img className="featureImg" src={this.state.resultExt[0].image} alt="food"/>
              <div className="featureBlurb"><h2>{this.state.resultExt[0].title}</h2></div>
            </div>
          </div>
        </main>
				{/* <ul className="gallery">{this.state.resultObj ? <MealGallery resultObj={this.state.resultObj} resultExt={this.state.resultExt}/> : null}</ul> */}
			</div>
		);
	}
}
export default App;
