
const baseURL = `https://qc-engine.herokuapp.com/api/v1`

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error()
  } else {
    return response.json()
  }
}

export const fetchOngoingIncidents = () => {
  return fetch(`${baseURL}/incidents?open=true`)
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