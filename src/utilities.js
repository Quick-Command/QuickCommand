import { ReactComponent as Fire } from '../src/Icons/gripfire-brands.svg'
import { ReactComponent as Earthquake } from '../src/Icons/earthquakeMod.svg'
import { ReactComponent as Shooting } from '../src/Icons/shooting.svg'
import { ReactComponent as Flood } from '../src/Icons/flood.svg'
import { ReactComponent as Tornado } from '../src/Icons/tornado.svg'
import { ReactComponent as Accident } from '../src/Icons/accident.svg'
import { ReactComponent as Power } from '../src/Icons/power.svg'
import { ReactComponent as Hazmat } from '../src/Icons/hazard.svg'

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
    default:
      break
  }
}

