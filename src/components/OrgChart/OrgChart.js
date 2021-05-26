import React from 'react';
import ReactFlow from 'react-flow-renderer';

const OrgChart = (props) => {
  
  const formatNode = (object) => {

    return (
      <div key={object.id}>
        <h3>{object.attributes.title}</h3>
        <h4>{object.attributes.name}</h4>
        <p>{object.attributes.email}</p>
        <p>{object.attributes.phone_number}</p>
      </div>
    )
  }

  const chartValues = [
    {
      id: '1',
      type: 'input',
      data: { label: formatNode(props.data['Incident Commander']) },
      position: { x: 400, y: 0 },
    },
    {
      id: '2',
      type: 'output',
      data: { label: formatNode(props.data['PIO']) },
      position: { x: 600, y: 150 },
    },
    {
      id: '3',
      type: 'output',
      data: { label: formatNode(props.data['Liaison Officer']) },
      position: { x: 100, y: 150 },
    },
    {
      id: '4',
      type: 'output',
      data: { label: formatNode(props.data['Safety Officer']) },
      position: { x: 300, y: 150 },
    },
    {
      id: '5',
      type: 'output',
      data: { label: formatNode(props.data['Operations Chief']) },
      position: { x: 100, y: 400 },
    },
    {
      id: '6',
      type: 'output',
      data: { label: formatNode(props.data['Logistics Chief']) },
      position: { x: 300, y: 400 },
    },
    {
      id: '7',
      type: 'output',
      data: { label: formatNode(props.data['Planning Chief​']) },
      position: { x: 500, y: 400 },
    },
    {
      id: '8',
      type: 'output',
      data: { label: formatNode(props.data['Finance Chief']) },
      position: { x: 700, y: 400 },
    },
    { id: 'e1-2', source: '1', target: '2', type: 'step'},
    { id: 'e1-3', source: '1', target: '3', type: 'step'},
    { id: 'e1-4', source: '1', target: '4', type: 'step'},
    { id: 'e1-5', source: '1', target: '5', type: 'step'},
    { id: 'e1-6', source: '1', target: '6', type: 'step'},
    { id: 'e1-7', source: '1', target: '7', type: 'step'},
    { id: 'e1-8', source: '1', target: '8', type: 'step'},
  ];
  
  return (
    <div style={{ height: 700 }}>
      <ReactFlow elements={chartValues} />
    </div>
  )
}

export default OrgChart