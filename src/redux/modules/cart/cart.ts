import {createSelector} from 'reselect';
import {createAction, createReducer} from '@reduxjs/toolkit';
import addItemToCart from '../../../utils/addItemToCart';
import removeItemFromCart from '../../../utils/removeItemFromCart';
import clearItemFromCart from '../../../utils/clearItemFromCart';

const APP_NAME = process.env.REACT_APP_SHOP_NAME;
const FEATURE_NAME = 'cart';

export const TOGGLE_CART_HIDDEN = `${APP_NAME}/${FEATURE_NAME}/TOGGLE_CART_HIDDEN`;
export const ADD_CART_ITEM = `${APP_NAME}/${FEATURE_NAME}/ADD_CART_ITEM`;
export const REMOVE_CART_ITEM = `${APP_NAME}/${FEATURE_NAME}/REMOVE_CART_ITEM`;
export const CLEAR_CART_ITEM = `${APP_NAME}/${FEATURE_NAME}/CLEAR_CART_ITEM`;
export const CLEAR_CART = `${APP_NAME}/${FEATURE_NAME}/CLEAR_CART`;

export const toggleCartHidden = createAction(TOGGLE_CART_HIDDEN);
export const addCartItem = createAction(ADD_CART_ITEM);
export const removeCartItem = createAction(REMOVE_CART_ITEM);
export const clearCartItem = createAction(CLEAR_CART_ITEM);
export const clearCart = createAction(CLEAR_CART);

export const INITIAL_STATE = {
  cartHidden: true,
  cartItems: [],
};
const cartReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(toggleCartHidden, (state) => ({
      ...state,
      cartHidden: !state.cartHidden,
    }))
    .addCase(addCartItem, (state, action) => ({
      ...state,
      cartItems: addItemToCart(state.cartItems, action.payload),
    }))
    .addCase(removeCartItem, (state, action) => ({
      ...state,
      cartItems: removeItemFromCart(state.cartItems, action.payload),
    }))
    .addCase(clearCartItem, (state, action) => ({
      ...state,
      cartItems: clearItemFromCart(state.cartItems, action.payload),
    }))
    .addCase(clearCart, (state) => ({
      ...state,
      cartItems: INITIAL_STATE.cartItems,
    }))
    .addDefaultCase((state) => state)
);

const selectCart = (state) => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.cartHidden
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedPrice, cartItem) =>
      accumulatedPrice + cartItem.quantity * cartItem.price,
    0
  )
);

export default cartReducer;
