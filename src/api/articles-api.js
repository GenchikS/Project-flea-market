import axios from "axios";

axios.defaults.baseURL = "https://project-flea-market-bd.onrender.com/"

export const fetchArticleUserAll = async () => {
  // console.log(`hello`)
  const response = await axios.get(`/users`);
  return response.data.data;
}


export const fetchArticleUserName = async(name) => {
    const response = await axios.get(`/users/?&name=${name}`);
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
    const response = await axios.post(`/user/add`, payload);
    // console.log(`response`, response);
    return response.data.data;
}

export const fetchArticleUpdataUser = async (payload) => {
  const { id } = payload;
  // console.log(`payload`, payload)
  const responseSorceId = await axios.get(`/users/${id}`);
  const responseEnd = responseSorceId.data.data;
  // console.log(`responseEnd`, responseEnd);
 
  const payloadObject = {
    email: payload.email.trim().length > 0 ? payload.email : responseEnd.email,
    name: payload.name.trim().length > 0 ? payload.name : responseEnd.name,
    phone: payload.phone.trim().length > 0 ? payload.phone : responseEnd.phone,
  };

  // console.log(`payloadObject`, payloadObject);
const response = await axios.patch(`/user/updata/${id}`, payloadObject);
  // console.log(`response`, response);
  return response.data.data;
}

export const fetchArticleDeleteUser = async (id) => {
  // console.log(`id`, id)
    const response = await axios.delete(`/user/delete/${id}`);
  // console.log(`response`, response.data.data);
  if (!response) return;
return;
}



