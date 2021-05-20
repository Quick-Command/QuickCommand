import React, { useState, useEffect } from "react";
import OrgChart from '../OrgChart/OrgChart'
import IncidentInfo from '../IncidentInfo/IncidentInfo'
import PositionAssignment from '../PositionAssignment/PositionAssignment'
import './ChartView.css'

const ChartView = () => {
  const [data, setData] = useState(null);

  const createChartData = () => {
    //below data is for testing only (to be replaced with api call values)
    const testObject = [
      { id: 8, attributes: { name: 'chuck', title: 'PIO', email: 'chuck@chuck.com', phone: '123-123-123' } },
      { id: 2, attributes: { name: 'chuck2', title: 'Safety Officer', email: 'chuck2@chuck.com', phone: '123-123-123' } },
      { id: 5, attributes: { name: 'chuck5', title: 'Operations Chief', email: 'chuck5@chuck.com', phone: '123-123-123' } },
      { id: 6, attributes: { name: 'chuck6', title: 'Finance Chief', email: 'chuck6@chuck.com', phone: '123-123-123' } }
    ]

    //define default chart values
    let chartValues = {
      'Incident Commander': { id: 1, attributes: { name: 'Unassigned', title: 'Incident Commander', email: '', phone: '' } },
      'PIO': { attributes: { name: 'Unassigned', title: 'PIO', email: '', phone: '' } },
      'Safety Officer': { attributes: { name: 'Unassigned', title: 'Safety Officer', email: '', phone: '' } },
      'Liaison Officer': { attributes: { name: 'Unassigned', title: 'Liaison Officer', email: '', phone: '' } },
      'Operations Chief': { attributes: { name: 'Unassigned', title: 'Operations Chief', email: '', phone: '' } },
      'Logistics Chief': { attributes: { name: 'Unassigned', title: 'Logistics Chief', email: '', phone: '' } },
      'Finance Chief': { attributes: { name: 'Unassigned', title: 'Finance Chief', email: '', phone: '' } },
      'Planning Chief​': { attributes: { name: 'Unassigned', title: 'Planning Chief​', email: '', phone: '' } }
    }

    //iterate through incident data and replace any default values with assignees
    testObject.forEach(assignee => {
      chartValues[assignee.attributes.title] = assignee;
    })


    return Object.values(chartValues).map((item) => {
      return {
        nodeId: item.id || Date.now(),
        parentNodeId: item.attributes.title === 'Incident Commander' ? null : 1,
        width: 330,
        height: 147,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: { "red": 51, "green": 182, "blue": 208, "alpha": 1 },
        nodeImage: {
          url:
            "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
          width: 100,
          height: 100,
          centerTopDistance: 0,
          centerLeftDistance: 0,
          cornerShape: "ROUNDED",
          shadow: true,
          borderWidth: 0,
        },
        nodeIcon: {
          icon: "https://to.ly/1yZnX",
          size: 30
        },
        connectorLineColor: {
          red: 220,
          green: 189,
          blue: 207,
          alpha: 1
        },
        connectorLineWidth: 5,
        dashArray: "",
        expanded: false,
        template: `<div>
                  <div style="margin-left:80px;
                              margin-top:10px;
                              font-size:20px;
                              font-weight:bold;
                         ">${item.attributes.name || 'unassigned'} </div>
                 <div style="margin-left:80px;
                              margin-top:3px;
                              font-size:16px;
                         ">${item.attributes.title}</div>
                 <div style="margin-left:200px;
                             margin-top:15px;
                             font-size:13px;
                             position:absolute;
                             bottom:5px;
                            ">
                      <div>${item.attributes.email}</div>
                      <div style="margin-top:5px">${item.attributes.phone}</div>
                 </div>
              </div>`
      };
    })
  }


  useEffect(() => {
    setData(createChartData())
  }, []);

  return (
    <div className='chart-view-container'>
      <div className="org-chart-container">
        <OrgChart data={data} />
      </div>
      <section className="sidebar-container">
        <section className="incident-info-container">
          <h2>Incident Name Here</h2>
          <button>more info</button>
        </section>
        <PositionAssignment />
      </section>
    </ div>
  )

}

export default ChartView