import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  getResolvedIncidents
} from './ResolvedIncidentsSlice'
import './ResolvedIncidents.css'
import { formatDate } from '../../utilities'
import { ReactComponent as earthquake } from '../../Icons/earthquake.svg'
import { ReactComponent as Fire } from '../../Icons/gripfire-brands.svg'

const ResolvedIncidents = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResolvedIncidents())
  }, [dispatch])

  const resolvedIncidents = useSelector(state => state.resolvedIncidents.resolvedIncidents).map(incident => {
    return (
      <Link to={`/incident/${incident.id}`}>
        <div className='incident' key={incident.id}>
          <h3>
            <span><Fire className='element'></Fire></span>{incident.attributes.type}{incident.attributes.name}
          </h3>
          <p>* DECLARED: {formatDate(incident.attributes.start_date)}</p>
          <p>* RESOLVED: {formatDate(incident.attributes.close_date)}</p>
        </div>
      </Link>
    )
  })

  return (
    <div className='incidents-container'>
      <h2 className='incident-text'>RESOLVED INCIDENTS:</h2>
      <article className='resolved-container'>
        {resolvedIncidents}
      </article>
    </div>
  )

}

export default ResolvedIncidents;