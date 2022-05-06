import React, {useState , useEffect} from 'react'
import ArticleList from '../Components/ArticleList/ArticleList'
import Title from '../Components/Title/Title'
import Footer from '../Components/Footer/Footer'
import OverlayMenu from '../Components/OverlayMenu/OverlayMenu'
import {Link} from 'react-router-dom'
import {logoutUser} from '../utils/Auth';
import {useNavigate} from 'react-router-dom'

function News() {

  const history = useNavigate()

  const handleClick = async() => {
    logoutUser();
    setIsLoggedIn(false);
    setTimeout((() => {
      history('/login')
    }) , 3000)
  }

  const [isLoggedIn , setIsLoggedIn] = useState(true);

  useEffect(() => {} , []);


  return (
    <div className="news_box">
        <Title />
        <p><button className="p-2 m-2" onClick={handleClick}>Logout</button></p>
        <Link to="/rnews">Visit Here for Recommended News</Link>
        {/* <OverlayMenu /> */}
        <ArticleList />
        <Footer />
    </div>
  )
}

export default News