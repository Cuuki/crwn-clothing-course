import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
} from '../constants/userActionTypes';

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: INITIAL_STATE.errorMessage,
      };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: INITIAL_STATE.currentUser,
        errorMessage: INITIAL_STATE.errorMessage,
      };

    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
