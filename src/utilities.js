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
  let date = new Date(inputDate);
  return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
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

