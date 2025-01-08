import React from 'react'
import Link from 'next/link'
import SectionSubtitle from '../SectionSubtitle'
import styles from '../../styles/About.module.css'


const About = () =>{

	return(
		<section id='about'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-6 col-md-12'>
						<SectionSubtitle subtitle='About me' />
						<h3 className='mt-3'> 
							Let me
						</h3>
						<h3>
							handle, your next project
						</h3>
						<p className='mt-30'>
							Inept understanding of my work means i get to deliver faster and more accurately. Get top-notch, modern digital contents made with the latest available technologies.
						</p>

						<div className='d-flex align-items-center flex-wrap justify-content-start fw-normal'>
							<div className='mr-5'>
								<h6 className='d-flex align-items-center mb-3 lh-20 my-2'>
									<span>
										<i className='bi-check-circle mr-2  text-default'></i>
									</span>
									Problem solving
								</h6>

								<h6 className='d-flex align-items-center lh-20 my-2'>
									<span>
										<i className='bi-check-circle mr-2  text-default'></i>
									</span>
									Fast & creative thinking
								</h6>
							</div>

							<div>
								<h6 className='d-flex align-items-center mb-3 lh-20 my-2'>
									<span>
										<i className='bi-check-circle mr-2  text-default'></i>
									</span>
									Calm under pressure
								</h6>

								<h6 className='d-flex align-items-center lh-20 my-2'>
									<span>
										<i className='bi-check-circle mr-2  text-default'></i>
									</span>
									Never-give-up mentality
								</h6>
							</div>
						</div>
						<div className='mt-5'>
							<button className='primarybtn'>
								<a href='#portfolio'>
									My works
								</a>
							</button>

							<button className='secondarybtn ml-4 rounded'>
								<a href='resume2.pdf' download>
									View my resume
								</a>
							</button>
						</div>
					</div>

					<div className='col-lg-6 col-md-12 md-mt'>
						<div className={styles.about2}>
							<div className=''>
								<div>
									<SectionSubtitle subtitle='Tools I use' />
								</div>

								<div className={styles.about_tools}>
									<div className='mx-3 mt-3'>
										<div><img src='/images/HTML.png'  /></div>
										<div className='text-center mt-2'>
											<h5>HTML</h5>
										</div>
									</div>

									<div className='mx-3'>
										<div><img src='/images/CSS.png'  /></div>
										<div className='text-center mt-2'>
											<h5>CSS</h5>
										</div>
									</div>

									<div className='mx-3'>
										<div><img src='/images/JS.png'  /></div>
										<div className='text-center mt-2'>
											<h5>JS</h5>
										</div>
									</div>
								</div>

								<div className={styles.about_tools}>
									<div className='mx-3'>
										<div><img src='/images/react.png'  /></div>
										<div className='text-center mt-2'>
											<h5>REACT</h5>
										</div>
									</div>

									<div className='mx-3'>
										<div><img src='/images/NEXT.png'  /></div>
										<div className='text-center mt-2'>
											<h5>NEXT</h5>
										</div>
									</div>

									<div className='mx-3'>
										<div><img src='/images/wp-logo.png'  /></div>
										<div className='text-center mt-2'>
											<h5>WORDPRESS</h5>
										</div>
									</div>
								</div>

								<div className={styles.about_tools}>
									<div className='mx-3'>
										<div><img src='/images/PF50.png'  /></div>
										<div className='text-center mt-2'>
											<h5>VITE</h5>
										</div>
									</div>

									<div className='mx-3'>
										<div><img src='/images/PF42.png'  /></div>
										<div className='text-center mt-2'>
											<h5>TYPESCRIPT</h5>
										</div>
									</div>

									<div className='mx-3'>
										<div><img src='/images/PF44.png'  /></div>
										<div className='text-center mt-2'>
											<h5>VS CODE</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}

export default About