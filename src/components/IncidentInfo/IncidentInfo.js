import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { getIncidentInfo } from './IncidentInfoSlice.js'
import './IncidentInfo.css'


const IncidentInfo = ({ id }) => {
  const dispatch = useDispatch()
  // INCIDENT DATA:
  // {
  //   "data": {
  //     "id": "1",
  //       "type": "incident",
  //         "attributes": {
  //       "name": "October 2011 2.0 earthquake",
  //         "active": false,
  //           "incident_type": "Earthquake",
  //             "description": "2.0 earthquake, facade damage to some buildings, 10 trees fell",
  //               "location": "City Proper",
  //                 "start_date": "2020-01-10T00:00:00.000Z",
  //                   "close_date": "2020-11-05T00:00:00.000Z"
  //     }
  //   }
  // }

  useEffect(() => {
    dispatch(getIncidentInfo(id))
  }, [dispatch])


  return (
    <section className="incident-info-container">
      <div>Details on Incident</div>
      <div>Wind ' sunrise</div>
      <p></p>
      <article>Weather Report
        <div></div>
      </article>
      <a href="http://google.com/maps/search/liquor+store/">Maps</a>
      <section>Reminders / Prelim Instructions related to type</section>




    </section>
  );
};

export default IncidentInfo