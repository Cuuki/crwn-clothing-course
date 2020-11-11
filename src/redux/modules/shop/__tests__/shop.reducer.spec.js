import shopReducer, {INITIAL_STATE} from '../shop';

describe('shop reducer', () => {
  it('should return the initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
