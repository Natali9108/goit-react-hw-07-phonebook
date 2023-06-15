export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const selectSortContacts = state => {
  const visibleContacts = selectVisibleContacts(state);
  return visibleContacts.sort((first, second) =>
    first.name.localeCompare(second.name)
  );
};
