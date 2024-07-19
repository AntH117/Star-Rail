import World_HertaStation from './images/Worlds_hertaStation.jpg'
import HertaStation1 from './images/hertaStation1.png'
import HertaStation2 from './images/hertaStation2.png'
import HertaStation3 from './images/hertaStation3.png'
import HertaStation4 from './images/hertaStation4.png'
import HertaStation5 from './images/hertaStation5.png'
import Worlds_Jarilo from './images/Worlds_Jarilo.jpg'
import Jarilo1 from './images/belabog1.png'
import Jarilo2 from './images/belabog2.png'
import Jarilo3 from './images/belabog3.png'
import Jarilo4 from './images/belabog4.png'
import Jarilo5 from './images/belabog5.png'
import Worlds_Xianzhou from './images/Worlds_Xianzhou.jpg'
import Xianzhou1 from './images/Xianzhou1.png'
import Xianzhou2 from './images/Xianzhou2.png'
import Xianzhou3 from './images/Xianzhou3.png'
import Xianzhou4 from './images/Xianzhou4.png'
import Xianzhou5 from './images/Xianzhou5.png'
import Worlds_Penacony from './images/Worlds_Penacony.jpg'
import Penacony1 from './images/Penacony1.png'
import Penacony2 from './images/Penacony2.png'
import Penacony3 from './images/Penacony3.png'
import Penacony4 from './images/Penacony4.png'
import Penacony5 from './images/Penacony5.png'

const Worlds = [
  {
    world: 'Herta Station',
    bg: World_HertaStation,
    description: 'Herta station (Will write more later) blah blah blah blah blah blah blah blah blah blah',
    id: 'hertaStation',
    pictures: [HertaStation1, HertaStation2, HertaStation3, HertaStation4, HertaStation5],
    pictureDescription: [
      'The people living in the space station come from all sorts of backgrounds. The core staff here are the researchers. They are assigned to different departments when they first started based on their research subject and strengths.',
      'The watcher zone is used to monitor the real-time status of the stations energy supply and the conditions of other zones. Together with the master control zone, these two areas form the core of the space station, offering an integrated system with strong capacities for observing, monitoring, defense, and attack',
      'On both sides of the master control zone and at its entrance is a huge wall consisting of numerous screens for surveillance. This system offers visuals on everything happening on the parameter of the space station with no blind spot. The system also boasts a sniper platform capable of handling unknown threats, and a defense projection platform that can generate an anti-gravity shield over the space station.',
      'As the brain of the space station, the master control zone can be detached from the main body of the station and act as an independent vessel, capable of interastral exploration.',
      'This was once a zone frequently crossed by shuttles during bustling periods but was sealed due to unknown anomalies, quietly becoming one of the few rare spots on the space station not open to the public.'

    ]
  },
  {
    world: 'Jarilo',
    bg: Worlds_Jarilo,
    description: 'Jarilo (Will write more later) blah blah blah blah blah blah blah blah blah blah',
    id: 'Jarilo',
    pictures: [Jarilo1, Jarilo2, Jarilo3, Jarilo4, Jarilo5],
    pictureDescription: [
      'Nearly a millennium ago, the blistering Everwinter buried the world under snow with the arrival of the Eternal Freeze. Belobog survived the disaster, thanks to the blessings from the Preservation. Despite having to weather the harsh climate, humanity persevered and lived to see the sunrise again.',
      'The part of Belobog that lies above ground is known as the Overworld, and it is from there that the Architects govern the city. The temperature in the city is constant, and daily life continues as before.',
      'One of the landmarks of the Overworld is a statue located in the middle of the Plaza. The huge sculpture, a representation of humanitys hard-fought victory against the Everwinter, was erected in tribute to the Architects who saved civilization.',
      'The part of Belobog that lies underground is known as the Underworld. Relics and architecture from the Old World are buried in between the towering rocky walls. A giant support beam connects the underground to the surface.',
      'This place used to be a shelter for the orphans of the Underworld. Once the threat of the Fragmentum was imminent, the caretaker of the orphanage led the children away from their former home. The sound of laughter and playing was never to be heard again in the courtyard of this old house.'
    ]
  },
  {
    world: 'Xianzhou',
    bg: Worlds_Xianzhou,
    description: "Xianzhou (Will write more later) blah blah blah blah blah blah blah blah blah blah",
    id: 'Xianzhou',
    pictures: [Xianzhou1, Xianzhou2, Xianzhou3, Xianzhou4, Xianzhou5],
    pictureDescription: [
      'After the war with the Denizens of Abundance, the Luofu traveled between densely populated interstellar regions, trading and conducting cultural exchange between different worlds. They signed agreements with the Interastral Peace Corporation, and helped many worlds ravaged by the Denizens of Abundance to rebuild their ecosystem. People arrived at the Luofu to seek medical treatment, study, and trade, as throngs of visitors fill the docks.',
      'People with varied motives arrive and depart here. Only by going through this Jade Gate would one be deemed to have officially reached the Xianzhou Luofu.',
      'A bustling street in Central Starskiff Haven. Shops line the road for as far as the eye can see, and their lights are lit for perpetuity.',
      'The heart of the Luofu Sky-Faring Commission. Pilots and Navigators work ceaselessly here in this majestic palace with eaves shaped like the bow of a ship.',
      'Transportation between delves on the Xianzhou greatly relies on starskiffs, and Stargazer Navalia is the core zone to produce them.'
    ]
  },
  {
    world: 'Penocony',
    bg: Worlds_Penacony,
    description: 'Penocony (Will write more later) blah blah blah blah blah blah blah blah blah blah',
    id: 'Penocony',
    pictures: [Penacony1, Penacony2, Penacony3, Penacony4, Penacony5],
    pictureDescription: [
      'A magnificent metropolis characterized by a continuous influx of visitors, a result of The Familys meticulous maintenance of the star-sized Synesthesia Dreamscape.',
      'A renowned luxury hotel and huge structure located at the intersection of dreamscape and reality. It is said only the wealthy and famous can receive its invitation.',
      'The most prosperous "Moment" in Penacony, showcasing an entire city bathed in luxury. Here, melodies and merry-making never cease, and feasts continue evermore unto eternity.',
      'A city of dreams still under construction. The cosmos most famous architects are invited to this place to become Penaconys "Dreamweavers"',
      'A mirror image of The Reverie in the Dreamscape. For some unknown reason, it has fallen into a state of disrepair and is off-limits to guests.'
    ]
  }
]

export default Worlds;