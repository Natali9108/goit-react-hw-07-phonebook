import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = payload;
      })

      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(payload);
      })

      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === payload
        );
        state.contacts.splice(index, 1);
      })

      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, { payload }) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts = payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.pending]: handlePending,
  //   [addContact.fulfilled](state, { payload }) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts.push(payload);
  //   },
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.pending]: handlePending,
  //   [deleteContact.fulfilled](state, { payload }) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts = state.contacts.filter(contact => contact.id !== payload);
  //   },
  //   [deleteContact.rejected]: handleRejected,
  // },
  // reducers: {
  //   addContact: {
  //     reducer: ({ contacts }, action) => {
  //       contacts.push(action.payload);
  //     },
  //   },

  //   removeContact: (state, actions) => {
  //     state.contacts = state.contacts.filter(
  //       contact => contact.id !== actions.payload
  //     );
  //   },
  // },
});

export const contactsReducer = contactsSlice.reducer;
