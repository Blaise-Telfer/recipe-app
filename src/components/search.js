import React, {Component, useEffect, useState} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import {Link} from 'react-router-dom';
import Result from './result';

const Search = () =>{
	
	const API_ID = "ba73aa6f";
	const API_KEY = "63aa67d22816e6182f6943c855c84d8d";
	
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("breakfast");
	
	useEffect( () => {
		getRecipes();
	}, [query]); /*query now only runs onSubmit of form*/
	
	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	}
	
	const updateSearch = e => {
		setSearch(e.target.value);
		console.log(search);
	}
	
	const getSearch = e => {
		e.preventDefault();
		setQuery(search);
	}
		
		return(
		<div className="App">
			<header className="App-header">
				<h1>Recipe Search</h1>
			</header>
			
			<form onSubmit={getSearch}>
				<input type="text" value={search} onChange={updateSearch} />
				<button className="btn-primary" type="submit">
					Search
				</button>
			</form>
			<div className="recipe-area">
				{recipes.map(recipe => (
					<Result 
					key={recipe.recipe.label}
					title={recipe.recipe.label}
					category={recipe.recipe.healthLabels[0]}
					minutes={recipe.recipe.totalTime}
					num={recipe.recipe.yield}
					image={recipe.recipe.image}
					source={recipe.recipe.url}
					/>
				))}
			</div>
			
		</div>
		);
	
	
}
export default Search;