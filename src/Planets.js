import React from "react";
import moveButton from './images/button.png'
import destroyedPlanet from './images/destroyed.png'
import hertaStation from './images/spacestation.png'
import Xianzhou from './images/ship.png'
import Jarilo from './images/ice.png'
import JariloSwirl from './images/swirl.png'
import JariloPulse from './images/icePulse.png'

import stars from './images/starsExtra.png'
import astroid1 from './images/astroidsExtra.png'
import astroid2 from './images/astroidsExtra2.png'

import Penocony from './images/World_Penacony.webp'
import AeonNous from './images/Aeon_Nous.webp'
import AeonQlipoth from './images/Aeon_Qlipoth.webp'
import AeonLan from './images/Aeon_Lan.webp'
import AeonXipe from './images/Aeon_Xipe.webp'
import { Link, useNavigate } from 'react-router-dom';
import Rings from './images/rings.png'
import planetExtra from './images/planetExtra.png'
import astralExpress from './images/expressTrain.png'
import pompom from './images/pompom.webp'
export default function Planets() {
  const navigate = useNavigate();
  const [bgLeft, setBgLeft] = React.useState(-15)  
  function pan(direction) {
    if (direction === 'right' && bgLeft > -45) {
      setBgLeft((preVal) => preVal - 15)
    } else if (direction === 'left' && bgLeft < 0) {
      setBgLeft((preVal) => preVal + 15)
    }
  }

  function MoveButton({ direction }) {

    return (
    <div className={`${direction}Button`} onClick={() => pan(direction)}>
      <img src={moveButton} className="button"></img>
    </div>
    )
  }

  function IndividualPlanet ({planetSrc, planet, aeon, children, clickable}) {
    const [hoverState, setHoverState] = React.useState(false)
    if (hoverState) {
      console.log(`${planet} hovered`)
    }
    return (
      <div className={`${planet} planet`}>
        <div className="planetContainer" >
          <img src={planetSrc} className={`planetImg ${planet}Img`} style={clickable ? null : clickable === 'pompom' ? null :{pointerEvents: 'none'} } onMouseOver={() => setHoverState(true)} onMouseOut={() => setHoverState(false)} onClick={() => clickable ? navigate(planet) : null} ></img>
          {aeon ? <img src={aeon} className={hoverState ? 'aeon aeonHover' : 'aeon'}></img> : null}
          {children ? children : null}
        </div>
      </div>
    )
  }

  function FloatAnimation () {

    return <div className="floatAbs">
      <div className="floatContainer">
            <div className="sphere" style={{animationDelay: '0s' }}></div>
            <div className="sphere" style={{animationDelay: '5s' }}></div>
            <div className="sphere" style={{animationDelay: '1s' }}></div>
            <div className="sphere" style={{animationDelay: '3s' }}></div>
            <div className="sphere" style={{animationDelay: '2s' }}></div>
            <div className="sphere" style={{animationDelay: '4s' }}></div>
            <div className="sphere" style={{animationDelay: '6s' }}></div>
    </div>
    </div>
  }

  function DotsAnimation () {

    return <div className="dotsAbs">
      <div className="dotsContainer">
        <div className="dots" style={{left: '30%', top: '60%', animationDelay: '0s' }}></div>
        <div className="dots" style={{left: '50%', top: '70%', animationDelay: '1s' }}></div>
        <div className="dots" style={{left: '60%', top: '50%', animationDelay: '2s' }}></div>
        <div className="dots" style={{left: '70%', top: '60%', animationDelay: '3s' }}></div>
        <div className="dots" style={{left: '80%', top: '40%', animationDelay: '4s' }}></div>
      </div>
    </div>
  }

  return <>
    <div className="planets">
       <div className="starsExtra">
          <img src={stars}>
          </img>
        </div>
        <div className="planetExtra">
          <img src={planetExtra}>
          </img>
        </div>
      <div className="worldsDisplay" style={{left: `${bgLeft}%`}}>
        <IndividualPlanet 
          planetSrc={astralExpress}
          planet={'astralExpress'}
          aeon={pompom}
          clickable={false}
        />
        <IndividualPlanet 
          planetSrc={destroyedPlanet}
          planet={'brokenPlanet'}
          clickable={false}
        />
        <IndividualPlanet 
          planetSrc={astroid1}
          planet={'astroid1'}
          clickable={false}
        />
        <IndividualPlanet 
          planetSrc={astroid2}
          planet={'astroid2'}
          clickable={false}
        />
        <IndividualPlanet 
          planetSrc={hertaStation}
          planet={'hertaStation'}
          aeon={AeonNous}
          clickable={true}
        />
        <IndividualPlanet 
          planetSrc={Jarilo}
          planet={'Jarilo'}
          aeon={AeonQlipoth}
          clickable={true}
        >
          <img src={JariloSwirl} className="jariloSwirl"></img>
          <img src={JariloPulse} className="jariloPulse"></img>
        </IndividualPlanet>
        <IndividualPlanet 
          planetSrc={Xianzhou}
          planet={'Xianzhou'}
          aeon={AeonLan}
          clickable={true}
        >
        <DotsAnimation />
        </IndividualPlanet>
        <IndividualPlanet 
          planetSrc={Penocony}
          planet={'Penocony'}
          aeon={AeonXipe}
          clickable={true}
        >
        <FloatAnimation />
        </IndividualPlanet>

      </div>
      <MoveButton 
       direction='left'
      />
      <MoveButton 
      direction='right'
      />
    </div>
  </>
}
