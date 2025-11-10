import axios from "axios";

axios.defaults.baseURL = "https://project-flea-market-bd.onrender.com/"

export const fetchArticleUserAll = async() => {
    const response = await axios.get(`/users`);
    // console.log(`response`, response);
    return response.data.data;
}

export const fetchArticleUserName = async(name) => {
    const response = await axios.get(`/user/?&name=${name}`);
    // console.log(`response`, response.data.data);
    return response.data.data[0];
}

export const fetchArticleUserEmail = async (name) => {
//   console.log(`name`, name);
  const response = await axios.get(`/users/?email=${name}`);
//   console.log(`response`, response.data.data);
  return response.data.data[0];
};

export const fetchArticleUserId = async (id) => {
  // console.log(`id`, id);
    const response = await axios.get(`/users/${id}`);
    // console.log(`response`, response);
    return response.data.data;
}

export const fetchArticleAddUser = async (payload) => {
  // console.log(`payload`, payload)
    const response = await axios.post(`/users`, payload);
    // console.log(`response`, response);
    return;
}

export const fetchArticleUpdataUser = async (payload) => {
  
  const { id} = payload;
console.log(`payload`, id)
  console.log(`payload`, payload)
    const response = await axios.patch(`/users/${id}`, payload);
    // console.log(`response`, response);
    return;
}

export const fetchArticleDeleteUser = async (id) => {
  // console.log(`id`, id)
    const response = await axios.delete(`/users/${id}`);
    // console.log(`response`, response.data.data);
    return;
}



