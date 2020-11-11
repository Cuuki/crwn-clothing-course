import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
  convertCollectionsSnapshotToMap,
  getCollectionReference,
} from '../../../utils/firebase';
import {
  FETCH_COLLECTIONS_START,
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './shop';

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

export default function* shopSagas() {
  yield all([call(watchFetchCollectionsStart)]);
}
