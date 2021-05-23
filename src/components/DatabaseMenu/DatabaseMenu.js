import React from 'react';
import './DatabaseMenu.css';
import NewContactForm from '../NewContactForm/NewContactForm';
import DatabaseSearch from '../DatabaseSearch/DatabaseSearch';
import ContactShowCard from '../ContactShowCard/ContactShowCard';

const DatabaseMenu = () => {

  return (
    <div className='database-container'>
      <div className='database-menu'>
        <DatabaseSearch />
        <NewContactForm />
        <ContactShowCard />
      </div>
    </div>

  )

}

export default DatabaseMenu