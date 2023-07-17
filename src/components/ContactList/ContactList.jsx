import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.lenght === 0) return;
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <ContactItem key={nanoid()} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
