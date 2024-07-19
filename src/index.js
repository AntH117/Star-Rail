import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Poster from './Poster';
import Planets from './Planets'
import Characters from './Characters';
import Aeons from './Aeons';
import AeonInfo from './AeonInfo';
import PlanetDetails from './PlanetDetails';
import News from './News';
import NewsInfo from './NewsInfo';
import './News.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Poster />}/>
          <Route path="planets" element={<Planets />} />
          <Route path="planets/:id" element={<PlanetDetails />}/>
          <Route path="characters" element={<Characters />}/>
          <Route path="aeons" element={<Aeons />}/>
          <Route path="aeons/:id" element={<AeonInfo />}/>
          <Route path="news" element={<News />}/>
          <Route path="news/:id" element={<NewsInfo />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
