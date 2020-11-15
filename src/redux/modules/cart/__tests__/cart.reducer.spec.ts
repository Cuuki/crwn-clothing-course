import cartReducer, {INITIAL_STATE, TOGGLE_CART_HIDDEN} from '../cart';

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should return inverted initial state value of "cartHidden"', () => {
    const mockInitialState = INITIAL_STATE;

    expect(cartReducer(INITIAL_STATE, {type: TOGGLE_CART_HIDDEN})).toEqual({
      ...mockInitialState,
      cartHidden: !mockInitialState.cartHidden,
    });
  });
});
