import {
  GOOGLE_SIGN_IN_START,
  CREDENTIAL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
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

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFailure = (errorMessage) => ({
  type: SIGN_OUT_FAILURE,
  payload: errorMessage,
});

export const registrationStart = (data) => ({
  type: REGISTRATION_START,
  payload: data,
});

export const registrationSuccess = ({user, additionalData}) => ({
  type: REGISTRATION_SUCCESS,
  payload: {user, additionalData},
});

export const registrationFailure = (errorMessage) => ({
  type: REGISTRATION_FAILURE,
  payload: errorMessage,
});
