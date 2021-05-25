import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  getOngoingIncidents
} from './OngoingIncidentsSlice'
import './OngoingIncidents.css'
import { getIcon, formatDate } from '../../utilities'

const OngoingIncidents = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOngoingIncidents())//req adds results to state
  }, [dispatch])



  const ongoingIncidents = useSelector(state => state.ongoingIncidents.ongoingIncidents).map(incident => {
    return (
      <Link className='incident-container' to={`/incident/${incident.id}`} key={incident.id}>
        <div className='incident' >
          <h3 data-cy='ongoing-container'>
            <span>{getIcon(incident)}</span>{incident.attributes.type}{incident.attributes.name}
          </h3>
          <p data-cy='declared-date'>DECLARED: {formatDate(incident.attributes.start_date)}</p>
        </div>
      </Link >
    )
  })

  return (
    <div className='incidents-container'>
      <h2 data-cy='ongoing-incidents' className='incident-text'>ONGOING INCIDENTS:</h2>
      <section className='ongoing-container' >
        {ongoingIncidents.reverse()}
      </section>
    </div>
  )

}

export default OngoingIncidents;