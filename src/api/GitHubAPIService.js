import axios from "axios";
import parseLinkHeader from "parse-link-header";

require("dotenv").config();

export const PER_PAGE = 48;

const token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

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
  const defaultParams = {
    per_page: PER_PAGE
  };
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
  const defaultParams = {
    per_page: PER_PAGE
  };
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

const searchUsers = async params => {
  const defaultParams = {
    per_page: PER_PAGE
  };

  try {
    const response = await instance.get("/search/users", {
      params: { ...defaultParams, ...params }
    });

    return { response: addPagination(response) };
  } catch (error) {
    return { error };
  }
};

const normalizedUser = user => ({
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
      users: data.items.map(item => normalizedUser(item)),
      pagination
    }
  };
};

const normalizedProfile = profile => ({
  avatar_url: profile.avatar_url,
  bio: profile.bio,
  blog: profile.blog,
  company: profile.company,
  followers: profile.followers,
  followers_url: profile.followers_url,
  following: profile.following,
  html_url: profile.html_url,
  location: profile.location,
  login: profile.login,
  id: profile.id,
  name: profile.name,
  public_gists: profile.public_gists,
  public_repos: profile.public_repos,
  repos_url: profile.repos_url
});

const getProfile = async username => {
  try {
    const response = await instance.get(`/users/${username}`);
    // console.log(response);
    response.data = normalizedProfile(response.data);
    return { response };
  } catch (error) {
    return { error };
  }
};

const getRateLimit = async () => {
  try {
    const response = await instance.get(`/rate_limit`);
    // console.log(response);
    return { response };
  } catch (error) {
    return { error };
  }
};

const getDataFromURL = async (url, perPage = PER_PAGE) => {
  try {
    const response = await instance.get(url, {
      params: {
        per_page: perPage
      }
    });
    // console.log(response);
    return { response };
  } catch (error) {
    return { error };
  }
};

export default {
  getProfile,
  searchUsersPromiseCallback,
  searchUsersAsyncAwaitCallBack,
  searchUsers,
  getDataFromURL,
  getRateLimit
};
