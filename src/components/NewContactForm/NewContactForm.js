import React, { useState } from 'react'
import { addNewContact } from '../../API-calls'
import './NewContactForm.css'
import { statesCodes } from '../../utilities';

const NewContactForm = () => {

  const [contactFirstName, setContactFirstName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactJobTitle, setContactJobTitle] = useState('')
  const [contactCity, setContactCity] = useState('')
  const [contactState, setContactState] = useState('')
  const [contactRoles, setContactRoles] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    const newContact = {
      "name": `${contactFirstName} ${contactLastName}`,
      "email": contactEmail,
      "phone_number": contactPhone,
      "job_title": contactJobTitle,
      "city": contactCity,
      "state": contactState,
      "roles": contactRoles
    }
    addNewContact(newContact)
    clearInputs()
  }

  const clearInputs = () => {
    setContactFirstName('')
    setContactLastName('')
    setContactEmail('')
    setContactPhone('')
    setContactJobTitle('')
    setContactCity('')
    setContactState('')
    setContactRoles([])
  }

  const handleRoleSelection = e => {
    let array = contactRoles
    if (e.target.checked === true) {
      array.push(e.target.value)
    } else {
      array.splice(array.indexOf(e.target.value), 1)
    }
    setContactRoles(array)
  }

  return (
    <form className="new-contact-form" onSubmit={handleSubmit}>

      <h2 data-cy="add-new-contact">ADD NEW CONTACT:</h2>

      <label htmlFor='contact-first-name'>First Name: </label>
      <input
        type="text"
        name='contact-first-name'
        onChange={e => setContactFirstName(e.target.value)}
        value={contactFirstName}
      />

      <label htmlFor='contact-last-name'>Last Name: </label>
      <input
        type="text"
        name='contact-last-name'
        onChange={e => setContactLastName(e.target.value)}
        value={contactLastName}
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

      <label htmlFor='contact-city'>City:</label>
      <input
        type='text'
        name='contact-city'
        onChange={e => setContactCity(e.target.value)}
        value={contactCity}
      />

      <label htmlFor='contact-state'>State:</label>
      {statesCodes('contact', setContactState, contactState)}

      <label htmlFor='contact-roles'>Qualifications:</label>
      <fieldset onChange={e => handleRoleSelection(e)}>
        <label htmlFor='incident-commander'>Incident Commander</label>
        <input id='incident-commander' value="Incident Commander" type='checkbox' />

        <label htmlFor='pio'>Public Information Officer</label>
        <input id='pio' value="Public Information Officer" type='checkbox' />

        <label htmlFor='liason-officer'>Liason Officer</label>
        <input id='liason-officer' value="Liason Officer" type='checkbox' />

        <label htmlFor='safety-officer'>Safety Officer</label>
        <input id='safety-officer' value="Safety Officer" type='checkbox' />

        <label htmlFor='ops-chief'>Operations Chief</label>
        <input id='ops-chief' value="Operations Chief" type='checkbox' />

        <label htmlFor='logistics-chief'>Logistics Chief</label>
        <input id='logistics-chief' value="Logistics Chief" type='checkbox' />

        <label htmlFor='finance-chief'>Finance Chief</label>
        <input id='finance-chief' value="Finance Chief" type='checkbox' />

        <label htmlFor='planning-chief'>Planning Chief</label>
        <input id='planning-chief' value="Planning Chief" type='checkbox' />

      </fieldset>
      <br></br>
      <button type='submit'>ADD NEW CONTACT</button>

    </form>
  )
}

export default NewContactForm