import React from "react";
import Bg from './images/bg.mp4';
import { InitialContext } from "./App";

export default function Poster() {
  const initial = React.useContext(InitialContext)
  return (
    <div className="poster" id="poster">
      <div className="bg1">
        <video autoPlay muted loop>
          <source src={Bg} type="video/mp4"></source>
        </video>
      </div>
  </div>
  )
}