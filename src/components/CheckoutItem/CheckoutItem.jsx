import React from 'react';
import {connect} from 'react-redux';
import {
  addCartItem,
  clearCartItem,
  removeCartItem,
} from '../../redux/modules/cart';
import './CheckoutItem.scss';

const CheckoutItem = ({item, addCartItem, removeCartItem, clearCartItem}) => {
  const {imageUrl, price, name, quantity} = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            removeCartItem(item);
          }}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addCartItem(item);
          }}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          clearCartItem(item);
        }}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (cartItem) => dispatch(addCartItem(cartItem)),
  removeCartItem: (cartItem) => dispatch(removeCartItem(cartItem)),
  clearCartItem: (cartItem) => dispatch(clearCartItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
