import { configureStore } from '@reduxjs/toolkit';
import {  contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { extraReducers } from './authSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';

export const store = configureStore({
    reducer: {
        auth: extraReducers,
        contacts: contactReducer,
        filter: filterReducer, 
    },
    middleware: getDefaultMiddleware=>  getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),    
}); 
export const persistor = persistStore(store);