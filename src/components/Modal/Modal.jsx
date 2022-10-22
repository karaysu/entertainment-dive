import React from 'react'
import ReactDOM from 'react-dom';

import './Modal.scss'

function Modal({ children, title, isOpen, closeModal }) {
	if (!isOpen) return;

	return ReactDOM.createPortal(
		<>
			<div className='backdrop' onClick={closeModal}></div>
			<div className="card">
				<div className="card-header">
					{title}
				</div>
				<div className="card-body">
					{children}
				</div>
			</div>
		</>,
		document.getElementById('portal')
	)
}

export default Modal;