import {combineReducers} from 'redux';
import {all, call} from 'redux-saga/effects';
import directoryReducer from './directory';
import cartReducer, {cartSagas} from './cart';
import userReducer, {userSagas} from './user';
import shopReducer, {shopSagas} from './shop';

export function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default rootReducer;
