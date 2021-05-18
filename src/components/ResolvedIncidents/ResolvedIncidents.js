import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getResolvedIncidents
} from './ResolvedIncidentsSlice'
import './ResolvedIncidents.css'

const ResolvedIncidents = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResolvedIncidents)
  })

  const resolvedIncidents = useSelector(state => state.resolvedIncidents.resolvedIncidents).map(incident => {
    return (
      <div className='incident' key={incident.id}>
        <h3>{incident.attributes.name}</h3>
        <p>{incident.attributes.type} * DECLARED: {incident.attributes.start_date} * RESOLVED: {incident.attributes.close_date}</p>
      </div>
    )
  })

  return (
    <div>
      <h2>RESOLVED INCIDENTS:</h2>
      {resolvedIncidents}
    </div>
  )

}

export default ResolvedIncidents;