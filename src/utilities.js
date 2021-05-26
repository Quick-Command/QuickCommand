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

  if (inputDate !== null) {
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
      return <Flood className='flood'></Flood>
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

export const getIconByType = incident => {
  switch ((incident.incident_type).toLowerCase()) {

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
      return <div className='text-left'>
        <p>1. Rapid damage assessment.</p>
        <p>2. Search and rescue.</p>
        <p>3. Emergency medical care.</p>
        <p>4. Fire-fighting.</p>
        <p>♦ Eliminate all unnecessary open flames or heat sources.</p>
        <p>♦ Keep fire protection equipment operational for as long as possible. Use the FM Global Red Tag Permit System to document any fire protection equipment shutdown.</p>
        <p>♦ Initiate a continual fire watch until normal operations are resumed.</p>
        <p>♦ Assist law enforcement in establishing a secure perimeter</p>
        <p>♦ Control or prevent the entrance of the media</p>
      </div>
    case 'Fire':
      return <div className='text-left'>
        <p>♦ Eliminate all unnecessary open flames or heat sources.</p>
        <p>♦ Keep fire protection equipment operational for as long as possible. Use the FM Global Red Tag Permit System to document any fire protection equipment shutdown.</p>
        <p>♦ Perform hot work only if there are no safer alternatives. Use the FM Global Hot Work Permit System to supervise any work being performed on the property. Hot work should only be performed after fire protection systems are restored and combustibles are removed from the hot work area.</p>
        <p>♦ Provide necessary electrical services, with restoration on an item-by-item basis, only after a thorough check by competent qualified personnel.</p>
        <p>♦ Check all ignitable liquid storage and flammable gas piping systems for leaks before returning to operation.</p>
        <p>♦ Check all tanks for leaks.</p>
        <p>♦ Establish a procedure to remove all combustible debris as it accumulates.</p>
        <p>♦ Initiate a continual fire watch until normal operations are resumed.</p>
        <p>♦ Clear obstructed corridors, aisles and room exits</p>
      </div>
    case 'Flood':
      return <div className='text-left'>
        <p>♦ Control ignition sources.</p>
        <p>♦ Stop all incoming shipments and expedite outgoing shipments.</p>
        <p>♦ Raise and relocate highly valuable and easily moved equipment, contents and vital records to higher elevations. This may necessitate acquiring or renting special equipment to relocate contents. Rank level of importance.</p>
        <p>♦ Close emergency valves to sewer drains.</p>
        <p>♦ Check sump pumps to ensure they are operable.</p>
        <p>♦ Deploy flood defense equipment such as barriers, doors and flood gates.</p>
        <p>♦ Ensure backup power supplies (generators) are functional.</p>
        <p>♦ Apply water-displacing, rust-preventive compound to equipment that may become partially or fully submerged.</p>
        <p>♦ Fill empty storage tanks to prevent them from floating.</p>
        <p>♦ Relocate/reroute supplies.</p>
        <p>♦ Relocate/elevate critical files, stock, portable high-value equipment, etc.</p>
        <p>♦ Set up emergency communication apparatus.</p>
        <p>♦ Deploy site security. Monitor access to property and outside utilities during flooding.</p>
        <p>♦ Begin communication to obtain portable temporary electrical devices, fans, dehumidifiers, etc., needed for salvage operations.</p>
      </div>
    case 'Earthquake':
      return <div className='text-left'>
        <p>1. Rapid damage assessment.</p>
        <p>2. Search and rescue.</p>
        <p>3. Emergency medical care.</p>
        <p>4. Fire-fighting.</p>
        <p>5. Emergency restoration of essential services.</p>
        <p>6. Emergency communications.</p>
        <p>7. Crisis decision-making.</p>
        <p>8. Evacuation, protection of lives and property.</p>
        <p>9. The provision of emergency shelter for victims.</p>
        <p>10. Debris removal (also associated with recovery).</p>
        <p>EARTHQUAKE PREPAREDNESS</p>
        <p>♦ Move tall furniture away from exits.</p>
        <p>♦ Back-up data and sensitive information, store duplicates off-site</p>
      </div>
    case 'Tornado':
      return <div className='text-left'>
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
    case 'Shooting':
      return <div className='text-left'>
        <p>♦ Use security technology, such as closed circuit television, to assist law enforcement in locating the victims and shooter(s)</p>
        <p>♦ Provide site and building maps</p>
        <p>♦ Provide facility access to emergency responders</p>
        <p>♦ Ensure critical phone calls get through to security personnel</p>
        <p>♦ Provide extra radios for emergency responders</p>
        <p>♦ Ensure incoming emergency response personnel know where to stage</p>
        <p>♦ Ensure emergency responders are aware of any safety concerns as they enter process areas</p>
        <p></p>
        <p>Manage the Perimeter</p>
        <p>♦ Assist law enforcement in establishing a secure perimeter</p>
        <p>♦ Control or prevent the entrance of the media</p>
        <p>♦ Establish a media center</p>
        <p>♦ Establish a safe location to stage evacuees</p>
        <p></p>
        <p> Identifying Secondary Impacts</p>
        <p>♦ Identify additional shooters or other threats</p>
        <p>♦ Determine if the shooter has knowledge of the facility or its operations</p>
        <p>♦ If necessary, execute safe shutdown procedures</p>
      </div>
    case 'Power Outage':
      return <div className='text-left'>
        <p>POWER EMERGENCY</p>
        <p>♦ Identify and prioritize vital power-dependent functions, operations, and equipment</p>
        <p>♦ Determine whether you have emergency power outlets in your area.  Plan to use them for priority functions only</p>
        <p>♦ Determine if there is emergency lighting in your area.  Keep flashlights available in all work areas</p>
        <p>♦ Do not overload power strips.  Extension cords are for emergency use only</p>
        <p>♦ Keep offsite duplicates of critical data and cultures</p>
      </div>
    case 'Hazmat Spill':
      return <div className='text-left'>
        <p>1. Evacuation</p>
        <p>Persons in the immediate vicinity of a spill should immediately evacuate the premises (except for
        employees with training in spill response in circumstances described below). If the spill is of
        “medium” or “large” size, or if the spill seems hazardous, immediately notify emergency response
        personnel.</p>
        <p>2. Spill Control Techniques</p>
        <p>Once a spill has occurred, the employee needs to decide whether the spill is small enough to
        handle without outside assistance. Only employees with training in spill response should attempt
        to contain or clean up a spill.</p>
        <p>NOTE: If you are cleaning up a spill yourself, make sure you are aware of the hazards
        associated with the materials spilled, have adequate ventilation, and proper personal protective
        equipment. Treat all residual chemical and cleanup materials as hazardous waste.</p>
        <p>Spill control equipment should be located wherever significant quantities of hazardous materials
        are received or stored. MSDSs, absorbents, over-pack containers, container patch kits, spill
        dams, shovels, floor dry, acid/base neutralizers, and “caution-keep out” signs are common spill
        response items.</p>
        <p>3. Spill Response and Cleanup</p>
        <p>Chemical spills are divided into three categories: Small, Medium and Large. Response and
        cleanup procedures vary depending on the size of the spill.</p>
        <p>Small Spills: Any spill where the major dimension is less than 18 inches in diameter. Small
        spills are generally handled by internal personnel and usually do not require an emergency
        response by police or fire department HAZMAT teams.</p>
        <p>• Quickly control the spill by stopping or securing the spill source. This could be as simple
        as up-righting a container and using floor-dry or absorbent pads to soak up spilled
        material. Wear gloves and protective clothing, if necessary.</p>
        <p>• Put spill material and absorbents in secure containers if any are available.</p>
        <p>• Consult with the Facility Responsible Person and the MSDS for spill and waste disposal
        procedures.</p>
        <p>• In some instances, the area of the spill should not be washed with water. Use Dry
        Cleanup Methods and never wash spills down the drain, onto a storm drain or onto the
        driveway or parking lot.</p>
        <p>• Both the spilled material and the absorbent may be considered hazardous waste and
        must be disposed of in compliance with state and federal environmental regulations.</p>
        <p></p>
        <p>Medium Spills: Spills where the major dimension exceeds 18 inches, but is less than 6 feet.
        Outside emergency response personnel (police and fire department HAZMAT teams) should
        usually be called for medium spills. Common sense, however, will dictate when it is
        necessary to call them.</p>
        <p>• Immediately try to help contain the spill at its source by simple measures only. This
        means quickly up-righting a container, or putting a lid on a container, if possible. Do not
        use absorbents unless they are immediately available. Once you have made a quick
        attempt to contain the spill, or once you have quickly determined you cannot take any
        brief containment measures, leave the area and alert Emergency Responders at 911.
        Closing doors behind you while leaving helps contain fumes from spills. Give police
        accurate information as to the location, chemical, and estimated amount of the spill.</p>
        <p>• Evaluate the area outside the spill. Engines and electrical equipment near the spill area
        must be turned off. This eliminates various sources of ignition in the area. Advise
        Emergency Responders on how to turn off engines or electrical sources. Do not go back
        into the spill area once you have left. Help emergency responders by trying to determine
        how to shut off heating, air conditioning equipment, or air circulating equipment, if
        necessary.</p>
        <p>• If emergency responders evacuate the spill area, follow their instructions in leaving the
        area.</p>
        <p>• After emergency responders have contained the spill, be prepared to assist them with
        any other information that may be necessary, such as MSDSs and questions about the
        facility. Emergency responders or trained personnel with proper personal protective
        equipment will then clean up the spill residue. Do not re-enter the area until the
        responder in charge gives the all clear. Be prepared to assist these persons from outside
        the spill area with MSDSs, absorbents, and containers.</p>
        <p>• Reports must be filed with proper authorities. It is the responsibility of the spiller to inform
        both his/her supervisor and the emergency responders as to what caused the spill. The
        response for large spills is similar to the procedures for medium spills, except that the
        exposure danger is greater.</p>
        <p>Large Spills: Any spill involving flammable liquid where the major dimension exceeds 6 feet
        in diameter; and any “running” spill, where the source of the spill has not been contained or
        flow has not been stopped.</p>
        <p>• Leave the area and notify Emergency Responders (911). Give the operator the spill
        location, chemical name, and approximate amount.</p>
        <p>• From a safe area, attempt to get MSDS information for the spilled chemical for the
        emergency responders to use. Also, be prepared to advise responders as to any ignition
        sources, engines, electrical power, or air conditioning/ventilation systems that may need
        to be shut off. Advise responders of any absorbents, containers, or spill control
        equipment that may be available. This may need to be done from a remote area,
        because an evacuation that would place the spiller far from the scene may be needed.
        Use radio or phone to assist from a distance, if necessary.</p>
        <p>• Only emergency response personnel, in accordance with their own established
        procedures, should handle spills greater than 6 feet in any dimension or that are
        continuous. Remember, once the emergency responders or HAZMAT team is on the job
        cleaning up spills or putting out fires, the area is under their control and no one may reenter the area until the responder in charge gives the all clear.</p>
        <p>• Provide information for reports to supervisors and responders, just as in medium spills.</p>
      </div>
    case 'Hurricane':
      return <div className='text-left'>
        <p>I. Recommended Personal Gear</p>
        <p>Ensure you have personal information such as immunization record and blood type.</p>
        <p>Consider bringing the following gear:</p>
        <p>Rain gear</p>
        <p>Changes of clothing appropriate for the location, weather, and assignment</p>
        <p>Toiletries (in plastic rather than glass bottles)</p>
        <p>Alcohol-based hand sanitizer</p>
        <p>Flashlight with spare batteries</p>
        <p>Prescription medicine for expected length of stay (with considerable safety margin)</p>
        <p>Over-the-counter medications for minor illnesses (e.g., pain reliever, allergy medication, hydrocortisone cream, antibiotic cream, bandages)</p>
        <p>Sunscreen (SPF-15 or higher)</p>
        <p>Lip salve</p>
        <p>Insect repellent</p>
        <p>Cap or hat for sun and rain</p>
        <p>Extra pair of glasses or contacts (If you wear contacts, anticipate dusty conditions at disaster sites)</p>
        <p>Sun glasses</p>
        <p></p>
        <p>II. Personal Protective Equipment</p>
        <p>Appropriate work clothing: Clothing appropriate for protecting individuals from hazards in the general work environment that may cause cuts, abrasions, irritation, or overexposure to sunlight. Consideration should be given to heat and cold stress issues.</p>
        <p>Respiratory protection: The mandatory use of respirators requires compliance with the OSHA respiratory protection standard (29 CFR 1910.134), including the development of a written respiratory protection program that describes how respirators will be cleaned, maintained, and stored; a filter or cartridge change out schedule based on the work expected; and how workers will receive medical evaluations, training, and fit testing. Voluntary use of respirators must conform to Appendix D of 29 CFR 1910.134.</p>
        <p></p>
        <p>III. Onsite</p>
        <p>Contact with Downed Lines, Live Electrical Equipment, and Other Utilities (e.g., gas, water)</p>
        <p>Identify the location of any energized electrical power circuit that workers (or their tools and equipment) could contact; post signs and advise individuals of the location, hazards, and protective work practices.
        Assume that electrical lines are energized until proven otherwise. Lines and other conductors may become reenergized without warning as utilities are evaluated and restored after a disaster. Ensure that workers are protected from electric shock by deenergizing and grounding circuits they might contact.
        Inspect the work area for downed conductors and do not go near, drive over, or otherwise come in contact with them.
        Downed electrical conductors can energize other objects, including fences, water pipes, bushes, trees, and telephone/CATV/fiber optic cables.
        Unless they are deenergized and visibly grounded, maintain proper distance from overhead electrical power lines (at least 10 feet) and/or provide insulating barriers.
        Deenergize circuits and use locks and/or tags to prevent circuits from becoming reenergized accidentally.<p />
          <p>Use ground-fault circuit interrupters on all outlets that are not part of permanent wiring.</p>
          <p>Guard live parts against accidental contact using approved cabinets or other approved enclosures.</p>
          <p>Inspect electrical cords or cables for external defects (such as loose parts, deformed or missing pins, or damage to outer jacket or insulation) and for evidence of possible internal damage (such as pinched or crushed outer jackets). Do not use damaged cords and cables.</p>
        Use extension cords approved for the intended use (e.g., use heavy duty extension cords on work sites).</p>
        <p>Do not approach any gas leaks; if a gas leak is detected, secure spark-producing devices (e.g., engines, tools, electronic, and communications equipment) and evacuate the area until the leak is secured.</p>
        <p>Contact utility company to assist in locating, marking, and shutting off/purging utility lines that may pose a hazard or may be impacted; ensure that lines have been purged as needed before beginning work.</p>
      </div>
    default:
      break
  }
}