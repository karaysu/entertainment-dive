import React from 'react'
import {Navigate} from 'react-router-dom'

import {useAuth} from 'auth'

function ProtectedRoute({children}) {
	const {user} = useAuth()

	if (!user) return (<><Navigate to="/" /></>)
	else return (<>{children}</>)
}

export default ProtectedRoute