import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {
  selectShopCollection,
  selectShopCollectionIsLoaded,
} from '../../redux/modules/shop';
import withSpinner from '../../components/withSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
  collection: (state, ownProps) =>
    selectShopCollection(ownProps.match.params.collectionSlug)(state),
  //TODO: optimise this because redundant
  isLoading: (state) => !selectShopCollectionIsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;
