import React, { useState } from "react";
import './PositionAssignment.css'
import { searchByRole } from './PositionAssignmentSlice'
import { useSelector, useDispatch } from 'react-redux'
import { assignRole } from '../../API-calls'


const PositionAssignment = ({ id }) => {

  const [selectedRole, setSelectedRole] = useState('')

  const dispatch = useDispatch()

  const handleSearch = (role) => {
    dispatch(searchByRole({id, role}))
  }

  const searchResults = useSelector(state => state.searchByRole.searchByRole).map(result => {
    return (
      <div className='search-result' onClick={() => assignRole(id, result.id, selectedRole)}>
        <p>{result.attributes.name}</p>
        <p>{result.attributes.distance_minutes} mi</p>
      </div>
    )
  })

  return (
    <section className="assignment-container">
      <h3>ASSIGN ROLE</h3>
      
      <form className="assignee-search-form">

      <label htmlFor="position">Position:</label>
        <select name='position' onChange={e => {
          setSelectedRole(e.target.value)
          handleSearch(e.target.value)
        }}>
          <option value=''>--select--</option>
          <option>Incident Commander</option>
          <option>Public Information Officer</option>
          <option>Safety Officer</option>
          <option>Liaison Officer</option>
          <option>Operations Chief</option>
          <option>Logistics Chief</option>
          <option>Finance Chief</option>
          <option>Planning Chief​</option>
        </select>
      </form>
      
      <div className="search-results-container">
        {searchResults.length ? searchResults : <p>No contacts found</p>}
      </div>

    </section>
  );
};

export default PositionAssignment