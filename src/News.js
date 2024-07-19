import { WiHot } from 'react-icons/wi';
import dot from './images/dot.png'
import robin from './images/NewsImg1.png'
import NewsList from './NewsList'
import { useSearchParams, Link } from "react-router-dom";
import React from 'react';
export default function News() {
  let [searchParams, setSearchParams] = useSearchParams();
  const currentPararms = searchParams.get('type')
  const [newsSliced, setNewsSliced] = React.useState(NewsList.slice(0, 4))
  const [slice, setSlice] = React.useState(4)

  console.log(currentPararms)
  function IndividualNews({title, description, image, id}) {
    return  <Link to={`${id}`} state={{type: currentPararms}} style={{color: 'white', textDecoration: 'none'}}>
          <div className='individualNews'>
        <div className='individualNewsImage'>
          <img src={image}></img>
        </div>
        <div className='individualNewsText'>
          <h1 className='individualNewsTextHeader'>
          {title}
          </h1>
          <p className='individualNewsTextDescrip'>
            {description}
          </p>
        </div>
    </div>
    </Link>
    
  }

  const newsAll = newsSliced.slice(0, slice).map((x) => {
    return <IndividualNews 
    title={x.title}
    description={x.description[0]}
    image={x.image}
    id={x.id}
    />
  })

React.useEffect(() => {
  const newsFiltered = currentPararms ? NewsList.filter((x) => x.tags === currentPararms) : NewsList;
  setNewsSliced(newsFiltered)
},[currentPararms])

  return <div className="News">
    <div className="NewsBody">
      <h2 className="newsHeader">
        Voice of the Galaxy
      </h2>
      <div className="newsTags">
        <Link to="" style={{color: 'white', textDecoration: 'none'}}><h2 style={!currentPararms ? {color: 'rgb(253, 233, 104)'} : null}>Latest</h2></Link>
        <img src={dot}></img>
        <Link to="?type=news" style={{color: 'white', textDecoration: 'none'}}><h2 style={currentPararms == 'news' ? {color: 'rgb(253, 233, 104)'} : null}>News</h2></Link>
        <img src={dot}></img>
        <Link to="?type=events" style={{color: 'white', textDecoration: 'none'}}><h2 style={currentPararms == 'events' ? {color: 'rgb(253, 233, 104)'} : null}>Events</h2></Link>
        <img src={dot}></img>
        <Link to="?type=notices" style={{color: 'white', textDecoration: 'none'}}><h2 style={currentPararms == 'notices'  ? {color: 'rgb(253, 233, 104)'} : null}>Notices</h2></Link>
      </div>
      {newsAll}
      {newsSliced.length > 4 & slice < newsSliced.length ? <button className='expandNews' onClick={() => setSlice(preval => preval +=4)}>More</button> : null}
    </div>
  </div>
}