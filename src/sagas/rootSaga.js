import {all, call} from 'redux-saga/effects';
import {watchFetchCollectionsStart} from './shopSagas';

export default function* rootSaga() {
  yield all([call(watchFetchCollectionsStart)]);
}
