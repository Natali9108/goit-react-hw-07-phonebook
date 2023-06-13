import React from 'react';
import { PropTypes } from 'prop-types';
import { ContactsItem } from './ContactItem';
import { ContactsList } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDeleteContact = contactId => dispatch(deleteContact(contactId));

  const visibleContacts = contacts
    .filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((first, second) => first.name.localeCompare(second.name));

  return (
    <>
      <ContactsList>
        {visibleContacts.map(({ id, name, number }, index) => (
          <ContactsItem
            key={id}
            index={index}
            name={name}
            number={number}
            onClick={() => handleDeleteContact(id)}
          />
        ))}
      </ContactsList>
    </>
  );
};

ContactList.propTypes = {
  key: PropTypes.string,
};

export default ContactList;
