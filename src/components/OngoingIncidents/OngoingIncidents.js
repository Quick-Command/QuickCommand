import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  getOngoingIncidents
} from './OngoingIncidentsSlice'
import './OngoingIncidents.css'

const OngoingIncidents = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOngoingIncidents())//req adds results to state
  }, [dispatch])

  const ongoingIncidents = useSelector(state => state.ongoingIncidents.ongoingIncidents).map(incident => {
    return (
      <Link to={`/incident/${incident.id}`}>
        <div className='incident' key={incident.id}>
          <h3>{incident.attributes.name}</h3>
          <p>{incident.attributes.type} * DECLARED: {incident.attributes.start_date}</p>
        </div>
      </Link>
    )
  })

  return (
    <div>
      <h2 data-cy='ongoing-incidents' className='incident-text'>ONGOING INCIDENTS:</h2>
      <section className='ongoing-container'>
        {ongoingIncidents}
      </section>
    </div>
  )

}

export default OngoingIncidents;