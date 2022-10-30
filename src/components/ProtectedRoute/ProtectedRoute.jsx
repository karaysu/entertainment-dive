import React from 'react'
import {Navigate} from 'react-router-dom'

import {useAuth} from 'auth'

function ProtectedRoute({children}) {
	const {isUserLoggedIn} = useAuth()

	if (isUserLoggedIn()) return (<>{children}</>)
	else return (<><Navigate to="/" /></>)
}

export default ProtectedRoute