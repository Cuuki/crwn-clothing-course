import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  CLEAR_CART_ITEM,
} from '../constants/cartActionTypes';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addCartItem = cartItems => ({
  type: ADD_CART_ITEM,
  payload: cartItems,
});

export const removeCartItem = cartItems => ({
  type: REMOVE_CART_ITEM,
  payload: cartItems,
});

export const clearCartItem = cartItems => ({
  type: CLEAR_CART_ITEM,
  payload: cartItems,
});
