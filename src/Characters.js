import React from "react"
import CharacterList from "./CharacterList"
import Elements from "./Elements"
import { Link } from "react-router-dom"
export default function Characters() {
  const [charList, setCharList] = React.useState([])
  const [currentChar, setCurrentChar] = React.useState()
  const [currentLocation, setCurrentLocation] = React.useState('Astral Express')
  const hidden = React.useRef(false)

  function FadeAnimation(id) {
    const charSplash = document.getElementById('charSplash')
    charSplash.style.opacity = 0;
    setTimeout(() => {
      setCurrentChar(characters.characters[id])
      charSplash.style.opacity = 1
    }, 1000);
  }

  function BgFade(destination) {
    const charBg = document.getElementById('characterBg')
    charBg.style.opacity = 0;
    FadeAnimation(0)
    setTimeout(() => {
      setCurrentLocation(destination)
      charBg.style.opacity = 1
    }, 1000);
  }
  function CharSmall({ImgSource, id, element}) {

    return <div className={`charSmall ${element}`} onClick={() => FadeAnimation(id)}>
        <img src={ImgSource}></img>
    </div>
  }
  const characters = CharacterList.find(char => char.id === currentLocation);
  React.useEffect(() => {
    if (characters) {
      setCharList(characters.characters)
      setCurrentChar(characters.characters[0])
    }
  }, [currentLocation])


  const current_characters = charList.map((x) => {
    return <CharSmall 
      ImgSource = {x.imageSmall}
      id = {x.id}
      element = {x.element}
    />
  })

  function CharSplash() {
    let currentElem;
    if (currentChar) {
      currentElem = Elements.find(elm => elm.element === currentChar.element)
    }

    return <div className="charSplashBody" id='charSplash'>
      {
        currentChar ?<img className={`charSplashImg`} src={currentChar.image}>
        </img> : null
      }
      <Link style={{color: 'white', textDecoration: 'none'}} to={``}>
        <div className="charSplashName">
          {
            currentChar ? <>
            <h2>{`${currentChar.name} • `}
            </h2>
            <img src={currentElem.src} className="Element"></img>
                      </> : null
          }
        </div>
      </Link>
    </div>
  }
  function CharList() {

    return <div className="characterList">
        <div className="locationPin">
          <img src={characters.locationPin}>
          </img>
        </div>
        <div className="char">
          <div className="location">
            {currentLocation}
          </div>
          <div className="charlist">
            {current_characters}
          </div>
        </div>
    </div>
  }

  function Button({destination}) {

    return <button className={`locationButton ${currentLocation === destination ? 'currentLocale' : null}`} onClick={() => BgFade(destination)}>

    </button>
  }

  function CharacterBg() {
  
    return (
      <div className="characterbg" id='characterBgBody'>
        <img src={characters.bg} id='characterBg' className="charactersBgImg"/>
      </div>
    );
  }
 
  
  return <div className="characters">
    <CharacterBg />
    <CharList />
    <CharSplash />
    <div className="buttonBody">
      <Button destination='Astral Express'/>
      <Button destination='Herta Station'/>
      <Button destination='Belabog'/>
      <Button destination='Xianzhou'/>
      <Button destination='Penacony'/>
    </div>
  </div>
}