import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeLogic from '../pages/Home/HomeLogic';

function Routes() {
	return (
			<Switch>
				<Route exact path="/" component={HomeLogic} />
			</Switch>
	);
}

export default Routes;
