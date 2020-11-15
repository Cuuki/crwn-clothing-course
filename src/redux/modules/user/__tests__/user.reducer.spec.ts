import userReducer, {INITIAL_STATE} from '../user';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
