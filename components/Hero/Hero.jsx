import React from 'react'
import Link from 'next/link'
import SectionSubtitle from '../SectionSubtitle'
import Image from 'next/image'
import styles from '../../styles/Hero.module.css'


const Hero = () =>{

	return(

		<section className={styles.hero}>
			<div className='container' id='home'>
				<div className='row justify-content-center'>
					<div className='col-lg-6 col-md-6 mb-5'>
						<div className={`${styles.herocontent} pt-15`}>
							<SectionSubtitle subtitle='Hello there'/>
							<h2 className='mb-3 mt-3'>
								I'm Detola Ogungbe
							</h2>
							<h5 className='mb-3'>
								Front end web developer & Graphic designer
							</h5>
							<p className=''>
								Creator of mind-blowing digital contents that improves brands and provides effective digital representation regardless of the industry or sector in question
							</p>
							<div className='mt-5'>
								<button className='primarybtn rounded'>
									<a href='tel://+2349153396054'>
										Place a call
									</a>
								</button>
								<button className='secondarybtn ml-4 rounded'>
									<a href='#portfolio'>
										My works
									</a>
								</button>
							</div>
						</div>
					</div>
					<div className='col-lg-6 col-md-6'>
						<div className={`${styles.heroimg_container} text-r mb-5`}>
							<img alt='Profile picture' src='/images/pp1.jpg' className={`${styles.heroimg}`} />
						</div>
						<div className={`${styles.heroexperience} d-flex align-items-center gap-3 mt-5 text-white`}>
							<span>
								<i className='bi-lightbulb bg-none'></i>
							</span>
							<div className='mx-2'>
								<h6 className='mb-2 bg-none'>Experience</h6>
								<h5 className='bg-none'>4 years</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}

export default Hero