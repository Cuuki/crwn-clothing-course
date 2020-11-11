import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {
  selectShopCollectionIsFetching,
  selectShopCollectionsForPreview,
} from '../../redux/modules/shop';
import withSpinner from '../withSpinner';
import CollectionOverview from './CollectionOverview';

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
  isLoading: selectShopCollectionIsFetching,
});

export default compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);
