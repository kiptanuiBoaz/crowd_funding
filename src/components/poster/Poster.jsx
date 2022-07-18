import React from "react";
import "../poster/Poster.css"
import PosterLeft from "./PosterLeft";
import PosterRight from "./PosterRight";
import Fade from 'react-reveal/Fade';
import Ruffle from "../poster/ruffle"


function Poster() {
  return (
    <>
     <Fade left>
       
        <div className="poster">
        
            <PosterLeft/>
            <PosterRight/> 
            <Ruffle/>      
        </div>
      </Fade>
    </>
  );
}

export default Poster;
