import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer, {rootSaga} from './modules/root';

const isDevelopment = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistReducer(
    {
      key: 'root',
      storage,
      whitelist: ['cart'],
    },
    rootReducer
  ),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    ...[sagaMiddleware, ...(isDevelopment && [logger])],
  ],
  devTools: isDevelopment,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
