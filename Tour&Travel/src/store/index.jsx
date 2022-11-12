import {combineReducers, configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import placeSlice from './placeSlice';

const persistConfig = {
  key: 'root',
  storage, 
}

const rootReducer = combineReducers({
  place: placeSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer : persistedReducer,
  devTools : process.env.NODE_ENV !== 'production'
})

export const persistor = persistStore(store)