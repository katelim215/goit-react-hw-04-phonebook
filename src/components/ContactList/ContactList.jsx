import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <ul className={styles.ulContactList}>
      {contacts.map(contact => (
        <li className={styles.liContactList} key={contact.id}>
          {contact.name} - {contact.number} 
          <button className={styles.contactListBtn} onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ContactList;
