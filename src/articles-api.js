import axios from "axios";

axios.defaults.baseURL = "https://project-flea-market-bd.onrender.com/"

export const fetchArticleUserAll = async() => {
    const response = await axios.get(`/users`);
    // console.log(`response`, response);
    return response;
}

export const fetchArticleUserId = async(id) => {
    const response = await axios.get(`/users/${id}`);
    // console.log(`response`, response);
    return response;
}

export const fetchArticleUserName = async(name) => {
    const response = await axios.get(`/user/?&name=${name}`);
    // console.log(`response`, response.data.data);
    return response.data.data[0];
}

export const fetchArticleUserEmail = async (name) => {
  console.log(`name`, name);
  const response = await axios.get(`/users/?email=${name}`);
  console.log(`response`, response.data.data);
  return response.data.data[0];
};