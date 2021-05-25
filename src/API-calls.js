const baseURL = `https://qc-engine.herokuapp.com/api/v1`

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error('Something went wrong')
  } else {
    return response.json()
  }
}

const catchResponse = (response) => {
  if (response.status >= 500) {
    throw new Error(`Sorry, this is a server error! Please try again later. Error: ${response.status}`);
  } else if (response.status >= 400) {
    throw new Error(`Sorry, this information is not available at the moment! Please try again later. Error: ${response.status}`);
  }
}

export const fetchResolvedIncidents = () => {
  return fetch(`${baseURL}/incidents?active=false`)
    .then(checkResponse)
    .catch(catchResponse)
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