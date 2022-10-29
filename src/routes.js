import { createBrowserRouter } from "react-router-dom";

import HomeLogic from "pages/Home/HomeLogic";
import Dashboard from 'pages/Dashboard/Dashboard';
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';


const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLogic />
	},
	{
		path: "/dashboard",
		element: <ProtectedRoute><Dashboard /></ProtectedRoute>
	},
])

export default router