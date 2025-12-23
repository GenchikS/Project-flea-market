import axios from "axios";

axios.defaults.baseURL = "https://project-flea-market-bd.onrender.com/";
// axios.defaults.withCredentials = true;

// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

//  очищення токену при виході logOut
// export const clearAuthHeader = () => {
//   delete axios.defaults.headers.common.Authorization;
// };

export const fetchArticleUserAll = async () => {
  // console.log(`hello`)
  const response = await axios.get(`/users`);
  return response.data.data;
};

export const fetchArticleUserName = async (name) => {
  const response = await axios.get(`/users/?&name=${name}`);
  // console.log(`response`, response.data.data);
  return response.data.data[0];
};

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
};

export const fetchArticleAddUser = async (payload) => {
  // console.log(`payload`, payload)
  try {
    const response = await axios.post(`/user/add`, payload);
    console.log(`response`, response);
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const fetchArticleUpdataUser = async (payload) => {
  // console.log(`payload`, payload)
  const { id } = payload;
  try {
    const responseSorceId = await axios.get(`/users/${id}`);
    const responseEnd = responseSorceId.data.data;
    // console.log(`responseEnd`, responseEnd);

    const payloadObject = {
      email:
        payload.email.trim().length > 0 ? payload.email : responseEnd.email,
      name: payload.name.trim().length > 0 ? payload.name : responseEnd.name,
      password:
        payload.password.trim().length > 0
          ? payload.password
          : responseEnd.password,
      phone:
        payload.phone.trim().length > 0 ? payload.phone : responseEnd.phone,
    };
    // console.log(`payloadObject`, payloadObject);
    const response = await axios.patch(`/user/updata/${id}`, payloadObject);
    // console.log(`response`, response);
    return response.data.data;
  } catch (error) {
    // console.log(`error updata`, error);
    return error.response.data;
  }
};

export const fetchArticleDeleteUser = async (id) => {
  // console.log(`id`, id)
  try {
    const response = await axios.delete(`/user/delete/${id}`);
    // console.log(`response`, response);
    return response;
  } catch (error) {
    // console.log(`error`, error.response.data);
    return error.response.data;
  }
};

export const fetchArticleRegisterUser = async (payload) => {
  // console.log(`payload`, payload)
  try {
    const response = await axios.post(`/auth/register`, payload);
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const fetchArticleLoginUser = async (payload) => {
  try {
    const response = await axios.post(`/auth/login`, payload);
    // console.log(`response login`, response.data.data);
    const data = {
      token: response.data.data.accessToken,
      sessionId: response.data.data.sessionId,
    };
    localStorage.setItem("Project-flea-market", JSON.stringify(data));
  return response.data;
  } catch (error) {
   return error.response.data;
}
};


export const fetchArticleLogoutUser = async (payload) => {
  // console.log(`payload logout`, payload);
  localStorage.removeItem("Project-flea-market");
  try {
    const response = await axios.post(`/auth/logout`, payload);
    //  console.log(`response`, response.data);
    // clearAuthHeader();
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const fetchArticleRefreshUser = async (token) => {
  const accessToken = { accessToken: token };
  // console.log(`accessToken`, accessToken);
  const response = await axios.post(`/session/refresh`, accessToken);
  // console.log(`response refresh`, response.data.data);
  return response.data.data;
};
