import axios from './axios';


export const fetchRNews = async(username, page, limit) => {
    console.log(username)
    try {
        const postData = {
            page : page,
            limit : limit,
            username : username
        }
        const resp = await axios.post("/rnews", postData);
        console.log(resp.data);
        return resp.data.news_list;
    }catch(e) {
        console.log(e);
        return [];
    }
};

export const fetchNews = async (page , limit) => {
    try {
        const resp = await axios.post("/news" , {
            page : page,
            limit : limit
        });
        return resp.data.news_list;

    }catch(e) {
        console.log(e);
        return [];
    }
}


