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
      <div className="search-result" key={result.id}>
        <h3 className="search-result-name">{result.attributes.name}-{result.attributes.job_title}</h3>
        <p>{result.attributes.email}-{result.attributes.phone_number}</p>
        <br/>
      </div>
    )
  })

  return (
    <div className="database-search-container">
      <h2 data-cy="search-contacts">SEARCH CONTACTS:</h2>
      <input data-cy='input-field'
        onChange={e => dispatch(searchByName(e.target.value))}
      />
      {searchResults}
    </div>
  )

}

export default DatabaseSearch