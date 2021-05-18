import React, { useState, useEffect } from "react";
// import * as d3 from "d3";
import OrgChart from '../OrgChart/OrgChart'
import './ChartView.css'

const ChartView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

    let test = [
      {"nodeId":"O-1","parentNodeId":null,"width":342,"height":146,"borderWidth":1,"borderRadius":5,"borderColor":{"red":15,"green":140,"blue":121,"alpha":1},
        "backgroundColor":{"red":51,"green":182,"blue":208,"alpha":1},
        "nodeImage":{"url":"https://avatars.githubusercontent.com/damwhit","width":100,"height":100,"centerTopDistance":0,"centerLeftDistance":0,"cornerShape":"CIRCLE","shadow":false,"borderWidth":0,"borderColor":{"red":19,"green":123,"blue":128,"alpha":1}},
        "nodeIcon":{"icon":"https://to.ly/1yZnX","size":30},
        "template":
          `<div> 
            <div style="margin-left:70px;\n margin-top:10px;\n font-size:20px;\n font-weight:bold;\n ">David David </div>\n  
            <div style="margin-left:70px;\n margin-top:3px;\n font-size:16px;\n ">Chief Cool Officer </div>\n\n  
            <div style="margin-left:70px;\n margin-top:3px;\n font-size:14px;\n "Bureau of Cool</div>\n\n 
            <div style="margin-left:126px;\n margin-top:15px;\n font-size:13px;\n  position:absolute;\n   bottom:5px;\n  ">\n  
              <div>NY-D@damwhit.com</div>\n  
              <div style="margin-top:5px">123-456-7890</div>\n  
            </div>\n  
          </div>`,
        "connectorLineColor":{"red":220,"green":189,"blue":207,"alpha":1},"connectorLineWidth":5,"dashArray":"","expanded":false,"directSubordinates":2,"totalSubordinates":2
      },
      {"nodeId":"O-2","parentNodeId":"O-1","width":342,"height":146,"borderWidth":1,"borderRadius":5,"borderColor":{"red":15,"green":140,"blue":121,"alpha":1},
        "backgroundColor":{"red":51,"green":182,"blue":208,"alpha":1},
        "nodeImage":{"url":"https://avatars.githubusercontent.com/cbmackintosh","width":100,"height":100,"centerTopDistance":0,"centerLeftDistance":0,"cornerShape":"CIRCLE","shadow":false,"borderWidth":0,"borderColor":{"red":19,"green":123,"blue":128,"alpha":1}},
        "nodeIcon":{"icon":"https://to.ly/1yZnX","size":30},
        "template":"<div> <div style=\"margin-left:70px;\n margin-top:10px;\n font-size:20px;\n font-weight:bold;\n \">Cameron </div>\n  <div style=\"margin-left:70px;\n margin-top:3px;\n font-size:16px;\n \">Title Goes Here </div>\n\n  <div style=\"margin-left:70px;\n margin-top:3px;\n font-size:14px;\n \"Bureau of Cool</div>\n\n <div style=\"margin-left:126px;\n margin-top:15px;\n font-size:13px;\n  position:absolute;\n   bottom:5px;\n  \">\n  <div>NY-D@damwhit.com</div>\n  <div style=\"margin-top:5px\">123-456-7890</div>\n  </div>\n  </div>",
        "connectorLineColor":{"red":220,"green":189,"blue":207,"alpha":1},"connectorLineWidth":5,"dashArray":"","expanded":false
      },
      {"nodeId":"O-3","parentNodeId":"O-1","width":342,"height":146,"borderWidth":1,"borderRadius":5,"borderColor":{"red":15,"green":140,"blue":121,"alpha":1},
        "backgroundColor":{"red":51,"green":182,"blue":208,"alpha":1},
        "nodeImage":{"url":"https://avatars.githubusercontent.com/percworld","width":100,"height":100,"centerTopDistance":0,"centerLeftDistance":0,"cornerShape":"CIRCLE","shadow":false,"borderWidth":0,"borderColor":{"red":19,"green":123,"blue":128,"alpha":1}},
        "nodeIcon":{"icon":"https://to.ly/1yZnX","size":30},
        "template":"<div> <div style=\"margin-left:70px;\n margin-top:10px;\n font-size:20px;\n font-weight:bold;\n \">Chuck </div>\n  <div style=\"margin-left:70px;\n margin-top:3px;\n font-size:16px;\n \">Title Goes Here </div>\n\n  <div style=\"margin-left:70px;\n margin-top:3px;\n font-size:14px;\n \"Bureau of Cool</div>\n\n <div style=\"margin-left:126px;\n margin-top:15px;\n font-size:13px;\n  position:absolute;\n   bottom:5px;\n  \">\n  <div>NY-D@damwhit.com</div>\n  <div style=\"margin-top:5px\">123-456-7890</div>\n  </div>\n  </div>",
        "connectorLineColor":{"red":220,"green":189,"blue":207,"alpha":1},"connectorLineWidth":5,"dashArray":"","expanded":false
      },
    ]
    
    setData(test)

  }, []);




  return (
    <section className='chart-view-container'>
      <OrgChart data={data} />
    </section>
  )

}

export default ChartView