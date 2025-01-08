import Head from 'next/head'



const Meta = ({title, keywords, description}) => {

	return (

		<Head>
			<meta charSet = 'utf-8' />
			<meta name='viewport' content ='width=device-width,initial-scale=1' />
			<meta name='keywords' content ={keywords} />
			<meta name='description' content ={description} />
			<link rel = 'icon' href='/favicon.ico' />
			<title>{title}</title>
		</Head>

	)

}

Meta.defaultProps = {
	title: 'Detola-portfolio',
	keywords: 'portfolio, profile, web developer',
	description: 'profile an expert in the field of web development and brand building'

}

export default Meta