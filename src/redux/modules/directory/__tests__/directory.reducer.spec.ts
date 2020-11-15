import directoryReducer, {INITIAL_STATE} from '../directory';

describe('directory reducer', () => {
  it('should return the initial state', () => {
    expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
