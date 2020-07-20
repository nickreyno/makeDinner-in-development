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
			resultObj: {
				data: {
					results: [
						{
							id: 723984,
							title: "Cabbage Salad with Peanuts",
							readyInMinutes: 15,
							servings: 2,
							sourceUrl: "http://naturallyella.com/cabbage-salad-with-peanuts/",
							openLicense: 0,
							image: "cabbage-salad-with-peanuts-723984.jpg",
						},
						{
							id: 584549,
							title: "Stuffed Sweet Potato with Spinach, Hummus & Feta",
							readyInMinutes: 16,
							servings: 1,
							sourceUrl: "http://www.cookincanuck.com/2013/09/stuffed-sweet-potato-recipe-with-spinach-hummus-feta/",
							openLicense: 0,
							image: "Stuffed-Sweet-Potato-with-Spinach--Hummus---Feta-584549.jpg",
						},
						{
							id: 667917,
							title: "Cilantro Salsa",
							readyInMinutes: 20,
							servings: 2,
							sourceUrl: "http://www.thegraciouspantry.com/clean-eating-cilantro-salsa/",
							openLicense: 0,
							image: "Cilantro-Salsa-667917.jpg",
						},
						{
							id: 482574,
							title: "Slow Cooker Vegetarian Chili with Butternut Squash",
							readyInMinutes: 250,
							servings: 4,
							sourceUrl: "http://thelemonbowl.com/2013/04/slow-cooker-vegetarian-chili-with-butternut-squash.html",
							openLicense: 0,
							image: "Slow-Cooker-Vegetarian-Chili-with-Butternut-Squash-482574.jpg",
						},
						{
							id: 551452,
							title: "Beef Liver with Fig, Bacon and Caramelized Onion Compote [or the ultimate beef liver ]",
							readyInMinutes: 45,
							servings: 2,
							sourceUrl:
								"http://thehealthyfoodie.com/2013/07/11/beef-liver-with-fig-bacon-and-caramelized-onion-compote/",
							openLicense: 0,
							image:
								"Beef-Liver-with-Fig--Bacon-and-Caramelized-Onion-Compote-[or-the-ultimate-beef-liver-]-551452.png",
						},
						{
							id: 537208,
							title: "Rhubarb Strawberry Smoothie",
							readyInMinutes: 10,
							servings: 2,
							sourceUrl: "http://shewearsmanyhats.com/2011/05/rhubarb-strawberry-smoothie/",
							openLicense: 0,
							image: "Rhubarb-Strawberry-Smoothie-537208.jpg",
						},
						{
							id: 504218,
							title: "Mexican Vegetables on Cornbread",
							readyInMinutes: 45,
							servings: 4,
							sourceUrl: "http://eatathomecooks.com/2009/05/mexican-vegetables-on-cornbread.html",
							openLicense: 0,
							image: "Mexican-Vegetables-on-Cornbread-504218.jpg",
						},
						{
							id: 222878,
							title: "Grilled goat's cheese with cranberry dressing",
							readyInMinutes: 20,
							servings: 6,
							sourceUrl: "https://www.bbcgoodfood.com/recipes/4982/grilled-goats-cheese-with-cranberry-dressing",
							openLicense: 0,
							image: "Grilled-goats-cheese-with-cranberry-dressing-222878.jpg",
						},
						{
							id: 222482,
							title: "Roasted vegetable & feta tostada",
							readyInMinutes: 30,
							servings: 2,
							sourceUrl: "https://www.bbcgoodfood.com/recipes/1658642/roasted-vegetable-and-feta-tostada",
							openLicense: 0,
							image: "Roasted-vegetable---feta-tostada-222482.jpg",
						},
						{
							id: 551484,
							title: "blackened salmon tacos with cilantro yogurt sauce",
							readyInMinutes: 45,
							servings: 2,
							sourceUrl:
								"http://www.greensnchocolate.com/2013/07/blackened-salmon-tacos-with-cilantro-yogurt-sauce.html",
							openLicense: 0,
							image: "blackened-salmon-tacos-with-cilantro-yogurt-sauce-551484.jpg",
						},
					],
					baseUri: "https://spoonacular.com/recipeImages/",
					offset: 0,
					number: 10,
					totalResults: 368461,
					processingTimeMs: 251,
					expires: 1595238449226,
					isStale: false,
				},
				status: 200,
				statusText: "OK",
				headers: {
					"content-type": "application/json",
				},
				config: {
					url: "https://api.spoonacular.com/recipes/search",
					method: "get",
					params: {
						apiKey: "cd74bd0589054098a2161681f58192c0",
						ingredients: "chicken",
					},
					headers: {
						Accept: "application/json, text/plain, */*",
					},
					transformRequest: [null],
					transformResponse: [null],
					timeout: 0,
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					maxContentLength: -1,
				},
				request: {},
      },
      // do not expand this
      resultExt: [
        {
          "vegetarian": true,
          "vegan": true,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": true,
          "sustainable": false,
          "weightWatcherSmartPoints": 15,
          "gaps": "no",
          "lowFodmap": false,
          "preparationMinutes": 15,
          "cookingMinutes": 0,
          "aggregateLikes": 411,
          "spoonacularScore": 100,
          "healthScore": 93,
          "creditsText": "Naturally Ella",
          "sourceName": "Naturally Ella",
          "pricePerServing": 115.09,
          "extendedIngredients": [
            {
              "id": 1002030,
              "aisle": "Spices and Seasonings",
              "image": "pepper.jpg",
              "consistency": "solid",
              "name": "black pepper",
              "original": "¼ teaspoon black pepper",
              "originalString": "¼ teaspoon black pepper",
              "originalName": "black pepper",
              "amount": 0.25,
              "unit": "teaspoon",
              "meta": [
                "black"
              ],
              "metaInformation": [
                "black"
              ],
              "measures": {
                "us": {
                  "amount": 0.25,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                },
                "metric": {
                  "amount": 0.25,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                }
              }
            },
            {
              "id": 93784,
              "aisle": "Health Foods;Baking",
              "image": "corn-syrup.png",
              "consistency": "solid",
              "name": "brown rice syrup",
              "original": "2 teaspoons brown rice syrup",
              "originalString": "2 teaspoons brown rice syrup",
              "originalName": "brown rice syrup",
              "amount": 2,
              "unit": "teaspoons",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                }
              }
            },
            {
              "id": 4042,
              "aisle": "Oil, Vinegar, Salad Dressing",
              "image": "peanut-oil.jpg",
              "consistency": "liquid",
              "name": "peanut oil",
              "original": "2 tablespoons roasted peanut oil",
              "originalString": "2 tablespoons roasted peanut oil",
              "originalName": "roasted peanut oil",
              "amount": 2,
              "unit": "tablespoons",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                }
              }
            },
            {
              "id": 16091,
              "aisle": "Nuts;Savory Snacks",
              "image": "peanuts.png",
              "consistency": "solid",
              "name": "peanuts",
              "original": "3/4 cup raw peanuts",
              "originalString": "3/4 cup raw peanuts",
              "originalName": "raw peanuts",
              "amount": 0.75,
              "unit": "cup",
              "meta": [
                "raw"
              ],
              "metaInformation": [
                "raw"
              ],
              "measures": {
                "us": {
                  "amount": 0.75,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 177.441,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            },
            {
              "id": 11112,
              "aisle": "Produce",
              "image": "red-cabbage.png",
              "consistency": "solid",
              "name": "red cabbage",
              "original": "2 cups shredded red cabbage",
              "originalString": "2 cups shredded red cabbage",
              "originalName": "shredded red cabbage",
              "amount": 2,
              "unit": "cups",
              "meta": [
                "shredded",
                "red"
              ],
              "metaInformation": [
                "shredded",
                "red"
              ],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 473.176,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            },
            {
              "id": 1022053,
              "aisle": "Ethnic Foods;Oil, Vinegar, Salad Dressing",
              "image": "rice-vinegar.png",
              "consistency": "liquid",
              "name": "rice vinegar",
              "original": "2 tablespoons rice vinegar",
              "originalString": "2 tablespoons rice vinegar",
              "originalName": "rice vinegar",
              "amount": 2,
              "unit": "tablespoons",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                }
              }
            },
            {
              "id": 2047,
              "aisle": "Spices and Seasonings",
              "image": "salt.jpg",
              "consistency": "solid",
              "name": "salt",
              "original": "¼ teaspoon salt",
              "originalString": "¼ teaspoon salt",
              "originalName": "salt",
              "amount": 0.25,
              "unit": "teaspoon",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 0.25,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                },
                "metric": {
                  "amount": 0.25,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                }
              }
            },
            {
              "id": 11114,
              "aisle": "Produce",
              "image": "savoy-cabbage.jpg",
              "consistency": "solid",
              "name": "savoy cabbage",
              "original": "2 cups shredded savoy cabbage",
              "originalString": "2 cups shredded savoy cabbage",
              "originalName": "shredded savoy cabbage",
              "amount": 2,
              "unit": "cups",
              "meta": [
                "shredded"
              ],
              "metaInformation": [
                "shredded"
              ],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 473.176,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            },
            {
              "id": 11291,
              "aisle": "Produce",
              "image": "spring-onions.jpg",
              "consistency": "solid",
              "name": "scallions",
              "original": "¼ cup diced scallions, whites and greens",
              "originalString": "¼ cup diced scallions, whites and greens",
              "originalName": "diced scallions, whites and greens",
              "amount": 0.25,
              "unit": "cup",
              "meta": [
                "diced"
              ],
              "metaInformation": [
                "diced"
              ],
              "measures": {
                "us": {
                  "amount": 0.25,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 59.147,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            }
          ],
          "id": 723984,
          "title": "Cabbage Salad with Peanuts",
          "readyInMinutes": 15,
          "servings": 2,
          "sourceUrl": "http://naturallyella.com/cabbage-salad-with-peanuts/",
          "image": "https://spoonacular.com/recipeImages/723984-556x370.jpg",
          "imageType": "jpg",
          "nutrition": {
            "nutrients": [
              {
                "title": "Calories",
                "amount": 516.03,
                "unit": "cal",
                "percentOfDailyNeeds": 25.8
              },
              {
                "title": "Fat",
                "amount": 41.4,
                "unit": "g",
                "percentOfDailyNeeds": 63.69
              },
              {
                "title": "Saturated Fat",
                "amount": 6.59,
                "unit": "g",
                "percentOfDailyNeeds": 41.16
              },
              {
                "title": "Carbohydrates",
                "amount": 27.96,
                "unit": "g",
                "percentOfDailyNeeds": 9.32
              },
              {
                "title": "Net Carbohydrates",
                "amount": 18.33,
                "unit": "g",
                "percentOfDailyNeeds": 6.66
              },
              {
                "title": "Sugar",
                "amount": 11.25,
                "unit": "g",
                "percentOfDailyNeeds": 12.5
              },
              {
                "title": "Cholesterol",
                "amount": 0,
                "unit": "mg",
                "percentOfDailyNeeds": 0
              },
              {
                "title": "Sodium",
                "amount": 355.83,
                "unit": "mg",
                "percentOfDailyNeeds": 15.47
              },
              {
                "title": "Protein",
                "amount": 17.48,
                "unit": "g",
                "percentOfDailyNeeds": 34.97
              },
              {
                "title": "Vitamin K",
                "amount": 108.54,
                "unit": "µg",
                "percentOfDailyNeeds": 103.37
              },
              {
                "title": "Manganese",
                "amount": 1.85,
                "unit": "mg",
                "percentOfDailyNeeds": 92.46
              },
              {
                "title": "Vitamin C",
                "amount": 74.78,
                "unit": "mg",
                "percentOfDailyNeeds": 90.64
              },
              {
                "title": "Folate",
                "amount": 211.46,
                "unit": "µg",
                "percentOfDailyNeeds": 52.87
              },
              {
                "title": "Vitamin B3",
                "amount": 9.37,
                "unit": "mg",
                "percentOfDailyNeeds": 46.85
              },
              {
                "title": "Fiber",
                "amount": 9.63,
                "unit": "g",
                "percentOfDailyNeeds": 38.51
              },
              {
                "title": "Vitamin A",
                "amount": 1819.23,
                "unit": "IU",
                "percentOfDailyNeeds": 36.38
              },
              {
                "title": "Magnesium",
                "amount": 139.87,
                "unit": "mg",
                "percentOfDailyNeeds": 34.97
              },
              {
                "title": "Vitamin B1",
                "amount": 0.48,
                "unit": "mg",
                "percentOfDailyNeeds": 32.18
              },
              {
                "title": "Copper",
                "amount": 0.57,
                "unit": "mg",
                "percentOfDailyNeeds": 28.31
              },
              {
                "title": "Phosphorus",
                "amount": 274.19,
                "unit": "mg",
                "percentOfDailyNeeds": 27.42
              },
              {
                "title": "Vitamin B6",
                "amount": 0.52,
                "unit": "mg",
                "percentOfDailyNeeds": 25.89
              },
              {
                "title": "Potassium",
                "amount": 822.81,
                "unit": "mg",
                "percentOfDailyNeeds": 23.51
              },
              {
                "title": "Iron",
                "amount": 3.35,
                "unit": "mg",
                "percentOfDailyNeeds": 18.63
              },
              {
                "title": "Vitamin E",
                "amount": 2.48,
                "unit": "mg",
                "percentOfDailyNeeds": 16.57
              },
              {
                "title": "Calcium",
                "amount": 140.5,
                "unit": "mg",
                "percentOfDailyNeeds": 14.05
              },
              {
                "title": "Vitamin B5",
                "amount": 1.24,
                "unit": "mg",
                "percentOfDailyNeeds": 12.43
              },
              {
                "title": "Zinc",
                "amount": 1.6,
                "unit": "mg",
                "percentOfDailyNeeds": 10.67
              },
              {
                "title": "Vitamin B2",
                "amount": 0.17,
                "unit": "mg",
                "percentOfDailyNeeds": 9.81
              },
              {
                "title": "Selenium",
                "amount": 5.27,
                "unit": "µg",
                "percentOfDailyNeeds": 7.53
              }
            ],
            "ingredients": [
              {
                "name": "black pepper",
                "amount": 0.13,
                "unit": "teaspoon",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0.16,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0.04,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.01,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 0.63,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.43,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0.4,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 1.37,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.06,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 1.11,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.41,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.1,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 0.09,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 3.32,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "brown rice syrup",
                "amount": 1,
                "unit": "teaspoons",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 7.38,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 26.2,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.24,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 6.67,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 5.95,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 7.38,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 7.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 0,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "peanut oil",
                "amount": 1,
                "unit": "tablespoons",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 14,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 123.76,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 2.37,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 6.47,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 4.48,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 2.2,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.1,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 0,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "peanuts",
                "amount": 0.38,
                "unit": "cup",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 8.66,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 131.4,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 1.16,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 3.94,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 27.16,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 312.08,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 4.18,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 2.14,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 8.72,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 102.93,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.19,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 212.43,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 12.22,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 14.32,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.97,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 9.42,
                    "unit": "g"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.49,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.37,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 5.2,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 58.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 3.46,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 12.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 1.45,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 407.34,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "red cabbage",
                "amount": 1,
                "unit": "cups",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 6.56,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 16.02,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.2,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.53,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.14,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 27.59,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.71,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.37,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 14.24,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.19,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 26.7,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 1.27,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 993.24,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.13,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.07,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 1.87,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 40.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 34,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 3.41,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 4.69,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 24.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.22,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 15.22,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 50.73,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 216.27,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "rice vinegar",
                "amount": 1,
                "unit": "tablespoons",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.08,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 2.88,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.16,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0.64,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 0.96,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0.32,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 0.32,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "salt",
                "amount": 0.13,
                "unit": "teaspoon",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 0,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 0.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 290.69,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 0.06,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "savoy cabbage",
                "amount": 1,
                "unit": "cups",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 4.27,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 56,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.19,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.63,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.07,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 18.9,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.28,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.21,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 19.6,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.13,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 29.4,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 1.4,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 700,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.13,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.12,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 2.17,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 24.5,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 48.16,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 1.59,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 2.1,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 19.6,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.13,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 8.61,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 21.7,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 161,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "scallions",
                "amount": 0.13,
                "unit": "cup",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0.92,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 8,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.08,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 4,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.19,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 2.5,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 4.63,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.23,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 124.63,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.33,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 9,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 25.88,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.29,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.59,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 2,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.71,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 2.35,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 34.5,
                    "unit": "mg"
                  }
                ]
              }
            ],
            "caloricBreakdown": {
              "percentProtein": 12.61,
              "percentFat": 67.21,
              "percentCarbs": 20.18
            },
            "weightPerServing": {
              "amount": 267,
              "unit": "g"
            }
          },
          "summary": "You can never have too many main course recipes, so give Cabbage Salad with Peanuts a try. This gluten free and vegan recipe serves 2 and costs <b>$1.15 per serving</b>. One serving contains <b>516 calories</b>, <b>17g of protein</b>, and <b>41g of fat</b>. Plenty of people made this recipe, and 406 would say it hit the spot. A mixture of peanuts, cabbage, roasted peanut oil, and a handful of other ingredients are all it takes to make this recipe so flavorful. To use up the rice vinegar you could follow this main course with the <a href=\"https://spoonacular.com/recipes/red-velvet-mug-cake-189954\">Red Velvet Mug Cake</a> as a dessert. From preparation to the plate, this recipe takes approximately <b>15 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is great. Try <a href=\"https://spoonacular.com/recipes/napa-cabbage-salad-with-peanuts-and-ginger-93233\">Napa Cabbage Salad with Peanuts and Ginger</a>, <a href=\"https://spoonacular.com/recipes/cabbage-and-lime-salad-with-roasted-peanuts-11412\">Cabbage And Lime Salad With Roasted Peanuts</a>, and <a href=\"https://spoonacular.com/recipes/oriental-noodle-salad-with-peanuts-spinach-cabbage-92705\">Oriental Noodle Salad With Peanuts, Spinach & Cabbage</a> for similar recipes.",
          "cuisines": [],
          "dishTypes": [
            "salad"
          ],
          "diets": [
            "gluten free",
            "dairy free",
            "lacto ovo vegetarian",
            "vegan"
          ],
          "occasions": [],
          "winePairing": {},
          "instructions": "Place the shredded cabbage and scallions in a large bowl. Heat a medium dry skillet over medium-low heat. Add nuts and let toast, stirring every 20 seconds or so, until the nuts are lightly browning. Add to cabbage mixture.In a small bowl, whisk together the ingredients for the dressing. Pour over the cabbage and toss until everything is well combined and cabbage is coated. Taste and add more salt if desired. Let sit for 5 minutes before serving.",
          "analyzedInstructions": [
            {
              "name": "",
              "steps": [
                {
                  "number": 1,
                  "step": "Place the shredded cabbage and scallions in a large bowl.",
                  "ingredients": [
                    {
                      "id": 11291,
                      "name": "green onions",
                      "localizedName": "green onions",
                      "image": "spring-onions.jpg"
                    },
                    {
                      "id": 11109,
                      "name": "cabbage",
                      "localizedName": "cabbage",
                      "image": "cabbage.jpg"
                    }
                  ],
                  "equipment": [
                    {
                      "id": 404783,
                      "name": "bowl",
                      "localizedName": "bowl",
                      "image": "bowl.jpg"
                    }
                  ]
                },
                {
                  "number": 2,
                  "step": "Heat a medium dry skillet over medium-low heat.",
                  "ingredients": [],
                  "equipment": [
                    {
                      "id": 404645,
                      "name": "frying pan",
                      "localizedName": "frying pan",
                      "image": "pan.png"
                    }
                  ]
                },
                {
                  "number": 3,
                  "step": "Add nuts and let toast, stirring every 20 seconds or so, until the nuts are lightly browning.",
                  "ingredients": [
                    {
                      "id": 18070,
                      "name": "toast",
                      "localizedName": "toast",
                      "image": "toast"
                    },
                    {
                      "id": 12135,
                      "name": "nuts",
                      "localizedName": "nuts",
                      "image": "nuts-mixed.jpg"
                    }
                  ],
                  "equipment": []
                },
                {
                  "number": 4,
                  "step": "Add to cabbage mixture.In a small bowl, whisk together the ingredients for the dressing.",
                  "ingredients": [
                    {
                      "id": 11109,
                      "name": "cabbage",
                      "localizedName": "cabbage",
                      "image": "cabbage.jpg"
                    }
                  ],
                  "equipment": [
                    {
                      "id": 404661,
                      "name": "whisk",
                      "localizedName": "whisk",
                      "image": "whisk.png"
                    },
                    {
                      "id": 404783,
                      "name": "bowl",
                      "localizedName": "bowl",
                      "image": "bowl.jpg"
                    }
                  ]
                },
                {
                  "number": 5,
                  "step": "Pour over the cabbage and toss until everything is well combined and cabbage is coated. Taste and add more salt if desired.",
                  "ingredients": [
                    {
                      "id": 11109,
                      "name": "cabbage",
                      "localizedName": "cabbage",
                      "image": "cabbage.jpg"
                    },
                    {
                      "id": 2047,
                      "name": "salt",
                      "localizedName": "salt",
                      "image": "salt.jpg"
                    }
                  ],
                  "equipment": []
                },
                {
                  "number": 6,
                  "step": "Let sit for 5 minutes before serving.",
                  "ingredients": [],
                  "equipment": [],
                  "length": {
                    "number": 5,
                    "unit": "minutes"
                  }
                }
              ]
            }
          ],
          "originalId": null
        },
        {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": false,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": true,
          "sustainable": false,
          "weightWatcherSmartPoints": 12,
          "gaps": "no",
          "lowFodmap": false,
          "preparationMinutes": 10,
          "cookingMinutes": 6,
          "aggregateLikes": 1501,
          "spoonacularScore": 100,
          "healthScore": 69,
          "creditsText": "Cookin Canuck",
          "sourceName": "Cookin Canuck",
          "pricePerServing": 240.25,
          "extendedIngredients": [
            {
              "id": 1019,
              "aisle": "Cheese",
              "image": "feta.png",
              "consistency": "solid",
              "name": "feta cheese",
              "original": "2 tbsp feta cheese",
              "originalString": "2 tbsp feta cheese",
              "originalName": "feta cheese",
              "amount": 2,
              "unit": "tbsp",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                }
              }
            },
            {
              "id": 11215,
              "aisle": "Produce",
              "image": "garlic.png",
              "consistency": "solid",
              "name": "garlic clove",
              "original": "1 garlic clove, minced",
              "originalString": "1 garlic clove, minced",
              "originalName": "garlic clove, minced",
              "amount": 1,
              "unit": "",
              "meta": [
                "minced"
              ],
              "metaInformation": [
                "minced"
              ],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "",
                  "unitLong": ""
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "",
                  "unitLong": ""
                }
              }
            },
            {
              "id": 1002030,
              "aisle": "Spices and Seasonings",
              "image": "pepper.jpg",
              "consistency": "solid",
              "name": "ground pepper",
              "original": "¼ tsp ground pepper",
              "originalString": "¼ tsp ground pepper",
              "originalName": "ground pepper",
              "amount": 0.25,
              "unit": "tsp",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 0.25,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                },
                "metric": {
                  "amount": 0.25,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                }
              }
            },
            {
              "id": 16158,
              "aisle": "Refrigerated",
              "image": "hummus.jpg",
              "consistency": "solid",
              "name": "hummus",
              "original": "1 tbsp hummus",
              "originalString": "1 tbsp hummus",
              "originalName": "hummus",
              "amount": 1,
              "unit": "tbsp",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "Tbsp",
                  "unitLong": "Tbsp"
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "Tbsp",
                  "unitLong": "Tbsp"
                }
              }
            },
            {
              "id": 4053,
              "aisle": "Oil, Vinegar, Salad Dressing",
              "image": "olive-oil.jpg",
              "consistency": "liquid",
              "name": "olive oil",
              "original": "1 tsp olive oil",
              "originalString": "1 tsp olive oil",
              "originalName": "olive oil",
              "amount": 1,
              "unit": "tsp",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "tsp",
                  "unitLong": "teaspoon"
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "tsp",
                  "unitLong": "teaspoon"
                }
              }
            },
            {
              "id": 10011457,
              "aisle": "Produce",
              "image": "spinach.jpg",
              "consistency": "solid",
              "name": "spinach",
              "original": "2 cups (lightly packed) spinach, thinly sliced",
              "originalString": "2 cups (lightly packed) spinach, thinly sliced",
              "originalName": "(lightly packed) spinach, thinly sliced",
              "amount": 2,
              "unit": "cups",
              "meta": [
                "packed",
                "thinly sliced",
                "(lightly )"
              ],
              "metaInformation": [
                "packed",
                "thinly sliced",
                "(lightly )"
              ],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 473.176,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            },
            {
              "id": 11507,
              "aisle": "Produce",
              "image": "sweet-potato.png",
              "consistency": "solid",
              "name": "sweet potato",
              "original": "1 medium sweet potato",
              "originalString": "1 medium sweet potato",
              "originalName": "sweet potato",
              "amount": 1,
              "unit": "medium",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "medium",
                  "unitLong": "medium"
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "medium",
                  "unitLong": "medium"
                }
              }
            }
          ],
          "id": 584549,
          "title": "Stuffed Sweet Potato with Spinach, Hummus & Feta",
          "readyInMinutes": 16,
          "servings": 1,
          "sourceUrl": "http://www.cookincanuck.com/2013/09/stuffed-sweet-potato-recipe-with-spinach-hummus-feta/",
          "image": "https://spoonacular.com/recipeImages/584549-556x370.jpg",
          "imageType": "jpg",
          "nutrition": {
            "nutrients": [
              {
                "title": "Calories",
                "amount": 368.33,
                "unit": "cal",
                "percentOfDailyNeeds": 18.42
              },
              {
                "title": "Fat",
                "amount": 13.55,
                "unit": "g",
                "percentOfDailyNeeds": 20.85
              },
              {
                "title": "Saturated Fat",
                "amount": 6.01,
                "unit": "g",
                "percentOfDailyNeeds": 37.54
              },
              {
                "title": "Carbohydrates",
                "amount": 52.49,
                "unit": "g",
                "percentOfDailyNeeds": 17.5
              },
              {
                "title": "Net Carbohydrates",
                "amount": 43.31,
                "unit": "g",
                "percentOfDailyNeeds": 15.75
              },
              {
                "title": "Sugar",
                "amount": 11.12,
                "unit": "g",
                "percentOfDailyNeeds": 12.36
              },
              {
                "title": "Cholesterol",
                "amount": 30.26,
                "unit": "mg",
                "percentOfDailyNeeds": 10.09
              },
              {
                "title": "Sodium",
                "amount": 608.69,
                "unit": "mg",
                "percentOfDailyNeeds": 26.46
              },
              {
                "title": "Protein",
                "amount": 11.52,
                "unit": "g",
                "percentOfDailyNeeds": 23.05
              },
              {
                "title": "Vitamin A",
                "amount": 37839.81,
                "unit": "IU",
                "percentOfDailyNeeds": 756.8
              },
              {
                "title": "Vitamin K",
                "amount": 298,
                "unit": "µg",
                "percentOfDailyNeeds": 283.81
              },
              {
                "title": "Manganese",
                "amount": 1.36,
                "unit": "mg",
                "percentOfDailyNeeds": 68.03
              },
              {
                "title": "Folate",
                "amount": 164.77,
                "unit": "µg",
                "percentOfDailyNeeds": 41.19
              },
              {
                "title": "Vitamin B6",
                "amount": 0.8,
                "unit": "mg",
                "percentOfDailyNeeds": 40.1
              },
              {
                "title": "Fiber",
                "amount": 9.19,
                "unit": "g",
                "percentOfDailyNeeds": 36.76
              },
              {
                "title": "Potassium",
                "amount": 1170.42,
                "unit": "mg",
                "percentOfDailyNeeds": 33.44
              },
              {
                "title": "Vitamin B2",
                "amount": 0.55,
                "unit": "mg",
                "percentOfDailyNeeds": 32.47
              },
              {
                "title": "Calcium",
                "amount": 308.21,
                "unit": "mg",
                "percentOfDailyNeeds": 30.82
              },
              {
                "title": "Magnesium",
                "amount": 122.62,
                "unit": "mg",
                "percentOfDailyNeeds": 30.65
              },
              {
                "title": "Phosphorus",
                "amount": 281.98,
                "unit": "mg",
                "percentOfDailyNeeds": 28.2
              },
              {
                "title": "Vitamin C",
                "amount": 23.22,
                "unit": "mg",
                "percentOfDailyNeeds": 28.15
              },
              {
                "title": "Copper",
                "amount": 0.52,
                "unit": "mg",
                "percentOfDailyNeeds": 26.24
              },
              {
                "title": "Vitamin B5",
                "amount": 2.22,
                "unit": "mg",
                "percentOfDailyNeeds": 22.2
              },
              {
                "title": "Iron",
                "amount": 3.72,
                "unit": "mg",
                "percentOfDailyNeeds": 20.65
              },
              {
                "title": "Vitamin B1",
                "amount": 0.31,
                "unit": "mg",
                "percentOfDailyNeeds": 20.6
              },
              {
                "title": "Vitamin E",
                "amount": 2.52,
                "unit": "mg",
                "percentOfDailyNeeds": 16.8
              },
              {
                "title": "Zinc",
                "amount": 2.29,
                "unit": "mg",
                "percentOfDailyNeeds": 15.27
              },
              {
                "title": "Selenium",
                "amount": 7.9,
                "unit": "µg",
                "percentOfDailyNeeds": 11.28
              },
              {
                "title": "Vitamin B3",
                "amount": 2.14,
                "unit": "mg",
                "percentOfDailyNeeds": 10.72
              },
              {
                "title": "Vitamin B12",
                "amount": 0.57,
                "unit": "µg",
                "percentOfDailyNeeds": 9.58
              }
            ],
            "ingredients": [
              {
                "name": "feta cheese",
                "amount": 2,
                "unit": "tbsp",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 1.39,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 10.88,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.98,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 5.1,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 7.24,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 89.76,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 5.08,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.22,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.34,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 6.46,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.14,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 114.58,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0.14,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 1.57,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 4.83,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 143.48,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.33,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 30.26,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.2,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 167.62,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.61,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 1.39,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 1.39,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 379.44,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 5.24,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.29,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0.57,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 21.08,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "garlic clove",
                "amount": 1,
                "unit": "",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0.99,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0.09,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.43,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 4.47,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.75,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 4.59,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.19,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0.27,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.06,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 5.43,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.05,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.93,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0.51,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.7,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0.94,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 12.03,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "ground pepper",
                "amount": 0.25,
                "unit": "tsp",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0.32,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0.09,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.02,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 1.25,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.86,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0.79,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.05,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 2.74,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.13,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 2.22,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.82,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.19,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 0.17,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 6.65,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "hummus",
                "amount": 1,
                "unit": "tbsp",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 2.14,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 12.45,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.27,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.39,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 1.44,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 24.9,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.22,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.37,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.09,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 10.65,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 26.4,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.61,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 1.19,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 4.5,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.54,
                    "unit": "g"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.9,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 5.7,
                    "unit": "mg"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 1.24,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 56.85,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.12,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 34.2,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "olive oil",
                "amount": 1,
                "unit": "tsp",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 4.5,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 39.78,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.62,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 3.28,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.47,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.65,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 2.71,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0.09,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 0.05,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "spinach",
                "amount": 2,
                "unit": "cups",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 2.18,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 116.4,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.32,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.6,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.23,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 13.8,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.04,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 1.63,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.43,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 47.4,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.12,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 29.4,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 1.72,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 5626.2,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.1,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 1.22,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 1.32,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 59.4,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 289.74,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.25,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.86,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 47.4,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.54,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 11.58,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 16.86,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.11,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 334.8,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "sweet potato",
                "amount": 1,
                "unit": "medium",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 45.47,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 24.86,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.68,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 1.36,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.11,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 194.36,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.04,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 1.38,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 1.26,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 56.5,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.47,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 106.22,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 3.55,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 32062.62,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 1.81,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.34,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.59,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 6.78,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 67.8,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 4.07,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 9.45,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 38.69,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 124.3,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.58,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 27.8,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 5.42,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.14,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 761.62,
                    "unit": "mg"
                  }
                ]
              }
            ],
            "caloricBreakdown": {
              "percentProtein": 12.19,
              "percentFat": 32.27,
              "percentCarbs": 55.54
            },
            "weightPerServing": {
              "amount": 343,
              "unit": "g"
            }
          },
          "summary": "Stuffed Sweet Potato with Spinach, Hummus & Fetan is a <b>gluten free and vegetarian</b> side dish. One serving contains <b>286 calories</b>, <b>10g of protein</b>, and <b>14g of fat</b>. This recipe serves 1 and costs $2.08 per serving. 1499 people have made this recipe and would make it again. If you have hummus, garlic clove, olive oil, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>16 minutes</b>. This recipe is typical of middl eastern cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is super. Try <a href=\"https://spoonacular.com/recipes/spinach-and-feta-hummus-499728\">Spinach and Feta Hummus</a>, <a href=\"https://spoonacular.com/recipes/spiced-sweet-roasted-red-pepper-feta-hummus-100993\">Spiced Sweet Roasted Red Pepper & feta Hummus</a>, and <a href=\"https://spoonacular.com/recipes/feta-and-spinach-stuffed-bread-471194\">Fetan and Spinach Stuffed Bread</a> for similar recipes.",
          "cuisines": [
            "Middle Eastern"
          ],
          "dishTypes": [
            "side dish"
          ],
          "diets": [
            "gluten free",
            "lacto ovo vegetarian"
          ],
          "occasions": [],
          "winePairing": {},
          "instructions": "With a fork, pierce the sweet potato in several places.  Place the sweet potato in the microwave, on top of a piece of paper towel, and cook for 3 minutes per side (about 6 minutes total), or until the sweet potato is tender when pierced with a fork.  Let the sweet potato cool for several minutes, or until cool enough to handle.  Cut in half lengthwise.  Carefully scoop out the flesh of the potato and place in a medium-sized bowl.  Reserve the skins.  With the back of a fork, mash the potato flesh until most lumps are gone.Heat the olive oil in a small skillet set over medium heat.  Add the garlic and cook for 30 seconds.Add the spinach and cook, stirring, until the spinach is wilted, about 1 minute.Add the spinach mixture to the mashed sweet potato, along with the  hummus, feta cheese and ground pepper.  Stir gently to combine.Scoop the sweet potato mixture into the reserved sweet potato skins.  Serve.",
          "analyzedInstructions": [
            {
              "name": "",
              "steps": [
                {
                  "number": 1,
                  "step": "With a fork, pierce the sweet potato in several places.",
                  "ingredients": [
                    {
                      "id": 11507,
                      "name": "sweet potato",
                      "localizedName": "sweet potato",
                      "image": "sweet-potato.png"
                    }
                  ],
                  "equipment": []
                },
                {
                  "number": 2,
                  "step": "Place the sweet potato in the microwave, on top of a piece of paper towel, and cook for 3 minutes per side (about 6 minutes total), or until the sweet potato is tender when pierced with a fork.",
                  "ingredients": [
                    {
                      "id": 11507,
                      "name": "sweet potato",
                      "localizedName": "sweet potato",
                      "image": "sweet-potato.png"
                    }
                  ],
                  "equipment": [
                    {
                      "id": 405895,
                      "name": "paper towels",
                      "localizedName": "paper towels",
                      "image": "paper-towels.jpg"
                    },
                    {
                      "id": 404762,
                      "name": "microwave",
                      "localizedName": "microwave",
                      "image": "microwave.jpg"
                    }
                  ],
                  "length": {
                    "number": 9,
                    "unit": "minutes"
                  }
                },
                {
                  "number": 3,
                  "step": "Let the sweet potato cool for several minutes, or until cool enough to handle.",
                  "ingredients": [
                    {
                      "id": 11507,
                      "name": "sweet potato",
                      "localizedName": "sweet potato",
                      "image": "sweet-potato.png"
                    }
                  ],
                  "equipment": []
                },
                {
                  "number": 4,
                  "step": "Cut in half lengthwise.  Carefully scoop out the flesh of the potato and place in a medium-sized bowl.  Reserve the skins.  With the back of a fork, mash the potato flesh until most lumps are gone.",
                  "ingredients": [
                    {
                      "id": 11352,
                      "name": "potato",
                      "localizedName": "potato",
                      "image": "potatoes-yukon-gold.png"
                    }
                  ],
                  "equipment": [
                    {
                      "id": 404783,
                      "name": "bowl",
                      "localizedName": "bowl",
                      "image": "bowl.jpg"
                    }
                  ]
                },
                {
                  "number": 5,
                  "step": "Heat the olive oil in a small skillet set over medium heat.",
                  "ingredients": [
                    {
                      "id": 4053,
                      "name": "olive oil",
                      "localizedName": "olive oil",
                      "image": "olive-oil.jpg"
                    }
                  ],
                  "equipment": [
                    {
                      "id": 404645,
                      "name": "frying pan",
                      "localizedName": "frying pan",
                      "image": "pan.png"
                    }
                  ]
                },
                {
                  "number": 6,
                  "step": "Add the garlic and cook for 30 seconds.",
                  "ingredients": [
                    {
                      "id": 11215,
                      "name": "garlic",
                      "localizedName": "garlic",
                      "image": "garlic.png"
                    }
                  ],
                  "equipment": []
                },
                {
                  "number": 7,
                  "step": "Add the spinach and cook, stirring, until the spinach is wilted, about 1 minute.",
                  "ingredients": [
                    {
                      "id": 10011457,
                      "name": "spinach",
                      "localizedName": "spinach",
                      "image": "spinach.jpg"
                    }
                  ],
                  "equipment": [],
                  "length": {
                    "number": 1,
                    "unit": "minutes"
                  }
                },
                {
                  "number": 8,
                  "step": "Add the spinach mixture to the mashed sweet potato, along with the  hummus, feta cheese and ground pepper.  Stir gently to combine.Scoop the sweet potato mixture into the reserved sweet potato skins.",
                  "ingredients": [
                    {
                      "id": 1002030,
                      "name": "ground black pepper",
                      "localizedName": "ground black pepper",
                      "image": "pepper.jpg"
                    },
                    {
                      "id": 11507,
                      "name": "sweet potato",
                      "localizedName": "sweet potato",
                      "image": "sweet-potato.png"
                    },
                    {
                      "id": 1019,
                      "name": "feta cheese",
                      "localizedName": "feta cheese",
                      "image": "feta.png"
                    },
                    {
                      "id": 10011457,
                      "name": "spinach",
                      "localizedName": "spinach",
                      "image": "spinach.jpg"
                    },
                    {
                      "id": 16158,
                      "name": "hummus",
                      "localizedName": "hummus",
                      "image": "hummus.jpg"
                    }
                  ],
                  "equipment": []
                },
                {
                  "number": 9,
                  "step": "Serve.",
                  "ingredients": [],
                  "equipment": []
                }
              ]
            }
          ],
          "originalId": null
        },
        {
          "vegetarian": true,
          "vegan": true,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": true,
          "sustainable": false,
          "weightWatcherSmartPoints": 1,
          "gaps": "no",
          "lowFodmap": false,
          "aggregateLikes": 251583,
          "spoonacularScore": 99,
          "healthScore": 58,
          "creditsText": "The Gracious Pantry",
          "sourceName": "The Gracious Pantry",
          "pricePerServing": 112.71,
          "extendedIngredients": [
            {
              "id": 11165,
              "aisle": "Produce;Spices and Seasonings",
              "image": "cilantro.png",
              "consistency": "solid",
              "name": "cilantro",
              "original": "Cilantro (about 1/2 cup chopped, but again, use to your liking)",
              "originalString": "Cilantro (about 1/2 cup chopped, but again, use to your liking)",
              "originalName": "Cilantro (about chopped, but again, use to your liking)",
              "amount": 0.5,
              "unit": "cup",
              "meta": [
                "chopped"
              ],
              "metaInformation": [
                "chopped"
              ],
              "measures": {
                "us": {
                  "amount": 0.5,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 118.294,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            },
            {
              "id": 11215,
              "aisle": "Produce",
              "image": "garlic.png",
              "consistency": "solid",
              "name": "garlic cloves",
              "original": "4 small garlic cloves (or two large ones)",
              "originalString": "4 small garlic cloves (or two large ones)",
              "originalName": "garlic cloves (or two large ones)",
              "amount": 4,
              "unit": "small",
              "meta": [
                "(or two large ones)"
              ],
              "metaInformation": [
                "(or two large ones)"
              ],
              "measures": {
                "us": {
                  "amount": 4,
                  "unitShort": "small",
                  "unitLong": "smalls"
                },
                "metric": {
                  "amount": 4,
                  "unitShort": "small",
                  "unitLong": "smalls"
                }
              }
            },
            {
              "id": 11979,
              "aisle": "Canned and Jarred;Produce;Ethnic Foods",
              "image": "jalapeno-pepper.png",
              "consistency": "solid",
              "name": "jalapeno peppers",
              "original": "Jalapeño peppers (choose the type & amount based on how spicy you like your salsa)",
              "originalString": "Jalapeño peppers (choose the type & amount based on how spicy you like your salsa)",
              "originalName": "Jalapeño peppers (choose the type & amount based on how spicy you like your salsa)",
              "amount": 2,
              "unit": "servings",
              "meta": [
                "(choose the type & amount based on how spicy you like your salsa)"
              ],
              "metaInformation": [
                "(choose the type & amount based on how spicy you like your salsa)"
              ],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "servings",
                  "unitLong": "servings"
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "servings",
                  "unitLong": "servings"
                }
              }
            },
            {
              "id": 10011282,
              "aisle": "Produce",
              "image": "red-onion.png",
              "consistency": "solid",
              "name": "red onion",
              "original": "Red onion (1 large or two small)",
              "originalString": "Red onion (1 large or two small)",
              "originalName": "Red onion or two small)",
              "amount": 1,
              "unit": "large",
              "meta": [
                "red",
                "(1 large or two small)"
              ],
              "metaInformation": [
                "red",
                "(1 large or two small)"
              ],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "large",
                  "unitLong": "large"
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "large",
                  "unitLong": "large"
                }
              }
            },
            {
              "id": 11529,
              "aisle": "Produce",
              "image": "tomato.png",
              "consistency": "solid",
              "name": "tomatoes",
              "original": "5-6 small-medium tomatoes",
              "originalString": "5-6 small-medium tomatoes",
              "originalName": "medium tomatoes",
              "amount": 5,
              "unit": "small",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 5,
                  "unitShort": "small",
                  "unitLong": "smalls"
                },
                "metric": {
                  "amount": 5,
                  "unitShort": "small",
                  "unitLong": "smalls"
                }
              }
            }
          ],
          "id": 667917,
          "title": "Cilantro Salsa",
          "readyInMinutes": 20,
          "servings": 2,
          "sourceUrl": "http://www.thegraciouspantry.com/clean-eating-cilantro-salsa/",
          "image": "https://spoonacular.com/recipeImages/667917-556x370.jpg",
          "imageType": "jpg",
          "nutrition": {
            "nutrients": [
              {
                "title": "Calories",
                "amount": 73.54,
                "unit": "cal",
                "percentOfDailyNeeds": 3.68
              },
              {
                "title": "Fat",
                "amount": 0.57,
                "unit": "g",
                "percentOfDailyNeeds": 0.88
              },
              {
                "title": "Saturated Fat",
                "amount": 0.1,
                "unit": "g",
                "percentOfDailyNeeds": 0.59
              },
              {
                "title": "Carbohydrates",
                "amount": 16.28,
                "unit": "g",
                "percentOfDailyNeeds": 5.43
              },
              {
                "title": "Net Carbohydrates",
                "amount": 12.31,
                "unit": "g",
                "percentOfDailyNeeds": 4.48
              },
              {
                "title": "Sugar",
                "amount": 8.51,
                "unit": "g",
                "percentOfDailyNeeds": 9.46
              },
              {
                "title": "Cholesterol",
                "amount": 0,
                "unit": "mg",
                "percentOfDailyNeeds": 0
              },
              {
                "title": "Sodium",
                "amount": 16.51,
                "unit": "mg",
                "percentOfDailyNeeds": 0.72
              },
              {
                "title": "Protein",
                "amount": 3.1,
                "unit": "g",
                "percentOfDailyNeeds": 6.19
              },
              {
                "title": "Vitamin C",
                "amount": 41.15,
                "unit": "mg",
                "percentOfDailyNeeds": 49.88
              },
              {
                "title": "Vitamin A",
                "amount": 2193.59,
                "unit": "IU",
                "percentOfDailyNeeds": 43.87
              },
              {
                "title": "Vitamin K",
                "amount": 31.16,
                "unit": "µg",
                "percentOfDailyNeeds": 29.67
              },
              {
                "title": "Manganese",
                "amount": 0.45,
                "unit": "mg",
                "percentOfDailyNeeds": 22.5
              },
              {
                "title": "Potassium",
                "amount": 670.58,
                "unit": "mg",
                "percentOfDailyNeeds": 19.16
              },
              {
                "title": "Vitamin B6",
                "amount": 0.34,
                "unit": "mg",
                "percentOfDailyNeeds": 16.93
              },
              {
                "title": "Fiber",
                "amount": 3.97,
                "unit": "g",
                "percentOfDailyNeeds": 15.89
              },
              {
                "title": "Folate",
                "amount": 47.91,
                "unit": "µg",
                "percentOfDailyNeeds": 11.98
              },
              {
                "title": "Vitamin E",
                "amount": 1.43,
                "unit": "mg",
                "percentOfDailyNeeds": 9.56
              },
              {
                "title": "Copper",
                "amount": 0.18,
                "unit": "mg",
                "percentOfDailyNeeds": 9.19
              },
              {
                "title": "Magnesium",
                "amount": 33.44,
                "unit": "mg",
                "percentOfDailyNeeds": 8.36
              },
              {
                "title": "Vitamin B1",
                "amount": 0.13,
                "unit": "mg",
                "percentOfDailyNeeds": 8.34
              },
              {
                "title": "Phosphorus",
                "amount": 82.3,
                "unit": "mg",
                "percentOfDailyNeeds": 8.23
              },
              {
                "title": "Vitamin B3",
                "amount": 1.53,
                "unit": "mg",
                "percentOfDailyNeeds": 7.67
              },
              {
                "title": "Iron",
                "amount": 0.91,
                "unit": "mg",
                "percentOfDailyNeeds": 5.05
              },
              {
                "title": "Calcium",
                "amount": 49.24,
                "unit": "mg",
                "percentOfDailyNeeds": 4.92
              },
              {
                "title": "Vitamin B2",
                "amount": 0.07,
                "unit": "mg",
                "percentOfDailyNeeds": 4.29
              },
              {
                "title": "Zinc",
                "amount": 0.57,
                "unit": "mg",
                "percentOfDailyNeeds": 3.82
              },
              {
                "title": "Vitamin B5",
                "amount": 0.34,
                "unit": "mg",
                "percentOfDailyNeeds": 3.37
              },
              {
                "title": "Selenium",
                "amount": 1.17,
                "unit": "µg",
                "percentOfDailyNeeds": 1.68
              }
            ],
            "ingredients": [
              {
                "name": "cilantro",
                "amount": 0.25,
                "unit": "cup",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0.15,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 2.48,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.04,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 0.92,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 1.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 1.92,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.09,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 269.92,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.11,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 2.68,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 12.4,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 1.84,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.51,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 1.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 20.84,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "garlic cloves",
                "amount": 2,
                "unit": "small",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 1.98,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0.18,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.85,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 8.94,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 1.5,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 9.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.38,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0.54,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.13,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 10.86,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.1,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.06,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 1.86,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 1.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 1.39,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 1.87,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 24.06,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "jalapeno peppers",
                "amount": 1,
                "unit": "servings",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0.16,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0.68,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.01,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 0.73,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.38,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0.65,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 26.95,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.09,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.07,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 0.3,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.46,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.1,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.09,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.19,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 2.97,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 6.2,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "red onion",
                "amount": 0.5,
                "unit": "large",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 5.14,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 10.45,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.09,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.28,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.06,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 22,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.12,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 5.5,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 15.95,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.61,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 1.1,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.94,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 12.65,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.22,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 2.33,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 4.2,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 2.2,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 0.61,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 3.36,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 4.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 80.3,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "tomatoes",
                "amount": 2.5,
                "unit": "small",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 8.85,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 34.13,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.39,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.46,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 40.95,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.06,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.61,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 1.35,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 25.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 54.6,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.07,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 2,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 1895.08,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.2,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.19,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.13,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 1.23,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 2.73,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 22.75,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 17.97,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 5.98,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 6.12,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 11.38,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 5.23,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.26,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 15.24,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 31.17,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 539.17,
                    "unit": "mg"
                  }
                ]
              }
            ],
            "caloricBreakdown": {
              "percentProtein": 14.99,
              "percentFat": 6.21,
              "percentCarbs": 78.8
            },
            "weightPerServing": {
              "amount": 295,
              "unit": "g"
            }
          },
          "summary": "Cilantro Salsa might be just the hor d'oeuvre you are searching for. This recipe serves 2 and costs $1.36 per serving. One serving contains <b>88 calories</b>, <b>4g of protein</b>, and <b>1g of fat</b>. If you have cilantro, onion, small-medium tomatoes, and a few other ingredients on hand, you can make it. 251583 people have made this recipe and would make it again. It is a good option if you're following a <b>caveman, gluten free, primal, and whole 30</b> diet. This recipe is typical of Mexican cuisine. From preparation to the plate, this recipe takes about <b>20 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is outstanding. Similar recipes include <a href=\"https://spoonacular.com/recipes/cilantro-almond-salsa-723796\">Cilantro Almond Salsa</a>, <a href=\"https://spoonacular.com/recipes/cals-pineapple-cilantro-salsa-144829\">Cal's Pineapple Cilantro Salsa</a>, and <a href=\"https://spoonacular.com/recipes/salsa-de-cilantro-pebre-144820\">Salsa De Cilantro - Pebre</a>.",
          "cuisines": [
            "Mexican"
          ],
          "dishTypes": [
            "side dish"
          ],
          "diets": [
            "gluten free",
            "dairy free",
            "paleolithic",
            "lacto ovo vegetarian",
            "primal",
            "vegan"
          ],
          "occasions": [],
          "winePairing": {
            "pairedWines": [
              "pinot noir",
              "sparkling rose",
              "riesling"
            ],
            "pairingText": "Pinot Noir, Sparkling rosé, and Riesling are great choices for Mexican. Acidic white wines like riesling or low-tannin reds like pinot noir can work well with Mexican dishes. Sparkling rosé is a safe pairing too. You could try Carneros Hills Winery Pinot Noir. Reviewers quite like it with a 4.1 out of 5 star rating and a price of about 28 dollars per bottle.",
            "productMatches": [
              {
                "id": 438100,
                "title": "Carneros Hills Winery Pinot Noir",
                "description": "The Carneros Hills Winery Pinot Noir exhibits aromas of sandalwood, wisteria, cinnamon, and forest floor that weave through bright cherry and raspberry fruit notes. On the palate, red currant, allspice, bacon and wild fennel arise, while a focused core of acidity and broadening minerality expand into fine-textured, mouth-coating tannins.",
                "price": "$27.99",
                "imageUrl": "https://spoonacular.com/productImages/438100-312x231.jpg",
                "averageRating": 0.82,
                "ratingCount": 13,
                "score": 0.7949999999999999,
                "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fcarneros-hills-winery-pinot-noir-2014%2F173256"
              }
            ]
          },
          "instructions": "Chop all your ingredients. Be sure you chop them well. The finer you chop everything, the better texture your salsa will have.Mix in a bowl and serve.",
          "analyzedInstructions": [
            {
              "name": "",
              "steps": [
                {
                  "number": 1,
                  "step": "Chop all your ingredients. Be sure you chop them well. The finer you chop everything, the better texture your salsa will have.",
                  "ingredients": [
                    {
                      "id": 6164,
                      "name": "salsa",
                      "localizedName": "salsa",
                      "image": "salsa.png"
                    }
                  ],
                  "equipment": []
                },
                {
                  "number": 2,
                  "step": "Mix in a bowl and serve.",
                  "ingredients": [],
                  "equipment": [
                    {
                      "id": 404783,
                      "name": "bowl",
                      "localizedName": "bowl",
                      "image": "bowl.jpg"
                    }
                  ]
                }
              ]
            }
          ],
          "originalId": null
        },
        {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": true,
          "sustainable": false,
          "weightWatcherSmartPoints": 5,
          "gaps": "no",
          "lowFodmap": false,
          "preparationMinutes": 10,
          "cookingMinutes": 240,
          "aggregateLikes": 3283,
          "spoonacularScore": 99,
          "healthScore": 86,
          "creditsText": "The Lemon Bowl",
          "sourceName": "The Lemon Bowl",
          "pricePerServing": 237.99,
          "extendedIngredients": [
            {
              "id": 11485,
              "aisle": "Produce",
              "image": "butternut-squash.jpg",
              "consistency": "solid",
              "name": "butternut squash",
              "original": "4 cups butternut squash - peeled and diced",
              "originalString": "4 cups butternut squash - peeled and diced",
              "originalName": "butternut squash - peeled and diced",
              "amount": 4,
              "unit": "cups",
              "meta": [
                "diced",
                "peeled"
              ],
              "metaInformation": [
                "diced",
                "peeled"
              ],
              "measures": {
                "us": {
                  "amount": 4,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 946.352,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            },
            {
              "id": 2009,
              "aisle": "Spices and Seasonings",
              "image": "chili-powder.jpg",
              "consistency": "solid",
              "name": "chili powder",
              "original": "1 tablespoon chili powder",
              "originalString": "1 tablespoon chili powder",
              "originalName": "chili powder",
              "amount": 1,
              "unit": "tablespoon",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "Tbsp",
                  "unitLong": "Tbsp"
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "Tbsp",
                  "unitLong": "Tbsp"
                }
              }
            },
            {
              "id": 99223,
              "aisle": "Canned and Jarred;Ethnic Foods",
              "image": "canned-chipotle.png",
              "consistency": "solid",
              "name": "chipotle peppers in adobo",
              "original": "2 chipotle peppers in adobo - minced (remove seeds to lower heat)",
              "originalString": "2 chipotle peppers in adobo - minced (remove seeds to lower heat)",
              "originalName": "chipotle peppers in adobo - minced (remove seeds to lower heat)",
              "amount": 2,
              "unit": "",
              "meta": [
                "minced",
                "(remove seeds to lower heat)"
              ],
              "metaInformation": [
                "minced",
                "(remove seeds to lower heat)"
              ],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "",
                  "unitLong": ""
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "",
                  "unitLong": ""
                }
              }
            },
            {
              "id": 1002014,
              "aisle": "Spices and Seasonings",
              "image": "ground-cumin.jpg",
              "consistency": "solid",
              "name": "cumin",
              "original": "2 tablespoons cumin",
              "originalString": "2 tablespoons cumin",
              "originalName": "cumin",
              "amount": 2,
              "unit": "tablespoons",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                }
              }
            },
            {
              "id": 98849,
              "aisle": "Canned and Jarred",
              "image": "tomatoes-canned.png",
              "consistency": "solid",
              "name": "fire roasted tomatoes",
              "original": "14 oz fire roasted diced tomatoes",
              "originalString": "14 oz fire roasted diced tomatoes",
              "originalName": "fire roasted diced tomatoes",
              "amount": 14,
              "unit": "oz",
              "meta": [
                "diced",
                "fire roasted"
              ],
              "metaInformation": [
                "diced",
                "fire roasted"
              ],
              "measures": {
                "us": {
                  "amount": 14,
                  "unitShort": "oz",
                  "unitLong": "ounces"
                },
                "metric": {
                  "amount": 396.893,
                  "unitShort": "g",
                  "unitLong": "grams"
                }
              }
            },
            {
              "id": 11167,
              "aisle": "Produce",
              "image": "corn-on-the-cob.jpg",
              "consistency": "solid",
              "name": "fresh corn",
              "original": "1 cup corn - fresh or frozen",
              "originalString": "1 cup corn - fresh or frozen",
              "originalName": "corn - fresh or frozen",
              "amount": 1,
              "unit": "cup",
              "meta": [
                "fresh"
              ],
              "metaInformation": [
                "fresh"
              ],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "cup",
                  "unitLong": "cup"
                },
                "metric": {
                  "amount": 236.588,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            },
            {
              "id": 11215,
              "aisle": "Produce",
              "image": "garlic.png",
              "consistency": "solid",
              "name": "garlic",
              "original": "3 cloves garlic - minced",
              "originalString": "3 cloves garlic - minced",
              "originalName": "garlic - minced",
              "amount": 3,
              "unit": "cloves",
              "meta": [
                "minced"
              ],
              "metaInformation": [
                "minced"
              ],
              "measures": {
                "us": {
                  "amount": 3,
                  "unitShort": "cloves",
                  "unitLong": "cloves"
                },
                "metric": {
                  "amount": 3,
                  "unitShort": "cloves",
                  "unitLong": "cloves"
                }
              }
            },
            {
              "id": 16033,
              "aisle": "Pasta and Rice;Canned and Jarred",
              "image": "kidney-beans.jpg",
              "consistency": "solid",
              "name": "kidney beans",
              "original": "14 oz kidney beans - drained and rinsed",
              "originalString": "14 oz kidney beans - drained and rinsed",
              "originalName": "kidney beans - drained and rinsed",
              "amount": 14,
              "unit": "oz",
              "meta": [
                "drained and rinsed"
              ],
              "metaInformation": [
                "drained and rinsed"
              ],
              "measures": {
                "us": {
                  "amount": 14,
                  "unitShort": "oz",
                  "unitLong": "ounces"
                },
                "metric": {
                  "amount": 396.893,
                  "unitShort": "g",
                  "unitLong": "grams"
                }
              }
            },
            {
              "id": 6970,
              "aisle": "Canned and Jarred",
              "image": "chicken-broth.png",
              "consistency": "liquid",
              "name": "low sodium chicken broth",
              "original": "2 cups vegetable or chicken broth - low sodium",
              "originalString": "2 cups vegetable or chicken broth - low sodium",
              "originalName": "vegetable or chicken broth - low sodium",
              "amount": 2,
              "unit": "cups",
              "meta": [
                "low sodium"
              ],
              "metaInformation": [
                "low sodium"
              ],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 473.176,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            },
            {
              "id": 11282,
              "aisle": "Produce",
              "image": "brown-onion.png",
              "consistency": "solid",
              "name": "onion",
              "original": "1 medium onion - diced",
              "originalString": "1 medium onion - diced",
              "originalName": "onion - diced",
              "amount": 1,
              "unit": "medium",
              "meta": [
                "diced"
              ],
              "metaInformation": [
                "diced"
              ],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "medium",
                  "unitLong": "medium"
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "medium",
                  "unitLong": "medium"
                }
              }
            },
            {
              "id": 2027,
              "aisle": "Produce;Spices and Seasonings",
              "image": "oregano.jpg",
              "consistency": "solid",
              "name": "oregano",
              "original": "1 teaspoon oregano",
              "originalString": "1 teaspoon oregano",
              "originalName": "oregano",
              "amount": 1,
              "unit": "teaspoon",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "tsp",
                  "unitLong": "teaspoon"
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "tsp",
                  "unitLong": "teaspoon"
                }
              }
            },
            {
              "id": 11821,
              "aisle": "Produce",
              "image": "red-pepper.jpg",
              "consistency": "solid",
              "name": "red bell pepper",
              "original": "1 red pepper - seeded and diced",
              "originalString": "1 red pepper - seeded and diced",
              "originalName": "red pepper - seeded and diced",
              "amount": 1,
              "unit": "",
              "meta": [
                "diced",
                "red",
                "seeded"
              ],
              "metaInformation": [
                "diced",
                "red",
                "seeded"
              ],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "",
                  "unitLong": ""
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "",
                  "unitLong": ""
                }
              }
            },
            {
              "id": 1102047,
              "aisle": "Spices and Seasonings",
              "image": "salt-and-pepper.jpg",
              "consistency": "solid",
              "name": "salt and pepper",
              "original": "salt and pepper to taste",
              "originalString": "salt and pepper to taste",
              "originalName": "salt and pepper to taste",
              "amount": 4,
              "unit": "servings",
              "meta": [
                "to taste"
              ],
              "metaInformation": [
                "to taste"
              ],
              "measures": {
                "us": {
                  "amount": 4,
                  "unitShort": "servings",
                  "unitLong": "servings"
                },
                "metric": {
                  "amount": 4,
                  "unitShort": "servings",
                  "unitLong": "servings"
                }
              }
            },
            {
              "id": 1012028,
              "aisle": "Spices and Seasonings",
              "image": "paprika.jpg",
              "consistency": "solid",
              "name": "smoked paprika",
              "original": "1 tablespoon smoked paprika",
              "originalString": "1 tablespoon smoked paprika",
              "originalName": "smoked paprika",
              "amount": 1,
              "unit": "tablespoon",
              "meta": [
                "smoked"
              ],
              "metaInformation": [
                "smoked"
              ],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "Tbsp",
                  "unitLong": "Tbsp"
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "Tbsp",
                  "unitLong": "Tbsp"
                }
              }
            }
          ],
          "id": 482574,
          "title": "Slow Cooker Vegetarian Chili with Butternut Squash",
          "readyInMinutes": 250,
          "servings": 4,
          "sourceUrl": "http://thelemonbowl.com/2013/04/slow-cooker-vegetarian-chili-with-butternut-squash.html",
          "image": "https://spoonacular.com/recipeImages/482574-556x370.jpg",
          "imageType": "jpg",
          "nutrition": {
            "nutrients": [
              {
                "title": "Calories",
                "amount": 313.62,
                "unit": "cal",
                "percentOfDailyNeeds": 15.68
              },
              {
                "title": "Fat",
                "amount": 3.16,
                "unit": "g",
                "percentOfDailyNeeds": 4.86
              },
              {
                "title": "Saturated Fat",
                "amount": 0.59,
                "unit": "g",
                "percentOfDailyNeeds": 3.7
              },
              {
                "title": "Carbohydrates",
                "amount": 61.73,
                "unit": "g",
                "percentOfDailyNeeds": 20.57
              },
              {
                "title": "Net Carbohydrates",
                "amount": 46.37,
                "unit": "g",
                "percentOfDailyNeeds": 16.86
              },
              {
                "title": "Sugar",
                "amount": 11.46,
                "unit": "g",
                "percentOfDailyNeeds": 12.74
              },
              {
                "title": "Cholesterol",
                "amount": 0,
                "unit": "mg",
                "percentOfDailyNeeds": 0
              },
              {
                "title": "Sodium",
                "amount": 531.84,
                "unit": "mg",
                "percentOfDailyNeeds": 23.12
              },
              {
                "title": "Protein",
                "amount": 16.15,
                "unit": "g",
                "percentOfDailyNeeds": 32.3
              },
              {
                "title": "Vitamin A",
                "amount": 18155.46,
                "unit": "IU",
                "percentOfDailyNeeds": 363.11
              },
              {
                "title": "Vitamin C",
                "amount": 75.84,
                "unit": "mg",
                "percentOfDailyNeeds": 91.93
              },
              {
                "title": "Fiber",
                "amount": 15.36,
                "unit": "g",
                "percentOfDailyNeeds": 61.42
              },
              {
                "title": "Manganese",
                "amount": 1.11,
                "unit": "mg",
                "percentOfDailyNeeds": 55.44
              },
              {
                "title": "Folate",
                "amount": 203.9,
                "unit": "µg",
                "percentOfDailyNeeds": 50.97
              },
              {
                "title": "Iron",
                "amount": 8.17,
                "unit": "mg",
                "percentOfDailyNeeds": 45.36
              },
              {
                "title": "Potassium",
                "amount": 1342.85,
                "unit": "mg",
                "percentOfDailyNeeds": 38.37
              },
              {
                "title": "Magnesium",
                "amount": 132.16,
                "unit": "mg",
                "percentOfDailyNeeds": 33.04
              },
              {
                "title": "Vitamin B6",
                "amount": 0.63,
                "unit": "mg",
                "percentOfDailyNeeds": 31.26
              },
              {
                "title": "Phosphorus",
                "amount": 301.12,
                "unit": "mg",
                "percentOfDailyNeeds": 30.11
              },
              {
                "title": "Vitamin B1",
                "amount": 0.42,
                "unit": "mg",
                "percentOfDailyNeeds": 27.91
              },
              {
                "title": "Vitamin B3",
                "amount": 5.42,
                "unit": "mg",
                "percentOfDailyNeeds": 27.1
              },
              {
                "title": "Vitamin E",
                "amount": 4.01,
                "unit": "mg",
                "percentOfDailyNeeds": 26.74
              },
              {
                "title": "Copper",
                "amount": 0.51,
                "unit": "mg",
                "percentOfDailyNeeds": 25.25
              },
              {
                "title": "Calcium",
                "amount": 189.32,
                "unit": "mg",
                "percentOfDailyNeeds": 18.93
              },
              {
                "title": "Vitamin K",
                "amount": 18.38,
                "unit": "µg",
                "percentOfDailyNeeds": 17.5
              },
              {
                "title": "Zinc",
                "amount": 2.02,
                "unit": "mg",
                "percentOfDailyNeeds": 13.49
              },
              {
                "title": "Vitamin B2",
                "amount": 0.23,
                "unit": "mg",
                "percentOfDailyNeeds": 13.46
              },
              {
                "title": "Vitamin B5",
                "amount": 1.25,
                "unit": "mg",
                "percentOfDailyNeeds": 12.46
              },
              {
                "title": "Selenium",
                "amount": 3.29,
                "unit": "µg",
                "percentOfDailyNeeds": 4.7
              },
              {
                "title": "Vitamin B12",
                "amount": 0.12,
                "unit": "µg",
                "percentOfDailyNeeds": 1.97
              }
            ],
            "ingredients": [
              {
                "name": "butternut squash",
                "amount": 1,
                "unit": "cups",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 16.37,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 37.8,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.21,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.7,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.14,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 63,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.98,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 1.68,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 47.6,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.22,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 46.2,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 1.4,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 14882,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.56,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.06,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.14,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 2.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 2.8,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 67.2,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 1.54,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 3.08,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 13.57,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 5.6,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.28,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 29.4,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 492.8,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "chili powder",
                "amount": 0.25,
                "unit": "tablespoon",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0.99,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0.56,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.09,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.41,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.29,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 5.64,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.05,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.35,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.23,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 2.98,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 6,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.06,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.27,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 593,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.16,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.76,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.7,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 6.6,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 2.11,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.14,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.3,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 32.8,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 1.33,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 39,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "chipotle peppers in adobo",
                "amount": 0.5,
                "unit": "",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 1.25,
                    "unit": "g"
                  },
                  {
                    "name": "Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 5,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.75,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.5,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.5,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 95,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Protein",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 375,
                    "unit": "IU"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "cumin",
                "amount": 0.5,
                "unit": "tablespoons",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 1.33,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0.3,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.14,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.16,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.67,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 11.25,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.05,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 1.99,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.14,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 10.98,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 14.97,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.42,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.53,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 38.1,
                    "unit": "IU"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.1,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.32,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 27.93,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.16,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.07,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 1.01,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 5.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.74,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0.23,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 53.64,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "fire roasted tomatoes",
                "amount": 3.5,
                "unit": "oz",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 4.57,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 22.82,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.54,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.76,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 396.89,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.76,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 29.77,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 2.29,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 3.81,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 152.8,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 1.79,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 0,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "fresh corn",
                "amount": 0.25,
                "unit": "cup",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 6.78,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 15.23,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.17,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.22,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.49,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 31.18,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.12,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.19,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.64,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 13.41,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 32.26,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.16,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 1.19,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 67.79,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.26,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.18,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.73,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 0.73,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.11,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 2.27,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 6.05,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 5.44,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 8.34,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 2.47,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 97.88,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "garlic",
                "amount": 0.75,
                "unit": "cloves",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0.74,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0.07,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.32,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 3.35,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.56,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 3.44,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.14,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0.2,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.05,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 4.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.04,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.7,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0.38,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.52,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0.7,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 9.02,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "kidney beans",
                "amount": 3.5,
                "unit": "oz",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 22.62,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 128.99,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 1.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 1.19,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.5,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 126.01,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.07,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 2.92,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.57,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 44.65,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.12,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 140.9,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.04,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 8.6,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.22,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.27,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.24,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.16,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 7.34,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 27.78,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 8.33,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.32,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 15.28,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 1.98,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.47,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 30.26,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 1.19,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 399.87,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "low sodium chicken broth",
                "amount": 0.5,
                "unit": "cups",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 1.42,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.12,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.71,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 18.88,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.21,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.25,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 1.62,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 1.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 35.4,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.32,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 2.36,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.15,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 4.72,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.15,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 1.42,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 35.4,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 3.66,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0.12,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 101.48,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "onion",
                "amount": 0.25,
                "unit": "medium",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 2.57,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 5.23,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.14,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 11,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 2.75,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 7.98,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.3,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0.55,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.47,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 6.33,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.11,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 1.17,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 2.1,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 1.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 0.3,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 1.68,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 2.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 40.15,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "oregano",
                "amount": 0.25,
                "unit": "teaspoon",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0.34,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 1.19,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.02,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 1.33,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 1.35,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0.74,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.05,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 8.51,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.09,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.21,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 7.99,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 3.11,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.13,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0.13,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.16,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 6.3,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "red bell pepper",
                "amount": 0.25,
                "unit": "",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 1.79,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 13.69,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.03,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.09,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 9.22,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.13,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.29,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 3.57,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.09,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 7.74,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.29,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 931.47,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.09,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.47,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.62,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 2.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 1.46,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 1.25,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 1.17,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 1.19,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 1.67,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 37.99,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 62.77,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "salt and pepper",
                "amount": 1,
                "unit": "servings",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 0,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 0.12,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 193.79,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 0.04,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "smoked paprika",
                "amount": 0.25,
                "unit": "tablespoon",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0.94,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0.86,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.11,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.23,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 4.93,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.04,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.37,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 3.12,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 5.5,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.25,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 861.95,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.14,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.51,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.61,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 4.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 1.41,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.18,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.33,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 1.19,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.9,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 39.9,
                    "unit": "mg"
                  }
                ]
              }
            ],
            "caloricBreakdown": {
              "percentProtein": 19,
              "percentFat": 8.37,
              "percentCarbs": 72.63
            },
            "weightPerServing": {
              "amount": 567,
              "unit": "g"
            }
          },
          "summary": "Slow Cooker Vegetarian Chili with Butternut Squash might be just the main course you are searching for. This recipe serves 4. One portion of this dish contains about <b>16g of protein</b>, <b>3g of fat</b>, and a total of <b>309 calories</b>. For <b>$2.29 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. If you have paprika, chicken broth, garlic, and a few other ingredients on hand, you can make it. 3272 people were impressed by this recipe. This recipe is typical of American cuisine. It will be a hit at your <b>The Super Bowl</b> event. It is a good option if you're following a <b>gluten free, dairy free, and vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is super. Try <a href=\"https://spoonacular.com/recipes/slow-cooker-butternut-squash-and-quinoa-chili-713244\">Slow Cooker Butternut Squash and Quinoa Chili</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-butternut-squash-chicken-and-bean-chili-677711\">Slow Cooker Butternut Squash, Chicken and Bean Chili</a>, and <a href=\"https://spoonacular.com/recipes/three-bean-butternut-squash-vegetarian-chili-625961\">Three Bean Butternut Squash Vegetarian Chili</a> for similar recipes.",
          "cuisines": [
            "American"
          ],
          "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
          ],
          "diets": [
            "gluten free",
            "dairy free",
            "lacto ovo vegetarian"
          ],
          "occasions": [
            "super bowl"
          ],
          "winePairing": {
            "pairedWines": [
              "cava",
              "grenache",
              "shiraz"
            ],
            "pairingText": "Chili works really well with Cava, Grenache, and Shiraz. These juicy reds don't have too much tannin (important for spicy foods), but a sparkling wine like cava can tame the heat even better. The Gramona La Cuvee Cava with a 4.5 out of 5 star rating seems like a good match. It costs about 20 dollars per bottle.",
            "productMatches": [
              {
                "id": 443107,
                "title": "Gramona La Cuvee Cava",
                "description": "Straw yellow color. Good intensity and definition on the nose with stone fruit aromas of peach, loquat, apple, and pear. A citric hint of lemon peel provides freshness. Buttery notes and a subtle touch of species and honey.The wine is kind on entry, medium-bodied on the palate, with a good weight of fruit and a well-integrated crispy mousse. Refreshing finish and sustained acidity.This wine can be enjoyed throughout the meal, from the 'aperitif' through to the 'digestif'. Gastronomic and versatile.Blend: 70% Xarel.lo, 30% Macabeo",
                "price": "$19.98",
                "imageUrl": "https://spoonacular.com/productImages/443107-312x231.jpg",
                "averageRating": 0.9,
                "ratingCount": 11,
                "score": 0.8705882352941177,
                "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fgramona-la-cuvee-cava-2013%2F311523"
              }
            ]
          },
          "instructions": "Place all ingredients in your slow cooker and heat on High for 4 hours or Low for 8 hours.Garnish with scallions, Greek yogurt, cilantro or crushed tortilla chips.",
          "analyzedInstructions": [
            {
              "name": "",
              "steps": [
                {
                  "number": 1,
                  "step": "Place all ingredients in your slow cooker and heat on High for 4 hours or Low for 8 hours.",
                  "ingredients": [],
                  "equipment": [
                    {
                      "id": 404718,
                      "name": "slow cooker",
                      "localizedName": "slow cooker",
                      "image": "slow-cooker.jpg"
                    }
                  ],
                  "length": {
                    "number": 720,
                    "unit": "minutes"
                  }
                },
                {
                  "number": 2,
                  "step": "Garnish with scallions, Greek yogurt, cilantro or crushed tortilla chips.",
                  "ingredients": [
                    {
                      "id": 19056,
                      "name": "tortilla chips",
                      "localizedName": "tortilla chips",
                      "image": "tortilla-chips.jpg"
                    },
                    {
                      "id": 1256,
                      "name": "greek yogurt",
                      "localizedName": "greek yogurt",
                      "image": "plain-yogurt.jpg"
                    },
                    {
                      "id": 11291,
                      "name": "green onions",
                      "localizedName": "green onions",
                      "image": "spring-onions.jpg"
                    },
                    {
                      "id": 11165,
                      "name": "cilantro",
                      "localizedName": "cilantro",
                      "image": "cilantro.png"
                    }
                  ],
                  "equipment": []
                }
              ]
            }
          ],
          "originalId": null
        },
        {
          "vegetarian": false,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": true,
          "sustainable": false,
          "weightWatcherSmartPoints": 15,
          "gaps": "no",
          "lowFodmap": false,
          "aggregateLikes": 731,
          "spoonacularScore": 99,
          "healthScore": 82,
          "creditsText": "The Healthy Foodie",
          "sourceName": "The Healthy Foodie",
          "pricePerServing": 273.31,
          "extendedIngredients": [
            {
              "id": 20003,
              "aisle": "Gluten Free;Health Foods;Baking",
              "image": "white-powder.jpg",
              "consistency": "solid",
              "name": "arrowroot flour",
              "original": "2 tsp arrowroot flour",
              "originalString": "2 tsp arrowroot flour",
              "originalName": "arrowroot flour",
              "amount": 2,
              "unit": "tsp",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                }
              }
            },
            {
              "id": 10123,
              "aisle": "Meat",
              "image": "raw-bacon.png",
              "consistency": "solid",
              "name": "bacon",
              "original": "4 slices pastured bacon, cut crosswise into ½\" pieces",
              "originalString": "4 slices pastured bacon, cut crosswise into ½\" pieces",
              "originalName": "pastured bacon, cut crosswise into ½\" pieces",
              "amount": 4,
              "unit": "slices",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 4,
                  "unitShort": "slice",
                  "unitLong": "slices"
                },
                "metric": {
                  "amount": 4,
                  "unitShort": "slice",
                  "unitLong": "slices"
                }
              }
            },
            {
              "id": 13325,
              "aisle": "Meat",
              "image": "liver.jpg",
              "consistency": "solid",
              "name": "beef liver",
              "original": "375g beef liver, sliced",
              "originalString": "375g beef liver, sliced",
              "originalName": "beef liver, sliced",
              "amount": 375,
              "unit": "g",
              "meta": [
                "sliced"
              ],
              "metaInformation": [
                "sliced"
              ],
              "measures": {
                "us": {
                  "amount": 13.228,
                  "unitShort": "oz",
                  "unitLong": "ounces"
                },
                "metric": {
                  "amount": 375,
                  "unitShort": "g",
                  "unitLong": "grams"
                }
              }
            },
            {
              "id": 9094,
              "aisle": "Dried Fruits;Produce",
              "image": "figs-dried.jpg",
              "consistency": "solid",
              "name": "dried figs",
              "original": "4 dried figs, chopped",
              "originalString": "4 dried figs, chopped",
              "originalName": "dried figs, chopped",
              "amount": 4,
              "unit": "",
              "meta": [
                "dried",
                "chopped"
              ],
              "metaInformation": [
                "dried",
                "chopped"
              ],
              "measures": {
                "us": {
                  "amount": 4,
                  "unitShort": "",
                  "unitLong": ""
                },
                "metric": {
                  "amount": 4,
                  "unitShort": "",
                  "unitLong": ""
                }
              }
            },
            {
              "id": 99226,
              "aisle": "Produce;Spices and Seasonings",
              "image": "fresh-sage.png",
              "consistency": "solid",
              "name": "fresh sage",
              "original": "2 sprigs fresh sage, chopped",
              "originalString": "2 sprigs fresh sage, chopped",
              "originalName": "fresh sage, chopped",
              "amount": 2,
              "unit": "sprigs",
              "meta": [
                "fresh",
                "chopped"
              ],
              "metaInformation": [
                "fresh",
                "chopped"
              ],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "sprigs",
                  "unitLong": "sprigs"
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "sprigs",
                  "unitLong": "sprigs"
                }
              }
            },
            {
              "id": 9152,
              "aisle": "Produce",
              "image": "lemon-juice.jpg",
              "consistency": "liquid",
              "name": "juice of lemon",
              "original": "The juice of 1 lemon",
              "originalString": "The juice of 1 lemon",
              "originalName": "The juice of lemon",
              "amount": 1,
              "unit": "",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 1,
                  "unitShort": "",
                  "unitLong": ""
                },
                "metric": {
                  "amount": 1,
                  "unitShort": "",
                  "unitLong": ""
                }
              }
            },
            {
              "id": 11260,
              "aisle": "Produce",
              "image": "mushrooms.png",
              "consistency": "solid",
              "name": "mushrooms",
              "original": "200g mushrooms, sliced",
              "originalString": "200g mushrooms, sliced",
              "originalName": "mushrooms, sliced",
              "amount": 200,
              "unit": "g",
              "meta": [
                "sliced"
              ],
              "metaInformation": [
                "sliced"
              ],
              "measures": {
                "us": {
                  "amount": 7.055,
                  "unitShort": "oz",
                  "unitLong": "ounces"
                },
                "metric": {
                  "amount": 200,
                  "unitShort": "g",
                  "unitLong": "grams"
                }
              }
            },
            {
              "id": 11282,
              "aisle": "Produce",
              "image": "brown-onion.png",
              "consistency": "solid",
              "name": "onions",
              "original": "2 large onions, sliced",
              "originalString": "2 large onions, sliced",
              "originalName": "onions, sliced",
              "amount": 2,
              "unit": "large",
              "meta": [
                "sliced"
              ],
              "metaInformation": [
                "sliced"
              ],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "large",
                  "unitLong": "larges"
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "large",
                  "unitLong": "larges"
                }
              }
            },
            {
              "id": 1002030,
              "aisle": "Spices and Seasonings",
              "image": "pepper.jpg",
              "consistency": "solid",
              "name": "pepper",
              "original": "½ tsp freshly cracked black pepper",
              "originalString": "½ tsp freshly cracked black pepper",
              "originalName": "freshly cracked black pepper",
              "amount": 0.5,
              "unit": "tsp",
              "meta": [
                "black"
              ],
              "metaInformation": [
                "black"
              ],
              "measures": {
                "us": {
                  "amount": 0.5,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                },
                "metric": {
                  "amount": 0.5,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                }
              }
            },
            {
              "id": 1012047,
              "aisle": "Spices and Seasonings",
              "image": "salt.jpg",
              "consistency": "solid",
              "name": "sea-salt",
              "original": "½ tsp Himalayan or unrefined sea salt",
              "originalString": "½ tsp Himalayan or unrefined sea salt",
              "originalName": "Himalayan or unrefined sea salt",
              "amount": 0.5,
              "unit": "tsp",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 0.5,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                },
                "metric": {
                  "amount": 0.5,
                  "unitShort": "tsps",
                  "unitLong": "teaspoons"
                }
              }
            },
            {
              "id": 14412,
              "aisle": "Beverages",
              "image": "water.png",
              "consistency": "liquid",
              "name": "water",
              "original": "1/4 cup water",
              "originalString": "1/4 cup water",
              "originalName": "water",
              "amount": 0.25,
              "unit": "cup",
              "meta": [],
              "metaInformation": [],
              "measures": {
                "us": {
                  "amount": 0.25,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 59.147,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            },
            {
              "id": 1012069,
              "aisle": "Oil, Vinegar, Salad Dressing",
              "image": "vinegar-(white).jpg",
              "consistency": "liquid",
              "name": "white balsamic vinegar",
              "original": "2 tbsp white balsamic vinegar",
              "originalString": "2 tbsp white balsamic vinegar",
              "originalName": "white balsamic vinegar",
              "amount": 2,
              "unit": "tbsp",
              "meta": [
                "white"
              ],
              "metaInformation": [
                "white"
              ],
              "measures": {
                "us": {
                  "amount": 2,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                },
                "metric": {
                  "amount": 2,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                }
              }
            }
          ],
          "id": 551452,
          "title": "Beef Liver with Fig, Bacon and Caramelized Onion Compote [or the ultimate beef liver ]",
          "readyInMinutes": 45,
          "servings": 2,
          "sourceUrl": "http://thehealthyfoodie.com/2013/07/11/beef-liver-with-fig-bacon-and-caramelized-onion-compote/",
          "image": "https://spoonacular.com/recipeImages/551452-556x370.png",
          "imageType": "png",
          "nutrition": {
            "nutrients": [
              {
                "title": "Calories",
                "amount": 591.95,
                "unit": "cal",
                "percentOfDailyNeeds": 29.6
              },
              {
                "title": "Fat",
                "amount": 24.99,
                "unit": "g",
                "percentOfDailyNeeds": 38.44
              },
              {
                "title": "Saturated Fat",
                "amount": 8.32,
                "unit": "g",
                "percentOfDailyNeeds": 52.02
              },
              {
                "title": "Carbohydrates",
                "amount": 43.02,
                "unit": "g",
                "percentOfDailyNeeds": 14.34
              },
              {
                "title": "Net Carbohydrates",
                "amount": 37.57,
                "unit": "g",
                "percentOfDailyNeeds": 13.66
              },
              {
                "title": "Sugar",
                "amount": 18.78,
                "unit": "g",
                "percentOfDailyNeeds": 20.87
              },
              {
                "title": "Cholesterol",
                "amount": 544.67,
                "unit": "mg",
                "percentOfDailyNeeds": 181.56
              },
              {
                "title": "Sodium",
                "amount": 1020.13,
                "unit": "mg",
                "percentOfDailyNeeds": 44.35
              },
              {
                "title": "Protein",
                "amount": 49.21,
                "unit": "g",
                "percentOfDailyNeeds": 98.42
              },
              {
                "title": "Vitamin B12",
                "amount": 111.45,
                "unit": "µg",
                "percentOfDailyNeeds": 1857.46
              },
              {
                "title": "Copper",
                "amount": 19.98,
                "unit": "mg",
                "percentOfDailyNeeds": 999.08
              },
              {
                "title": "Vitamin A",
                "amount": 31708.27,
                "unit": "IU",
                "percentOfDailyNeeds": 634.17
              },
              {
                "title": "Vitamin B2",
                "amount": 5.66,
                "unit": "mg",
                "percentOfDailyNeeds": 332.97
              },
              {
                "title": "Vitamin B5",
                "amount": 15.48,
                "unit": "mg",
                "percentOfDailyNeeds": 154.76
              },
              {
                "title": "Vitamin B3",
                "amount": 30.37,
                "unit": "mg",
                "percentOfDailyNeeds": 151.86
              },
              {
                "title": "Folate",
                "amount": 594.05,
                "unit": "µg",
                "percentOfDailyNeeds": 148.51
              },
              {
                "title": "Selenium",
                "amount": 93.47,
                "unit": "µg",
                "percentOfDailyNeeds": 133.53
              },
              {
                "title": "Vitamin B6",
                "amount": 2.46,
                "unit": "mg",
                "percentOfDailyNeeds": 122.86
              },
              {
                "title": "Phosphorus",
                "amount": 934.59,
                "unit": "mg",
                "percentOfDailyNeeds": 93.46
              },
              {
                "title": "Iron",
                "amount": 10.75,
                "unit": "mg",
                "percentOfDailyNeeds": 59.71
              },
              {
                "title": "Zinc",
                "amount": 8.92,
                "unit": "mg",
                "percentOfDailyNeeds": 59.49
              },
              {
                "title": "Manganese",
                "amount": 1.06,
                "unit": "mg",
                "percentOfDailyNeeds": 52.77
              },
              {
                "title": "Vitamin B1",
                "amount": 0.64,
                "unit": "mg",
                "percentOfDailyNeeds": 42.99
              },
              {
                "title": "Potassium",
                "amount": 1362.1,
                "unit": "mg",
                "percentOfDailyNeeds": 38.92
              },
              {
                "title": "Vitamin C",
                "amount": 21.63,
                "unit": "mg",
                "percentOfDailyNeeds": 26.22
              },
              {
                "title": "Fiber",
                "amount": 5.45,
                "unit": "g",
                "percentOfDailyNeeds": 21.82
              },
              {
                "title": "Magnesium",
                "amount": 78.71,
                "unit": "mg",
                "percentOfDailyNeeds": 19.68
              },
              {
                "title": "Vitamin D",
                "amount": 2.63,
                "unit": "µg",
                "percentOfDailyNeeds": 17.51
              },
              {
                "title": "Vitamin K",
                "amount": 9.73,
                "unit": "µg",
                "percentOfDailyNeeds": 9.26
              },
              {
                "title": "Calcium",
                "amount": 87.94,
                "unit": "mg",
                "percentOfDailyNeeds": 8.79
              },
              {
                "title": "Vitamin E",
                "amount": 1.03,
                "unit": "mg",
                "percentOfDailyNeeds": 6.84
              }
            ],
            "ingredients": [
              {
                "name": "arrowroot flour",
                "amount": 1,
                "unit": "tsp",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 3.53,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0.28,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 14.28,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.12,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0.2,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.14,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 1.6,
                    "unit": "mg"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 3.39,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 0.44,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "bacon",
                "amount": 2,
                "unit": "slices",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0.56,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.52,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 8.84,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 17.46,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 183.48,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 5.85,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 1.77,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 5.28,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.12,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 63.36,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0.18,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 7.67,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 5.55,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 16.28,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.24,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 29.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 2.84,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.12,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.19,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0.06,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 2.2,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.56,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 291.28,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 21.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0.22,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 87.12,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "beef liver",
                "amount": 187.5,
                "unit": "g",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 7.29,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 543.75,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 7.5,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 74.44,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 6.81,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 253.13,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 2.31,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 9.19,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 24.7,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 33.75,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 2.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 725.63,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 2.25,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.9,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 38.17,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 31683.75,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 13.45,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 515.63,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.87,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 18.29,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.35,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.71,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0.32,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 9.38,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 5.81,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 7.29,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 129.38,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.58,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 624.94,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 2.44,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 5.17,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 111.19,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 586.88,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "dried figs",
                "amount": 2,
                "unit": "",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 10.22,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 1.44,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.09,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.1,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.15,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 39.84,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.32,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 10.88,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 10.72,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.53,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 1.6,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.06,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 1.57,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 25.92,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 2.5,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 7.67,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 8.65,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 1.6,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 2.53,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0.19,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 108.8,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "fresh sage",
                "amount": 1,
                "unit": "sprigs",
                "nutrients": [
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Carbohydrates",
                    "amount": 0.07,
                    "unit": "g"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 1.23,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 0.59,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 2.66,
                    "unit": "mg"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.69,
                    "unit": "mg"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.04,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0.15,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 0.65,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 1.73,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "juice of lemon",
                "amount": 0.5,
                "unit": "",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 1.03,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 3,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.02,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.04,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 3.3,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.9,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 1.2,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.05,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0.9,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.05,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 0.9,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0.38,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.99,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0.15,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.77,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 5.81,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 15.45,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "mushrooms",
                "amount": 100,
                "unit": "g",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 3.26,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 17,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.52,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 9.3,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.34,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 22,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.05,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.5,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 3.61,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 9,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 86,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0.2,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 3.09,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 1.5,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.16,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.32,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 1,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 3,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 1.98,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 2.26,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 5,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 17.3,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 2.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.4,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0.04,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 318,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "onions",
                "amount": 1,
                "unit": "large",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 14.01,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 28.5,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.26,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.75,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.15,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 60,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.06,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.32,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.17,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 15,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 43.5,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 1.65,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 3,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 2.55,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 34.5,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.6,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 6.36,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 11.46,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 6,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 1.65,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.19,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 9.15,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 11.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 219,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "pepper",
                "amount": 0.25,
                "unit": "tsp",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0.32,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0.09,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.02,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 1.25,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.86,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0.79,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.05,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 2.74,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.13,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 2.22,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0.82,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0.19,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 0.17,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 6.65,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "sea-salt",
                "amount": 0.25,
                "unit": "tsp",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 0,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 0.36,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 581.37,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 0.12,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "water",
                "amount": 0.13,
                "unit": "cup",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 0,
                    "unit": "cal"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 0.89,
                    "unit": "mg"
                  },
                  {
                    "name": "Iron",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.3,
                    "unit": "mg"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 1.48,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 7.63,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Protein",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Potassium",
                    "amount": 0,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "white balsamic vinegar",
                "amount": 1,
                "unit": "tbsp",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 2.72,
                    "unit": "g"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 14.08,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Trans Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 4.32,
                    "unit": "mg"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.12,
                    "unit": "mg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 2.39,
                    "unit": "g"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 1.92,
                    "unit": "mg"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 2.72,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 3.68,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 3.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.08,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Potassium",
                    "amount": 17.92,
                    "unit": "mg"
                  }
                ]
              }
            ],
            "caloricBreakdown": {
              "percentProtein": 33.15,
              "percentFat": 37.87,
              "percentCarbs": 28.98
            },
            "weightPerServing": {
              "amount": 565,
              "unit": "g"
            }
          },
          "summary": "Need a <b>caveman, gluten free, dairy free, and primal main course</b>? Beef Liver with Fig, Bacon and Caramelized Onion Compote [or the ultimate beef liver ] could be a great recipe to try. This recipe makes 2 servings with <b>579 calories</b>, <b>49g of protein</b>, and <b>25g of fat</b> each. For <b>$2.69 per serving</b>, this recipe <b>covers 58%</b> of your daily requirements of vitamins and minerals. Several people made this recipe, and 729 would say it hit the spot. Head to the store and pick up sage, water, juice of lemon, and a few other things to make it today. To use up the onions you could follow this main course with the <a href=\"https://spoonacular.com/recipes/candy-corn-cupcakes-63881\">Candy Corn Cupcakes</a> as a dessert. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is tremendous. Try <a href=\"https://spoonacular.com/recipes/beef-liver-with-caramelized-peaches-and-onion-compote-551514\">Beef Liver with Caramelized Peaches and Onion Compote</a>, <a href=\"https://spoonacular.com/recipes/beef-liver-with-onions-and-bacon-634625\">Beef Liver With Onions and Bacon</a>, and <a href=\"https://spoonacular.com/recipes/beef-liver-thatll-make-you-a-believer-its-got-bacon-in-it-551253\">Beef Liver that’ll make you a believer – It’s got BACON in it</a> for similar recipes.",
          "cuisines": [],
          "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
          ],
          "diets": [
            "gluten free",
            "dairy free",
            "paleolithic",
            "primal"
          ],
          "occasions": [],
          "winePairing": {},
          "instructions": "In a non-reactive sealable container, marinate the beef liver in lemon juice for at least 8 hours (or up to 24 hours). Yes, that’s in the refrigerator! In a cold, large heavy skillet (cast iron preferred) set over medium heat, cook the bacon until nice and crispy. While the bacon is cooking, rinse the beef liver slices under running water and pat them dry. In a shallow bowl or plate, combine the arrowroot flour, salt and pepper. Mix thoroughly with a whisk until very well combined.Dredge the liver slices in the arrowroot mixture and shake well to remove any excess. Set aside in a plate until bacon is done cooking.When bacon is nice and crispy, remove it to a plate with a slotted spoon, and set aside. Pour the bacon fat into a small bowl but leave about 2 tablespoons in the pan. Put the skillet back over high heat. When the pan is really nice an hot, add the liver slices and sear for about 45 seconds to a minute per side, just long enough for them to get a beautiful dark brown and crispy exterior. You might have to work in batches, depending on the size of your skillet.Remove the liver to a plate, cover loosely to keep it warm while you work on the onion compote. Put your pan back over the heat source and lower heat to medium-high; add about half the remaining bacon fat and throw the sliced onions right in. Let the onions caramelize for about 10 minutes, stirring occasionally. When the onions have taken a nice golden coloration, add the remaining bacon fat and the sliced mushrooms. Continue cooking for 2-3 minutes, until the mushrooms become soft and slightly golden. Add figs, vinegar and water and cook for another minute or so, until liquid is completely evaporated. Stir in fresh sage, kill the heat and place liver slices on top of the onion compote. Cover loosely and let sit for about 5 minutes just to warm up the liver and allow all the flavours to mingle happily.  Serve immediately , sprinkled with crispy bacon.",
          "analyzedInstructions": [
            {
              "name": "",
              "steps": [
                {
                  "number": 1,
                  "step": "In a non-reactive sealable container, marinate the beef liver in lemon juice for at least 8 hours (or up to 24 hours). Yes, that’s in the refrigerator! In a cold, large heavy skillet (cast iron preferred) set over medium heat, cook the bacon until nice and crispy. While the bacon is cooking, rinse the beef liver slices under running water and pat them dry. In a shallow bowl or plate, combine the arrowroot flour, salt and pepper.",
                  "ingredients": [
                    {
                      "id": 20003,
                      "name": "arrowroot",
                      "localizedName": "arrowroot",
                      "image": "white-powder.jpg"
                    },
                    {
                      "id": 1102047,
                      "name": "salt and pepper",
                      "localizedName": "salt and pepper",
                      "image": "salt-and-pepper.jpg"
                    },
                    {
                      "id": 9152,
                      "name": "lemon juice",
                      "localizedName": "lemon juice",
                      "image": "lemon-juice.jpg"
                    },
                    {
                      "id": 13325,
                      "name": "beef liver",
                      "localizedName": "beef liver",
                      "image": "liver.jpg"
                    },
                    {
                      "id": 10123,
                      "name": "bacon",
                      "localizedName": "bacon",
                      "image": "raw-bacon.png"
                    },
                    {
                      "id": 14412,
                      "name": "water",
                      "localizedName": "water",
                      "image": "water.png"
                    }
                  ],
                  "equipment": [
                    {
                      "id": 404645,
                      "name": "frying pan",
                      "localizedName": "frying pan",
                      "image": "pan.png"
                    },
                    {
                      "id": 404783,
                      "name": "bowl",
                      "localizedName": "bowl",
                      "image": "bowl.jpg"
                    }
                  ],
                  "length": {
                    "number": 1920,
                    "unit": "minutes"
                  }
                },
                {
                  "number": 2,
                  "step": "Mix thoroughly with a whisk until very well combined.Dredge the liver slices in the arrowroot mixture and shake well to remove any excess. Set aside in a plate until bacon is done cooking.When bacon is nice and crispy, remove it to a plate with a slotted spoon, and set aside.",
                  "ingredients": [
                    {
                      "id": 20003,
                      "name": "arrowroot",
                      "localizedName": "arrowroot",
                      "image": "white-powder.jpg"
                    },
                    {
                      "id": 10123,
                      "name": "bacon",
                      "localizedName": "bacon",
                      "image": "raw-bacon.png"
                    },
                    {
                      "id": 13325,
                      "name": "liver",
                      "localizedName": "liver",
                      "image": "liver.jpg"
                    },
                    {
                      "id": 0,
                      "name": "shake",
                      "localizedName": "shake",
                      "image": ""
                    }
                  ],
                  "equipment": [
                    {
                      "id": 404636,
                      "name": "slotted spoon",
                      "localizedName": "slotted spoon",
                      "image": "slotted-spoon.jpg"
                    },
                    {
                      "id": 404661,
                      "name": "whisk",
                      "localizedName": "whisk",
                      "image": "whisk.png"
                    }
                  ]
                },
                {
                  "number": 3,
                  "step": "Pour the bacon fat into a small bowl but leave about 2 tablespoons in the pan.",
                  "ingredients": [
                    {
                      "id": 4609,
                      "name": "bacon drippings",
                      "localizedName": "bacon drippings",
                      "image": "raw-bacon.png"
                    }
                  ],
                  "equipment": [
                    {
                      "id": 404783,
                      "name": "bowl",
                      "localizedName": "bowl",
                      "image": "bowl.jpg"
                    },
                    {
                      "id": 404645,
                      "name": "frying pan",
                      "localizedName": "frying pan",
                      "image": "pan.png"
                    }
                  ]
                },
                {
                  "number": 4,
                  "step": "Put the skillet back over high heat. When the pan is really nice an hot, add the liver slices and sear for about 45 seconds to a minute per side, just long enough for them to get a beautiful dark brown and crispy exterior. You might have to work in batches, depending on the size of your skillet.",
                  "ingredients": [
                    {
                      "id": 13325,
                      "name": "liver",
                      "localizedName": "liver",
                      "image": "liver.jpg"
                    }
                  ],
                  "equipment": [
                    {
                      "id": 404645,
                      "name": "frying pan",
                      "localizedName": "frying pan",
                      "image": "pan.png"
                    }
                  ]
                },
                {
                  "number": 5,
                  "step": "Remove the liver to a plate, cover loosely to keep it warm while you work on the onion compote. Put your pan back over the heat source and lower heat to medium-high; add about half the remaining bacon fat and throw the sliced onions right in.",
                  "ingredients": [
                    {
                      "id": 4609,
                      "name": "bacon drippings",
                      "localizedName": "bacon drippings",
                      "image": "raw-bacon.png"
                    },
                    {
                      "id": 0,
                      "name": "compote",
                      "localizedName": "compote",
                      "image": ""
                    },
                    {
                      "id": 11282,
                      "name": "onion",
                      "localizedName": "onion",
                      "image": "brown-onion.png"
                    },
                    {
                      "id": 13325,
                      "name": "liver",
                      "localizedName": "liver",
                      "image": "liver.jpg"
                    }
                  ],
                  "equipment": [
                    {
                      "id": 404645,
                      "name": "frying pan",
                      "localizedName": "frying pan",
                      "image": "pan.png"
                    }
                  ]
                },
                {
                  "number": 6,
                  "step": "Let the onions caramelize for about 10 minutes, stirring occasionally. When the onions have taken a nice golden coloration, add the remaining bacon fat and the sliced mushrooms. Continue cooking for 2-3 minutes, until the mushrooms become soft and slightly golden.",
                  "ingredients": [
                    {
                      "id": 4609,
                      "name": "bacon drippings",
                      "localizedName": "bacon drippings",
                      "image": "raw-bacon.png"
                    },
                    {
                      "id": 11260,
                      "name": "mushrooms",
                      "localizedName": "mushrooms",
                      "image": "mushrooms.png"
                    },
                    {
                      "id": 11282,
                      "name": "onion",
                      "localizedName": "onion",
                      "image": "brown-onion.png"
                    }
                  ],
                  "equipment": [],
                  "length": {
                    "number": 13,
                    "unit": "minutes"
                  }
                },
                {
                  "number": 7,
                  "step": "Add figs, vinegar and water and cook for another minute or so, until liquid is completely evaporated. Stir in fresh sage, kill the heat and place liver slices on top of the onion compote. Cover loosely and let sit for about 5 minutes just to warm up the liver and allow all the flavours to mingle happily.",
                  "ingredients": [
                    {
                      "id": 99226,
                      "name": "fresh sage",
                      "localizedName": "fresh sage",
                      "image": "fresh-sage.png"
                    },
                    {
                      "id": 0,
                      "name": "compote",
                      "localizedName": "compote",
                      "image": ""
                    },
                    {
                      "id": 2053,
                      "name": "vinegar",
                      "localizedName": "vinegar",
                      "image": "vinegar-(white).jpg"
                    },
                    {
                      "id": 13325,
                      "name": "liver",
                      "localizedName": "liver",
                      "image": "liver.jpg"
                    },
                    {
                      "id": 11282,
                      "name": "onion",
                      "localizedName": "onion",
                      "image": "brown-onion.png"
                    },
                    {
                      "id": 14412,
                      "name": "water",
                      "localizedName": "water",
                      "image": "water.png"
                    },
                    {
                      "id": 9089,
                      "name": "figs",
                      "localizedName": "figs",
                      "image": "figs-fresh.jpg"
                    }
                  ],
                  "equipment": [],
                  "length": {
                    "number": 5,
                    "unit": "minutes"
                  }
                },
                {
                  "number": 8,
                  "step": "Serve immediately , sprinkled with crispy bacon.",
                  "ingredients": [
                    {
                      "id": 10123,
                      "name": "bacon",
                      "localizedName": "bacon",
                      "image": "raw-bacon.png"
                    }
                  ],
                  "equipment": []
                }
              ]
            }
          ],
          "originalId": null
        },
        {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": true,
          "dairyFree": false,
          "veryHealthy": false,
          "cheap": false,
          "veryPopular": true,
          "sustainable": false,
          "weightWatcherSmartPoints": 5,
          "gaps": "no",
          "lowFodmap": false,
          "preparationMinutes": 10,
          "cookingMinutes": 0,
          "aggregateLikes": 12318,
          "spoonacularScore": 99,
          "healthScore": 41,
          "creditsText": "She Wears Many Hats",
          "sourceName": "She Wears Many Hats",
          "pricePerServing": 202.35,
          "extendedIngredients": [
            {
              "id": 1085,
              "aisle": "Milk, Eggs, Other Dairy",
              "image": "milk.jpg",
              "consistency": "liquid",
              "name": "fat-free milk",
              "original": "1½ cup milk (i used fat-free, but low fat, or regular is fine)",
              "originalString": "1½ cup milk (i used fat-free, but low fat, or regular is fine)",
              "originalName": "milk (i used fat-free, but low fat, or regular is fine)",
              "amount": 1.5,
              "unit": "cup",
              "meta": [
                "fat-free",
                "low fat,",
                "fine",
                "(i used , but or regular is )"
              ],
              "metaInformation": [
                "fat-free",
                "low fat,",
                "fine",
                "(i used , but or regular is )"
              ],
              "measures": {
                "us": {
                  "amount": 1.5,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 354.882,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            },
            {
              "id": 19296,
              "aisle": "Nut butters, Jams, and Honey",
              "image": "honey.png",
              "consistency": "liquid",
              "name": "honey",
              "original": "1½ tablespoons honey (orange blossom honey is perfect for this recipe; substitute sugar or other sweetener if needed)",
              "originalString": "1½ tablespoons honey (orange blossom honey is perfect for this recipe; substitute sugar or other sweetener if needed)",
              "originalName": "honey (orange blossom honey is perfect for this recipe; substitute sugar or other sweetener if needed)",
              "amount": 1.5,
              "unit": "tablespoons",
              "meta": [
                "for this recipe; substitute sugar or other sweetener if needed)"
              ],
              "metaInformation": [
                "for this recipe; substitute sugar or other sweetener if needed)"
              ],
              "measures": {
                "us": {
                  "amount": 1.5,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                },
                "metric": {
                  "amount": 1.5,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
                }
              }
            },
            {
              "id": 9307,
              "aisle": "Produce",
              "image": "rhubarb.jpg",
              "consistency": "solid",
              "name": "rhubarb",
              "original": "1½ cup rhubarb, frozen (ditto on using fresh)",
              "originalString": "1½ cup rhubarb, frozen (ditto on using fresh)",
              "originalName": "rhubarb, frozen (ditto on using fresh)",
              "amount": 1.5,
              "unit": "cup",
              "meta": [
                "fresh",
                "frozen",
                "(ditto on using )"
              ],
              "metaInformation": [
                "fresh",
                "frozen",
                "(ditto on using )"
              ],
              "measures": {
                "us": {
                  "amount": 1.5,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 354.882,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            },
            {
              "id": 9316,
              "aisle": "Produce",
              "image": "strawberries.png",
              "consistency": "solid",
              "name": "strawberry",
              "original": "1½ cup strawberry, frozen (but you could just as easily use fresh, cut up)",
              "originalString": "1½ cup strawberry, frozen (but you could just as easily use fresh, cut up)",
              "originalName": "strawberry, frozen (but you could just as easily use fresh, cut up)",
              "amount": 1.5,
              "unit": "cup",
              "meta": [
                "fresh",
                "frozen",
                "(but you could just as easily use , cut up)"
              ],
              "metaInformation": [
                "fresh",
                "frozen",
                "(but you could just as easily use , cut up)"
              ],
              "measures": {
                "us": {
                  "amount": 1.5,
                  "unitShort": "cups",
                  "unitLong": "cups"
                },
                "metric": {
                  "amount": 354.882,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
                }
              }
            }
          ],
          "id": 537208,
          "title": "Rhubarb Strawberry Smoothie",
          "readyInMinutes": 10,
          "servings": 2,
          "sourceUrl": "http://shewearsmanyhats.com/2011/05/rhubarb-strawberry-smoothie/",
          "image": "https://spoonacular.com/recipeImages/537208-556x370.jpg",
          "imageType": "jpg",
          "nutrition": {
            "nutrients": [
              {
                "title": "Calories",
                "amount": 164.13,
                "unit": "cal",
                "percentOfDailyNeeds": 8.21
              },
              {
                "title": "Fat",
                "amount": 0.65,
                "unit": "g",
                "percentOfDailyNeeds": 1.01
              },
              {
                "title": "Saturated Fat",
                "amount": 0.17,
                "unit": "g",
                "percentOfDailyNeeds": 1.05
              },
              {
                "title": "Carbohydrates",
                "amount": 34.54,
                "unit": "g",
                "percentOfDailyNeeds": 11.51
              },
              {
                "title": "Net Carbohydrates",
                "amount": 30.7,
                "unit": "g",
                "percentOfDailyNeeds": 11.16
              },
              {
                "title": "Sugar",
                "amount": 28.57,
                "unit": "g",
                "percentOfDailyNeeds": 31.75
              },
              {
                "title": "Cholesterol",
                "amount": 3.68,
                "unit": "mg",
                "percentOfDailyNeeds": 1.23
              },
              {
                "title": "Sodium",
                "amount": 82.55,
                "unit": "mg",
                "percentOfDailyNeeds": 3.59
              },
              {
                "title": "Protein",
                "amount": 7.79,
                "unit": "g",
                "percentOfDailyNeeds": 15.57
              },
              {
                "title": "Vitamin C",
                "amount": 70.9,
                "unit": "mg",
                "percentOfDailyNeeds": 85.94
              },
              {
                "title": "Calcium",
                "amount": 321.09,
                "unit": "mg",
                "percentOfDailyNeeds": 32.11
              },
              {
                "title": "Manganese",
                "amount": 0.61,
                "unit": "mg",
                "percentOfDailyNeeds": 30.72
              },
              {
                "title": "Vitamin K",
                "amount": 29.19,
                "unit": "µg",
                "percentOfDailyNeeds": 27.8
              },
              {
                "title": "Vitamin B2",
                "amount": 0.39,
                "unit": "mg",
                "percentOfDailyNeeds": 23.04
              },
              {
                "title": "Phosphorus",
                "amount": 224.95,
                "unit": "mg",
                "percentOfDailyNeeds": 22.49
              },
              {
                "title": "Potassium",
                "amount": 723.6,
                "unit": "mg",
                "percentOfDailyNeeds": 20.67
              },
              {
                "title": "Fiber",
                "amount": 3.84,
                "unit": "g",
                "percentOfDailyNeeds": 15.35
              },
              {
                "title": "Vitamin B12",
                "amount": 0.92,
                "unit": "µg",
                "percentOfDailyNeeds": 15.31
              },
              {
                "title": "Vitamin D",
                "amount": 2.21,
                "unit": "µg",
                "percentOfDailyNeeds": 14.7
              },
              {
                "title": "Magnesium",
                "amount": 45.55,
                "unit": "mg",
                "percentOfDailyNeeds": 11.39
              },
              {
                "title": "Folate",
                "amount": 41.83,
                "unit": "µg",
                "percentOfDailyNeeds": 10.46
              },
              {
                "title": "Selenium",
                "amount": 7.26,
                "unit": "µg",
                "percentOfDailyNeeds": 10.37
              },
              {
                "title": "Vitamin A",
                "amount": 481.14,
                "unit": "IU",
                "percentOfDailyNeeds": 9.62
              },
              {
                "title": "Vitamin B5",
                "amount": 0.88,
                "unit": "mg",
                "percentOfDailyNeeds": 8.79
              },
              {
                "title": "Vitamin B1",
                "amount": 0.13,
                "unit": "mg",
                "percentOfDailyNeeds": 8.46
              },
              {
                "title": "Vitamin B6",
                "amount": 0.14,
                "unit": "mg",
                "percentOfDailyNeeds": 7.22
              },
              {
                "title": "Zinc",
                "amount": 1.05,
                "unit": "mg",
                "percentOfDailyNeeds": 6.99
              },
              {
                "title": "Copper",
                "amount": 0.1,
                "unit": "mg",
                "percentOfDailyNeeds": 5.03
              },
              {
                "title": "Vitamin B3",
                "amount": 0.88,
                "unit": "mg",
                "percentOfDailyNeeds": 4.42
              },
              {
                "title": "Iron",
                "amount": 0.77,
                "unit": "mg",
                "percentOfDailyNeeds": 4.25
              },
              {
                "title": "Vitamin E",
                "amount": 0.58,
                "unit": "mg",
                "percentOfDailyNeeds": 3.86
              }
            ],
            "ingredients": [
              {
                "name": "fat-free milk",
                "amount": 0.75,
                "unit": "cup",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 9.11,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 9.19,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.77,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 5.7,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.15,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 62.48,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.1,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.06,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.17,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 20.21,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 185.59,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 2.21,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.04,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 6.19,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 374.85,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.66,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 3.68,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.01,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 224.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 9.35,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 9.11,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 77.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 5.7,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 28.67,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.33,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0.92,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 286.65,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "honey",
                "amount": 0.75,
                "unit": "tablespoons",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 12.98,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 0.32,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.13,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 47.88,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.07,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 0.32,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 0.63,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.05,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 0,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 0.03,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 0.95,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 12.93,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 12.95,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 0.63,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 1.1,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 0.35,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 0.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.01,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 8.19,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "rhubarb",
                "amount": 0.75,
                "unit": "cup",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 4.15,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 6.41,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.09,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 1.01,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.18,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 19.22,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.05,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.2,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.27,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 10.98,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 12.81,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.04,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.82,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 93.33,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.09,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.25,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 1.65,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 78.69,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 26.81,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 1.01,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 2.51,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 3.66,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.18,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 5.58,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 7.32,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 263.52,
                    "unit": "mg"
                  }
                ]
              },
              {
                "name": "strawberry",
                "amount": 0.75,
                "unit": "cup",
                "nutrients": [
                  {
                    "name": "Carbohydrates",
                    "amount": 8.29,
                    "unit": "g"
                  },
                  {
                    "name": "Alcohol",
                    "amount": 0,
                    "unit": "g"
                  },
                  {
                    "name": "Folate",
                    "amount": 25.92,
                    "unit": "µg"
                  },
                  {
                    "name": "Zinc",
                    "amount": 0.15,
                    "unit": "mg"
                  },
                  {
                    "name": "Selenium",
                    "amount": 0.43,
                    "unit": "µg"
                  },
                  {
                    "name": "Fat",
                    "amount": 0.32,
                    "unit": "g"
                  },
                  {
                    "name": "Calories",
                    "amount": 34.56,
                    "unit": "cal"
                  },
                  {
                    "name": "Saturated Fat",
                    "amount": 0.02,
                    "unit": "g"
                  },
                  {
                    "name": "Iron",
                    "amount": 0.44,
                    "unit": "mg"
                  },
                  {
                    "name": "Folic Acid",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Vitamin B3",
                    "amount": 0.42,
                    "unit": "mg"
                  },
                  {
                    "name": "Magnesium",
                    "amount": 14.04,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B6",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Phosphorus",
                    "amount": 25.92,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin D",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Mono Unsaturated Fat",
                    "amount": 0.05,
                    "unit": "g"
                  },
                  {
                    "name": "Protein",
                    "amount": 0.72,
                    "unit": "g"
                  },
                  {
                    "name": "Vitamin A",
                    "amount": 12.96,
                    "unit": "IU"
                  },
                  {
                    "name": "Vitamin B5",
                    "amount": 0.14,
                    "unit": "mg"
                  },
                  {
                    "name": "Cholesterol",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Poly Unsaturated Fat",
                    "amount": 0.17,
                    "unit": "g"
                  },
                  {
                    "name": "Caffeine",
                    "amount": 0,
                    "unit": "mg"
                  },
                  {
                    "name": "Copper",
                    "amount": 0.05,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B1",
                    "amount": 0.03,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin E",
                    "amount": 0.31,
                    "unit": "mg"
                  },
                  {
                    "name": "Fiber",
                    "amount": 2.16,
                    "unit": "g"
                  },
                  {
                    "name": "Calcium",
                    "amount": 17.28,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin K",
                    "amount": 2.38,
                    "unit": "µg"
                  },
                  {
                    "name": "Sugar",
                    "amount": 5.28,
                    "unit": "g"
                  },
                  {
                    "name": "Net Carbohydrates",
                    "amount": 6.13,
                    "unit": "g"
                  },
                  {
                    "name": "Sodium",
                    "amount": 1.08,
                    "unit": "mg"
                  },
                  {
                    "name": "Fluoride",
                    "amount": 4.75,
                    "unit": "mg"
                  },
                  {
                    "name": "Manganese",
                    "amount": 0.42,
                    "unit": "mg"
                  },
                  {
                    "name": "Choline",
                    "amount": 6.16,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin C",
                    "amount": 63.5,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B2",
                    "amount": 0.02,
                    "unit": "mg"
                  },
                  {
                    "name": "Vitamin B12",
                    "amount": 0,
                    "unit": "µg"
                  },
                  {
                    "name": "Potassium",
                    "amount": 165.24,
                    "unit": "mg"
                  }
                ]
              }
            ],
            "caloricBreakdown": {
              "percentProtein": 17.78,
              "percentFat": 3.36,
              "percentCarbs": 78.86
            },
            "weightPerServing": {
              "amount": 399,
              "unit": "g"
            }
          },
          "summary": "Rhubarb Strawberry Smoothie might be just the morn meal you are searching for. This recipe makes 2 servings with <b>164 calories</b>, <b>8g of protein</b>, and <b>1g of fat</b> each. For <b>$2.02 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. 12318 people have made this recipe and would make it again. A mixture of milk, honey, strawberry, and a handful of other ingredients are all it takes to make this recipe so tasty. It can be enjoyed any time, but it is especially good for <b>Mother's Day</b>. It is a good option if you're following a <b>gluten free, primal, and vegetarian</b> diet. From preparation to the plate, this recipe takes around <b>10 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/strawberry-rhubarb-smoothie-510943\">Strawberry Rhubarb Smoothie</a>, <a href=\"https://spoonacular.com/recipes/strawberry-rhubarb-yogurt-cake-with-strawberry-rhubarb-rum-sauce-552775\">Strawberry Rhubarb Yogurt Cake with Strawberry Rhubarb Rum Sauce</a>, and <a href=\"https://spoonacular.com/recipes/confession-66-i-just-tried-rhubarb-strawberry-rhubarb-crumbles-542486\">Confession #66: I JUST tried rhubarb… Strawberry Rhubarb Crumbles</a>.",
          "cuisines": [],
          "dishTypes": [
            "side dish"
          ],
          "diets": [
            "gluten free",
            "lacto ovo vegetarian",
            "primal"
          ],
          "occasions": [
            "spring",
            "mother's day"
          ],
          "winePairing": {},
          "instructions": "In a blender, mix all together until smooth.",
          "analyzedInstructions": [
            {
              "name": "",
              "steps": [
                {
                  "number": 1,
                  "step": "In a blender, mix all together until smooth.",
                  "ingredients": [],
                  "equipment": [
                    {
                      "id": 404726,
                      "name": "blender",
                      "localizedName": "blender",
                      "image": "blender.png"
                    }
                  ]
                }
              ]
            }
          ],
          "originalId": null
        }
      ]
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
        includeNutrition: true,
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
				</form>
				<ul className="gallery">{this.state.resultObj ? <MealGallery resultObj={this.state.resultObj} resultExt={this.state.resultExt}/> : null}</ul>
			</div>
		);
	}
}
export default App;
