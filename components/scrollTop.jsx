import React, { useState, useRef, useEffect } from "react"
import Link from 'next/link'

const ScrollTop = () =>{


	const topIcon = useRef(null);

	const showBackToTopButton = () =>{
		if(document.documentElement.scrollTop > 80){
			// Ref = document.getElementById('scroll-top');
			topIcon.current.style.display = 'block'
			// document.getElementById('scroll-top').style.display = 'block';
		}
		else{
			topIcon.current.style.display = 'none'	
		}
	}


	useEffect(() =>{
		showBackToTopButton();
	}, [])

	const scrollBackToTop = () =>{
		document.getElementById('home').scrollIntoView({behaviour:'smooth'})
	}

	return(

		<>

		<div className="scroll-Top" ref={topIcon}>
			<i className="bi-chevron-double-up return-to-top" id="scroll-top" onClick={scrollBackToTop}></i>
		</div>

		</>

	)
}

export default ScrollTop