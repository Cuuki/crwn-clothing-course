import {createSelector} from 'reselect';
import {createAction, createReducer} from '@reduxjs/toolkit';
import objectMap from '../../../utils/objectMap';

export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE';

export const fetchCollectionsStart = createAction(FETCH_COLLECTIONS_START);
export const fetchCollectionsSuccess = createAction(FETCH_COLLECTIONS_SUCCESS);
export const fetchCollectionsFailure = createAction(FETCH_COLLECTIONS_FAILURE);

export const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: '',
};
const shopReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(fetchCollectionsStart, (state) => ({
      ...state,
      isFetching: true,
    }))
    .addCase(fetchCollectionsSuccess, (state, action) => ({
      ...state,
      isFetching: false,
      collections: action.payload,
    }))
    .addCase(fetchCollectionsFailure, (state, action) => ({
      ...state,
      isFetching: false,
      errorMessage: action.payload,
    }))
    .addDefaultCase((state) => state)
);

const selectShop = (state) => state.shop;
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => (collections ? objectMap(collections) : [])
);
export const selectShopCollection = (collectionSlug) => {
  return createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionSlug] : null
  );
};
export const selectShopCollectionIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
//TODO: optimise this because redundant
export const selectShopCollectionIsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

export default shopReducer;
