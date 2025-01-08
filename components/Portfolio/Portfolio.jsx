import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import SectionSubtitle from '../SectionSubtitle'
import Portfolioitem from './Portfolioitem'
import PortfolioData from './PortfolioData'
import styles from '../../styles/Portfolio.module.css'


const Portfolio = () => {

	const [filter, setFilter] = useState('Web development');
	const [data, setData] = useState()

	const showPortfolio = () =>{

		if(filter == 'Web development'){
			const filteredData = PortfolioData.filter(item => item.category == filter)
			setData(filteredData)
		}
		if(filter == 'Graphic design'){
			const filteredData = PortfolioData.filter(item => item.category == filter)
			setData(filteredData)
		}
	}

	const active = `${styles.portfoliobtn_active}`

	useEffect(()=>{

		showPortfolio()

	}, [filter])

	return(

		<>

			<section id='portfolio'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-6 col-md-6 mb-5'>
							<SectionSubtitle subtitle='My portfolio'/>
							<h4 className='mt-4'>Some of my works</h4>
						</div>

						<div className='col-lg-6 col-md-6 text-r'>
							<button className={`${filter == 'Web development' ? active : ''}  ${styles.portfoliobtn}`} onClick={() => setFilter('Web development')}>
								Web development
							</button>

							<button className={`${filter == 'Graphic design' ? active : ''}  ${styles.portfoliobtn} ml-4`} onClick={() => setFilter('Graphic design')}>
								Graphic design
							</button>
						</div>

						{

							data ?.map(item=>(

								<div className='col-lg-4 col-md-6 col-sm-8 col-10 my-5' key={item.id}>
									<div className='shadow-sm card card-hover rounded-sm flex-h px-2 py-5'>
										<Portfolioitem item={item}/>
									</div>
								</div>

							))
						}
					</div>
				</div>
			</section>

		</>
	)
}


export default Portfolio