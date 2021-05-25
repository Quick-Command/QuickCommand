import React, { useEffect } from "react";
import OrgChart from '../OrgChart/OrgChart'
import PositionAssignment from '../PositionAssignment/PositionAssignment'
import './ChartView.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getIncidentContacts } from './ChartViewSlice';

const ChartView = ({ id }) => {
  const dispatch = useDispatch();

  console.log(id)

  useEffect(() => {
    dispatch(getIncidentContacts(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  let chartValues = {
    'Incident Commander': { attributes: { name: 'Unassigned', title: 'Incident Commander', email: '', phone_number: '' } },
    'PIO': { attributes: { name: 'Unassigned', title: 'PIO', email: '', phone_number: '' } },
    'Safety Officer': { attributes: { name: 'Unassigned', title: 'Safety Officer', email: '', phone_number: '' } },
    'Liaison Officer': { attributes: { name: 'Unassigned', title: 'Liaison Officer', email: '', phone_number: '' } },
    'Operations Chief': { attributes: { name: 'Unassigned', title: 'Operations Chief', email: '', phone_number: '' } },
    'Logistics Chief': { attributes: { name: 'Unassigned', title: 'Logistics Chief', email: '', phone_number: '' } },
    'Finance Chief': { attributes: { name: 'Unassigned', title: 'Finance Chief', email: '', phone_number: '' } },
    'Planning Chief​': { attributes: { name: 'Unassigned', title: 'Planning Chief​', email: '', phone_number: '' } }
  }

  useSelector(state => state.incidentContacts.incidentContacts).forEach(contact => chartValues[contact.attributes.title].attributes = contact.attributes)

  const detailsLink = `./details/${id}`;

  return (
    <div className='chart-view-container'>
      <div className="org-chart-container">
        <OrgChart data={chartValues} />
      </div>
      <section className="sidebar-container">
        <section className="incident-link-container">
          <h2>Inferno @ Monticello</h2>
          <Link to={detailsLink}>MORE INFO</Link>
        </section>
        <PositionAssignment id={id} />
      </section>
    </div>
  )

}

export default ChartView