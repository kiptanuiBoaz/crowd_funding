import React from "react";
import ReserveButton from "./ReserveButton";
import Typed from 'react-typed';
import Jump from 'react-reveal/Jump';
 
function PosterLeft(){
    return(
         
        <div className="left">
            <p>TRANSFORMING E-COMMERCE</p>
            <p>PLEASE HELP US PROVIDE FREE AND SAFE ONLINE TRADING AND SOLVE THE PROBLEM OF ONLINE FRAUD </p>
            <p>PRIZE</p>
            
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