import React, { useLayoutEffect, useRef} from "react";
import TreeChart from "d3-org-chart";

const OrgChart = (props, ref) => {
  const d3Container = useRef(null);
  let chart = null;


  // We need to manipulate DOM
  useLayoutEffect(() => {
    if (props.data && d3Container.current) {
      if (!chart) {
        chart = new TreeChart();
      }
      chart
        .container(d3Container.current)
        .data(props.data)
        .svgWidth(5000)
        // .svgHeight(500)
        .initialZoom(0.4)
        .onNodeClick(d => {
        // popout to view specific card in chart goes here
          console.log('clicked node ' + d)
        })
        .render();
    }
  }, [props.data, d3Container.current]);

  return (
      <div ref={d3Container} />
  );
};

export default OrgChart