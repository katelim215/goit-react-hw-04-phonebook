import React from 'react';
import styles from '../Filter/Filter.module.css';

const Filter = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <label className={styles.filterLabel}>
        Find contacts by name
        <input className={styles.filterInput}
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Search contacts..."
        />
      </label>
    </div>
    
  );
};

export default Filter;
