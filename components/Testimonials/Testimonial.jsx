import React, {useState, useEffect} from 'react'
// import {Container, Row, Col} from 'reactstrap'
import Slider from 'react-slick'
import Link from 'next/link'
import SectionSubtitle from '../SectionSubtitle'
import styles from '../../styles/Testimonial.module.css'


const Testimonial = () =>{

	const settings = {
      dots: true,
      autoplay:true,
      speed: 500,
      autoplaySpeed:2100,
      infinite: true,
      swipeToSlide:true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

	return(

		<section id='testimonial'>
			<div className='container px-5'>
				<div className='row justify-content-center'>
					<div className='col-lg-6 col-md-6 justify-content-center'>
						<img alt='Testimonial image' src='/images/PF41.png'   className='rounded-lg cl-img mt-n ml-n'/>
						 <style jsx>{`
                    .cl-img{
                    	width:500px;
                    	height:500px;
                        object-fit:contain;
                    }

                    @media only screen and (max-width: 600px){
                    	.cl-img{
                    		width:400px;
                    	}
                    }
                     @media only screen and (max-width: 400px){
                    	.cl-img{
                    		width:300px;
                    	}
                    }
                `}</style>
					</div>

					<div className='col-lg-6 col-md-6 my-5'>
						<SectionSubtitle subtitle='Testimonials'/>
						<h4 className='my-4'>
							What my clients say
						</h4>

						<Slider {...settings}>
					          <div className={styles.testimonial_item}>
						            <div className={styles.testimonial_client}>
						            	<img alt='client image' src='/images/dammy.jpg' width='200px' height='200px' className='dammy' />
						            	<style jsx>{`
						                    .dammy{
						                        object-fit:cover;
						                    }
						                `}</style>
						            	<div>
						            		<h6 className='mt-3'>
						            			Damola
						            		</h6>
						            		<h6 className='mt-3'>
						            			Communications specialist/Media strategist
						            		</h6>
						            	</div>
						            </div>
					            	<p className='mt-3'>
					            		A nice guy who is always ready and eager to learn and is one of the best web developers i have worked with.
					            	</p>
					          </div>

					          <div className={styles.testimonial_item}>
					            <div className={styles.testimonial_client}>
					            	<img alt='client image' src='/images/enny.jpg' width='200px' height='200px' className='enny' />
					            	<style jsx>{`
					                    .enny{
					                        object-fit:cover;
					                    }
					                `}</style>
					            	<div>
					            		<h6 className='mt-3'>
					            			Eniola
					            		</h6>
					            		<h6 className='mt-3'>
					            			UI/UX designer
					            		</h6>
					            	</div>
					            </div>
				            	<p className='mt-3'>
				            		Detola is a passion driven individual who enjoys building creative websites that are comaptible for all browser types. He is also a great team member

				            	</p>
					          </div>

					          <div className={styles.testimonial_item}>
					            <div className={styles.testimonial_client}>
					            	<img alt='client image' src='/images/PF48.png' width='200px' height='200px' />
					            	<div>
					            		<h6 className='mt-3'>
					            			Sanni Ridwan
					            		</h6>
					            		<h6 className='mt-3'>
					            			Accountant and Graphic designer
					            		</h6>
					            	</div>
					            </div>
				            	<p className='mt-3'>
				            		Detola not only delivers top-notch websites but does so on time and pays attention to every little detail
				            	</p>
					          </div>
				        </Slider>
					</div>
				</div>
			</div>
		</section>

	);
};


export default Testimonial