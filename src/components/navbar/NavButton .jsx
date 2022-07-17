import React from "react";

function navButton(props) {
    return <a onClick={props.btnClicked} class="bn32" href="/"><span class="bn32span">{props.text}</span></a>;
}

export default navButton;