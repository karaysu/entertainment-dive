import { createBrowserRouter } from "react-router-dom";

import HomeLogic from "pages/Home/HomeLogic";
import Dashboard from 'pages/Dashboard/Dashboard';


const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLogic />
	},
	{
		path: "/dashboard",
		element: <Dashboard />
	},
])

export default router