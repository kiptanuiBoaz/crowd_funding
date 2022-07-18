import React from "react";

function navButton(props) {
    return(<a 
        
        class="bn32"
        rel="noreferrer"
        target = "_blank" 
        href="https://heylink.me/leon7/">
            <span class="bn32span">
                {props.text}
            </span>
        </a>
    )
}

export default navButton;