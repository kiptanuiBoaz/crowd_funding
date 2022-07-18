import React from "react";
import {MdEmail} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {ImLocation2} from "react-icons/im";
import Fade from 'react-reveal/Fade';

function ContactUs(){
    return(
        <Fade bottom >
            <div className="contactInfo">
                <ImLocation2 className="topIcon"/>
                <p><span>Address:&nbsp;</span> Off Mombasa Road Nairobi</p>
                <FaPhoneAlt  className="restIcon"/>
                <p><span>Phone:&nbsp;</span>+254759843191</p>
                <MdEmail  className="restIcon"/> 
                <p><span>Email:&nbsp;</span>awesome.mail@yahoo.com</p>
             
            
            </div>
        </Fade>
    )
}

export default ContactUs;