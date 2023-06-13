import { PropTypes } from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { padaddLeadingZero } from 'utils';
import ButtonIcon from '../ButtonIcon';
import { ContactItem, ContactText } from './ContactList.styled';

export const ContactsItem = ({ index, name, number, onClick }) => {
  return (
    <>
      <ContactItem>
        <ContactText>
          {padaddLeadingZero(index + 1)}. {name}: {number}
        </ContactText>
        <ButtonIcon onClick={onClick}>
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
