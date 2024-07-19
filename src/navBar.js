import React from 'react';
import starLogo from '../src/images/Starlogo.webp'
import musicOn from "./images/music-on.png"
import musicOff from "./images/music-off.png"
import SpaceWalk from './images/Space-walk.mp3';
import { InitialContext } from './App';
import { Link, NavLink } from "react-router-dom"

export default function NavBar() {
  const [music, setMusic] = React.useState(true);
  const bgm = document.getElementById('Bgm')
  const initial = React.useContext(InitialContext)
  const audioRef = React.useContext(InitialContext)
  function musicToggle() {
    setMusic((preval) => !preval)
    !music ? audioRef.current.play() : audioRef.current.pause()
}

React.useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = 0.3; 
  }
},[])

  return (
<div className={initial ? "header" : "header fadeInHeader"}>
  <div className="logo">
      <img src={starLogo}></img>
  </div>
  <div className="headerTitles">
    <div className="titles">
    <NavLink 
      to="/"
      className={({isActive}) => isActive ? "titles-active" : 'titles'}
      >
      HOME
   </NavLink>
    </div>  
    <div className="titles">
    <NavLink 
      to="/planets"
      className={({isActive}) => isActive ? "titles-active" : 'titles'}
      >
      PLANETS
   </NavLink>
    </div>
    <div className="titles">
    <NavLink 
      to="/characters"
      className={({isActive}) => isActive ? "titles-active" : 'titles'}
      >
      CHARACTERS
   </NavLink>
    </div>
    <div className="titles">
    <NavLink 
      to="/aeons"
      className={({isActive}) => isActive ? "titles-active" : 'titles'}
      >
      AEONS
   </NavLink>
    </div>
    <div className="titles">
    <NavLink 
      to="/news"
      className={({isActive}) => isActive ? "titles-active" : 'titles'}
      >
      NEWS
   </NavLink>
    </div>
  </div>
  <div className="music">
    <div className="musicToggle">
      <img src={music ? musicOn : musicOff} onClick={musicToggle}></img>
      <audio autoPlay loop ref={audioRef}>
        <source src={SpaceWalk} type="audio/mp3"></source>
      </audio>
    </div>
  </div>
</div>
  )
}

