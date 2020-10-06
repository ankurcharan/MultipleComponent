import React, {Component, useState} from "react";
import '../styles/App.css';

const Counter = (props) => {

    return(
        <>
           <h1 id='count'>{props.count}</h1>
           <center>
                <button id='incCount' onClick={props.handleCountChange}>Increment Count</button>
           </center>
        </>
    )
}



export default Counter;
