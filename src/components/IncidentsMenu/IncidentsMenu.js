import React from 'react'
import DeclareIncidentForm from '../DeclareIncidentForm/DeclareIncidentForm'
import IncidentList from '../IncidentList/IncidentList'
import './IncidentsMenu.css'

const IncidentsMenu = () => {

  return (
    <div className='incidents-menu'>
      <IncidentList />
      <DeclareIncidentForm />
    </div>
  )

}

export default IncidentsMenu