import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: ({ contacts }, action) => {
        contacts.push(action.payload);
      },
    },

    removeContact: (state, actions) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== actions.payload
      );
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, removeContact } = contactsSlice.actions;
