import React from "react";
import "../poster/Poster.css"
import PosterLeft from "./PosterLeft";
import PosterRight from "./PosterRight";
import Fade from 'react-reveal/Fade';
import Ruffle from "../poster/ruffle";
import Reserve from "../reserve/Reserve";
import Footer from '../Footer'


function Poster() {
  return (
    <>
     <Fade left>
       
        <div className="poster">
        
            <PosterLeft/>
            <PosterRight/> 
                
        </div>
      </Fade>
      <Ruffle/> 
      <Reserve/>
      <Footer/>
    </>
  );
}

export default Poster;
