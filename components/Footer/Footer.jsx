import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Footer.module.css'


const NAV_LINK = [
	
	{

		path:'/',
		display:<a href='https://wa.me/+2349153396054' target='blank'><i className='bi-whatsapp text-default'></i></a>
	},
	{

		path:'',
		display:<a href='https://www.facebook.com/adetola.olamide.169' target='blank'><i className='bi-facebook text-default'></i></a>
	},
	{

		path:'',
		display:<a href='https://instagram.com/detolaogungbe' target='blank'><i className='bi-instagram text-default' target='blank'></i></a>
	},
	{

		path:'',
		display:<a href='https://twitter.com/Detola_ogungbe?t=TLkZa5L-6K_0V7htfD8mlQ&s=09' target='blank'><i className='bi-twitter text-default'></i></a>
	},
	{

		path:'',
		display:<a href='https://www.linkedin.com/in/adetola-ogungbe-15857924a' target='blank'><i className='bi-linkedin text-default'></i></a>
	},

	{

		path:'',
		display:<a href='https://github.com/detolacodes' target='blank'><i className='bi-github text-default'></i></a>
	},
]


const Footer = () =>{

	const date = new Date()
	const year = date.getFullYear()

	return(
		<>
			<div className='container mt-100'>	
				<div className='row justify-content-center align-items-center'>
					<div className='col-lg-6 mb-2'>
						<div className={styles.nav_menu}>
							{
								NAV_LINK.map((item,index)=>(

									<Link href={item.path} key={index}>{item.display}</Link>
								))
							}
						</div>
					</div>
					<div className='col-lg-6 mb-2'>
						<div className={styles.footer_creator}>
							<h6 className=''>
								Created <i className='bi-code-slash'></i> by Detola {year}
							</h6>
						</div>
					</div>
					<div className='col-lg-12 mt-2'>
					<div className={styles.footer_copyright}>
						<p>
						 - Developed by Detola Ogungbe. Copyright <i className='ri-copyright-line'></i> {year}. All rights reserved. {" "}
						</p>
					</div>
				</div>
				</div>
			</div>
		</>
	)
}

export default Footer