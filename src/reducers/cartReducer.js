import addItemToCart from '../utils/addItemToCart';
import removeItemFromCart from '../utils/removeItemFromCart';
import clearCartItem from '../utils/clearCartItem';

import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  CLEAR_CART_ITEM,
} from '../constants/cartActionTypes';

const INITIAL_STATE = {
  cartHidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cartHidden: !state.cartHidden,
      };

    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: clearCartItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
