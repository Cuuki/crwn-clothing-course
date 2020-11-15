import {createSelector} from 'reselect';
import {createAction, createReducer} from '@reduxjs/toolkit';

const APP_NAME = process.env.REACT_APP_SHOP_NAME;
const FEATURE_NAME = 'user';

export const GOOGLE_SIGN_IN_START = `${APP_NAME}/${FEATURE_NAME}/GOOGLE_SIGN_IN_START`;
export const CREDENTIAL_SIGN_IN_START = `${APP_NAME}/${FEATURE_NAME}/CREDENTIAL_SIGN_IN_START`;
export const SIGN_IN_SUCCESS = `${APP_NAME}/${FEATURE_NAME}/SIGN_IN_SUCCESS`;
export const SIGN_IN_FAILURE = `${APP_NAME}/${FEATURE_NAME}/SIGN_IN_FAILURE`;
export const CHECK_USER_SESSION = `${APP_NAME}/${FEATURE_NAME}/CHECK_USER_SESSION`;
export const SIGN_OUT_START = `${APP_NAME}/${FEATURE_NAME}/SIGN_OUT_START`;
export const SIGN_OUT_SUCCESS = `${APP_NAME}/${FEATURE_NAME}/SIGN_OUT_SUCCESS`;
export const SIGN_OUT_FAILURE = `${APP_NAME}/${FEATURE_NAME}/SIGN_OUT_FAILURE`;
export const REGISTRATION_START = `${APP_NAME}/${FEATURE_NAME}/REGISTRATION_START`;
export const REGISTRATION_SUCCESS = `${APP_NAME}/${FEATURE_NAME}/REGISTRATION_SUCCESS`;
export const REGISTRATION_FAILURE = `${APP_NAME}/${FEATURE_NAME}/REGISTRATION_FAILURE`;

export const googleSignInStart = createAction(GOOGLE_SIGN_IN_START);
export const credentialSignInStart = createAction(CREDENTIAL_SIGN_IN_START);
export const signInSuccess = createAction(SIGN_IN_SUCCESS);
export const signInFailure = createAction(SIGN_IN_FAILURE);
export const checkUserSession = createAction(CHECK_USER_SESSION);
export const signOutStart = createAction(SIGN_OUT_START);
export const signOutSuccess = createAction(SIGN_OUT_SUCCESS);
export const signOutFailure = createAction(SIGN_OUT_FAILURE);
export const registrationStart = createAction(REGISTRATION_START);
export const registrationSuccess = createAction(REGISTRATION_SUCCESS);
export const registrationFailure = createAction(REGISTRATION_FAILURE);

export const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};
const failureReducer = (state, action) => ({
  ...state,
  errorMessage: action.payload,
});
const userReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(signInSuccess, (state, action) => ({
      ...state,
      currentUser: action.payload,
      errorMessage: INITIAL_STATE.errorMessage,
    }))
    .addCase(signOutSuccess, (state) => ({
      ...state,
      currentUser: INITIAL_STATE.currentUser,
      errorMessage: INITIAL_STATE.errorMessage,
    }))
    .addCase(signInFailure, failureReducer)
    .addCase(signOutFailure, failureReducer)
    .addDefaultCase((state) => state)
);

const selectUser = (state) => state.user;
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export default userReducer;
