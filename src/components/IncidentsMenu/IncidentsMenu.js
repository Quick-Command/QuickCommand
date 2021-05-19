import React from 'react'
import IncidentForm from '../IncidentForm/IncidentForm'
import OngoingIncidents from '../OngoingIncidents/OngoingIncidents'
import ResolvedIncidents from '../ResolvedIncidents/ResolvedIncidents'
import './IncidentsMenu.css'

const IncidentsMenu = () => {

  return (
    <div className='incidents-menu'>
      <div>
        <OngoingIncidents />
        <ResolvedIncidents />
      </div>  
      <IncidentForm />
    </div>
  )

}

export default IncidentsMenu