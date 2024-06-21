import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=dfe762e9f96b43ccbc971a1eaac4b060`;
        fetch(url).then(response => response.json()).then(data=> setArticles(data.articles));

    },[category])
  return (
    <div className='bg-danger-subtle'>
        <h2 className='text-center'>Latest <span className='badge bg-danger '>News</span></h2>
        {articles.map((news,index) => {
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}  />
        })}
    </div>
  )
}

export default NewsBoard