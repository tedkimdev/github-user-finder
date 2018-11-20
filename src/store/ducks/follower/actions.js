import types from "./types";

export const followerRequest = url => ({
  type: types.FOLLOWER_REQUEST,
  payload: url
});

export const followerSuccess = () => ({
  type: types.FOLLOWER_SUCCESS
});

export const followerFailure = () => ({
  type: types.FOLLOWER_FAILURE
});

export default {
  followerRequest,
  followerSuccess,
  followerFailure
};
