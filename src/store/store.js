import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productReducer from "./reducers/productSlice";
import modalReducer from "./reducers/modalSlice";
import storage from 'redux-persist/lib/storage'; // localStorage
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import sessionStorage from 'redux-persist/es/storage/session';
import snackbarReducer from './reducers/snackbarSlice'

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['product','modal'] // sadece product slice'ı saklanacak
};

const rootReducer = combineReducers({
  product: productReducer,
  modal: modalReducer,
  snackbar: snackbarReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/FLUSH',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/PERSIST',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }),
});


export const persistor = persistStore(store);




