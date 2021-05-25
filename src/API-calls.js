const baseURL = `https://qc-engine.herokuapp.com/api/v1`

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error()
  } else {
    return response.json()
  }
}

export const fetchResolvedIncidents = () => {
  return fetch(`${baseURL}/incidents?active=false`)
    .then(checkResponse)
}

export const fetchOngoingIncidents = () => {
  return fetch(`${baseURL}/incidents?active=true`)
    .then(checkResponse)
}

export const postNewIncident = (incidentObj) => {
  return fetch(`${baseURL}/incidents`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(incidentObj)
  })
    .then(checkResponse)
}

export const addNewContact = (newContact) => {
  return fetch(`${baseURL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newContact)
  })
    .then(checkResponse)
}

export const runNameQuery = (queryString) => {
  return fetch(`${baseURL}/contacts?name=${queryString}`)
    .then(checkResponse)
}

export const fetchIncidentContacts = (id) => {
  return fetch(`${baseURL}/incidents/${id}/contacts`)
    .then(checkResponse)
}


export const fetchIncidentInfo = (id) => {
  return fetch(`${baseURL}/incidents/${id}`)
    .then(checkResponse)
}

export const updateIncident = (id, incidentObj) => {
  return fetch(`${baseURL}/incidents/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(incidentObj)
  })
    .then(checkResponse)
}

export const fetchContactsByRole = (incidentID, role) => {
  return fetch(`${baseURL}/incidents/${incidentID}/contact_search?role=${role}`)
    .then(checkResponse)
}

export const assignRole = (incidentID, contactID, role) => {
  console.log(incidentID, contactID, role)
  return fetch(`${baseURL}/incidents/${incidentID}/contacts/${contactID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: role})
  })
  .then(checkResponse)
}