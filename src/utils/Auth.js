import axios from './axios';


export const setToken = (token) => {
    localStorage.setItem("token" , token);
}  

export const getToken = () => {
    return JSON.stringify(localStorage.getItem("token"));
}

export const getLoggedUsername = () => {
    return JSON.stringify(localStorage.getItem("loggedUsername"))
}

export const setLoggedUsername = (username) => {
    localStorage.setItem('loggedUsername' , username);
}

export const createUser = async(username , password) => {
    try{
        const resp = await axios.post('/signup' , {
            username : username,
            password : password
        });
        console.log(resp.data);
        return resp.data.message;    
    }catch(err){
        console.log(err);
        return 'Unexpected Error';
    }
}


export const userLogin = async(username , password) => {
    try{
        const resp = await axios.post('/login', {
            username: username,
            password: password
        });
        console.log(resp);
        const token = resp.data.jwt_token;

        if(token == null){
            alert("Invalid Username and Password");
        }else{
            setToken(token);
            setLoggedUsername(username);
            return token;
        }

    }catch(err){
        console.log(err);
        alert('Login Error');
    }
}


export const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedUsername')
}