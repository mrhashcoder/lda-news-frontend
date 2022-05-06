import React, { Component, useEffect , useState } from 'react';
import Article from '../../Components/Article/Article';
import './ArticleList.css';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import {fetchRNews} from '../../utils/newsUtil'
import {getToken , getLoggedUsername} from '../../utils/Auth';

const EmptyView = () =>
  <div>
    <img src="https://cataas.com/cat/cute/says/WOAH%20SUCH%20EMPTY" alt="cat"/>
  </div>

function ArticleList() { 

  const token = getToken();
  const username = getLoggedUsername();
  const history = useNavigate();
  const [articles , setArticles] = useState([]);
  const [page , setPage] = useState(1);
  const [isLoaded , setIsLoaded] = useState(false);
  const [error , setError] = useState(false);

  useEffect(() => {
    if(token == 'null'){
      history('/login');
    }
    const getNews = async() => {
      const news_list = await fetchRNews(username, page , 10);
      return news_list;
    }
    getNews().then(result => {
      setArticles(getUniqueList([... new Set([...articles , ...result])]));
      setPage(page + 1);
      setIsLoaded(true);
    }).catch(err => {
      console.log(err);
      setError(true);
    })
  }, []);

  const getUniqueList = (arr) => {

    const uniqueArray = arr.filter((v,i,a)=>a.findIndex(t=>(t.title===v.title))===i)
    // console.log(uniqueArray);
    return uniqueArray
  }

  console.log(articles.length);

  const loadMore = async() => {
    const getNews = async() => {
      const news_list = await fetchRNews(username, page , 10);
      return news_list;
    }
    getNews().then(result => {
      setArticles(getUniqueList([... new Set([...articles , ...result])]));
      setPage(page + 1);
      setIsLoaded(true);
    }).catch(err => {
      console.log(err);
      setError(true);
    })
  }
  console.log(page);
  if (error) {
    return <div>Error in Loading</div>
  } else if (!isLoaded) {
    return <LoadingSpinner />
  } else {
    return(
      <div>
        {
          <div className="article-list-div">
            {articles.map((article, i) => ( article ?<Article article={article} key={i}/> : null))}
          </div>
        }
      <button onClick={loadMore} >Load More</button>
      </div>
    )
  }

}

export default ArticleList;
