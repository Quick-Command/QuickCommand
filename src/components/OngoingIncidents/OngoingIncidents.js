import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getOngoingIncidents
} from './OngoingIncidentsSlice'
import './OngoingIncidents.css'

const OngoingIncidents = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOngoingIncidents())
  }, [dispatch])

  const ongoingIncidents = useSelector(state => state.ongoingIncidents.ongoingIncidents).map(incident => {
    return (
      <div className='incident' key={incident.id}>
        <h3>{incident.attributes.name}</h3>
        <p>{incident.attributes.type} * DECLARED: {incident.attributes.start_date}</p>
      </div>
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