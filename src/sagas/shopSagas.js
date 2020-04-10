import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getCollectionReference,
  convertCollectionsSnapshotToMap,
} from '../utils/firebase';

import {FETCH_COLLECTIONS_START} from '../constants/shopActionTypes';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from '../actions/shopActions';

export function* fetchCollections() {
  try {
    const collectionRef = getCollectionReference('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* watchFetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollections);
}
