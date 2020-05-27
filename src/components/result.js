import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import {Link} from 'react-router-dom';

const Result = ({props, title, minutes, num, image, source}) =>{
	if(minutes == 0){
		minutes= 20;
	}
	
	
	return(
		<div className="recipe-box">
			<h2>{title}</h2>
			<img src={image} className="recipe_img"/>
			<p>Servings: {num}</p>
			<p>Time: {minutes} minutes</p>
			<div>
				<button>
					<Link to={{ 
						pathname: `/recipe/${title}`,						
						state: {}
					}}> Recipe </Link>
				</button>
				<button>
					<a href={source} target="_blank">Source</a>
				</button>
			</div>
			
		</div>
	);
	
}

export default Result;