import userReducer, {INITIAL_STATE} from '../userReducer';

describe('userReducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
