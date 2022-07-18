import React from "react";
import PrizeCard from "../prizes/PrizesCard";
import prizesList from "../prizes/prizesList";



function Rooms() {
    return (
      <section  className= {"rooms"}>
        <div>
          <h1>Rooms & Suites</h1> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
        <div className={"room-card"}>
          {roomsList.map((roomsList)=>{
            return(
            
              <PrizeCard
                // className="roomCardElements"
                key = {roomsList.id}
                imageSource={roomsList.image.source}
                alt = {roomsList.image.alt}
                name={roomsList.name}
                price={roomsList.price}
                
              />
            
            )})
          }

        </div>
        
      </section>
      
    )
};
  
export default Prizes;