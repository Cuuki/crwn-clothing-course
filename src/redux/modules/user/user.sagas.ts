import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from '../../../utils/firebase';
import {
  CHECK_USER_SESSION,
  CREDENTIAL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  registrationFailure,
  registrationSuccess,
  SIGN_OUT_START,
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
} from './user';

export function* getSnapshotFromUserAuth(userAuth, data) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, data);
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

export function* createNewUser(action) {
  const {email, password, displayName} = action.payload;

  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
      registrationSuccess({
        user,
        additionalData: {displayName},
      })
    );
  } catch (error) {
    yield put(registrationFailure(error.message));
  }
}

export function* signInNewUser(action) {
  const {user, additionalData} = action.payload;

  try {
    yield getSnapshotFromUserAuth(user, additionalData);
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

export function* watchCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* watchSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

export function* watchRegistrationStart() {
  yield takeLatest(REGISTRATION_START, createNewUser);
}

export function* watchRegistrationSuccess() {
  yield takeLatest(REGISTRATION_SUCCESS, signInNewUser);
}

export default function* userSagas() {
  yield all([
    call(watchGoogleSignInStart),
    call(watchCredentialSignInStart),
    call(watchCheckUserSession),
    call(watchSignOutStart),
    call(watchRegistrationStart),
    call(watchRegistrationSuccess),
  ]);
}
