import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Main from './main';
import {Button} from 'react-mdl';

const API_ID = "ba73aa6f";
const API_KEY = "63aa67d22816e6182f6943c855c84d8d";


class Recipe extends Component{
	state = {
		activeRecipe: [],
		list: [],
		list2: []
	}
	componentDidMount = async () => {
		const label = this.props.match.params.label;
		const response = await fetch(`https://api.edamam.com/search?q=${label}&app_id=${API_ID}&app_key=${API_KEY}`);
		const data = await response.json();
		
		//state is set to the first "hit", then to the "recipe" tab
		this.setState({ activeRecipe: data.hits[0].recipe });
		this.setState({ list: data.hits[0].recipe.ingredientLines });
		this.setState({ list2: data.hits[0].recipe.digest });
	}
	
	render(){
		//object assigned to the "recipe" tab
		const object = this.state.activeRecipe;
		const ingredients = this.state.list;
		const nutrition = this.state.list2;
		
		console.log(object);
		console.log(ingredients);
		
		//too many of the recipes are marked as zero
		if(object.totalTime == 0){
			object.totalTime= 25;
		}
		//make calories appear with no decimal
		const cal = Number(object.calories).toFixed(0);
		
		return(
			<div className="App">
				<header className="App-header">
					<h1>Recipe Search</h1>
				</header>
				<div className="individual">
					<div className="tab">
						<h2>{object.label}</h2>
						<img src={object.image} />
					</div>
					<div className="text">
						<button>
							<Link to="/recipe">Home</Link>
						</button>
						<button>
							<a href={object.url} target="_blank">Instructions</a>
						</button>
						
						<p>Time: {object.totalTime} minutes</p>
						<p>Calories: {cal}</p>
						<p>Servings: {object.yield}</p>
						
						<h3>Ingredients:</h3>
						<ul>
							{ingredients.map(ingredientList => (
								<li>{ingredientList}</li>
							))}
						</ul>
						
					</div>
				</div>
			</div>
			
		);
	}
};

export default Recipe;