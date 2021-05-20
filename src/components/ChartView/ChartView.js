import React, { useEffect } from "react";
import OrgChart from '../OrgChart/OrgChart'
import PositionAssignment from '../PositionAssignment/PositionAssignment'
import './ChartView.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getIncidentContacts } from './ChartViewSlice';

const ChartView = ({ id }) => {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getIncidentContacts(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const data = useSelector(state => state.incidentContacts.incidentContacts)
  const detailsLink = `./incident-details/${id}`;
  return (
    <div className='chart-view-container'>
      <div className="org-chart-container">
        <OrgChart data={data} />
      </div>
      <section className="sidebar-container">
        <section className="incident-link-container">
          <h2>Inferno @ Monticello</h2>
          <Link to={detailsLink}>MORE INFO</Link>
        </section>
        <PositionAssignment />
      </section>
    </div>
  )

}

export default ChartView