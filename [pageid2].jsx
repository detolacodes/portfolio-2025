import styles from '../../styles/Feed.module.css'
import Toolbar from '../../components/toolbar'
import {useRouter} from 'next/router'

const Feed = ({pageNumber, articles}) =>{

	console.log(articles, pageNumber);

	const router = useRouter();

	return(

		<>

			<div className='container'>

				<Toolbar/>

				 <div className={styles.main}>
				 	{

				 		articles.map((article, index) => (
				 			<div key={index} className={styles.post}>
				 				<h1 onClick={() => (window.location.href = article.url)} target='blank' >{article.title}</h1>
				 				<p>{article.description}</p>
				 				{!!article.urlToImage && <img src={article.urlToImage} />}
				 			</div>

				 		))
				 	}
				 </div>

				 <div className={styles.paginator}>
				 	<div 
				 		className={pageNumber === 1 ? styles.disabled : styles.active}
				 		onClick={() => {
				 			if(pageNumber > 1){
				 				router.push(`/feed/${pageNumber - 1 }`)
				 			}
				 		}}
				 		>Previous page
				 	</div>

				 	<div>
				 		{pageNumber}
				 	</div>

				 	<div 
				 		className={pageNumber === 5 ? styles.disabled : styles.active}
				 		onClick={() => {
				 			if(pageNumber < 5){
				 				router.push(`/feed/${pageNumber + 1 }`)
				 			}
				 		}}
				 		>Next page
				 	</div>
				 </div>
			</div>

			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-4 col-md-6 col-sm-8 col-10 my-5'>
						
					</div>
				</div>
			</div>

		</>

	)
}



export const getServerSideProps = async pageContext =>{

	const pageNumber = pageContext.query.pageid;

	if(!pageNumber || pageNumber < 1 || pageNumber > 5){
		return{
			props: {
				articles: [],
				pageNumber: 1,
			}
		}
	}


	const apiResponse = await fetch(
		`https://newsapi.org/v2/top-headlines?country=ng&pageSize=5&page=${pageNumber}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
			},
		},
	);

	const apiJson = await apiResponse.json();
	const {articles} = apiJson;

	return{
		props: {
			articles,
			pageNumber: Number.parseInt(pageNumber)
		}
	}
};


// export const getServerSideProps = async pageContext =>{

// 	const pageNumber = pageContext.query.pageid;

// 	if(!pageNumber || pageNumber < 1 || pageNumber > 5){
// 		return{
// 			props: {
// 				articles: [],
// 				pageNumber: 1,
// 			}
// 		}
// 	}

// 	const fetch = require('node-fetch');

// 	const url = 'https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw';

// 	const options = {
// 	  method: 'GET',
// 	  headers: {
// 	    'X-BingApis-SDK': 'true',
// 	    'X-RapidAPI-Key': 'd0c5a5a460msh746a78220fce23fp1952b8jsn9ffb2f63222f',
// 	    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
// 	  }
// 	};

// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));
		
// };


export default Feed