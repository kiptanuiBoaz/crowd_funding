import React from "react";

function ReserveButton(props) {
    return <a 
        onClick={props.btnClicked} 
        class="bn31" 
        target = "_blank" 
        href="https://heylink.me/leon7/"
        rel="noreferrer" 
        style={{borderBlockColor:props.bcolor}}
        >
            <span style={{color:props.tcolor}} class="bn31span">
                {props.text}
            </span>
        </a>;
}

export default ReserveButton;