import { Toaster } from 'react-hot-toast';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Loader } from 'components/Loader/Loader';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      {error && <p>{error.message}</p>}
      {isLoading && !error && <Loader />}
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Add your contacts to the phonebook</p>
      )}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: '18px',
          },
        }}
      />
    </Container>
  );
};
