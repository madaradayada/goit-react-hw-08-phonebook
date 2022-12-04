import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        [fetchContacts.pending](state) {
             state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
         },
        
        [addContact.pending](state) {
             state.isLoading = true;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.items.push({
                ...action.payload,
            })             
        },
        [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
         },
        
        [deleteContact.pending](state) {
            state.isLoading = true;
        },
        [deleteContact.fulfilled](state, action) {
             state.isLoading = false;
             state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        [deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
  },
});

export const contactReducer = contactsSlice.reducer;  