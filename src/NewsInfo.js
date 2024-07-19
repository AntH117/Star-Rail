import { Link, useLocation, Navigate, useNavigate   } from "react-router-dom";
import React, { useEffect } from 'react';
import test from './images/NewsImg4.png'
import NewsList from "./NewsList";
import arrow from './images/arrow.png'
export default function NewsInfo() {
  const location = useLocation();
  const { pathname } = location;
  const pathLocation = pathname.split('/').pop()
  const [newsLocation, setNewsLocation] = React.useState(NewsList.find(item => item.id == pathLocation))
  const [adjNews, setAdjNews] = React.useState(NewsList.filter(item => item.id != pathLocation && item.id > Number(pathLocation) - 4 && item.id <= Number(pathLocation) + 3))
  const [navigateTo, setNavigateTo] = React.useState(pathLocation)
  const navigate = useNavigate();
  const preLocation = location.state
  React.useEffect(() => {
    setNewsLocation(null);
    setAdjNews(null);
    setNewsLocation(NewsList.find(item => item.id == pathLocation));
    setAdjNews(NewsList.filter(item => item.id != pathLocation && item.id > Number(pathLocation) - 4 && item.id <= Number(pathLocation) + 3));
  }, [pathLocation]);


  
  function pageNavigate(direction) {
    if (direction === 'left' && pathLocation > 1) {
      navigate(`/news/${Number(pathLocation) - 1}`)
    } else if (direction === 'right' && pathLocation < 9) {
      navigate(`/news/${Number(pathLocation) + 1}`)
    }
  }

  const fullNews = newsLocation ? newsLocation.description.map((x) => {
    return <p className="newsDescription">
      {x}
    </p>
  })
 : null;

  const newsMore = newsLocation ? adjNews.slice(0, 3).map((x) => {
    
    return <Link to={`/news/${x.id}`} style={{color: 'white', textDecoration: 'none'}}>
    <div className="newsMore">
        <div className="newsMoreImage">
          <img src={x.image}>
          </img>
        </div>
        <h2 className="newsMoreTitle">
          {x.title}
        </h2>
    </div>
    </Link>
  }) :
  null

  return <div className="newsInfo">
    <Link to={preLocation.type ? `/news?type=${preLocation.type}` : '/news'} style={{color: 'white', textDecoration: 'none'}}> <h2 className='backLink'>&#8617; Back</h2></Link>
      {
        newsLocation ?     <div className="newsInfoBody">
        <div className="newsInfoTags">
          <h1>
            {newsLocation.title}
          </h1>
          <p className="date">
            {newsLocation.date}
          </p>
        </div>
        <div className="mediaDisplay">
          <img src={newsLocation.image}>
          </img>
        </div>
        <div className="newsInfoText">
            {fullNews}
        </div>
        <div className="moveButtons">
        <button className={pathLocation > 1 ? "moveButton" : 'moveButton invisible'} onClick={() => pageNavigate('left')}>
          <img src={arrow} style={{transform: 'rotate(180deg)'}}>
          </img>
        </button>
        <button className={pathLocation < 9 ? "moveButton" : 'moveButton invisible'} onClick={() => pageNavigate('right')}>
        <img src={arrow}>
        </img>
        </button>
        </div>
        <div className="moreNavigate">
          {newsMore}
        </div>
      </div> : <h2>Loading...</h2>
      }
  </div>
}