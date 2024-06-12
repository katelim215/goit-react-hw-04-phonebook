import React, { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import styles from '../PhonebookApp/PhonebookApp.module.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Phonebook</h1>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <h2 className={styles.sectionTitle}>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
