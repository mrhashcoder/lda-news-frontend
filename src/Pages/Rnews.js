import React from 'react'
import ArticleList from '../Components/ArticleListRnews/ArticleList'
import Title from '../Components/Title/Title'
import Footer from '../Components/Footer/Footer'
import OverlayMenu from '../Components/OverlayMenu/OverlayMenu'

function News() {
  return (
    <div className="news_box">
        <Title />
        <h4> News Recommended Based on Articles You have liked</h4>
        <OverlayMenu />
        <ArticleList />
        <Footer />
    </div>
  )
}

export default News