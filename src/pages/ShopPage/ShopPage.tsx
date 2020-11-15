import React, {lazy, Suspense, useEffect} from 'react';

import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchCollectionsStart} from '../../redux/modules/shop';
import Spinner from '../../components/UI/Spinner';
import './ShopPage.scss';

const CollectionOverview = lazy(() =>
  import('../../components/CollectionOverview')
);
const CollectionPage = lazy(() => import('../CollectionPage'));

const ShopPage = ({match, fetchCollectionsStart}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionSlug`}
          component={CollectionPage}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
