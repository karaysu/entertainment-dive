import React from 'react'

import './Button.scss'

function Button ({children, ...rest}) {
	return (
		<button type="button" className="btn btn-light" {...rest}>{children}</button>
	)
}

export default Button