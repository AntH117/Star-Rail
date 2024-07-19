import { Link, useLocation  } from "react-router-dom";
import Worlds from "./PlanetList";
import React from "react";
export default function PlanetDetails() {
    const [currentLocation, getCurrentLocation] = React.useState(null)
    const location = useLocation();
    const { pathname } = location;
    const planetLocation = pathname.split('/').pop();
    const CurrentPlanet = Worlds.find(item => item.id === planetLocation)
    React.useEffect(() => {
        getCurrentLocation(CurrentPlanet) 
    }, CurrentPlanet)

    const pictures = CurrentPlanet.pictures.map((x, index) => {
        return <Slide picture={x} initialPos={index} description={CurrentPlanet.pictureDescription[index]}/>
    })

    function Slide({initialPos, picture, description}) {
        const positions = [{left: '30%', top: '0', width: '650px', height: "300px", opacity: '1'}, {left: '80%', top: '40%'},{left: '60%', top: '90%'}, {left: '0%', top: '90%'}, {left: '-5%', top: '40%'}]
        const [pos, setPos] = React.useState(initialPos)
        const [displayToggle, setDisplayToggle] = React.useState(false)
           
        function move() {
                if (pos < positions.length - 1) {
                    setPos(preval => preval + 1)
                } else if (pos === 4) {
                    setPos(0)
                }

        }
        React.useEffect(() => {
            let intervalId = setInterval(move ,6000)
            return(() => {
                clearInterval(intervalId)
            })
        })
        
        return <>
        <div className="slide" style={positions[pos]}>
            <img src={picture} className="picture"></img>
            {pos === 0 ? <h2 className="slideDescription">
                 {description}
            </h2> : null}
        </div>
        </>
    }

    function PlanetSlides() {


        return <div className="planetSlides">
            <div className="slidesBody">
                {pictures}
            </div>
        </div>
    }


    return currentLocation ? <div className={`PlanetDetailsBg`} style={{backgroundImage: `url(${currentLocation.bg})`}}>
    <h2 className='backLink'>
        <Link to={'/planets'} style={{color: 'white', textDecoration: 'none'}}> &#8617; Back </Link>
    </h2>
    <h2 className="planetName">{currentLocation.world}</h2>
    <div className="planetDescription">
    </div>
    <PlanetSlides />
</div> : null;
}