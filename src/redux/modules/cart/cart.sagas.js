import {all, call, put, takeLatest} from 'redux-saga/effects';
import {SIGN_OUT_SUCCESS} from '../user';
import {clearCart} from './cart';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* watchSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(watchSignOutSuccess)]);
}
