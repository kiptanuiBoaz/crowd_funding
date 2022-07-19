import React from "react";
import Fade from 'react-reveal/Fade';

function Recommendation(){
    return(
        <div>
        <Fade delay={1000} top big cascade>
          <h1><span>"</span>We make a living by what we earn but we make life by what we give<span>"</span></h1>
        </Fade> 
        <Fade delay={1500} left>
            <h3><span>&#x301C;</span>   WINSTON CHURCHILL</h3>
            <p>inspirational statesman</p>
        </Fade>
       
      </div>
    )
}

export default Recommendation;