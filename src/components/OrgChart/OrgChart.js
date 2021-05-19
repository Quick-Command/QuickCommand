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
        // .svgWidth(5000)
        // .svgHeight(500)
        .initialZoom(0.25)
        .onNodeClick(d => {
        // popout to view specific card in chart goes here
          console.log('clicked node ' + d)
        })
        .render();
    }
  }, [props.data, d3Container.current]);

  return (
    <article className='test1'>
      <div className='test2' ref={d3Container} />
    </article>
  );
};

export default OrgChart