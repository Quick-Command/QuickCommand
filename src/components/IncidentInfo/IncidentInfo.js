import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIncidentInfo } from './IncidentInfoSlice.js'
import './IncidentInfo.css'
import { formatDate, getInstructions } from '../../utilities'

const IncidentInfo = ({ id }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIncidentInfo(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const currentInfo = useSelector(state => state.incidentInfo)
  const incident = currentInfo.incidentInfo.attributes
  let mapURL = ''
  incident ? mapURL = `http://google.com/maps/search/${incident.location}+${incident.city}+${incident.state}/` : mapURL = ''
  return (
    <section className="incident-info-container">
      {incident ? <div>

        <p data-cy='info-name' className='info info-name'>{incident.name}</p>
        <p data-cy='info-type' className='info info-type'>Type: {incident.incident_type}</p>
        <p data-cy='info-location' className='info info-location'>Located at: {incident.location} in {incident.city}, {incident.state}</p>
        <p data-cy='info-desc' className='info info-desc'>Summary: {incident.description}</p>
        <p data-cy='info-start-date' className='info info-start-date'>Declaration: {formatDate(incident.start_date)}</p>
        <p data-cy='info-end-date' className='info info-end-date'>Resolution: {formatDate(incident.close_date)}</p>
        <div data-cy='info-instructions' className='info info-instructions'>Reminders & Instructions: {getInstructions(incident.incident_type)}</div>
      </div> : <p>Loading...</p>}
      <article data-cy='info-weather' className='info-weather'>Weather Report Coming Soon!</article>

      <a href={mapURL} target="_blank" rel="noopener noreferrer">Map to Headquarters</a>

    </section>

  );
};

export default IncidentInfo