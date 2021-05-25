import React, { useLayoutEffect, useRef, useEffect } from "react";
import TreeChart from "d3-org-chart";

const OrgChart = (props) => {
  const d3Container = useRef(null);

  const createChartData = (data) => {
    //below data is for testing only (to be replaced with api call values)
    // const testObject = [
    //   { id: 8, attributes: { name: 'chuck', title: 'PIO', email: 'chuck@chuck.com', phone_number: '123-123-123' } },
    //   { id: 2, attributes: { name: 'chuck2', title: 'Safety Officer', email: 'chuck2@chuck.com', phone_number: '123-123-123' } },
    //   { id: 5, attributes: { name: 'chuck5', title: 'Operations Chief', email: 'chuck5@chuck.com', phone_number: '123-123-123' } },
    //   { id: 6, attributes: { name: 'chuck6', title: 'Finance Chief', email: 'chuck6@chuck.com', phone_number: '123-123-123' } }
    // ]

    //define default chart values
    let chartValues = {
      'Inicdent Commander': { id: 1, attributes: { name: 'Unassigned', title: 'Inicdent Commander', email: '', phone_number: '' } },
      'PIO': { attributes: { name: 'Unassigned', title: 'PIO', email: '', phone: '' } },
      'Safety Officer': { attributes: { name: 'Unassigned', title: 'Safety Officer', email: '', phone_number: '' } },
      'Liaison Officer': { attributes: { name: 'Unassigned', title: 'Liaison Officer', email: '', phone_number: '' } },
      'Operations Cheif': { attributes: { name: 'Unassigned', title: 'Operations Chief', email: '', phone_number: '' } },
      'Logistics Chief': { attributes: { name: 'Unassigned', title: 'Logistics Chief', email: '', phone_number: '' } },
      'Finance Chief': { attributes: { name: 'Unassigned', title: 'Finance Chief', email: '', phone_number: '' } },
      'Planning Chief​': { attributes: { name: 'Unassigned', title: 'Planning Chief​', email: '', phone_number: '' } }
    }

    //iterate through incident data and replace any default values with assignees
    data.forEach(assignee => {
      chartValues[assignee.attributes.title] = assignee;
    })


    return Object.values(chartValues).map((item) => {

      return {
        nodeId: item.attributes.title === 'Inicdent Commander' ? 1 : Date.now(),
        parentNodeId: item.attributes.title === 'Inicdent Commander' ? null : 1,
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
                      <div style="margin-top:5px">${item.attributes.phone_number}</div>
                 </div>
              </div>`
      };
    })
  }

  useLayoutEffect(() => {
    let chart = null;
    console.log('create chart data',createChartData(props.data))

    if (props.data && d3Container.current) {
      if (!chart) {
        chart = new TreeChart();
      }
      chart
        .container(d3Container.current)
        .data(createChartData(props.data))
        // .svgWidth(5000)
        // .svgHeight(500)
        .initialZoom(0.25)
        // .onNodeClick(d => {
        //   // popout to view specific card in chart goes here
        //   console.log('clicked node ' + d)
        // })
        .render();
    }
  }, [props.data]);


  return (
    <article>
      <div ref={d3Container} />
    </article>
  );
};

export default OrgChart