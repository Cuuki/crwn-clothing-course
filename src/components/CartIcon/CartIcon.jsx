import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItemsCount, toggleCartHidden} from '../../redux/modules/cart';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
//TODO: remove this from global state and keep local?
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
