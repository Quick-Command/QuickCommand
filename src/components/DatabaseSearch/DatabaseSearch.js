import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './DatabaseSearch.css'
import {
  searchByName
} from './DatabaseSearchSlice'

const DatabaseSearch = () => {

  const dispatch = useDispatch()

  const searchResults = useSelector(state => state.searchResults.searchResults).map(result => {
    return (
      <div>
        <h3>{result.attributes.name}</h3>
        <p>{result.attributes.job_title}</p>
        <p>{result.attributes.email}</p>
        <p>{result.attributes.phone}</p>
      </div>
    )
  })

  return (
    <div className="database-search-container">
      <h2 data-cy="search-contacts">SEARCH CONTACTS:</h2>
      <input
        onChange={e => dispatch(searchByName(e.target.value))}
      />
      {searchResults}
    </div>
  )

}

export default DatabaseSearch