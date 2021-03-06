import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  declareNewIncident
} from '../OngoingIncidents/OngoingIncidentsSlice'
import './IncidentForm.css'
import { statesCodes } from '../../utilities'
import { ReactComponent as Error } from '../../Icons/error.svg'
import { ReactComponent as Checkmark } from '../../Icons/checkmark.svg'

const IncidentForm = () => {

  const [incidentName, setIncidentName] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [incidentDate, setIncidentDate] = useState('');
  const [incidentSummary, setIncidentSummary] = useState('');
  const [incidentLocation, setIncidentLocation] = useState('');
  const [incidentCity, setIncidentCity] = useState('');
  const [incidentState, setIncidentState] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [tempName, setTempName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (incidentName && incidentType && incidentCity && incidentState && incidentDate) {
      setTempName(incidentName);
      const incidentObj = {
        name: incidentName,
        incident_type: incidentType,
        description: incidentSummary,
        location: incidentLocation,
        city: incidentCity,
        state: incidentState,
        start_date: incidentDate,
        close_date: ""
      }
      dispatch(declareNewIncident(incidentObj))
      clearInputs()
    } else {
      setError(true)
    }
  }

  const clearInputs = () => {
    setIncidentName('');
    setIncidentType('');
    setIncidentDate('');
    setIncidentSummary('');
    setIncidentLocation('');
    setIncidentCity('');
    setIncidentState('');
    setError(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false)
    }, 2500)
  }

  return (
    <form className="incident-form" onSubmit={handleSubmit}>

      <h2 data-cy='declare-incident' className='incident-text'>DECLARE NEW INCIDENT:</h2>

      <label htmlFor="incident-name" data-cy="incident-name">Name:</label>
      <input
        type="text"
        id="incident-name"
        name="incident-name"
        data-cy="incident-name"
        onChange={e => setIncidentName(e.target.value)}
        value={incidentName}
      />

      <label htmlFor='incident-location'>Location:</label>
      <input
        name='incident-location'
        id="incident-location"
        onChange={e => setIncidentLocation(e.target.value)}
        value={incidentLocation}
      />

      <label htmlFor='incident-city'>City:</label>
      <input
        name='incident-city'
        id="incident-city"
        onChange={e => setIncidentCity(e.target.value)}
        value={incidentCity}
      />

      <label htmlFor='incident-state'>State:</label>
      {statesCodes('incident', setIncidentState, incidentState)}

      <label htmlFor="incident-type" data-cy="incident-type">Type:</label>
      <select
        id="incident-type"
        name='incident-type'
        data-cy="incident-type"
        onChange={e => setIncidentType(e.target.value)}
        value={incidentType}
      >
        <option value=''>--select--</option>
        <option>Accident</option>
        <option>Fire</option>
        <option>Flood</option>
        <option>Earthquake</option>
        <option>Tornado</option>
        <option>Shooting</option>
        <option>Power Outage</option>
        <option>Hazmat Spill</option>
        <option>Hurricane</option>
      </select>

      <label htmlFor="incident-date" data-cy="incident-date">Date:</label>
      <input
        id="incident-date"
        data-cy="incident-date"
        name='incident-date'
        type="date"
        onChange={e => setIncidentDate(e.target.value)}
        value={incidentDate}
      />

      <label htmlFor="incident-summary" data-cy="incident-summary">Summary:</label>
      <textarea
        id="incident-summary"
        name='incident-summary'
        data-cy="incident-summary"
        onChange={e => setIncidentSummary(e.target.value)}
        value={incidentSummary}
      />

      <button type='submit' data-cy="declare-submission" className="declare-submission" >DECLARE</button>
      {success &&
        <div className='success'>
          <Checkmark className='checkmark'></Checkmark>
          <span>{tempName} is Declared and Ongoing</span>
        </div>
      }
      {error &&
        <div className='success'>
          <Error className='checkmark error'></Error>
          <p className='error-message'>You are missing a required field</p>
        </div>
      }
    </form>
  )

}

export default IncidentForm