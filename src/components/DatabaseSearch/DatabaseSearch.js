import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  searchByName
} from './DatabaseSearchSlice'

const DatabaseSearch = () => {

  const dispatch = useDispatch()

  const searchResults = useSelector(state => state.searchResults.searchResults).map(result => {
    return (
      <div>
        <h3>{result.attributes.name}</h3>
        <p>{result.attribute.job_title}</p>
      </div>
    )
  })

  return (
    <div>
      <input
        onChange={e => dispatch(searchByName(e.target.value))}
      />
      {searchResults}
    </div>
  )

}

export default DatabaseSearch