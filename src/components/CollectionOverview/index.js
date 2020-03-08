import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {
  selectShopCollectionIsFetching,
  selectShopCollectionsForPreview,
} from '../../selectors/shopSelectors';

import withSpinner from '../UI/withSpinner';
import CollectionOverview from './CollectionOverview';

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
  isLoading: selectShopCollectionIsFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
