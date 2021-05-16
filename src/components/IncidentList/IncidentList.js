import React from 'react'
import { useSelector } from 'react-redux'
import './IncidentList.css'

const IncidentList = () => {
  let counter = 0
  const ongoingIncidents = useSelector(state => state.ongoingIncidents).ongoingIncidents.map(incident => {
    counter++
    return (
      <div className='incident' key={counter}>
        <h3 data-cy='incident-name'>{incident.incidentName}</h3>
        <p data-cy='incident-type'>{incident.incidentType} * DECLARED: {incident.incidentDate}</p>
      </div>
    )
  })

  return (
    <div>
      <h2 data-cy='ongoing-incidents'>ONGOING INCIDENTS:</h2>
      {ongoingIncidents}
    </div>
  )

}

export default IncidentList;