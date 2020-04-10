import {takeLatest, put, all, call} from 'redux-saga/effects';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../utils/firebase';

import {
  GOOGLE_SIGN_IN_START,
  CREDENTIAL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
} from '../constants/userActionTypes';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from '../actions/userActions';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* singInWithCredentials(action) {
  const {email, password} = action.payload;

  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) {
      return;
    }

    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* watchGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* watchCredentialSignInStart() {
  yield takeLatest(CREDENTIAL_SIGN_IN_START, singInWithCredentials);
}

export function* watchCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* watchSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

export default function* userSagas() {
  yield all([
    call(watchGoogleSignInStart),
    call(watchCredentialSignInStart),
    call(watchCheckUserSession),
    call(watchSignOutStart),
  ]);
}
