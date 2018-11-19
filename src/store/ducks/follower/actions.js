import types from "./types";

export const followerRequest = value => ({
  type: types.FOLLOWER_REQUEST
  //TODO:
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
