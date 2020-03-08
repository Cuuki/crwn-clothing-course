import clearCartItem from './clearCartItem';

const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity > 1) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: (cartItem.quantity -= 1)}
        : cartItem
    );
  }

  return clearCartItem(cartItems, cartItemToRemove);
};

export default removeItemFromCart;
