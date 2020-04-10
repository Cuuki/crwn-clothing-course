import React from 'react';

import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../actions/shopActions';

import {Route} from 'react-router-dom';
import CollectionPage from '../CollectionPage';
import CollectionOverview from '../../components/CollectionOverview';

import './ShopPage.scss';

class ShopPage extends React.Component {
  componentDidMount() {
    const {fetchCollectionsStart} = this.props;

    fetchCollectionsStart();
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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
