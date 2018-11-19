import types from "./types";

export const profileRequest = value => ({
  type: types.PROFILE_REQUEST
  //TODO:
});
export const profileSuccess = () => ({
  type: types.PROFILE_SUCCESS
});
export const profileFailure = () => ({
  type: types.PROFILE_FAILURE
});

export default {
  profileRequest,
  profileSuccess,
  profileFailure
};
