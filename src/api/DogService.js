import axios from "axios";

/**
 * API examples
 */

/**
 * {
 *  success: { res },
 *  failure: { error }
 * }
 */
const fetchDog = completion => {
  axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  })
    .then(res => completion({ imageUrl: res.data.message }))
    .catch(err => completion({ error: err }));
};

const getUsers = () => {
  axios
    .get("https://reqres.in/api/users?page=1")
    .then(data => console.log(data))
    .catch(err => {
      console.log(err);
    });
};

export default {
  fetchDog,
  getUsers
};
