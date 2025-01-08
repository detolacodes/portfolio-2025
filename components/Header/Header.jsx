import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import styles from '../../styles/Header.module.css'

const NAV_LINK = [
	
	{

		path:'#home',
		display:'Home'
	},
	{

		path:'#services',
		display:'Services'
	},
	{

		path:'#about',
		display:'About'
	},
	{

		path:'#portfolio',
		display:'Portfolio'
	},
	{

		path:'#contact',
		display:'Contact'
	},
]

const Header = () =>{


	const headerRef = useRef(null)
	const menuRef = useRef(null)
	const [icon, setIcon] = useState(false)

	

	const headerFunc = () =>{
		if(document.documentElement.scrollTop > 80){
			headerRef.current.classList.add(`${styles.header_shrink}`)
		}
		else{
			headerRef.current.classList.remove(`${styles.header_shrink}`)	
		}
	}

	useEffect(() =>{

		window.addEventListener('scroll', headerFunc)

		return () => window.removeEventListener('scroll', headerFunc)

	}, [])


	const toggleMenu = () => menuRef.current.classList.toggle(`${styles.menu_active}`)


	return(
		<>
			<header className={`${styles.header} slideInToTop shadow-lg`} ref={headerRef}>
				<div>
					<div className={styles.nav_wrapper}>
						<div className={styles.logo}>
							<header>D<span>etola</span></header>
						</div>

						<div className={`${styles.navigation}`} ref={menuRef} onClick={toggleMenu}>
							<div className={styles.nav_menu}>
								{
									NAV_LINK.map((item,index)=>(

										<a href={item.path} key={index}>{item.display}</a>
									))
								}

								<div className={styles.nav_right}>
									<p className='d-flex align-items-center gap-2 mb-0 text-default'>
										{" "}
										<i className='bi-telephone-fill mr-1'></i> <a href='tel://+2349153396054' className='text-default'>+2349153396054</a> {" "}
									</p>
								</div>
							</div>
						</div>

						<div className={`${styles.mobile_menu}`}>
							<i className={menuRef ? 'bi-filter-right' : 'bi-x'} onClick={toggleMenu}></i>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header