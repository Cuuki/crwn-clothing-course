import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../selectors/cartSelectors';
import {toggleCartHidden} from '../../actions/cartActions';

import {withRouter, Link} from 'react-router-dom';
import Button from '../UI/Button';
import CartItem from '../CartItem';

import './CartDropdown.scss';

const CartDropdown = ({cartItems, dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Button
      as={Link}
      to="/checkout"
      onClick={() => {
        dispatch(toggleCartHidden());
      }}>
      GO to checkout
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
