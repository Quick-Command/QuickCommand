import React, { useState, useEffect } from "react";
import OrgChart from '../OrgChart/OrgChart'
import IncidentInfo from '../IncidentInfo/IncidentInfo'
import './ChartView.css'

const ChartView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let testObject = [
      {id:1, name:'chuck', title:'maestro', email:'chuck@chuck.com', phone:'123-123-123'},
      {id:2, name:'chuck2', title:'maestro2', email:'chuck2@chuck.com', phone:'123-123-123'},
      {id:3, name:'', title:'maestro3', email:'', phone:''},
      {id:4, name:'', title:'maestro4', email:'', phone:''},
      {id:5, name:'chuck5', title:'maestro5', email:'chuck5@chuck.com', phone:'123-123-123'},
      {id:6, name:'chuck6', title:'maestro6', email:'chuck6@chuck.com', phone:'123-123-123'},
      {id:7, name:'chuck7', title:'maestro7', email:'chuck7@chuck.com', phone:'123-123-123'},
      {id:8, name:'chuck8', title:'maestro8', email:'chuck8@chuck.com', phone:'123-123-123'},
    ]

    let testData = testObject.map((item) => {
     return {
      nodeId: item.id,
      parentNodeId: item.id === 1 ? null : 1,
      width: 330,
      height: 147,
      borderWidth: 1, 
      borderRadius: 5, 
      backgroundColor:{"red":51,"green":182,"blue":208,"alpha":1},
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
                         ">${item.name || 'unassigned'} </div>
                 <div style="margin-left:80px;
                              margin-top:3px;
                              font-size:16px;
                         ">${item.title}</div>
                 <div style="margin-left:200px;
                             margin-top:15px;
                             font-size:13px;
                             position:absolute;
                             bottom:5px;
                            ">
                      <div>${item.email}</div>
                      <div style="margin-top:5px">${item.phone}</div>
                 </div>
              </div>`
    };
  })

  console.log(testData)

    setData(testData)

  }, []);


  return (
    <div className='chart-view-container'>
      <div className="org-chart-container">
        <OrgChart data={data}/>
      </div>
      <section className="sidebar-container">
        {/* overview and declare over button here */}
        <IncidentInfo />
        {/* assignment pane here */}
      </section>
    </ div>
  )

}

export default ChartView