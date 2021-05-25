import React from 'react';
import { useSelector } from 'react-redux';
import './ContactShowCard.css';

const ContactShowCard = () => {

  const displayedContact = useSelector(state => state.searchResults.displayedContact)

  if (displayedContact.attributes) {
    return (
      <div>
        <h2 data-cy="contact-details">CONTACT DETAILS:</h2>
        <p>{displayedContact.attributes.name}</p>
        <p>{displayedContact.attributes.job_title}</p>
        <p>{displayedContact.attributes.email}</p>
        <p>{displayedContact.attributes.phone}</p>
      </div>
    )
  } else {
    return (
      <div>
        <h2 data-cy="contact-details">CONTACT DETAILS:</h2>
        <p>no contact displayed</p>
      </div>
    )
  }

}

export default ContactShowCard