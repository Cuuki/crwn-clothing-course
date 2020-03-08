const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};

export default clearCartItem;
