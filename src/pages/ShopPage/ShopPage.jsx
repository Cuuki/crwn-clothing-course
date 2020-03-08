import React from 'react';

import {connect} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../actions/shopActions';

import {Route} from 'react-router-dom';
import CollectionPage from '../CollectionPage';
import CollectionOverview from '../../components/CollectionOverview';

import './ShopPage.scss';

class ShopPage extends React.Component {
  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const {match} = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionSlug`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
