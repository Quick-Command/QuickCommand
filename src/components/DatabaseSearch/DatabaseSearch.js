import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  searchByName,
  displayContactDets
} from './DatabaseSearchSlice'

const DatabaseSearch = () => {

  const dispatch = useDispatch()

  const searchResults = useSelector(state => state.searchResults.searchResults).map(result => {
    return (
      <div onClick={() => dispatch(displayContactDets(result.id))}>
        <h3>{result.attributes.name}</h3>
        <p>{result.attribute.job_title}</p>
      </div>
    )
  })

  return (
    <div>
      <h2 data-cy="search-contacts">SEARCH CONTACTS:</h2>
      <input
        onChange={e => dispatch(searchByName(e.target.value))}
      />
      {searchResults}
    </div>
  )

}

export default DatabaseSearch