import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';

import {  contactReducer } from "./slice/contactsSlice";
import { filterReducer } from "./slice/filterSlice";
import { extraReducers } from './slice/authSlice';

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