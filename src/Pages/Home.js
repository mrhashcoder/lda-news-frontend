import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'
import BackgroundImage from '../assets/bg1.jpg';

export default function Home() {
    return (
        <header style={ HeaderStyle }>
            <h3 className="main-title text-center">LDA News</h3>
            <h3 className="main-title text-center">Classification and Recommendation</h3>
            <p className="main-para text-center">Please Login or Register Here</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/signup">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}