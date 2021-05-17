import React from 'react'
import './DatabaseMenu.css';
import NewContactForm from '../NewContactForm/NewContactForm'
import DatabaseSearch from '../DatabaseSearch/DatabaseSearch'

const DatabaseMenu = () => {

  return (
    <div className='database-menu'>
      <DatabaseSearch />
      <NewContactForm />     
    </div>
  )

}

export default DatabaseMenu