import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      {isLoading && !error && <p>...Loading</p>}
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Add your contacts to the phonebook</p>
      )}
    </Container>
  );
};
