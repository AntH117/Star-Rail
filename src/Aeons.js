import aeonBg from './images/space_loop.mp4'
import AeonList from './AeonList'
import React from 'react'
import arrow from './images/arrow.png'
import { useNavigate  } from "react-router-dom";
export default function Aeons() {
    const [aeonSlider, setAeonSlider] = React.useState(0)
    const [fade, setFade] = React.useState(false)
    const navigate = useNavigate()

    function handleNavigate(path) {
        setFade(true)
        setTimeout(() => {
            setFade(false)
            navigate(path)
          }, 1000);
    }
    function SingleAeon({path, pathName}) {
        const [hover, setHover] = React.useState(false)

        return <div className="singleAeon">
            <div className={hover ? 'AeonOutline outlineActive' : 'AeonOutline'}>
                <div className='AeonCenterOutline'></div>
            </div>
            <div className='AeonCenter' onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} onClick={() => handleNavigate(pathName)}>
                <img className='PathImage' src={path}>
                </img>
            </div>
            <div className='PathName'>
                 {pathName}
            </div>
        </div>  
    }

    function aeonSlide(position) {
        console.log(aeonSlider)
        if (aeonSlider > -600 && position === 'right') {
            setAeonSlider((preval) => preval - 200)
        } else if (aeonSlider < 0 && position === 'left') {
            setAeonSlider((preval) => preval + 200)
        }
    }

    function AeonButton({position}) {

        return <div className='AeonButton' onClick={() => aeonSlide(position)}>
            <div className='AeonButtonOutline'></div>
            <img src={arrow} className={position === 'left' ? 'AeonArrow Left' : 'AeonArrow'}></img>
        </div>
    }
    
    const AeonPaths = React.useMemo(() => {
        return AeonList.map((x) => {
            return <SingleAeon 
            path={x.pathImage}
            pathName={x.pathName}
            />
            })
    }, [AeonList])
 
    return <div className='AeonBody'>
        <div className="AeonSpaceContainer">
            <video autoPlay muted loop type="video/mp4" className='AeonBg'>
                <source src={aeonBg}></source>
            </video>
            <div className='overlay'>

            </div>
        </div>
        <div className={fade ? 'AeonDisplayBody fadeAnimation' : 'AeonDisplayBody'}>
         <div className="AeonDisplay" style={{ left: `${aeonSlider}px`}}>
            {AeonPaths ? AeonPaths : <h2>
                Loading</h2>}
         </div>
        </div>
        <div className={fade ? 'AeonButtonContainer fadeAnimation' : 'AeonButtonContainer'}>
            <AeonButton position={'left'}/>
            <AeonButton position={'right'}/>
        </div>
    </div>
}