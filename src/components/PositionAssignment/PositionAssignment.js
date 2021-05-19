import React from "react";
import './PositionAssignment.css'

const PositionAssignment = () => {

  return (
    <section className="assignment-container">
      <h3>ASSIGN ROLE</h3>
      
      <form className="assignee-search-form">

      <label htmlFor="position">Position:</label>
        <select name='position'>
          <option value=''>--select--</option>
          <option>Incident Commander</option>
          <option>PIO</option>
          <option>Safety Officer</option>
          <option>Liaison Officer</option>
          <option>Operations Chief</option>
          <option>Logistics Chief</option>
          <option>Finance Chief</option>
          <option>Planning Chief​</option>
        </select>

        <input />

      </form>
      
      <div className="search-results-container"></div>

      <div className="assignee-search-result">
        <p>Assignee name here</p>
        <button>assign</button>
      </div>



    </section>
  );
};

export default PositionAssignment