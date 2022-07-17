import React from "react";
import "../poster/Poster.css"
import PosterLeft from "./PosterLeft";
import PosterRight from "./PosterRight";
import Fade from 'react-reveal/Fade';


function Poster() {
  return (
    <>
     <Fade left>
       
        <div className="poster">
        
            <PosterLeft/>
            <PosterRight/>       
        </div>
      </Fade>
    </>
  );
}

export default Poster;
