import React from "react";
import PrizeCard from "../prizes/PrizesCard";
import prizesList from "../prizes/prizesList";



function Prizes() {
    return (
      <section  className= {"rooms"}>
        <div>
          <h1>Rooms & Suites</h1> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
        <div className={"room-card"}>
          {prizesList.map((prizesList)=>{
            return(
            
              <PrizeCard
                // className="roomCardElements"
                key = {prizesList.id}
                imageSource={prizesList.image.source}
                alt = {prizesList.image.alt}
                name={prizesList.name}
                price={prizesList.price}
                
              />
            
            )})
          }

        </div>
        
      </section>
      
    )
};
  
export default Prizes;