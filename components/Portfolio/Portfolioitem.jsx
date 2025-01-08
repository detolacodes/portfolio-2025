import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import SectionSubtitle from '../SectionSubtitle'
import styles from '../../styles/Portfolio.module.css'
import PortfolioData from './PortfolioData'



const Portfolioitem = (props) => {


	const {title, img, liveUrl, keyword, type, name} = props.item;


	return(

		<>

			<div className={`${styles.portfolio_item}`}>
				<div className='bg-transparent mb-3'>
					{/*<h4>{name}</h4>*/}
					<h6 className='mb-3'>
						{title}
					</h6>
					{
						keyword.map((item, index)=>(

							<span className={`${styles.portfolio_keyword} text-white`} key={index}>
								{item}
							</span>

						))
					}
				</div>

				<div className={`${styles.portfolio_img}`}>
					<img alt='portfolio image' src={img} className='mt-20 rounded bg-transparent' />
				</div>

				<div className={`${styles.portfolio_live} bg-transparent w-50`}>
					{type == 'website' ? (<button className="primarybtn mt-3 w-100"><a href={liveUrl} target='blank'>See website</a></button>) : ''}
				</div>
			</div>

		</>
	)
}


export default Portfolioitem