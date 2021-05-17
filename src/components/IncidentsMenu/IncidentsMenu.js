import React from 'react'
import IncidentForm from '../IncidentForm/IncidentForm'
import IncidentList from '../IncidentList/IncidentList'
import './IncidentsMenu.css'

const IncidentsMenu = () => {

  return (
    <div className='incidents-menu'>
      <IncidentList />
      <IncidentForm />
    </div>
  )

}

export default IncidentsMenu