import axios from "axios";
import parseLinkHeader from "parse-link-header";

require("dotenv").config();

const token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

const defaultParams = {
  per_page: 50
};

// console.log(token);
const instance = axios.create({
  baseURL: "https://api.github.com/",
  headers: { Authorization: token }
});

// const searchUsers = (params) => {
//   const defaultParams = {
//     per_page: 50,
//   };
//   return instance
//     .get('/search/users?q=ddd', {
//       params: defaultParams,
//     })
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }

const searchUsersPromiseCallback = (keyword, completion, params) => {
  return instance
    .get(`/search/users?q=${keyword}`, {
      params: defaultParams
    })
    .then(res => {
      console.log(res);
      const users = res.data.items;
      const nextPageURL = res.headers.link;
      completion({ users, nextPageURL });
    })
    .catch(err => {
      console.log(err);
    });
};

const searchUsersAsyncAwaitCallBack = async (keyword, completion, params) => {
  try {
    const response = await instance.get(`/search/users?q=${keyword}`, {
      params: defaultParams
    });
    // console.log(response);
    const users = response.data.items;
    const nextPageURL = response.headers.link;
    completion({ users, nextPageURL });
  } catch (error) {
    console.log(error);
    completion({ error });
  }
};

const searchUsers = async (keyword, params) => {
  try {
    const response = await instance.get(`/search/users?q=${keyword}`, {
      params: defaultParams
    });

    return { response: addPagination(response) };
  } catch (error) {
    return { error };
  }
};

const normalizeUser = user => ({
  login: user.login,
  id: user.id,
  node_id: user.node_id,
  avatar_url: user.avatar_url,
  html_url: user.html_url
});

const addPagination = response => {
  const { data, headers } = response;

  const pagination = parseLinkHeader(headers.link);
  return {
    data: {
      ...data,
      //       //TODO: delete items
      //       var clone = Object.assign({}, { a: 1, b: 2, c: 3 });
      //       delete clone.b;
      //       or if you accept property to be undefined:

      // var clone = Object.assign({}, { a: 1, b: 2, c: 3 }, { b: undefined });
      users: data.items.map(item => normalizeUser(item)),
      pagination
    }
  };
};

const getProfile = (completion, username) => {
  return instance.get(`/users/${username}`);
};

export default {
  getProfile,
  searchUsersPromiseCallback,
  searchUsersAsyncAwaitCallBack,
  searchUsers
};
