import React, { useEffect, useState } from 'react';

import './ScrollToTop.css';

function ScrollToTop() {
	const [buttonVisible, setbuttonVisible] = useState(false);

	useEffect(() => {
    window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});

	function onScroll () {
		if (document.documentElement.scrollTop > 300) {
			setbuttonVisible(true);
		} else {
      setbuttonVisible(false);
    }
	};

	const toTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
	};

	return (
		<div onClick={toTop} className={`to-top-btn ${buttonVisible ? 'is-visible' : 'is-hidden'}`}>
			<img
				src="https://i1155.photobucket.com/albums/p559/scrolltotop/arrow3.png"
				alt="To Top Button"
			/>
		</div>
	);
}

export default ScrollToTop;
