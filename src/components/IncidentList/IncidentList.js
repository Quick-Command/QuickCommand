import React from 'react'
import { useSelector } from 'react-redux'
import './IncidentList.css'

const IncidentList = () => {

  const ongoingIncidents = useSelector(state => state.ongoingIncidents).ongoingIncidents.map(incident => {
    return (
      <div className='incident'>
        <h3>{incident.incidentName}</h3>
        <p>{incident.incidentType} * DECLARED: {incident.incidentDate}</p>
      </div>
    )
  })

  return (
    <div>
      <h2>ONGOING INCIDENTS:</h2>
      {ongoingIncidents}
    </div>
  )

}

export default IncidentList;