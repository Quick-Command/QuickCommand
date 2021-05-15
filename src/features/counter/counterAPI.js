const url = "https://qc-engine.herokuapp.com/api";

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error('The personnel isn\'t currently available.');
  } else {
    return response.json();
  }
}
const contactEndpoint = "/v1/contacts/"


const getContactById = (id) => {
  return {
    "id": "1",
    "type": "contact",
    "attributes": {
      "name": "Moo Philips",
      "email": "mphillips@email.gov",
      "phone_number": "123-456-7890",
      "job_title": "Incident Commander",
    }
  }
}

const getContactByName = (name) => {
  // fetch(`${url}/v1/contacts?name=${name}`)
  //  .then(checkResponse)
  return new Promise((resolve) =>
    setTimeout(() => resolve(

      {
        "id": "1",
        "type": "contact",
        "attributes": {
          "name": "Moo Philips",
          "email": "mphillips@email.gov",
          "phone_number": "123-456-7890",
          "job_title": "Incident Commander",
        }
      }), 500)
  );
}




export { getContactById, getContactByName }