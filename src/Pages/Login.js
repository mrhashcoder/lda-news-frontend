import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import BackgroundImage from '../assets/bg1.jpg';
import {useState , useEffect , useReducer} from 'react';
import {getToken , getLoggedUsername , userLogin } from '../utils/Auth';



export default function Login() {
    const token = getToken()
    const loggedUser = getLoggedUsername();
    const history = useNavigate();
    
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [jwt , setJwt] = useState("");


    useEffect(() => {
        if(token !== 'null') {
            history("/news");
        }
        if(loggedUser !== 'null'){
            history("/news");
        }
    })

    const handleClick = async(e) => {
        e.preventDefault();
        const userLogging = await userLogin(username , password);
        setJwt(userLogging);
        forceUpdate();
    }

    return (
        <div className="text-center" style={ HeaderStyle }>
            <h2 className="text-center p-1 heading">Login Here</h2>
            <form action="/home">
                <div className="m-1 p-1">
                    <label>Username</label><br/>
                    <input type="text" name="username" required value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="m-1 p-1">
                    <label>Password</label><br />
                    <input type="password" name="password" required value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="m-1 p-1">
                    <button id="sub_btn" onClick={e => handleClick(e)}> Login</button>
                </div>
            </form>
            <footer>
                <p>First time? <Link to="/signup">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
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