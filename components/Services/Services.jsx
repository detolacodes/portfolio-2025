import React from 'react'
import Link from 'next/link'
import SectionSubtitle from '../SectionSubtitle'
import Serviceitem from './Serviceitem'
import styles from '../../styles/Service.module.css'


const Services = () =>{

	return(

		<>

			<section id='services'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-6 col-md-6 col-sm-12'>
							<div className={styles.service_container}>
								<div>
									<Serviceitem title='Web development' icon='bi-code-slash'/>
									<Serviceitem title='Graphic design' icon='bi-columns-gap'/>
								</div>
								<Serviceitem title='Content writing' icon='bi-pencil-square' />
								{/*<Serviceitem title='Digital creator' icon='bi-computer' />*/}
							</div>
						</div>

						<div className='col-lg-6 col-md-12 col-sm-12'>
							<div className={styles.service_container_text}>
								<SectionSubtitle subtitle='What I do best' />
								<h3 className='mt-3'>Creative designs,</h3>
								<h3>Digital prowess</h3>
								<p className='mt-30'>
									Putting your brand/business on the digital global map is my sole aim and ability to deliver effortlessly is one of my greatest attributes and strengths when it comes to achieving this dream
								</p>

							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

export default Services