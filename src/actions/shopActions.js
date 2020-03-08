import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from '../constants/shopActionTypes';

import {
  getCollectionReference,
  convertCollectionsSnapshotToMap,
} from '../utils/firebase';

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = getCollectionReference('collections');

    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        console.log(collectionsMap);

        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => {
        dispatch(fetchCollectionsFailure(error.message));
      });
  };
};
