import {takeLatest, put, all, call} from 'redux-saga/effects';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../utils/firebase';

import {
  GOOGLE_SIGN_IN_START,
  CREDENTIAL_SIGN_IN_START,
} from '../constants/userActionTypes';
import {signInSuccess, signInFailure} from '../actions/userActions';

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

export function* watchGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* watchCredentialSignInStart() {
  yield takeLatest(CREDENTIAL_SIGN_IN_START, singInWithCredentials);
}

export default function* userSagas() {
  yield all([call(watchGoogleSignInStart), call(watchCredentialSignInStart)]);
}
