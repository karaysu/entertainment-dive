import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeLogic from '../pages/Home/HomeLogic';
import DetailLogic from '../pages/Detail/DetailLogic';

function Routes() {
	return (
			<Switch>
				<Route exact path="/" component={HomeLogic} />
				<Route path="/:id" component={DetailLogic} />
			</Switch>
	);
}

export default Routes;
