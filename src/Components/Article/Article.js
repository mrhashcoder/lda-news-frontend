import React, { useCallback } from 'react';
import './Article.css';
import news_image from "../../assets/bg.png";
import axios from '../../utils/axios';
import {getLoggedUsername} from '../../utils/Auth';

const MoreLink = ({ url }) =>
  <a href={url} className="more-link">More</a>

const Article = ({article}) => {

  console.log('Article')
  const username = getLoggedUsername();

  const handleClick = useCallback(url => {
    let win = window.open(url, '_blank');
    win.focus();
  });

  function truncateContent(content) {
    let indexToTruncateFrom = content.lastIndexOf('[');
    return content.substring(0, indexToTruncateFrom);
  }

  const likeArticle = async(id) => {
    console.log(id);
    const res = await axios.post('/likenews' , {
      news_id : id,
      username : username
    });
    console.log(res.data);
  }

  return (
    <div className="article-div">

      <div className="author-div">
        <h5 className="author-text">{article.source_id}</h5>
      </div>

      <div className="image-div">
        {
          article.image_url ? 
          <img alt={article.title} src={article.image_url }
            className="link-point article-image"
            onClick={() => handleClick(article.url)}
          />
          :
          <img alt={article.title} src={news_image}
            className="link-point article-image"
            onClick={() => handleClick(article.url)}
        />
        }
        
      </div>

      <div className="title-div">
        <h1 className="link-point title" onClick={() => handleClick(article.link)}>
          {article.title}
        </h1>
      </div>

      {article.description ?
        <div className="description-div">
          <p className="description">{article.description.substr(0,200) + "..."}</p>
        </div> : ''
      }

      <div className="content-div">
        {article.content ?
          <p className="content">
            {truncateContent(article.content)}
            <button className="show-more-button" onClick={() => handleClick(article.link)}>
            <i className="fa fa-ellipsis-h"></i>
            </button>        
          </p>
        : <button className="show-more-button" onClick={() => handleClick(article.link)}>
            <i className="fa fa-ellipsis-h"></i>
          </button>        
        }
        <button onClick={() => likeArticle(article._id["$oid"])}>Like</button>
      </div>

    </div>
  );
}

export default Article;
