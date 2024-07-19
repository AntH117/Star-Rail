import Train from './images/train-trim.mp4'
import './App.css';
import './navBar.css';
import './Poster.css';
import './Planets.css';
import './Characters.css';
import './Aeons.css'
import './PlanetDetails.css'
import './NewsInfo.css'
import NavBar from './navBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
const InitialContext = React.createContext()

function App() {
  const [firstLoad, setFirstLoad] = React.useState(localStorage.getItem('firstLoad') === null);
  const [initial, setInitial] = React.useState(firstLoad);
  const audioRef = React.createRef(null)
  let firstRender = React.useRef(true);
  console.log(firstLoad)
  React.useEffect(() => {
    if (firstLoad) {
      localStorage.setItem('firstLoad', 'false');
    }
    // Clean up localStorage when the component unmounts (optional)
    // return () => {
    //   localStorage.removeItem('firstLoad');
    // };
  }, []);

  function Starter() {
    const [initialAnimation, setInitialAnimation] = React.useState(false)
    React.useEffect(() => {
      if (!firstRender) {
        const clickHandler = () => {
          setInitialAnimation(true)
          setTimeout(function() {
            setInitial(false)
          }, 2000);
        };
  
        document.getElementById('starter').addEventListener('click', clickHandler);
        // return () => {
        //   document.getElementById('starter').removeEventListener('click', clickHandler);
        // }; 
        // ^^ Breaks code for some reason
      } else {
        firstRender = false;
      }
    }, [firstRender])
    
    return <div className={initialAnimation ? 'starter fade' : 'starter'} id="starter">
    <div className="starterBox">
      <div className="starterText">
      </div>
      <video autoPlay muted loop type="video/mp4">
        <source src={Train}></source>
      </video>
    </div>
  </div>
  }

  return (
    <>
    {initial ? <Starter /> 
    :     
    <InitialContext.Provider value={{initial, audioRef}}>
      <div className={initial ? "app" : "app fadeIn"}>
        <NavBar />
        <Outlet />
      </div>
    </InitialContext.Provider>
      }
    </>
  )
}

export default App;
export { InitialContext }