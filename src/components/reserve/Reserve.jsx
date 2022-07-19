
import React from "react";
import Additionals from "./Additionals";
import Recommendation from "./Recommendation";
import "../poster/Poster.css";
import techsupp from "../images/techsupport.jpg"


function Reserve() {

    const reserveStyle ={
      
      fontSize:"x-large",
      color: "#fff",
     
      display: "flex",
      
      flexWrap: "wrap",
      padding: "5%",
      marginBottom:"70px"
          
    }
      

    // const url = "http://www.clcmn.edu/wp-content/uploads/2019/06/techsupport.jpg";
    return (
      <section style={{
        marginTop:"40px",
        backgroundPosition: "center",
        backgroundAttachment:"fixed",
        backgroundImage: `url(${techsupp})`

      }} >
        <div  style ={reserveStyle} className="reserve">
           <Recommendation/>

          <Additionals/>
        </div>
       
      
      </section>
    )
};
  
export default Reserve;