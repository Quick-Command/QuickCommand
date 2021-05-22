import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  declareNewIncident
} from '../OngoingIncidents/OngoingIncidentsSlice'
import './IncidentForm.css'
import { statesCodes } from '../../utilities'

const IncidentForm = () => {

  const [incidentName, setIncidentName] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [incidentDate, setIncidentDate] = useState('');
  const [incidentSummary, setIncidentSummary] = useState('');
  const [incidentLocation, setIncidentLocation] = useState('');
  const [incidentCity, setIncidentCity] = useState('');
  const [incidentState, setIncidentState] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault()
    const incidentObj = {
      id: `${Date.now()}`,
      type: 'incident',
      attributes: {
        name: incidentName,
        type: incidentType,
        status: 'open',
        description: incidentSummary,
        location: incidentLocation,
        start_date: incidentDate,
        close_date: ""
      }
    }
    dispatch(declareNewIncident(incidentObj))
    clearInputs()
  }

  const clearInputs = () => {
    setIncidentName('');
    setIncidentType('');
    setIncidentDate('');
    setIncidentSummary('');
    setIncidentLocation('');
    setIncidentCity('');
    setIncidentState('');
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2 data-cy='declare-incident' className='incident-text'>DECLARE NEW INCIDENT:</h2>

      <label htmlFor="incident-name" data-cy="incident-name">Incident Name:</label>
      <input
        type="text"
        name="incident-name"
        data-cy="incident-name"
        onChange={e => setIncidentName(e.target.value)}
        value={incidentName}
      />

      <label htmlFor='incident-location'>Incident Location:</label>
      <input
        name='incident-location'
        onChange={e => setIncidentLocation(e.target.value)}
        value={incidentLocation}
      />

      <label htmlFor='incident-city'>Incident City:</label>
      <input
        name='incident-city'
        onChange={e => setIncidentCity(e.target.value)}
        value={incidentCity}
      />

      <label htmlFor='incident-state'>Incident State:</label>
      {statesCodes('incident', setIncidentState, incidentState)}

      <label htmlFor="incident-type" data-cy="incident-type">Incident Type:</label>
      <select
        name='incident-type'
        data-cy="incident-type"
        onChange={e => setIncidentType(e.target.value)}
        value={incidentType}
      >
        <option value=''>--select--</option>
        <option>Wildfire</option>
        <option>Hazmat</option>
        <option>Hurricane</option>
        <option>Flooding</option>
        <option>Earthquake</option>
        <option>Tornado</option>
        <option>Mass shooting</option>
      </select>

      <label htmlFor="incident-date" data-cy="incident-date">Incident Date:</label>
      <input
        data-cy="incident-date"
        name='incident-date'
        type="date"
        onChange={e => setIncidentDate(e.target.value)}
        value={incidentDate}
      />

      <label htmlFor="incident-summary" data-cy="incident-summary">Incident Summary:</label>
      <textarea
        name='incident-summary'
        data-cy="incident-summary"
        onChange={e => setIncidentSummary(e.target.value)}
        value={incidentSummary}
      />

      <button type='submit' data-cy="declare-submission">DECLARE</button>
    </form>
  )

}

export default IncidentForm