import axios from "axios";

axios.defaults.baseURL = "https://project-flea-market-bd.onrender.com/"

export const fetchArticleUserAll = async() => {
    const response = await axios.get(`/users`);
    console.log(`response`, response);
    return response;
}

