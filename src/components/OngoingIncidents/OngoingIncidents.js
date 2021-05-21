import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { formatDate } from '../../utilities'
import {
  getOngoingIncidents
} from './OngoingIncidentsSlice'
import './OngoingIncidents.css'
import { ReactComponent as Fire } from '../../Icons/gripfire-brands.svg'

const OngoingIncidents = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOngoingIncidents())//req adds results to state
  }, [dispatch])

  const ongoingIncidents = useSelector(state => state.ongoingIncidents.ongoingIncidents).map(incident => {
    return (
      <Link className='incident-container' to={`/incident/${incident.id}`}>
        <div className='incident' key={incident.id}>
          <h3>
            <span><Fire className='element'></Fire></span>{incident.attributes.type}{incident.attributes.name}
          </h3>
          <p>* DECLARED: {formatDate(incident.attributes.start_date)}</p>
        </div>
      </Link>
    )
  })

  return (
    <div className='incidents-container'>
      <h2 data-cy='ongoing-incidents' className='incident-text'>ONGOING INCIDENTS:</h2>
      <section className='ongoing-container' >
        {ongoingIncidents}
      </section >
    </div >
  )

}

export default OngoingIncidents;