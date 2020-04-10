import {
  GOOGLE_SIGN_IN_START,
  CREDENTIAL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from '../constants/userActionTypes';

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const credentialSignInStart = (credentials) => ({
  type: CREDENTIAL_SIGN_IN_START,
  payload: credentials,
});

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (errorMessage) => ({
  type: SIGN_IN_FAILURE,
  payload: errorMessage,
});
