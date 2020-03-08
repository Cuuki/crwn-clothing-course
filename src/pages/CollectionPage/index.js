import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {
  selectShopCollectionIsLoaded,
  selectShopCollection,
} from '../../selectors/shopSelectors';

import withSpinner from '../../components/UI/withSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
  collection: (state, ownProps) =>
    selectShopCollection(ownProps.match.params.collectionSlug)(state),
  //TODO: optimise this because redundant
  isLoading: state => !selectShopCollectionIsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;
