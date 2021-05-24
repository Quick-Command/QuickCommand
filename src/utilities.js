import { ReactComponent as Fire } from '../src/Icons/gripfire-brands.svg'
import { ReactComponent as Earthquake } from '../src/Icons/earthquakeMod.svg'
import { ReactComponent as Shooting } from '../src/Icons/shooting.svg'
import { ReactComponent as Flood } from '../src/Icons/flood.svg'
import { ReactComponent as Tornado } from '../src/Icons/tornado.svg'
import { ReactComponent as Accident } from '../src/Icons/accident.svg'
import { ReactComponent as Power } from '../src/Icons/power.svg'
import { ReactComponent as Hazmat } from '../src/Icons/hazard.svg'
import { ReactComponent as Hurricane } from '../src/Icons/hurricane.svg'

export const formatDate = inputDate => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  if(inputDate !== null) {
    let date = new Date(inputDate);
    return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  }
}

export const getIcon = incident => {
  switch ((incident.attributes.incident_type).toLowerCase()) {
    case 'accident':
      return <Accident className='element'></Accident>
    case 'fire':
      return <Fire className='fire'></Fire>
    case 'flood':
      return <Flood className='element'></Flood>
    case 'earthquake':
      return <Earthquake className='earthquake'></Earthquake>
    case 'tornado':
      return <Tornado className='tornado'></Tornado>
    case 'shooting':
      return <Shooting className='element'></Shooting>
    case 'power outage':
      return <Power className='element' />
    case 'hazmat spill':
      return <Hazmat className='hazard' />
    case 'hurricane':
      return <Hurricane className='hurricane' />
    default:
      break
  }
}

export const getIconByType = type => {
  switch ((type).toLowerCase()) {

    case 'Accident':
      return <Accident className='element'></Accident>
    case 'Fire':
      return <Fire className='info-type fire'></Fire>
    case 'Flood':
      return <Flood className='info-type element'></Flood>
    case 'Earthquake':
      return <Earthquake className='info-type earthquake'></Earthquake>
    case 'Tornado':
      return <Tornado className='info-type tornado'></Tornado>
    case 'Shooting':
      return <Shooting className='info-type element'></Shooting>
    case 'Power Outage':
      return <Power className='info-type element' />
    case 'Hazmat Spill':
      return <Hazmat className='info-type hazard' />
    case 'Hurricane':
      return <Hurricane className='info-type hurricane' />
    default:
      break
  }
}

export const statesCodes = (type, setValue, value) => {
  const name = `${type}-state`
  return (
    <select
      name={name}
      onChange={e => setValue(e.target.value)}
      value={value}
    >
      <option value="">--select--</option>
      <option>AL</option>
      <option>AK</option>
      <option>AZ</option>
      <option>AR</option>
      <option>CA</option>
      <option>CO</option>
      <option>CT</option>
      <option>DE</option>
      <option>FL</option>
      <option>GA</option>
      <option>HI</option>
      <option>ID</option>
      <option>IL</option>
      <option>IN</option>
      <option>IA</option>
      <option>KS</option>
      <option>KY</option>
      <option>LA</option>
      <option>ME</option>
      <option>MD</option>
      <option>MA</option>
      <option>MI</option>
      <option>MN</option>
      <option>MS</option>
      <option>MO</option>
      <option>MT</option>
      <option>NE</option>
      <option>NV</option>
      <option>NH</option>
      <option>NJ</option>
      <option>NM</option>
      <option>NY</option>
      <option>NC</option>
      <option>ND</option>
      <option>OH</option>
      <option>OK</option>
      <option>OR</option>
      <option>PA</option>
      <option>RI</option>
      <option>SE</option>
      <option>SD</option>
      <option>TN</option>
      <option>TX</option>
      <option>UT</option>
      <option>VT</option>
      <option>VA</option>
      <option>WA</option>
      <option>WV</option>
      <option>WI</option>
      <option>WY</option>
    </select>
  )
}

export const getInstructions = (type) => {
  switch (type) {
    case 'Accident':
      return
    case 'Fire':
      return <div>

        <p>FIRE PREPAREDNESS</p>
        <p>♦ Know the location of alarm stations and extinguishers.  Know how to use them</p>
        <p>♦ Leave fire doors closed at all times</p>
        <p>♦ Clear obstructed corridors, aisles and room exits</p>
        <p>♦ Use only grounded electrical plugs</p>
        <p>♦ Limit use of extension cords and multiple outlets</p>
        <p>♦ Do not use mechanical rooms or utility rooms for storage</p>
        <p>♦ Do not smoke in facility</p>
      </div>
    case 'Flood':
      return
    case 'Earthquake':
      return <div>
        On Site Procedure Order:
        1. Rapid damage assessment.
        2. Search and rescue.
        3. Emergency medical care.
        4. Fire-fighting.
        5. Emergency restoration of essential services.
        6. Emergency communications.
        7. Crisis decision-making.
        8. Evacuation, protection of lives and property.
        9. The provision of emergency shelter for victims.
        10. Debris removal (also associated with recovery).
        <p>EARTHQUAKE PREPAREDNESS</p>
        <p>♦ Move tall furniture away from exits.</p>
        <p>♦ Back-up data and sensitive information, store duplicates off-site</p>
      </div>
    case 'Tornado':
      <div>
        <p>I.To ensure the survival of the maximum number of victims, keep them in the best
        possible health in the circumstances.Search and rescue operations in collapsed
        buildings is a particularly difficult challenge, especially in less developed areas
      where there is less machinery and rescue equipment.</p>
        <p>II.Reestablish self - sufficiency and essential services as quickly as possible for all
        population groups, with special attention to those whose needs are greatest, the most
        vulnerable and underprivileged.The continued operation of critical facilities(i.e.,
        hospitals, emergency centers, water treatment facilities, air traffic control towers,
        etc.) and restoration of lifelines are essential(MCEER, 2000; NRC, 2003).</p>
        <p>III.Inspection and condemnation of damaged infrastructure(especially unstable
        structures that may be dangerous due to aftershocks) and emergency / temporary
      repairs should be made where feasible.</p>
        <p>IV.In cases involving population displacements and temporary housing, the aim is to find
        durable solutions as quickly as possible, while ensuring protection and assistance as
        necessary in the meantime.</p>
        <p>V.Accomplish all of the above in a “sustainable” manner that contributes to long - term
        development goals and reduces vulnerability to future damaging earthquakes or
      other hazards.</p>
      </div>
      return
    case 'Shooting':
      return
    case 'Power Outage':
      return <div>
        <p>POWER EMERGENCY</p>
        <div className='text-left'>
          <p>♦ Identify and prioritize vital power-dependent functions, operations, and equipment</p>
          <p>♦ Determine whether you have emergency power outlets in your area.  Plan to use them for priority functions only</p>
          <p>♦ Determine if there is emergency lighting in your area.  Keep flashlights available in all work areas</p>
          <p>♦ Do not overload power strips.  Extension cords are for emergency use only</p>
          <p>♦ Keep offsite duplicates of critical data and cultures</p>
        </div>
      </div>
    case 'Hazmat Spill':
      return
    case 'Hurricane':
      return

    default:
      break
  }
}