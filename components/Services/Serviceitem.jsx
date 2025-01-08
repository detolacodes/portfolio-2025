import React from 'react'
import Link from 'next/link'
import SectionSubtitle from '../SectionSubtitle'
import styles from '../../styles/Serviceitem.module.css'


const Serviceitem = ({title, icon}) =>{

	return(

		<>

			<div className={styles.service_item}>
				<span>
					<i className={icon}></i>
				</span>

				<h5>
					{title}
				</h5>
			</div>

		</>
	)
}

export default Serviceitem