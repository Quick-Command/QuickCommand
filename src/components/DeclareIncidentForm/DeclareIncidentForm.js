import React from 'react'
import { useDispatch } from 'react-redux'
import {
  updateIncidentNameField
} from './DeclareIncidentFormSlice'
import './DeclareIncidentForm.css'

const IncidentsMenu = () => {

  const dispatch = useDispatch();

  return (
    <form>

      <h2>DECLARE NEW INCIDENT:</h2>

      <label for="incident-name">Incident Name:</label>
      <input type="text" name="incident-name" onChange={(event)=> dispatch(updateIncidentNameField(event.target.value))}></input>

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