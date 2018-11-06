import axios from 'axios';

require('dotenv').config();

const token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

console.log(token);
const instance = axios.create({
  baseURL: 'https://api.github.com/',
  
  headers: {'Authorization': token}
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

const searchUsersPromise = (completion, params) => {
  const defaultParams = {
    per_page: 50,
  };
  return instance
    .get('/search/users?q=ddd', {
      params: defaultParams,
    })
    .then(res => {
      console.log(res);
      const users = res.data.items;
      const nextPageURL = res.headers.link;
      completion({users, nextPageURL});
    })
    .catch(err => {
      console.log(err);
    })
}

const searchUsersAsyncAwait = async (completion, params) => {
  try {
    const defaultParams = {
      per_page: 50,
    };
    const response = await instance.get('/search/users?q=ddd', {
      params: defaultParams,
    });
    // console.log(response);
    const users = response.data.items;
    const nextPageURL = response.headers.link;
    completion({users, nextPageURL});
  } catch (error) {
    console.log(error);
    completion({error});
  }
}



const getProfile = (completion, username) => {
  return instance.get(`/users/${username}`);
}


export default {
  searchUsersPromise,
  getProfile,
  searchUsersAsyncAwait
};