import React, { useEffect, useState } from 'react'
import { Link, useNavigate}  from 'react-router-dom'

import '../App.css'
import BackgroundImage from '../assets/bg1.jpg';
import {getToken , getLoggedUsername , createUser } from '../utils/Auth';


export default function Signup() {


    const token = getToken()
    const loggedUser = getLoggedUsername();
    const history = useNavigate();
    
    useEffect(() => {
        if(token !== 'null') {
            history("/news");
        }
        if(loggedUser !== 'null'){
            history("/news");
        }
    } , [])

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    const handleClick = async(e) => {
        e.preventDefault();
        if(username == "" || password == "" ){
            alert("Enter Username or Password");
            return;
        }
        const userCreation = await createUser(username , password);
        alert(userCreation);
    }

    return (
        <div className="text-center" style={ HeaderStyle }>
            <h2 className="text-center p-1 heading">Signup Here</h2>
            <h2>Create your account</h2>
            <form>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="username" required value={username} onChange={e => setUsername(e.target.value)} />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                </p>
                <p>
                    <button id="sub_btn" onClick={e => handleClick(e)} >Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
                <p><Link to="/login">Login</Link></p>
            </footer>
        </div>
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