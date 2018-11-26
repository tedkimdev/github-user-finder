import types from "./types";

export const followerRequest = url => ({
  type: types.FOLLOWER_REQUEST,
  payload: url
});

export const followerSuccess = follwers => ({
  type: types.FOLLOWER_SUCCESS,
  payload: follwers
});

export const followerFailure = () => ({
  type: types.FOLLOWER_FAILURE
});

export default {
  followerRequest,
  followerSuccess,
  followerFailure
};
