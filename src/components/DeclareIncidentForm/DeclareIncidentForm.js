import React from 'react'
import './DeclareIncidentForm.css'

const IncidentsMenu = () => {

  return (
    <form>

      <h2>DECLARE NEW INCIDENT:</h2>

      <label for="incident-name">Incident Name:</label>
      <input type="text" name="incident-name"></input>

      <label for="incident-type">Incident type:</label>
      <select>
        <option>--select--</option>
        <option>Fire</option>
        <option>Hazmat</option>
        <option>Hurricane</option>
        <option>Nuclear holocaust</option>
      </select>

      <label for="incident-date">Incident Date:</label>
      <input type="date"></input>

      <label for="incident-summary">Incident summary:</label>
      <textarea></textarea>

      <button className='incident-declare-button'>DECLARE</button>
    </form>
  )

}

export default IncidentsMenu