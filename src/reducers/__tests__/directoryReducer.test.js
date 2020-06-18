import directoryReducer, {INITIAL_STATE} from '../directoryReducer';

describe('directoryReducer', () => {
  it('should return the initial state', () => {
    expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
