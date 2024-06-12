import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from '../ContactForm/ContactForm.module.css'

const ContactForm = ({ contacts, setContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert('Contact already exists!');
      return;
    }
    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
    setName('');
    setNumber('');
  };

  return (
      <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
              <label className={styles.nameLabel}>
                  Name
                  <input
                    className={styles.nameInput}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces."
                    required
                  />
              </label>
              <label className={styles.numberLabel}>
                  Number
                  <input
                    className={styles.numberInput}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleNumberChange}
                    pattern="^[0-9+]+$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
              </label>
              <button className={styles.submitButton} type="submit">Add Contact</button>
          </form>
    </div> 
  );
};

export default ContactForm;
