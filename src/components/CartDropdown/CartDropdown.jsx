import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Link, withRouter} from 'react-router-dom';
import {selectCartItems, toggleCartHidden} from '../../redux/modules/cart';
import Button from '../UI/Button';
import CartItem from '../CartItem';
import './CartDropdown.scss';

const CartDropdown = ({cartItems, toggleCartHidden}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Button as={Link} to="/checkout" onClick={toggleCartHidden}>
      GO to checkout
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
