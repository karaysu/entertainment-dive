import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeLogic from '../pages/Home/HomeLogic';
import DetailLogic from '../pages/Detail/DetailLogic';
import Dashboard from 'pages/Dashboard/Dashboard';

function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={HomeLogic} />
			<Route exact path="/dashboard" component={Dashboard} />
			<Route path="/:id" component={DetailLogic} />
		</Switch>
	);
}

export default Routes;
