import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { BsPersonFillAdd } from 'react-icons/bs';
import { validationSchema } from '../../utils';
import Modal from '../Modal';
import ButtonIcon from '../ButtonIcon';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { useToggle } from 'hooks';
import {
  PhonebookForm,
  Label,
  Input,
  ErrorDescription,
  AddBtn,
} from './ContactForm.styled';

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };
  const { isOpen, toggle } = useToggle();
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, actions) => {
    const { name, number } = values;

    const isExist = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    if (isExist) {
      alert(`This contact is already in contacts.`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(contact));

    actions.resetForm();
    toggle();
  };

  return (
    <>
      <ButtonIcon onClick={toggle}>
        <BsPersonFillAdd />
      </ButtonIcon>
      {isOpen && (
        <Modal onClose={toggle}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isValid, dirty }) => (
              <PhonebookForm autoComplete="off">
                <Label htmlFor="name">
                  Name
                  <Input
                    type="text"
                    name="name"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    className={errors.name && touched.name ? 'invalid' : 'null'}
                  />
                  <ErrorDescription component="div" name="name" />
                </Label>
                <Label htmlFor="number">
                  Number
                  <Input
                    type="tel"
                    name="number"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    className={
                      errors.number && touched.number ? 'invalid' : 'null'
                    }
                  />
                  <ErrorDescription component="div" name="number" />
                </Label>

                <AddBtn type="submit" disabled={!isValid || !dirty}>
                  Add contact
                </AddBtn>
              </PhonebookForm>
            )}
          </Formik>
        </Modal>
      )}
    </>
  );
};

export default ContactForm;
