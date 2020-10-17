import {TOGGLE_CART_HIDDEN} from '../../constants/cartActionTypes';
import cartReducer, {INITIAL_STATE} from '../cartReducer';

describe('cartReducer', () => {
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
