import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Search from './search';
import Recipe from './recipe';

const Main = () => (
	<Switch>
		<Route exact path="/recipe" component={Search} />
		<Route exact path="/recipe/:label" component={Recipe} />
	</Switch>
)

export default Main;