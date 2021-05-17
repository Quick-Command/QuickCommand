import React, { useState } from 'react'
import { addNewContact } from '../../API-calls'

const NewContactForm = () => {
  
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactJobTitle, setContactJobTitle] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault()
    const newContact = {
      id: `${Date.now()}`,
      type: 'contact',
      attributes: {
        name: contactName,
        email: contactEmail,
        phone_number: contactPhone,
        job_title: contactJobTitle
      }
    }
    addNewContact(newContact)
    clearInputs()
  }

  const clearInputs = () => {
    setContactName('')
    setContactEmail('')
    setContactPhone('')
    setContactJobTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>ADD NEW CONTACT:</h2>

      <label htmlFor='contact-name'>Name: </label>
      <input
        type="text"
        name='contact-name'
        onChange={e => setContactName(e.target.value)}
        value={contactName}
      />

      <label htmlFor='contact-email'>Email:</label>
      <input
        type="text"
        name='contact-email'
        onChange={e => setContactEmail(e.target.value)}
        value={contactEmail}
      />

      <label htmlFor='contact-phone'>Phone:</label>
      <input
        type="text"
        name='contact-phone'
        maxLength="10"
        onChange={e => setContactPhone(e.target.value)}
        value={contactPhone}
      />

      <label htmlFor='contact-job'>Job Title:</label>
      <input
        type="text"
        name='contact-job'
        onChange={e => setContactJobTitle(e.target.value)}
        value={contactJobTitle}
      />

      <button type='submit'>ADD NEW CONTACT</button>

    </form>
  )
}

export default NewContactForm