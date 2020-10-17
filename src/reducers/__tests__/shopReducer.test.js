import shopReducer, {INITIAL_STATE} from '../shopReducer';

describe('shopReducer', () => {
  it('should return the initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
