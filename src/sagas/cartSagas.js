import {takeLatest, all, call, put} from 'redux-saga/effects';

import {SIGN_OUT_SUCCESS} from '../constants/userActionTypes';
import {clearCart} from '../actions/cartActions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* watchSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(watchSignOutSuccess)]);
}
