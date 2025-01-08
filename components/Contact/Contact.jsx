import React from 'react'
import Link from 'next/link'
import SectionSubtitle from '../SectionSubtitle'
import styles from '../../styles/Contact.module.css'
import Form from '../Form'


const Contact = () =>{

	return(
		<>
			<section>
				<div id='contact' className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-6 col-md-8 col-sm-11 col-10'>
							<SectionSubtitle subtitle="Let's talk business" />	
							<h5 className='my-3'>Connect with me</h5>
							<p>
								Enough chit-chat, let's make things happen for you and your brand. <i className=''></i>
							</p>
							<ul className='list-unstyled'>
								<li className='flex-h p-4 align-items-center'>
									<span>
										<i className='ri-map-pin-line bg-defaulttwo p-2 rounded text-default mr-2'></i>
									</span>
									<p className='mb-0'>
										Lagos, Nigeria.
									</p>
								</li>
								<li className='flex-h p-4 align-items-center'>
									<span>
										<i className='ri-mail-line  bg-defaulttwo p-2 rounded text-default mr-2'></i>
									</span>
									<p className='mb-0'>
										ogungbeadetola27@gmail.com
									</p>
								</li>
								<li className='flex-h p-4 align-items-center'>
									<span>
										<i className='ri-phone-line bg-defaulttwo p-2 rounded  text-default mr-2'></i>
									</span>
									<p className='mb-0'>
										+2349153396054 or +2349160869817
									</p>
								</li>
							</ul>
						</div>
						<div className='col-lg-6 col-md-10 col-sm-10 col-12 text-r'>
							<Form/>	
						</div>
					</div>
				</div>
			</section>

		</>
	)
}


export default Contact