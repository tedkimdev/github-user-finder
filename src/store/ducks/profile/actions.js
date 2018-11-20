import types from "./types";

export const profileRequest = username => ({
  type: types.PROFILE_REQUEST,
  payload: username
});

export const profileSuccess = userProfile => ({
  type: types.PROFILE_SUCCESS,
  payload: userProfile
});

export const profileFailure = error => ({
  type: types.PROFILE_FAILURE,
  payload: error
});

export default {
  profileRequest,
  profileSuccess,
  profileFailure
};
