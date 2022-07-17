import React from "react";
import { NavLink ,Nav, Bars , NavMenu} from "./NavElements";


function Navbar() {


  return (
    <>
      <Nav className="navContainer" >
        <Bars />
    
        <NavMenu>
          <NavLink to="/" style={
            {marginRight:"450px",
             color:"#ffba5a",
             marginLeft:"10px",
             fontSize:"2.6rem"}}
            >
            AW3SOM3
          </NavLink>

          <NavLink to='/story' className={"navlink"} activeStyle>
            Our Story
          </NavLink>

          <NavLink to='/contactUs' className={"navlink"} activeStyle>
            Contact Us
          </NavLink>

          <NavLink to={{pathname:"https://heylink.me/leon7/"}} target="_blank" className={"navlink"} activeStyle>
            Our Project
          </NavLink>

          <NavLink to={{pathname:"http://www.thefranchise.co.ke/"}}  target="_blank" className={"navlink"} activeStyle>
            Donate Now
          </NavLink>

        </NavMenu>

      </Nav>
    </>
  )
};
  
export default Navbar;
  