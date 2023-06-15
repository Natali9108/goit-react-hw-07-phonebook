import React from 'react';
import { PropTypes } from 'prop-types';
import { ContactsItem } from './ContactItem';
import { ContactsList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectSortContacts } from 'redux/selectors';

const ContactList = () => {
  const sortContacts = useSelector(selectSortContacts);

  return (
    <>
      <ContactsList>
        {sortContacts.map(({ id, name, number }, index) => (
          <ContactsItem
            key={id}
            id={id}
            index={index}
            name={name}
            number={number}
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
