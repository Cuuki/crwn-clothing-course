import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../actions/shopActions';

import {Route} from 'react-router-dom';
import CollectionPage from '../CollectionPage';
import CollectionOverview from '../../components/CollectionOverview';

import './ShopPage.scss';

const ShopPage = ({match, fetchCollectionsStart}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        path={`${match.path}/:collectionSlug`}
        component={CollectionPage}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
