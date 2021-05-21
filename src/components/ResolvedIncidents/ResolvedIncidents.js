import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  getResolvedIncidents
} from './ResolvedIncidentsSlice'
import './ResolvedIncidents.css'

const ResolvedIncidents = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResolvedIncidents())
  }, [dispatch])

  const resolvedIncidents = useSelector(state => state.resolvedIncidents.resolvedIncidents).map(incident => {
    return (
      <Link to={`/incident/${incident.id}`}>
        <div className='incident' key={incident.id}>
          <h3>{incident.attributes.name}</h3>
          <p>{incident.attributes.type} * DECLARED: {incident.attributes.start_date} * RESOLVED: {incident.attributes.close_date}</p>
        </div>
      </Link>
    )
  })

  return (
    <div >
      <h2 className='incident-text'>RESOLVED INCIDENTS:</h2>
      <article className='resolved-container'>
        {resolvedIncidents}
      </article>
    </div>
  )

}

export default ResolvedIncidents;