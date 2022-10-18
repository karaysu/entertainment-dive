import React from 'react'

import './Button.scss'

function Button ({children, additionalProps}) {
	return (
		<button type="button" className="btn btn-light" {...additionalProps}>{children}</button>
	)
}

export default Button