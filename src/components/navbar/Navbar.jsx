import React from "react";
import { NavLink ,Nav, Bars , NavMenu} from "./NavElements";
import NavButton from "./NavButton ";
import  "./nav.css"


function Navbar() {
  const style ={
    marginLeft:"50px",
    '@media (max-width:  600px))': {
      display: 'none',
    }
  }

  return (
    <>
      <Nav className="navContainer" >
        <Bars />
    
        <NavMenu>
          <NavLink to="/" style={
            {marginRight:"450px",
             color:"white",
             marginLeft:"10px",
             background:"#2e2f36",
             fontSize:"2.6rem",
             
             }
            }
            >
            AW<span style={{color:"#4b6fad"}}>3</span>SOM<span style={{color:"#4b6fad"}}>3</span>
          </NavLink>

          <NavLink to='/story' style={style} className={"navlink"} activeStyle>
            Our Story
          </NavLink>

          <NavLink to='/contactUs' className={"navlink"} activeStyle>
            Contact Us
          </NavLink>

          <NavLink 
          to={{pathname:"https://heylink.me/leon7/"}} target="_blank" 
          className={"navlink"} activeStyle>
           <a target="blank"  rel="noreferrer" style={{color:"white", textDecoration:"none"}} href="http://www.thefranchise.co.ke/"> Our Project</a>
          </NavLink>

          <NavLink 
          to={{pathname:"http://www.thefranchise.co.ke/"}}  target="_blank" 
          className={"navlink"} activeStyle>
            <NavButton
              text = "$ Donate now"
            />
          </NavLink>

        </NavMenu>

      </Nav>
    </>
  )
};
  
export default Navbar;
  