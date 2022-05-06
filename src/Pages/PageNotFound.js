import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div class="container">
        <h2>Oops! Page not found.</h2>
        <h1>404</h1>
        <p>We can't find the page you're looking for.</p>
        <Link to="/">Go back home</Link>
    </div>
  )
}

export default PageNotFound