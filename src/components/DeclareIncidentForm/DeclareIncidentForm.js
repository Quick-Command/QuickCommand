import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateIncidentNameField,
  updateIncidentTypeSelection,
  updateIncidentDateSelection,
  updateIncidentSummary,
  clearInputs
} from './DeclareIncidentFormSlice'
import {
  declareIncident
} from '../IncidentList/IncidentListSlice'
import './DeclareIncidentForm.css'

const DeclareIncidentForm = () => {
  
  const dispatch = useDispatch();
  const formValues = useSelector(state => state.declareIncidentForm)

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

      <button 
        onClick={(event)=> {
          event.preventDefault()
          console.log(event)
          dispatch(clearInputs())
          dispatch(declareIncident(formValues))
          }
        } 
        className='incident-declare-button'>DECLARE</button>
    </form>
  )

}

export default DeclareIncidentForm