import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import { padaddLeadingZero } from 'utils';
import ButtonIcon from '../ButtonIcon';
import { deleteContact } from 'redux/contactsOperations';
import { ContactItem, ContactText } from './ContactList.styled';

export const ContactsItem = ({ index, id, name, number }) => {
  const dispatch = useDispatch();

  const handleRemoveContact = () => {
    dispatch(deleteContact(id))
      .then(toast.success(`Contact '${name}' deleted `))
      .catch(er => toast.error(er.message));
  };
  return (
    <>
      <ContactItem>
        <ContactText>
          {padaddLeadingZero(index + 1)}. {name}: {number}
        </ContactText>
        <ButtonIcon onClick={() => handleRemoveContact()}>
          <MdDelete />
        </ButtonIcon>
      </ContactItem>
    </>
  );
};

ContactItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};
