import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIncidentInfo, updateIncidentInfo } from './IncidentInfoSlice.js'
import './IncidentInfo.css'
import { formatDate, getIconByType, getInstructions } from '../../utilities'
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const IncidentInfo = ({ id }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIncidentInfo(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const handleSubmit = e => {
    e.preventDefault()
    const incidentObj = {
      active: false,
      close_date: new Date(Date.now())
    }
    dispatch(updateIncidentInfo({ id, incidentObj }))
  }


  const currentInfo = useSelector(state => state.incidentInfo)
  const incident = currentInfo.incidentInfo.attributes
  let mapURL = ''
  incident ? mapURL = `http://google.com/maps/search/${incident.location}+${incident.city}+${incident.state}/` : mapURL = ''
  let weatherURL = '';
  incident ? weatherURL = `/weather/${incident.city},${incident.state}` : weatherURL = ''
  return (
    <section className="incident-info-container">
      {incident ? <div>
        <p data-cy='info-name' className='info info-name'>{incident.name}</p>
        <p data-cy='info-type' className='info type'><span className='info-type'>{getIconByType(incident)}</span>{incident.incident_type}</p>
        <div className="info-button-container">
          <a href={mapURL} target="_blank" rel="noopener noreferrer" className='map-btn'>Click to get Map to Headquarters</a>
          {!incident.close_date && <button data-cy='resolve' className="end-button" onClick={e => handleSubmit(e)}>Declare Incident Resolved</button>}
          <NavLink to={weatherURL} data-cy='info-weather' className='info-weather'>Onsite Weather Report</NavLink>
        </div>
        <p data-cy='info-location' className='info info-location'>Located at: {incident.location} in {incident.city}, {incident.state}</p>
        <p data-cy='info-desc' className='info info-desc'>Summary: {incident.description}</p>
        <p data-cy='info-start-date' className='info info-start-date'>Declaration: {formatDate(incident.start_date)}</p>
        {incident.close_date && <p data-cy='info-end-date' className='info info-end-date'>Resolution: {formatDate(incident.close_date)}</p>}
        <div data-cy='info-instructions' className='info info-instructions'>{incident.incident_type} Response Procedures: {getInstructions(incident.incident_type)}</div>
      </div> : <p>Loading...</p>}


    </section>

  );
};

export default IncidentInfo;

IncidentInfo.propTypes = {
  id: propTypes.string
}