import React from "react";
import './superover.css';
import kings from './csk.jpg';
import indians from './royal.jpg';

export function Superover(){
    return(
        <div className="bg">
            <h1 className="a1">Super Over League</h1>
            <div className="q1">

            <img src={kings} className="kings"/>
            <img src={indians} class="royal"/>
        </div>
            </div>
    )
}