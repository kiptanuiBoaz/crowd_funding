import React from "react";
import ReserveButton from "./ReserveButton";
import Typed from 'react-typed';
import Jump from 'react-reveal/Jump';
 
function PosterLeft(){
    return(
         
        <div className="left">
            <p className="p1">TRANSFORMING E-COMMERCE</p>
            <p className="p2">HELP US PROVIDE FREE AND SAFE ONLINE TRADING AND SOLVE THE PROBLEM OF ONLINE FRAUD </p>
            <p className="p3">There are prizes to be won, donate between $1 and $5.</p>
            
            <Typed 
                className="typing-effect"
                strings ={[
                    " get a chance to win one of the 7 sneakers ",
                    "Contribute to the project between now and the morning of 8th August Election day",
                    "Your opportunity is here do good and stand a chance for a worh appreciation"
                    ]}
                typeSpeed={60}
                backSpeed={50}
                startDelay={ 2000}
                loop 
            />

            <Jump  delay= {1000} count={5}>
                <ReserveButton
                    className="navBtn"
                    text = "$ Donate now"
                />
            </Jump>
            
        </div>
    )
}

export default PosterLeft;