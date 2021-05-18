import React from 'react'
import IncidentForm from '../IncidentForm/IncidentForm'
import OngoingIncidents from '../OngoingIncidents/OngoingIncidents'
import './IncidentsMenu.css'

const IncidentsMenu = () => {

  return (
    <div className='incidents-menu'>
      <OngoingIncidents />
      <IncidentForm />
    </div>
  )

}

export default IncidentsMenu