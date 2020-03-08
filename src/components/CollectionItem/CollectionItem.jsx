import React from 'react';

import {connect} from 'react-redux';
import {addCartItem} from '../../actions/cartActions';

import Button from '../UI/Button';

import './CollectionItem.scss';

const CollectionItem = ({item, addCartItem}) => {
  const {name, price, imageUrl} = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{backgroundImage: `url(${imageUrl})`}}></div>

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>

      <Button onClick={() => addCartItem(item)} inverted>
        Add to Cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: cartItem => dispatch(addCartItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
