import aeonBg from './images/space_loop.mp4'
import { Link, useLocation } from "react-router-dom";
import './AeonInfo.css';
import { InitialContext } from './App';
import AeonList from './AeonList'
import React, { useEffect } from 'react';

function AeonInfo() {
  const [aeonAppear, setAeonAppear] = React.useState(false)
  const location = useLocation();
  const { pathname } = location;
  const aeonPath = pathname.split('/').pop()
  const [currentAeon, setCurrentAeon] = React.useState(null)
  const audioRef = React.useContext(InitialContext).current
  var vol = 0.20;
  var interval = 200
 
  function fadeVolume() {
    const fadeEffect = setInterval(() => {
      vol -= vol/4;
      audioRef.volume = vol
    }, interval) 
    setTimeout(() => {
      clearInterval(fadeEffect)
    }, 2000)
  }
 
  function UpVolume() {

    const upEffect = setInterval(() => {
  
      if (vol < 0.3) {
        vol += 0.03;
        audioRef.volume = vol
      }
    }, interval) 
    setTimeout(() => {
      clearInterval(upEffect)
    }, 2000)
  }

  React.useEffect(() => {
    setCurrentAeon(AeonList.find(item => item.pathName === aeonPath))
  },[])


  function Aeon({aeon, aeonSound}) { 
    return <div className='SingleAeon'>
      <audio src={aeonSound} autoPlay type="audio/wav" id='aeonAudio'>
      </audio>
      <img src={aeon} className='AeonImage'></img>
    </div>
  }
  const audioDuration = document.getElementById('aeonAudio') ? document.getElementById('aeonAudio').duration * 1000 : 5000;

 React.useEffect(() => {
  if (audioRef) {
    fadeVolume()
  }
  setTimeout(() => {
    setAeonAppear(true)
  },1000)
  setTimeout(() => {
    if (audioRef) {
      UpVolume()
    }
  }, audioDuration)
  },[])

return  <div className='AeonBody'>
  <div className="AeonSpaceContainer">
  <video autoPlay muted loop type="video/mp4" className='AeonBg'>
      <source src={aeonBg}></source>
  </video>
  <div className='overlay'>
    
  </div>
</div>
  { aeonAppear ?  <Aeon aeon={currentAeon.aeonImage} aeonSound={currentAeon.aeonSound}/> : null}
  { aeonAppear ?   <div className='aeonDetails'>
    <div className='AeonName'> {`Aeon · ${currentAeon.aeonName}`} </div>
    <div className='AeonDescription'> {currentAeon.aeonInfo}</div>
  </div> : null}
  <Link to={'/aeons'} style={{color: 'white', textDecoration: 'none'}}> <h2 className='backLink'>&#8617; Back</h2></Link>
</div>
}

export default AeonInfo;