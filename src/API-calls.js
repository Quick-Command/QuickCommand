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
    .catch(catchResponse)
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
    .catch(catchResponse)
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
    .catch(catchResponse)
}

export const runNameQuery = (queryString) => {
  return fetch(`${baseURL}/contacts/search?name=${queryString}`)
    .then(checkResponse)
    .catch(catchResponse)
}

export const fetchIncidentContacts = (id) => {
  return fetch(`${baseURL}/incidents/${id}/contacts`)
    .then(checkResponse)
    .catch(catchResponse)
}


export const fetchIncidentInfo = (id) => {
  return fetch(`${baseURL}/incidents/${id}`)
    .then(checkResponse)
    .catch(catchResponse)
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
    .catch(catchResponse)
}

export const fetchContactsByRole = (incidentID, role) => {
  return fetch(`${baseURL}/incidents/${incidentID}/contact_search?role=${role}`)
    .then(checkResponse)
    .catch(catchResponse)
}

export const assignRole = (incidentID, contactID, role) => {
  return fetch(`${baseURL}/incidents/${incidentID}/contacts/${contactID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: role })
  })
    .then(checkResponse)
    .catch(catchResponse)
}

export const getWeather = location => {
  return fetch(`https://qc-engine.herokuapp.com/api/v1/forecast?location=${location}`)
    .then(checkResponse)
    .catch(catchResponse)
}