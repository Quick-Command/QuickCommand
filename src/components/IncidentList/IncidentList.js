import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getOngoingIncidents
} from './IncidentListSlice'
import './IncidentList.css'

const IncidentList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOngoingIncidents)
  })

  const ongoingIncidents = useSelector(state => state.incidentList.ongoingIncidents).map(incident => {
    return (
      <div className='incident' key={incident.id}>
        <h3>{incident.attributes.name}</h3>
        <p>{incident.attributes.type} * DECLARED: {incident.attributes.start_date}</p>
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