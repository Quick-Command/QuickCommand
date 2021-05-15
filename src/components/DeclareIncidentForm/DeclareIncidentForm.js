import React from 'react'
import { useDispatch } from 'react-redux'
import {
  updateIncidentNameField,
  updateIncidentTypeSelection,
  updateIncidentDateSelection,
  updateIncidentSummary
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
      <select onChange={(event) => dispatch(updateIncidentTypeSelection(event.target.value))}>
        <option value=''>--select--</option>
        <option>Fire</option>
        <option>Hazmat</option>
        <option>Hurricane</option>
        <option>Nuclear holocaust</option>
      </select>

      <label for="incident-date">Incident Date:</label>
      <input type="date" onChange={(event)=> dispatch(updateIncidentDateSelection(event.target.value))}></input>

      <label for="incident-summary">Incident summary:</label>
      <textarea onChange={(event) => dispatch(updateIncidentSummary(event.target.value))}></textarea>

      <button className='incident-declare-button'>DECLARE</button>
    </form>
  )

}

export default IncidentsMenu