import objectMap from '../utils/objectMap';
import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => (collections ? objectMap(collections) : [])
);

export const selectShopCollection = collectionSlug => {
  return createSelector([selectShopCollections], collections =>
    collections ? collections[collectionSlug] : null
  );
};

export const selectShopCollectionIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

//TODO: optimise this because redundant
export const selectShopCollectionIsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
