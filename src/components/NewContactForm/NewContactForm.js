import React, { useState } from 'react'
import { addNewContact } from '../../API-calls'
import './NewContactForm.css'

const NewContactForm = () => {
  
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactJobTitle, setContactJobTitle] = useState('')
  const [contactCity, setContactCity] = useState('')
  const [contactState, setContactState] = useState('')
  const [contactRoles, setContactRoles] = useState([])
  
  const handleSubmit = e => {
    e.preventDefault()
    const newContact = {
      "name": contactName,
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
    setContactName('')
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
    console.log(contactRoles)
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2 data-cy="add-new-contact">ADD NEW CONTACT:</h2>

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

      <label htmlFor='contact-city'>City:</label>
      <input
        type='text'
        name='contact-city'
        onChange={e => setContactCity(e.target.value)}
        value={contactCity}
      />

      <label htmlFor='contact-state'>State:</label>
      <select
        name='contact-state'
        onChange={e => setContactState(e.target.value)}
        value={contactState}
      >
        <option value="">--select--</option>
        <option>AL</option>
        <option>AK</option>
        <option>AZ</option>
        <option>AR</option>
        <option>CA</option>
        <option>CO</option>
        <option>CT</option>
        <option>DE</option>
        <option>FL</option>
        <option>GA</option>
        <option>HI</option>
        <option>ID</option>
        <option>IL</option>
        <option>IN</option>
        <option>IA</option>
        <option>KS</option>
        <option>KY</option>
        <option>LA</option>
        <option>ME</option>
        <option>MD</option>
        <option>MA</option>
        <option>MI</option>
        <option>MN</option>
        <option>MS</option>
        <option>MO</option>
        <option>MT</option>
        <option>NE</option>
        <option>NV</option>
        <option>NH</option>
        <option>NJ</option>
        <option>NM</option>
        <option>NY</option>
        <option>NC</option>
        <option>ND</option>
        <option>OH</option>
        <option>OK</option>
        <option>OR</option>
        <option>PA</option>
        <option>RI</option>
        <option>SE</option>
        <option>SD</option>
        <option>TN</option>
        <option>TX</option>
        <option>UT</option>
        <option>VT</option>
        <option>VA</option>
        <option>WA</option>
        <option>WV</option>
        <option>WI</option>
        <option>WY</option>
      </select>

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