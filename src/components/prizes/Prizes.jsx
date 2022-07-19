import React from "react";
import PrizeCard from "../prizes/PrizesCard";
import prizesList from "../prizes/prizesList";



function Prizes() {
    return (
      <section  className= {"rooms"}>
        <div >
          <h1 
            style={{
              color:"#02051e",
              fontFamily: "cursive"
              }}
              >Win Prizes!!
          </h1> 
          <p>The August elction is almost here with us. We appeal to you to contribute and stand a chance to one one of the five pairs of sneakers. Two pairs of AJF Convers , two pairs of Puma Mirage sneakers and one Pair of Evolve sneakers. When you contribute, you make our dream come true, tha is revolutionalizing e-commerce.  </p>
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